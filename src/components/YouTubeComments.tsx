import { useState, useEffect } from 'react';

export const YouTubeComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getYouTubeComments = async () => {
      const channelId = 'PLTmuoTGunlv7T7pyHEzlG2PaqniaVCprL';
      const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&order=date&type=video&key=${apiKey}`,
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            `[${response.status}] ${
              data.error?.message || response.statusText
            }`,
          );
        }

        setComments(data.items || []);
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
      <h1 className="text-2xl font-bold mb-4">
        Últimos Comentarios de YouTube
      </h1>
      <small className="block mb-4">
        Cantidad de comentarios: {comments.length}
      </small>

      {comments.length === 0 ? (
        <p className="text-gray-500">No hay comentarios disponibles.</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="border p-4 rounded-lg">
              <div className="flex items-start gap-4">
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
                <div>
                  <p className="font-bold">
                    {comment.snippet.topLevelComment.snippet.authorDisplayName}
                  </p>
                  <p className="mt-2">
                    {comment.snippet.topLevelComment.snippet.textDisplay}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
};

export default YouTubeComments;
