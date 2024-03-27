import { useState, useEffect } from 'react';
import FormatDate from './FormatDate';
import { youTube } from './Constants';

export const DescriptionViews = ({ videoId }: { videoId: string }) => {
  const [views, setViews] = useState(0);
  const [datePublished, setDatePublished] = useState('');

  useEffect(() => {
    const getVideoDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${youTube}`,
        );
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const video = data.items[0];
          const views = video.statistics.viewCount;
          const datePublished = video.snippet.publishedAt;

          setViews(views);
          setDatePublished(datePublished);
        } else {
          console.error(
            'No se encontraron datos del video en la respuesta de la API de YouTube',
          );
        }
      } catch (error) {
        console.error('Error al obtener los detalles del video:', error);
      }
    };

    getVideoDetails();
  }, [videoId]);

  const formatView = () => {
    if (views > 1000) {
      const formattedViews = (views / 1000).toFixed(0);
      return `${formattedViews} K`;
    }
    return views.toString();
  };

  return (
    <div className="text-left my-1 font-bold">
      <span>{formatView()} Vistas</span>
      <span> · Publicado el {FormatDate(datePublished)}</span>
    </div>
  );
};