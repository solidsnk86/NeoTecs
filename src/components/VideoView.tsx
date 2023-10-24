'use client'

import React, { useState } from "react";
import { useEffect } from "react";

export const VideoView = ({ videoId }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const getViews = async () => {
      try {
        const apiKey = 'AIzaSyCu_A2nFDYi0TWRgASZJz89Zkuk_yIGhLE';
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Error al obtener datos de la API de YouTube');
        }
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setViews(data.items[0].statistics.viewCount);
        } else {
          console.error('No se encontraron datos de vista en la respuesta de la API de YouTube');
        }
      } catch (error) {
        console.error('Error al obtener las vistas del video:', error);
      }
    };

    getViews();
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

  return (
    <span className="flex my-1 text-[1rem]">
      <ViewIcon className='relative top-[4px] mx-2 w-5 h-5' />{views}
    </span>
  );
}
