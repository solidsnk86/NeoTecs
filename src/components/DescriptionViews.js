import { useState, useEffect } from 'react';

export const DescriptionViews = ({ videoId }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const getVideoDetails = async () => {
      try {
        const apiKey = 'AIzaSyCu_A2nFDYi0TWRgASZJz89Zkuk_yIGhLE';
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`,
        );
        if (!response.ok) {
          throw new Error('Error al obtener datos de la API de YouTube');
        }
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const video = data.items[0];
          const views = video.statistics.viewCount;

          setViews(views);
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

  return (
    <div className="text-left my-1 font-bold">
      <span>{views} Vistas</span>
    </div>
  );
};
