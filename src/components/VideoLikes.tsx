'use client'

import React, { useState } from "react";
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { useEffect } from "react";

export const VideoLikes = ({ videoId }) => {
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
  }, [videoId]);

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
        className="feather feather-thumbs-up">
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

  const ShareButton = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Neotecs Informática',
        text: 'Aprende a configurar tu WiFi en tan solo 5 minutos. Documentación web de para CPE inalámbros de diferentes marcas.',
        url: 'https://www.youtube.com/channel/UCCg2DsKakyYIaGs-YkqEpqg',
      })
    }
  }
  return (
    <div className="flex gap-[10px] xl:gap-[14px] my-2 w-full">
      <img className="rounded-full w-10 h-10" src="https://github.com/solidsnk86/NeoTecs/blob/master/public/images/logos/NeoTecs%20_Tutorial_logo.png?raw=true" alt="logo" />
      <div className="flex-col">
        <span className="font-bold">Neo TECs</span>
        <p className="font-light text-[#5D5D5D]">{suscriptors} suscriptores</p>
      </div>
      <div>
        <p className="relative top-[6px] mx-1 font-bold px-2 text-[#4E4E4E] py-1 rounded-full bg-[#F1F1F1] cursor-pointer hover:opacity-80" onClick={suscribeButton}>Suscríbete</p>
      </div>
      <aside className="flex bg-[#272727] relative bottom-[2px] rounded-full my-2 w-fit px-3 py-1">
        <span className="flex relative top-[1px] gap-2">
          <LikeButton /> {likes}
          <hr className="border-l-[1px] h-5 border-[#575757] relative bottom-[1px]" />
          <DisLikeButton />
        </span>
      </aside>
      <div className="text-[#575757] bg-[#272727] rounded-full h-[28px] relative top-[6px] px-[6px] ml-1" onClick={ShareButton}>
        <ReplyOutlinedIcon className="w-4 h4 relative top-[1px] right-[1px] text-[#FFFFFF] cursor-pointer hover:opacity-80" />
      </div>
    </div>
  );
}
