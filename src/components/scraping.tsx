import React, { useState } from 'react';
import axios from 'axios';

export default function Scraping() {
    const [titles, setTitles] = useState([]);
    const [paragrhaps, setArticles] = useState([]);

    const handleScrape = async () => {
        try {
            const response = await axios.get('https://solidsnk86.pythonanywhere.com/scream');
            setTitles(response.data.titles);
            setArticles(response.data.paragraphs);
        } catch (error) {
            console.error('Error al obtener datos del servidor:', error);
        }
    };

    return (
        <main className=" text-text-primary flex flex-col justify-center m-auto h-screen p-10">
            <h1 className="flex justify-center mx-auto text-3xl underline">
                Web Scraping
            </h1>
            <p className="border-l-4 border-lime-400 p-2 m-3">
                En este apartado vamos a obtener el web scraping (Una raspadita!). En
                este ejemplo estoy raspando mi portfolio web como ejemplo. Recuerda usar
                con precaución ésta técnica de scraping!
            </p>
            <button
                className="justify-center mx-auto text-button-variant border border-zinc-700 rounded p-2 w-fit my-3 hover:bg-zinc-800 hover:text-zinc-100"
                onClick={handleScrape}
            >
                Raspar!! 😁
            </button>
            <p className='list-css-span'>
                Aquí se obtendrá el resultado del web-scraping, en este caso hemos
                llamado a que nustra aplicación de python obtenga todos los elementos de
                títulos<span>h1</span>, los elementos de párrafo<span>p</span>
            </p>
            <article className="text-zinc-100 space-y-3 border border-zinc-800 rounded shadow-sm shadow-outline mt-6 p-6">
                {titles.map((title, index) => (
                    <>
                        <h1 key={index} className="text-sky-500 underline text-lg">
                            {title}
                        </h1>
                        <p className="text-green-500">{paragrhaps}</p>
                    </>
                ))}
            </article>
        </main>
    );
}
