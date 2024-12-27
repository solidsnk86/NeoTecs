import { useState, useEffect } from 'react';
import { DateFormat } from '@/lib/date-formatter';

interface YouTubeData {
  data?: {
    snippet?: {
      publishedAt?: string;
    };
    statistics?: {
      viewCount: string;
    };
  };
}

export const DescriptionViews = ({ videoId }: { videoId: string }) => {
  const [views, setViews] = useState<number>(0);
  const [datePublished, setDatePublished] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getApiData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/youtube-stats?videoId=${videoId}`);

        if (!res.ok) {
          throw new Error('Error al obtener datos');
        }

        const data: YouTubeData = await res.json();

        if (data.data?.statistics?.viewCount) {
          setViews(parseInt(data.data.statistics.viewCount, 10));
        }

        if (data.data?.snippet?.publishedAt) {
          setDatePublished(data.data.snippet.publishedAt);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setIsLoading(false);
      }
    };

    if (videoId) {
      getApiData();
    }
  }, [videoId]);

  const formatView = (viewCount: number): string => {
    if (viewCount >= 1000000) {
      const formattedViews = (viewCount / 1000000).toFixed(1);
      return formattedViews.replace(/.0$/, '') + 'M';
    }
    if (viewCount >= 1000) {
      const formattedViews = (viewCount / 1000).toFixed(1);
      return formattedViews.replace(/.0$/, '') + 'K';
    }
    return viewCount.toString();
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!views && !datePublished) {
    return null;
  }

  return (
    <div className="text-left my-1 font-bold">
      <span>{formatView(views)} Vistas</span>
      {datePublished && (
        <time> · Publicado el {DateFormat.date(datePublished)}</time>
      )}
    </div>
  );
};
