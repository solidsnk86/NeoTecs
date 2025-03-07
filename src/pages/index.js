import { cardContent, aboutNeo } from '../components/Constants';
import { Footer } from '../components/Footer';
import { HomeHeader } from '../components/HomeHeader';
import { MarqueeLogos } from '../sections/Brands';
import { Nav } from '../components/Nav';
import { BookOpen } from 'lucide-react';
import { ShimmerButton } from '../components/magicui/ShimmerButton';
import { YouTubeVideoSection } from '../components/YouTubeVideoSection';
import ArticleData from '../components/ArticleData';
import Link from 'next/link';
import { Donations } from '../components/Donations';

export const HomeBlock = ({ children, className = '' }) => {
  return (
    <div
      className={`${className} max-w-screen-xl mx-auto px-4 md:px-8 text-lg text-center py-16 z-20`}
    >
      {children}
    </div>
  );
};

export const HomeBlockTitle = ({ Tag = 'h2', children, className, id }) => {
  return (
    <Tag
      id={id}
      className={`${className} text-4xl font-bold sm:text-5xl mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-300 py-2`}
    >
      {children}
    </Tag>
  );
};

export default function Home() {
  return (
    <main className="text-text-primary">
      <Nav className="relative" />
      <HomeHeader />
      <HomeBlock>
        <HomeBlockTitle>¿Sabés Configurar tu CPE inalámbrico?</HomeBlockTitle>
        <p className="font-semibold mb-10 text-xl">
          Te dejo estos videos para que aprendas cómo configurarlos!
        </p>
        <ul className="inline-flex text-left m-auto mt-2 mb-4 gap-6">
          <li className="custom-text-shadow">✅ Rápido</li>
          <li className="custom-text-shadow">✅ Fácil</li>
          <li className="custom-text-shadow">✅ Práctico</li>
        </ul>
        <YouTubeVideoSection />

        <Donations />
      </HomeBlock>

      <HomeBlock>
        <HomeBlockTitle>Características</HomeBlockTitle>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 text-center">
          {cardContent.map((card) => (
            <div
              key={card.id}
              className="dark:bg-[#09090B] bg-[#FFFFFF] p-4 rounded-lg border dark:border-zinc-900 shadow-sm shadow-slate-200 dark:!shadow z-50"
            >
              <span className="text-xl font-bold">{card.feature}</span>
              <p className="text-text-second py-3">{card.children}</p>
            </div>
          ))}
        </div>
      </HomeBlock>

      <HomeBlock>
        <HomeBlockTitle>Acerca de NeoTecs</HomeBlockTitle>
        <div className="cards text-zinc-200 rounded-[13px] p-4">
          <article className=" z-50">
            <p className="text-zinc-400">{aboutNeo}</p>
          </article>
        </div>
      </HomeBlock>

      <MarqueeLogos />

      <div className="grid h-[58vh] justify-center mx-auto relative my-20">
        <div className="justify_center grid mx-auto">
          <span className="w-px relative left-[36px] h-[130px] bg-gradient-to-t from-zinc-500 via-zinc-500/50 to-transparent" />
          <span className="z-50 relative flex items-center justify-center w-[75px] h-[75px] text-sm border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-purple-400/30 group-hover:border-zinc-200">
            <BookOpen className="w-10 h-10 mt-1 text-purple-400 text-shadow-sm shado-purple-300" />
          </span>
        </div>
        <div className="justify-center mx-auto grid mt-20 text-center">
          <h1 className="font-bold text-4xl">Listo para empezar?</h1>
          <p className="text-text-second text-lg text-balance my-5">
            Ahora que has sido presentado al tutorial, vamos a sumergirnos.
          </p>
        </div>
      </div>

      <div className="my-20 justify-center mx-auto flex">
        <Link href="/docs/program">
          <ShimmerButton shimmerDuration="1.8s" size="large">
            Comencemos
          </ShimmerButton>
        </Link>
      </div>

      <HomeBlock className="aspect-video">
        <HomeBlockTitle>Últimos artículos...</HomeBlockTitle>
        <p className="text-text-primary relative my-6 font-semibold">
          Desliza para ver más artículos
        </p>
        <ArticleData />
      </HomeBlock>

      <HomeBlock className="mb-16">
        <HomeBlockTitle id="#github-stats">
          Explora tus estadísticas de GitHub
        </HomeBlockTitle>

        <div className="flex relative md:max-w-2xl justify-center mx-auto bg-bg-card w-fit px-4 py-1 border border-zinc-200 dark:border-zinc-800 rounded-md z-50">
          <p>
            Descubre cuál es tu lenguaje de programación más utilizado y más con
            esta herramienta. Ingresa a esta sección de mi portafolio para ver
            tus estadísticas
            <Link
              href="https://calcagni-gabriel.vercel.app/github-stats"
              className="mx-2 underline text-violet-400"
            >
              aquí
            </Link>
          </p>
        </div>
      </HomeBlock>

      <Footer />
    </main>
  );
}
