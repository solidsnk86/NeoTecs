import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Nav } from '../../components/Nav';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import MarkdownRenderer from '../../components/MarkDownRender';
import { AlertTriangle } from 'lucide-react';
import { ExternalLinkIcon } from 'lucide-react';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import HeaderTitle from '../../components/HeaderTitlte';
export default function Scraping() {
    const [disabled, setDisabled] = useState(false);
    const [scrape, setScraping] = useState({
        titles: [],
        paragraphs: [],
        items: [],
        inputs: [],
        images: [],
        links: [],
    });

    const handleScrape = async () => {
        try {
            const response = await axios.post(
                'https://www.pythonanywhere.com/user/SolidSnk86/files/home/SolidSnk86/scrape/flask_app.py',
            );
            setScraping(response.data);
        } catch (error) {
            console.error('Error al realizar el raspado:', error);
        }
        setDisabled(true);
    };

    return (
        <>
            <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-50" />
            <main className="text-text-primary flex flex-col justify-center m-auto p-10 xl:w-10/12">
                <span onClick={() => history.back()}>
                    <ArrowLeftIcon className="text-text-primary cursor-pointer hover:translate-x-[-2px] transition-all xl:left-6 xl:top-14 top-12 left-2 fixed mt-3" />
                </span>
                <HeaderTitle className="text-5xl">Web Scraping</HeaderTitle>
                <hr className="border-text-primary" />
                <p className="my-10 text-share">
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
                        Para tener en cuenta, pueden ver el resultado solamente teniendo
                        levantado el servidor por defecto de Flask, que sería algo así:
                        <span className="mx-1">http://127.0.0.1:5000/api/scrape</span>
                    </p>
                </div>
                <div className="justify-center mx-auto my-6">
                    <button
                        onClick={handleScrape}
                        disabled={disabled}
                        className="border p-3 bg-zinc-300 dark:bg-zinc-800/95 dark:border-zinc-600/75 cursor-not-allowed rounded dark:border-zinc-800 border-zinc-00/10 hover:opacity-[.6] transition-all"
                    >
                        Hacer Scraping
                    </button>
                </div>
                <div className="my-10">
                    <p>
                        Esto es un fetch de documentación MarkDown de mi repositorio de
                        GitHub que indica el procedimiento.
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
                        <ExternalLinkIcon className="link-icon" />
                    </Link>
                </div>
                <p className="text-center my-10 bg-button-variant text-text-variant w-fit p-2">
                    Si tienen alguna consulta para hacer, los escucho en mi
                    <Link href="/docs/feedback" className="underline text-red-500 mx-1">
                        feedback,
                    </Link>
                    muchas gracias!
                </p>
                <ShareButton setTitle={Scraping.title} />
                {Object.keys(scrape.titles).map((index) => (
                    <article
                        key={index}
                        className="text-zinc-100 space-y-3 border-zinc-200 border-[1px] shadow-md rounded shadow-zinc-200 mt-6 p-6 dark:!shadow dark:border-zinc-800 overflow-x-auto"
                    >
                        <h1 className="text-[tomato] underline text-lg">
                            {scrape.titles[index]}
                        </h1>
                        <p className="text-text-primary p-3 text-sm">
                            {scrape.paragraphs[index]}
                        </p>
                        <ul className="text-zinc-500">
                            {Array.isArray(scrape.images[index]) &&
                                scrape.images[index].map((image, i) => (
                                    <li key={i}>
                                        <p>Alt: {image.alt}</p>
                                        <p>Src: {image.src}</p>
                                    </li>
                                ))}
                        </ul>
                        <div>
                            <p>Links:</p>
                            <ul>
                                {Array.isArray(scrape.links[index]) &&
                                    scrape.links[index].map((link, i) => (
                                        <li key={i}>
                                            <p>Alt: {link.alt}</p>
                                            <p>Src: {link.src}</p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </main>
            <Footer />
        </>
    );
}

Scraping.title = 'Aprende a crear tu propia app de Web Scraping con Python';
