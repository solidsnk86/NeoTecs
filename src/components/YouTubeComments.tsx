import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export function YouTubeComments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getYouTubeComments = async () => {
      const videoId = 'brN50pXmZR8';
      const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${apiKey}`,
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            `[${response.status}] ${
              data.error?.message || response.statusText
            }`,
          );
        }

        setComments(data.items ?? []);
        setLoading(false);
      } catch (err) {
        console.error('Error en el api request: ', err);
        setError(err.message);
        setLoading(false);
      }
    };

    getYouTubeComments();
  }, []);

  if (loading) {
    return <p className="text-text-primary">Cargando comentarios...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <article className="p-4">
      <h1 className="text-2xl text-text-primary font-bold mb-4">
        Últimos Comentarios de YouTube
      </h1>
      <p className="block text-text-second mb-4 relative w-fit">
        Cantidad de comentarios:{' '}
        <MessageCircle className="w-5 h-5 inline mx-1 -translate-y-[2px]" />
        <span className="absolute right-0 -top-1 px-1 text-[10px] rounded-full bg-red-400 text-white">
          {comments.length}
        </span>
      </p>

      {comments.length === 0 ? (
        <p className="text-gray-500">No hay comentarios disponibles.</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => {
            console.log(comment);
            return (
              <div
                key={comment.id}
                className="border border-zinc-200 dark:border-zinc-800/60 p-4 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={
                      comment.snippet.topLevelComment.snippet
                        .authorProfileImageUrl
                    }
                    alt={
                      comment.snippet.topLevelComment.snippet.authorDisplayName
                    }
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="font-bold dark:text-zinc-300 text-zinc-700">
                    {comment.snippet.topLevelComment.snippet.authorDisplayName}
                  </p>
                </div>
                <div className="block">
                  <p className="mt-2 dark:text-zinc-400 text-zinc-600">
                    {comment.snippet.topLevelComment.snippet.textDisplay}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
}
