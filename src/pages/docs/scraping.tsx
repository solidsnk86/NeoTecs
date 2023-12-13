import React, { useState } from 'react';
import axios from 'axios';
import { ArrowLeftIcon } from 'lucide-react';

export default function Scraping() {
    const [titles, setTitles] = useState([]);
    const [paragraphs, setParagrhaps] = useState([]);
    const [items, setItems] = useState([]);

    const handleScrape = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/scrape');
            setTitles(response.data.titles);
            setParagrhaps(response.data.paragraphs);
            setItems(response.data.list_items);
        } catch (error) {
            console.error('Error al obtener datos del servidor:', error);
        }
    };

    return (
        <main className=" text-text-primary flex flex-col justify-center m-auto p-10 xl:w-1/2">
            <ArrowLeftIcon
                className="text-text-primary cursor-pointer hover:translate-x-[-2px] transition-all left-6 top-6 fixed"
                onClick={() => window.open('/docs/program')}
            />
            <h1 className="flex justify-center mx-auto text-5xl underline mb-3">
                Web Scraping
            </h1>
            <p className="border-l-4 border-lime-400 pl-4 m-3 font-semibold">
                En este segmento, exploraremos el fascinante mundo del web scraping, una
                técnica que nos permite extraer información de páginas web. En este
                ejemplo, llevaré a cabo el scraping en mi propio portafolio web. Es
                importante utilizar esta técnica con responsabilidad y respeto a las
                políticas de uso de los sitios web objetivo.
            </p>
            <hr className="border-zinc-800 my-6" />
            <p className="list-css-span">
                Aquí presentamos los resultados obtenidos mediante web scraping. En este
                caso, hemos instruido a nuestra aplicación Python para recopilar todos
                los elementos de tipo<span>h1</span>
                <b>encabezados</b> y los elementos de tipo<span>p</span>
                <b>párrafos</b>:
            </p>
            <button
                className="justify-center mx-auto text-button-variant border border-zinc-700 rounded p-2 w-fit my-3 hover:bg-zinc-800 hover:text-zinc-100"
                onClick={handleScrape}
            >
                Raspar!!
            </button>
            {titles.map((title, index) => (
                <article className="text-zinc-100 space-y-3 border-zinc-300 border-[1px] shadow-md rounded shadow-outline mt-6 p-6 dark:!shadow dark:border-zinc-800 overflow-x-auto">
                    <h1 key={index} className="text-sky-500 underline text-lg">
                        {title}
                    </h1>
                    <p className="text-lime-400 p-3 text-sm">
                        {paragraphs}
                    </p>
                    <li className=" text-orange-400">{items}</li>
                </article>
            ))}
        </main>
    );
}
