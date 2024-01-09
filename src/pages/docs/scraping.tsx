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
                    className="text-text-primary cursor-pointer hover:translate-x-[-2px] transition-all xl:left-6 xl:top-14 top-12 left-2 fixed mt-3"
                    onClick={() => history.back()}
                />
                <h1 className="flex justify-center mx-auto text-5xl underline mb-3 mt-10">
                    Web Scraping
                </h1>
                <p className="my-10">
                    En este segmento, exploraremos el web scraping, una técnica que nos
                    permite extraer información de páginas web. En este ejemplo, llevaré a
                    cabo el scraping en mi propio portafolio web. Es importante utilizar
                    esta técnica con responsabilidad y respeto a las políticas de uso de
                    los sitios web objetivo.
                </p>
                <hr className="border-zinc-300 dark:border-zinc-800 my-10" />
                <MarkdownRenderer />
                <hr className="border-zinc-300 dark:border-zinc-800 my-10" />
                <div className="border-l-4 border-blue-500 px-1 bg-opacity-[0.6] p-3 pl-5 text-blue-500 font-semibold">
                    <p className="font-bold text-xl">
                        <AlertTriangle className="w-6 inline mb-1" /> Importante
                    </p>
                    <p>
                        Para tener en cuenta! pueden ver el resultado solamente teniendo
                        levantado el server por defecto de Flask, que sería algo así:
                        <span className="mx-1">
                            http://127.0.0.1:5000/api/scrape
                        </span>
                    </p>
                </div>
                <div className="my-10">
                    <p>
                        Esto es un fetch de documentación MarkDown de mi
                        repositorio de GitHub que indica el procedimiento.
                    </p>
                    <p>
                        Si deseas aprender cómo realizar una recuperación de la
                        documentación Markdown desde un repositorio en GitHub que contiene
                        un archivo README.md con información sobre sus propiedades y
                        complementos, te invito a seguir este enlace:
                    </p>
                    <Link
                        href="/docs/markdown-render"
                        className="text-[tomato] underline link"
                    >
                        React Markdown Render
                        <OpenInNew className="link-icon" />
                    </Link>
                </div>
                <p className="text-center justify-center mx-auto my-10 bg-button-variant text-text-variant w-fit p-2">
                    Si tienen alguna consulta para hacer los escucho en mi
                    <Link href="/docs/feedback" className="underline text-red-500 mx-1">
                        feedback,
                    </Link>
                    muchas gracias!
                </p>
                <button
                    className="justify-center mx-auto bg-button-variant text-text-variant font-semibold rounded p-2 w-fit my-3 hover:scale-105 shadow-gray-700"
                    onClick={handleScrape}
                >
                    Raspar!!
                </button>
                {titles.map((title, index) => (
                    <article className="text-zinc-100 space-y-3 border-zinc-200 border-[1px] shadow-md rounded shadow-zinc-200 mt-6 p-6 dark:!shadow dark:border-zinc-800 overflow-x-auto">
                        <h1 key={index} className="text-[tomato] underline text-lg">
                            {title}
                        </h1>
                        <p className="text-text-primary p-3 text-sm">{paragraphs}</p>
                        <li className="text-zinc-500">{items}</li>
                    </article>
                ))}
            </main>
            <Footer />
        </>
    );
}
