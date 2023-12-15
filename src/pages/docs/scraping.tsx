import React, { useState } from 'react';
import axios from 'axios';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import MarkdownRenderer from '../../components/MarkDownRender';
import { AlertTriangle } from 'lucide-react'

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
        <main className=" text-text-primary flex flex-col justify-center m-auto p-10 xl:w-10/12">
            <ArrowLeftIcon
                className="text-text-primary cursor-pointer hover:translate-x-[-2px] transition-all xl:left-6 xl:top-4 top-6 left-2 fixed"
                onClick={() => window.open('/docs/program')}
            />
            <h1 className="flex justify-center mx-auto text-5xl underline mb-3">
                Web Scraping
            </h1>
            <p className="border-l-4 border-sky-400/50 pl-4 m-3 font-semibold">
                En este segmento, exploraremos el fascinante mundo del web scraping, una
                técnica que nos permite extraer información de páginas web. En este
                ejemplo, llevaré a cabo el scraping en mi propio portafolio web. Es
                importante utilizar esta técnica con responsabilidad y respeto a las
                políticas de uso de los sitios web objetivo.
            </p>
            <p>
                A continuación hago un fetch de mi MarkDown en mi repositorio de GitHub
                que está en inglés pero no hay navegador que no lo traduzca...
            </p>
            <Link href="" className="text-text-strong underline">
                Si quieres saber cómo se puede lograr hacer un fetch de tu documentación
                de MarkDown de algún REAMDE.md
            </Link>
            <hr className="border-zinc-800 my-10" />
            <MarkdownRenderer />
            <div className="border-l-4 border-red-500 px-1 bg-opacity-[0.6] p-3 pl-5 text-red-500 font-semibold">
                <p className="font-semibold text-lg">
                    <AlertTriangle className="w-5 inline mb-1" /> Importante
                </p>
                <p>
                    Para tener en cuenta! pueden ver el resultado solamente teniendo
                    levantado el server por defecto de Flask, que sería algo así:
                    <span className='bg-zinc-700 rounded p-[2px] mx-1'>http://127.0.0.1:5000/api/scrape</span>
                </p>
            </div>
            <button
                className="justify-center mx-auto bg-button-variant text-text-variant font-semibold rounded p-2 w-fit my-3 hover:scale-105 shadow-gray-700"
                onClick={handleScrape}
            >
                Raspar!!
            </button>
            {titles.map((title, index) => (
                <article className="text-zinc-100 space-y-3 border-zinc-300 border-[1px] shadow-md rounded shadow-outline mt-6 p-6 dark:!shadow dark:border-zinc-800 overflow-x-auto">
                    <h1 key={index} className="text-sky-500 underline text-lg">
                        {title}
                    </h1>
                    <p className="text-lime-400 p-3 text-sm">{paragraphs}</p>
                    <li className="text-orange-400">{items}</li>
                </article>
            ))}
        </main>
    );
}
