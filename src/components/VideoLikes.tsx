'use client';

import { LikeButton } from '../components/Icons/LikeButton';
import React, { useState, useEffect } from 'react';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { youTube } from '../components/Constants';

export const VideoLikes = ({ videoId, cpe }) => {
  const [likes, setLikes] = useState(0);
  const [channelTitle, setChannelTitle] = useState('');

  useEffect(() => {
    const getVideoDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${youTube}`,
        );
        if (!response.ok) {
          throw new Error('Error al obtener datos de la API de YouTube');
        }
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const video = data.items[0];
          const youtubeLikes = video.statistics.likeCount;
          const titleChannel = video.snippet.channelTitle;

          setChannelTitle(titleChannel);
          setLikes(youtubeLikes);
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
  }, [videoId, cpe]);

  const ShareButton = () => {
    if (navigator.share) {
      navigator.share({
        title: channelTitle,
        text: cpe,
        url: `https://www.youtube.com/watch?v=${videoId}=1s`,
      });
    }
  };

  return (
    <div className="flex gap-4 my-2 justify-between items-center">
      <header className="flex items-center gap-2">
        <img
          className="rounded-full w-10 h-10"
          src="/images/logos/NeoTecs_Tutorial_logo.png"
          alt="logo"
        />
        <span className="font-bold text-sm">{channelTitle}</span>
      </header>
      <aside className="flex items-center space-x-3">
        <div>
          <button
            className="relative mx-1 font-bold px-2 text-text-variant py-1 rounded-full bg-button-variant cursor-pointer hover:opacity-80"
            onClick={() => window.open('https://www.youtube.com/@tutosNeoTecs')}
          >
            Suscríbete
          </button>
        </div>
        <button className="flex items-center bg-card-bg border border-gray-200 dark:border-zinc-800/50 rounded-full px-2 py-1 hover:opacity-80">
          <LikeButton
            onClick={() =>
              window.open(`https://www.youtube.com/watch?v=${videoId}=1s`)
            }
            className="cursor-pointer hover:-rotate-6 transition-transform"
          />
          <span className="mx-1">{likes}</span>
        </button>
        <button
          className="text-text-primary font-semibold flex gap-1 bg-card-bg border border-gray-200 dark:border-zinc-800/50 rounded-full p-1 cursor-pointer hover:opacity-80"
          onClick={() => ShareButton()}
        >
          <ReplyOutlinedIcon className="inline w-4 h-4 text-current" />
          Compartir
        </button>
      </aside>
    </div>
  );
};
