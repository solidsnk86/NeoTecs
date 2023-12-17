import React, { useState } from 'react';
import axios from 'axios';
import { Nav } from '../../components/Nav';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import MarkdownRenderer from '../../components/MarkDownRender';
import { AlertTriangle } from 'lucide-react';
import { OpenInNew } from '@mui/icons-material';
import { Footer } from '../../components/Footer';

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
        <>
            <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-30" />
            <main className=" text-text-primary flex flex-col justify-center m-auto p-10 xl:w-10/12">
                <ArrowLeftIcon
                    className="text-text-primary cursor-pointer hover:translate-x-[-2px] transition-all xl:left-6 xl:top-14 top-10 left-2 fixed mt-3"
                    onClick={() => window.open('/docs/program', '_self')}
                />
                <h1 className="flex justify-center mx-auto text-5xl underline mb-3 mt-10">
                    Web Scraping
                </h1>
                <p className="border-l-4 border-sky-400/50 pl-4 m-3 font-semibold">
                    En este segmento, exploraremos el web scraping,
                    una técnica que nos permite extraer información de páginas web. En
                    este ejemplo, llevaré a cabo el scraping en mi propio portafolio web.
                    Es importante utilizar esta técnica con responsabilidad y respeto a
                    las políticas de uso de los sitios web objetivo.
                </p>
                <div className='bg-orange-400/70 p-3 rounded border-orange-400 border'>
                    <p>
                        A continuación hago un fetch de mi documentación MarkDown en mi
                        repositorio de GitHub que explica el procedimiento y está en inglés
                        pero no hay navegador que no lo traduzca.
                    </p>
                    <p>
                        Si quieres saber cómo se puede lograr hacer un fetch de tu
                        documentación de algún repositorio en GitHub de MarkDown de algún
                        REAMDE.md con algunas de sus props y plugins para dar estilos, sigan este link:
                    </p>
                    <Link href="/docs/markdown-render" className="text-red-500 dark:text-lime-500 underline">
                        React Markdown Render
                        <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
                    </Link>
                </div>
                <hr className="border-zinc-800 my-10" />
                <MarkdownRenderer />
                <hr className="border-zinc-800 my-10" />
                <div className="border-l-4 border-red-500 px-1 bg-opacity-[0.6] p-3 pl-5 text-red-500 font-semibold">
                    <p className="font-semibold text-lg">
                        <AlertTriangle className="w-5 inline mb-1" /> Importante
                    </p>
                    <p>
                        Para tener en cuenta! pueden ver el resultado solamente teniendo
                        levantado el server por defecto de Flask, que sería algo así:
                        <span className="bg-zinc-700 rounded p-[2px] mx-1">
                            http://127.0.0.1:5000/api/scrape
                        </span>
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
            <Footer />
        </>
    );
}
