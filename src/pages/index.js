import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { Nav } from '../components/Nav';
import { HomeHeader } from '../components/HomeHeader';
import { Footer } from '../components/Footer';
import { YouTubeVideoSection } from '../components/YouTubeVideoSection';
import { MarqueeLogos } from '../sections/Brands';
import { ShimmerButton } from '../components/magicui/ShimmerButton';
import { PlayIcon, Wifi } from 'lucide-react';
import { CpeBrands } from '../components/CpeBrands';
import { cardContent, aboutNeo } from '../components/Constants';
import ArticleData from '../components/ArticleData';

export const HomeBlock = ({ children, className }) => {
  return (
    <div
      className={`${className} max-w-screen-xl mx-auto px-4 md:px-8 text-lg text-center py-16 z-20`}
    >
      {children}
    </div>
  );
};

export const HomeBlockTitle = ({ Tag = 'h2', children }) => {
  return (
    <Tag className="text-4xl font-bold sm:text-5xl mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-300 py-2">
      {children}
    </Tag>
  );
};

export default function Home() {
  return (
    <main className="text-text-primary">
      <Nav className={'bg-transparent'} />
      <HomeHeader />
      <HomeBlock>
        <HomeBlockTitle>¿Sabés Configurar tu CPE inalámbrico?</HomeBlockTitle>
        <p>Te dejo estos videos para que aprendas cómo configurarlos.</p>
        <ul className="inline-flex text-left m-auto mt-2 mb-4 gap-6">
          <li className="custom-text-shadow">✅ Rápido</li>
          <li className="custom-text-shadow">✅ Fácil</li>
          <li className="custom-text-shadow">✅ Práctico</li>
        </ul>
        <YouTubeVideoSection />
        <div className="xl:flex justify-center mx-auto w-full relative">
          <header className="xl:flex xl:w-1/2 p-2 xl:mt-[70px]">
            <span className="effect-backround"></span>
            <Wifi className="inline bg-button-variant mx-4 w-16 h-16 text-green-600 font-bold border p-3 border-green-400 rounded-lg xl:mx-8 xl:mt-10 mt-4" />
            <div>
              <h2 className="text-3xl mx-auto font-semibold my-3 border-b-4 border-outline w-fit">
                Documentación Wifi
              </h2>
              <p className="text-md text-outline">
                Descubre cómo configurar diferentes modelos <br />
                de dispositvos inalámbricos de las marcas
                <br /> más conocidas con esta guía.
              </p>
            </div>
          </header>
          <aside className="dark:bg-[#09090B] bg-[#FFFFFF] mt-10 border border-zinc-200/85 dark:border-zinc-800/40 dark:shadow-none p-6 rounded-lg">
            <p className="text-3xl font-semibold">
              <PlayIcon className="inline mx-2 border mb-[6px] text-green-500 border-green-900 rounded-lg p-2 w-9 h-9 bg-[#072719]" />
              Comencemos!
            </p>
            <p className="my-3 text-text-second">
              ¿Cúal necesitas configurar? Tp-Link, Ubiquiti o Mikrotik:
            </p>
            <CpeBrands />
          </aside>
        </div>
      </HomeBlock>

      <HomeBlock>
        <HomeBlockTitle>Características</HomeBlockTitle>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 text-center cards-client">
          {cardContent.map((card, index) => (
            <div
              key={index}
              className="dark:bg-[#09090B] bg-[#FFFFFF] p-4 rounded-lg border dark:border-zinc-800 shadow-sm shadow-slate-200 dark:!shadow z-50"
            >
              <span className="text-xl font-bold">{card.feature}</span>
              <p className="text-text-second py-3">{card.children}</p>
            </div>
          ))}
        </div>
      </HomeBlock>

      <HomeBlock>
        <HomeBlockTitle>Acerca de NeoTecs</HomeBlockTitle>
        <div className="cards text-zinc-200 rounded-[13px] p-4 hover:bg-opacity-70 duration-200 z-40">
          <article className=" z-50">
            <p className="text-md space-y-3 font-bold z-50">Para aprender...</p>
            <hr className="my-2 border-zinc-200 dark:border-zinc-800 w-full z-50" />
            <p className="text-zinc-400">{aboutNeo}</p>
          </article>
        </div>
      </HomeBlock>

      <MarqueeLogos />

      <div className="container flex items-center h-[58vh] justify-center mx-auto relative my-2">
        <span
          className="absolute w-px h-[45%] top-5 bg-gradient-to-t from-zinc-500 via-zinc-500/50 to-transparent"
          aria-hidden="true"
        />
        <span className="absolute bottom-[31%] z-50 flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-purple-400/30 group-hover:border-zinc-200">
          <BookOpen className="w-10 h-10 mt-1 text-purple-400" />
        </span>
        <h1 className="absolute bottom-10 font-bold text-4xl">
          Listo para empezar?
        </h1>
        <p className="absolute bottom-0 text-text-second">
          Ahora que has sido presentado al curso, vamos a sumergirnos.
        </p>
      </div>

      <div className="my-20 justify-center mx-auto flex">
        <Link href="/docs/program">
          <ShimmerButton shimmerDuration="1.8s" size="large">
            Comencemos
          </ShimmerButton>
        </Link>
      </div>

      <HomeBlock>
        <HomeBlockTitle>Últimos artículos...</HomeBlockTitle>
        <p className="text-red-400 relative my-6 font-semibold">
          Desliza para ver los artículos
        </p>
        <ArticleData />
      </HomeBlock>

      <Footer />
    </main>
  );
}
