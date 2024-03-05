import Link from 'next/link';
import { Nav } from '../components/Nav';
import { HomeHeader } from '../components/HomeHeader';
import { Footer } from '../components/Footer';
import { YouTubeVideoSection } from '../components/YouTubeVideoSection';
import { MarqueeLogos } from '../sections/Brands';
import { ShimmerButton } from '../components/magicui/ShimmerButton';
import { PlayIcon, Wifi } from 'lucide-react';
import { CpeBrands } from '../components/CpeBrands';
import { cardContent, aboutNeo } from '../components/Constants';
import Tracker from '../components/utils/tracker';

const HomeBlock = ({ children }) => {
  return (
    <div
      className={`max-w-screen-xl mx-auto px-4 md:px-8 text-lg text-center py-16`}
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
      <Nav />
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
          <aside className="mt-10 border border-zinc-200/85 dark:border-zinc-800/40 dark:shadow-none p-6 rounded-lg">
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
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 text-center">
          {cardContent.map((card) => (
            <div
              key={card.id}
              className="p-4 rounded-lg border dark:border-zinc-800 shadow-sm shadow-slate-200 dark:!shadow"
            >
              <span className="text-xl font-bold">{card.feature}</span>
              <p className="text-text-second py-3">{card.children}</p>
            </div>
          ))}
        </div>
      </HomeBlock>

      <HomeBlock className="bg-[#09090b] dark:bg-[#ffffff]">
        <HomeBlockTitle>Acerca de NeoTecs</HomeBlockTitle>
        <div className="border dark:border-zinc-800 p-3 rounded-xl shadow-sm shadow-slate-200 dark:shadow-none">
          <p className="text-md space-y-3 font-bold">
            Si te interesa aprender...
          </p>
          <hr className="my-2 border-zinc-200 dark:border-zinc-800 w-full" />
          <p className="mt-4 text-text-second ">{aboutNeo}</p>
        </div>
      </HomeBlock>

      <MarqueeLogos />

      <div className="my-20 justify-center mx-auto flex">
        <Link href="/docs/program">
          <ShimmerButton shimmerDuration="1.8s" size="large">
            Comencemos
          </ShimmerButton>
        </Link>
      </div>

      <Tracker />
      <Footer />
    </main>
  );
}
