import { Nav } from '../../components/Nav';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import MarkdownRenderer from '../../components/MarkDownRender';
import { githubMarkdownURL } from '../../components/Constants'
import { AlertTriangle } from 'lucide-react';
import { ExternalLinkIcon } from 'lucide-react';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import HeaderTitle from '../../components/HeaderTitlte';
export default function Scraping() {

    return (
        <>
            <Nav className="fixed xl:relative w-full h-12 z-50" />
            <main className="text-text-primary flex flex-col justify-center m-auto p-10 xl:w-10/12">
                <span onClick={() => history.back()}>
                    <ArrowLeftIcon className="text-text-primary cursor-pointer hover:translate-x-[-2px] transition-all xl:left-6 xl:top-14 top-12 left-2 fixed mt-3" />
                </span>
                <HeaderTitle className="text-5xl my-10">Web Scraping</HeaderTitle>
                <hr className="border-text-primary" />
                <p className="my-10 text-share">
                    En este segmento, exploraremos el web scraping, una técnica que nos
                    permite extraer información de páginas web. En este ejemplo, llevaré a
                    cabo el scraping en mi propio portafolio web. Es importante utilizar
                    esta técnica con responsabilidad y respeto a las políticas de uso de
                    los sitios web objetivo.
                </p>
                <hr className="border-zinc-300 dark:border-zinc-800 my-10" />
                <MarkdownRenderer url={githubMarkdownURL} />
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
            </main>
            <Footer />
        </>
    );
}

Scraping.title = 'Aprende a crear tu propia app de Web Scraping con Python';
