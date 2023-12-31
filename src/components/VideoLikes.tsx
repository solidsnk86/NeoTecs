'use client'

import React, { useState, useEffect } from "react";
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

export const VideoLikes = ({ videoId, cpe }) => {
  const [likes, setLikes] = useState(0);
  const [suscriptors, setSuscriptors] = useState(0);

  useEffect(() => {
    const getVideoDetails = async () => {
      try {
        const apiKey = 'AIzaSyCu_A2nFDYi0TWRgASZJz89Zkuk_yIGhLE'
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Error al obtener datos de la API de YouTube');
        }
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const video = data.items[0];
          const likes = video.statistics.likeCount;
          const suscriptors = video.statistics.subscriberCount;

          setLikes(likes);
          setSuscriptors(suscriptors)
        } else {
          console.error('No se encontraron datos del video en la respuesta de la API de YouTube');
        }
      } catch (error) {
        console.error('Error al obtener los detalles del video:', error);
      }
    };

    getVideoDetails();
  }, [videoId, cpe]);

  const LikeButton = (props) => {
    const { ...attrs } = props
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-thumbs-up"
        {...attrs}
      >
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
      </svg>
    )
  }

  const DisLikeButton = (props) => {
    const { ...attrs } = props
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-thumbs-down"
        {...attrs}
      >
        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
      </svg>
    )
  }

  const suscribeButton = () => {
    window.open('https://www.youtube.com/@tutosNeoTecs')
  }

  const likeButtons = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}=1s`)
  }

  const ShareButton = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Neotecs Informática',
        text: `Aprende como realizar una configuración Wi-Fi correctamente.`,
        url: `https://www.youtube.com/watch?v=${videoId}=1s`,
      })
    }
  }
  return (
    <div className="flex gap-[12px] xl:gap-[14px] lg:gap-[14px] md:gap-[12px] my-2 sm:mx-2">
      <img className="rounded-full w-10 h-10" src="/images/logos/NeoTecs _Tutorial_logo.png" alt="logo" />
      <div className="flex-col">
        <span className="font-bold">Neo TECs</span>
        <p className="font-light text-[#5D5D5D]">{suscriptors} suscriptores</p>
      </div>
      <aside className="youtube-aside flex space-x-3 xl:flex xl:space-x-4 xl:left-0 xl:relative xl:scale-[1] lg:flex lg:space-x-1 lg:scale-[0.9] lg:relative lg:left-[-30px]">
        <div>
          <p className="relative top-[6px] mx-1 font-bold px-2 text-text-variant py-1 rounded-full bg-button-variant cursor-pointer hover:opacity-80" onClick={suscribeButton}>Suscríbete</p>
        </div>
        <span className="flex bg-card-bg relative bottom-[2px] rounded-full my-2 w-fit px-3 py-1 transition-all">
          <span className="flex relative top-[1px] gap-2">
            <LikeButton onClick={likeButtons} className='hover:fill-gray-500 cursor-pointer' /> {likes}
            <hr className="border-l-[1px] h-5 border-[#575757] relative bottom-[1px]" />
            <DisLikeButton className='hover:fill-gray-500 cursor-pointer' onClick={likeButtons} />
          </span>
        </span>
        <div className="text-[#575757] bg-card-bg rounded-full h-[28px] relative top-[6px] px-[6px]" onClick={ShareButton}>
          <ReplyOutlinedIcon className="w-4 h4 relative top-[1px] right-[1px] text-text-primary cursor-pointer hover:opacity-70" />
        </div>
      </aside>
    </div>
  );
}
