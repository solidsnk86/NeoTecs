import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Nav } from '../components/Nav';
import { HomeHeader } from '../components/HomeHeader';
import { Footer } from '../components/Footer';
import { GithubStats } from '../components/GithubStats';
import { YouTubeVideoSection } from '../components/YouTubeVideoSection';
import { MarqueeLogos } from '../sections/sponsors.tsx';

const HomeBlock = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-lg text-center py-16">
        {children}
      </div>
    </div>
  );
};

const HomeBlockTitle = ({ Tag = 'h2', children }) => {
  return <Tag className="text-4xl font-bold sm:text-5xl mb-10">{children}</Tag>;
};

export default function Home() {
  return (
    <div className="bg-page-dark-bg text-white">
      <Nav />
      <HomeHeader />
      <HomeBlock>
        <HomeBlockTitle>Configurá tu CPE</HomeBlockTitle>
        <h2>Videos de configuración</h2>
        <ul className="inline-flex text-left m-auto mt-2 mb-4 gap-6">
          <li className="custom-text-shadow">✅ Rápido</li>
          <li className="custom-text-shadow">✅ Fácil</li>
          <li className="custom-text-shadow">✅ Práctico</li>
        </ul>
        <YouTubeVideoSection />
      </HomeBlock>

      <HomeBlock>
        <HomeBlockTitle>Características</HomeBlockTitle>

        <section className="grid md:grid-cols-2 gap-4 md:gap-8">
          <div className="p-4 rounded-lg border-white border-opacity-10 border">
            <span className="text-xl font-bold mb-4">Práctico</span>
            <p>
              Neotecs es una guía rápida para aprender a configurar CPE
              inalámbricos Tp-Link, Ubiquiti, Mikrotik
            </p>
          </div>
          <div className="p-4 rounded-lg border-white border-opacity-10 border">
            <span className="text-xl font-bold mb-4">Tutoriales</span>
            <p>
              Neotecs tiene un canal de youtube con videos muy bien explicados
              en poco tiempo.
            </p>
          </div>
          <div className="p-4 rounded-lg border-white border-opacity-10 border">
            <span className="text-xl font-bold mb-4">Documentación</span>
            <p>
              Sí, Neotecs tiene documentación más extensa sobre varios modelos y
              marcas de dispositivos inalámbricos
            </p>
          </div>
          <div className="p-4 rounded-lg border-white border-opacity-10 border">
            <span className="text-xl font-bold mb-4">Paso a paso</span>
            <p>
              Se explican los distintos tipos de configuración detalladamete en
              la documentación con imágenes y figuras.
            </p>
          </div>
        </section>
      </HomeBlock>

      <HomeBlock className="bg-[url-de-tu-imagen] bg-cover">
        <HomeBlockTitle>Aprende ahora</HomeBlockTitle>
        <p>Configura tu dispositovo inalámbrico</p>
        <p className="mt-4">
          <Link
            href="/docs/"
            className="bg-[#484848] text-white rounded-full px-8 py-4 font-bold text-xl inline-flex duration-200 hover:shadow-lg sm:hover:shadow-2xl hover:border-opacity-0 hover:opacity-[.8] hover:scale-[1.05]"
          >
            Comencemos
          </Link>
        </p>
      </HomeBlock>

      <MarqueeLogos />

      <HomeBlock>
        <HomeBlockTitle>Mis proyectos en Github</HomeBlockTitle>
        <div className="sm:flex items-stretch max-w-3xl mx-auto space-y-4 text-left sm:space-y-0 sm:space-x-8 sm:text-center">
          {[
            {
              url: 'https://solidsnk86.github.io/formularioWeb/',
              title: 'Formulario Web',
              repoName: 'formularioWeb',
              repo: 'https://github.com/solidsnk86/formularioWeb/blob/master/img/factura.png?raw=true',
              description: 'Proyecto demo de facturación online',
              logo: 'factura.png',
            },
            {
              url: 'https://solidsnk86.github.io/GerArt/',
              title: 'Ger Art',
              repoName: 'GerArt',
              repo: 'https://github.com/solidsnk86/GerArt/blob/master/assets/img/android-chrome-512x512.png?raw=true',
              description: 'Proyecto portfolio web de arte y dibujo.',
              logo: 'swiper.svg',
            },
            {
              url: 'https://solidsnk86.github.io/Neo-Fotografia/',
              title: 'Neo Fotografía',
              repoName: 'Neo-Fotografia',
              repo: 'https://github.com/solidsnk86/Neo-Fotografia/blob/master/assets/img/icon.png?raw=true',
              description: 'Portfolio web de fotografía deportiva.',
              logo: 'icon.png',
            },
          ].map((item) => (
            <div
              className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 border-white border-opacity-10 border rounded-xl px-4 py-6 duration-200 hover:shadow-lg sm:hover:shadow-2xl hover:border-opacity-0 hover:bg-primary hover:bg-opacity-5 hover:scale-[1.05]"
              key={item.title}
            >
              <img
                className="w-20 sm:w-auto xl:w-32 sm:mr-0"
                src={item.repo}
                alt={item.title}
              />
              <span className="font-semibold mt-4 mb-2">{item.title}</span>
              <span className="text-sm opacity-75 mb-2">
                {item.description}
              </span>

              <GithubStats repoName={item.repoName} />
              <a
                href={item.url}
                className="hover:opacity-60 px-3 py-1 rounded mt-2 bg-gray-800 text-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link{' '}
                <FaExternalLinkAlt className="inline-flex mb-1 relative text-md" />
              </a>
            </div>
          ))}
        </div>
      </HomeBlock>

      <Footer />
    </div>
  );
}
