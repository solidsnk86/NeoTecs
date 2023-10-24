'use client'

import React, { useState } from "react";
import { useEffect } from "react";

export const VideoView = ({ videoId }) => {
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [datePublished, setDatePublished] = useState("");

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
          const views = video.statistics.viewCount;
          const likes = video.statistics.likeCount;
          const datePublished = video.snippet.publishedAt;

          setViews(views);
          setLikes(likes);
          setDatePublished(datePublished);
        } else {
          console.error('No se encontraron datos del video en la respuesta de la API de YouTube');
        }
      } catch (error) {
        console.error('Error al obtener los detalles del video:', error);
      }
    };

    getVideoDetails();
  }, [videoId]);

  const ViewIcon = (props) => {
    const { ...attrs } = props
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-eye"
        {...attrs}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
        </path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    )
  }

  const LikeButton = (props) => {
    const { ...attrs } = props
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-thumbs-up">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
      </svg>
    )
  }

  return (
    <span className="flex my-1 text-[1rem] space-x-[60%] gap-1 justify-center m-auto">
      <ViewIcon className='relative top-[4px] w-5 h-5' /> {views}
      <LikeButton className='relative top-1 w-4 h-4' /> {likes}
    </span>
  );
}
