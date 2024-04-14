'use client';

import { LikeButton } from '../components/Icons/LikeButton';
import { UnlikeButton } from '../components/Icons/UnlikeButton';
import React, { useState, useEffect } from 'react';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { youTube } from '../components/Constants';

export const VideoLikes = ({ videoId, cpe }) => {
  const [likes, setLikes] = useState(0);
  const [suscriptors, setSuscriptors] = useState(0);

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
          const likes = video.statistics.likeCount;
          const suscriptors = video.statistics.subscriberCount;

          setLikes(likes);
          setSuscriptors(suscriptors);
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
        title: 'Neotecs Informática',
        text: cpe,
        url: `https://www.youtube.com/watch?v=${videoId}=1s`,
      });
    }
  };

  return (
    <div className="flex gap-[12px] xl:gap-[14px] lg:gap-[14px] md:gap-[12px] my-2 sm:mx-2">
      <img
        className="rounded-full w-10 h-10"
        src="/images/logos/NeoTecs_Tutorial_logo.png"
        alt="logo"
      />
      <div className="flex-col">
        <span className="font-bold">Neo TECs</span>
        <p className="font-light text-[#5D5D5D]">{suscriptors} suscriptores</p>
      </div>
      <aside className="youtube-aside inline-flex space-x-[10px] xl:flex xl:space-x-3 xl:left-0 xl:relative xl:scale-[1] lg:flex lg:space-x-1 lg:scale-[0.9] lg:relative lg:left-[-30px] video-likes">
        <div>
          <p
            className="relative top-[7px] mx-1 font-bold px-2 text-text-variant py-1 rounded-full bg-button-variant cursor-pointer hover:opacity-80"
            onClick={() => window.open('https://www.youtube.com/@tutosNeoTecs')}
          >
            Suscríbete
          </p>
        </div>
        <span className="flex bg-card-bg border border-gray-200 dark:border-zinc-800/50 relative bottom-[2px] rounded-full my-2 w-fit px-3 py-1 transition-all">
          <span className="flex relative top-[1px] gap-2">
            <LikeButton
              onClick={() =>
                window.open(`https://www.youtube.com/watch?v=${videoId}=1s`)
              }
              className="hover:fill-gray-500 cursor-pointer hover:-rotate-6 transition-all"
            />{' '}
            {likes}
            <hr className="border-l-[1px] h-5 border-[#575757] relative bottom-[1px]" />
            <UnlikeButton
              className="hover:fill-gray-500/80 cursor-pointer"
              onClick={() =>
                window.open(`https://www.youtube.com/watch?v=${videoId}=1s`)
              }
            />
          </span>
        </span>
        <div
          className="text-[#575757] bg-card-bg border border-gray-200 dark:border-zinc-800/50 rounded-full h-[28px] relative top-[7px] px-[6px] hover:border-zinc-600"
          onClick={() => ShareButton()}
        >
          <ReplyOutlinedIcon
            fontSize="small"
            className="relative top-[1px] right-[1px] text-text-primary cursor-pointer"
          />
        </div>
      </aside>
    </div>
  );
};
