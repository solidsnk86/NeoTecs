import { AlertTriangle } from 'lucide-react';
import { Nav } from '../../components/Nav';
import { ArrowLeftIcon } from 'lucide-react';
import LinkButton from '../../components/LinkButton';
import MarkdownRenderer from '../../components/MarkDownRender';
import { githubMarkdownURL } from '../../components/Constants';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import HeaderTitle from '../../components/HeaderTitlte';
export default function Scraping() {
  return (
    <>
      <Nav className="fixed xl:relative w-full h-12 z-50" />
      <main className="text-text-primary flex flex-col justify-center m-auto p-10 xl:w-10/12">
        <div className="bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded p-1 xl:left-6 xl:top-14 top-14 left-[5px] fixed mt-3 cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125">
          <ArrowLeftIcon
            className="text-text-primary"
            onClick={() => history.back()}
          />
        </div>
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
        <div className="border-l-4 border-red-500 px-1 bg-opacity-[0.6] p-3 pl-5 font-semibold">
          <p className="font-bold text-xl text-red-500">
            <AlertTriangle className="w-6 inline mb-1" /> Importante
          </p>
          <p>
            Para tener en cuenta, pueden ver el resultado solamente teniendo
            levantado el servidor por defecto de Flask, que sería algo así:
            <span className="mx-1 text-red-500">
              http://127.0.0.1:5000/api/scrape
            </span>
            o en su caso podrían levantar esta aplicación en un entorno virtual
            como:
          </p>
          <LinkButton
            className={''}
            url="https://www.pythonanywhere.com/"
            color="red-500"
            iconName={'ArrowUpRight'}
          >
            Python Anywhere
          </LinkButton>
        </div>
        <div className="my-10">
          <p>
            Esto que acabamos de leer es un fetch de documentación MarkDown de
            mi repositorio de GitHub que indica el procedimiento.
          </p>
          <p>
            Si deseas aprender cómo realizar una recuperación de la
            documentación Markdown desde un repositorio en GitHub que contiene
            un archivo README.md con información sobre sus propiedades y
            complementos, te invito a seguir este enlace:
          </p>
          <LinkButton
            className={''}
            url="/docs/markdown-render"
            color="red-500"
            iconName={'ArrowUpRight'}
          >
            React Markdown Render
          </LinkButton>
        </div>
        <p className="text-center my-10 bg-button-variant text-text-variant w-fit p-2">
          Si tienen alguna consulta para hacer, los escucho en mi
          <LinkButton
            className={''}
            url="/docs/feedback"
            color="text-strong"
            iconName={'MessageSquareWarning'}
          >
            feedback
          </LinkButton>
          muchas gracias!
        </p>
        <ShareButton setTitle={Scraping.title} />
      </main>
      <Footer />
    </>
  );
}

Scraping.title = 'Aprende a crear tu propia app de Web Scraping con Python';
