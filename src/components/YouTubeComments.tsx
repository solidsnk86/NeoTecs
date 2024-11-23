import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { DateFormat } from '@/lib/date-formatter';
import { youtubeApiKey } from './Constants';

export function YouTubeComments({
  videoId,
  videoText,
}: {
  videoId: string;
  videoText: string;
}) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getYouTubeComments = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${youtubeApiKey}`,
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
  }, [videoId]);

  if (loading) {
    return <p className="text-text-primary">Cargando comentarios...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <article className="p-4">
      <h1 className="text-2xl text-text-primary font-bold mb-4">{videoText}</h1>
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
        <div className="">
          {comments.map((comment, index) => {
            return (
              <div
                key={comment.id}
                className="p-4"
                style={{ background: `${index % 2 === 0 ? '#ddd' : '#ccc'}` }}
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
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="">
                    <p className="font-bold dark:text-zinc-300 text-zinc-700">
                      {
                        comment.snippet.topLevelComment.snippet
                          .authorDisplayName
                      }
                    </p>
                    <time className="text-text-second text-sm left-0">
                      {DateFormat.dateAndTime(
                        comment.snippet.topLevelComment.snippet.updatedAt,
                      )}
                    </time>
                  </div>
                </div>
                <div className="block">
                  <p className="mt-2 dark:text-zinc-400 text-zinc-600 text-pretty">
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
