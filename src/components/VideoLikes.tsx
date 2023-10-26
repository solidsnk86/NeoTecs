'use client'

import React, { useState } from "react";
import { useEffect } from "react";

export const VideoLikes = ({ videoId }) => {
  const [likes, setLikes] = useState(0);

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

          setLikes(likes);
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
        className="feather feather-thumbs-down">

        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
      </svg>
    )
  }

  return (
    <div className="flex space-x-5">
      <img className="rounded-full w-5 h-5" src="/public/images/logos\NeoTecs _Tutorial_logo.png" alt="logo" />
      <span>Neo TECs</span>
      <span className="font-light">Suscríbete</span>
      <aside className="flex bg-[#272727] rounded-full my-2 w-fit px-3 py-1">
        <span className="flex gap-2 relative top-[2px]">
          <LikeButton /> {likes}
          <hr className="border-l-[1px] h-6 border-[#575757]" />
          <DisLikeButton />
        </span>
      </aside>
    </div>
  );
}
