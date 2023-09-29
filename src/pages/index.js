/* eslint-disable react/function-component-definition */
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Nav } from '../components/Nav';
import { HomeHeader } from '../components/HomeHeader';
import { Footer } from '../components/Footer';
import { GithubStats } from '../components/GithubStats';

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

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center justify-center">
          <article className="bg-[#161B22] p-4 rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/brN50pXmZR8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
              className="rounded-md flex m-auto w-[100%] md:w-[100%]"
            />
            <h3>Tp-Link</h3>
            <hr />
            <p>
              Configuración de antena Tp-Link CPE 510 de 5Ghz desde smartphone.
              Configuración de puertos desde el router, fácil y práctico.
            </p>
          </article>

          <article className="bg-[#161B22] p-4 rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/BRCsYxWUvpU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
              className="rounded-md flex m-auto w-[100%] md-:w-[100%]"
            />
            <h3>Tp-Link</h3>
            <hr />
            <p>
              Configuración antena Tp.Link CPE 510 de 5 Ghz desde una PC.
              Configuración de puertos desde el panel de control de Windows.
            </p>
          </article>

          <article className="bg-[#161B22] p-4 rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/Q9bFZgllF7k"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
              className="rounded-md flex m-auto w-[100%] md-:w-[100%]"
            />
            <h3>Ubiquiti</h3>
            <hr />
            <p>
              Configuración de antena Ubiquiti modelo Air Grid M2 HP de 2.4 Ghz
              desde smartphone, modo estación router. Guía rápida y fácil!
            </p>
          </article>
        </section>
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
        <HomeBlockTitle>Aprende a configurar</HomeBlockTitle>
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

      <HomeBlock>
        <HomeBlockTitle>Mis proyectos en Github</HomeBlockTitle>
        <div className="sm:flex items-stretch max-w-3xl mx-auto space-y-4 text-left sm:space-y-0 sm:space-x-8 sm:text-center gr">
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
              className="flex sm:flex-col items-center w-full border-white border-opacity-10 border rounded-xl px-4 py-6 duration-200 hover:shadow-lg sm:hover:shadow-2xl hover:border-opacity-0 hover:bg-primary hover:bg-opacity-5 hover:scale-[1.05]"
              target="_blank"
              key={item.title}
            >
              <img
                className="w-12 sm:w-32 sm:h-32 mr-4 sm:mr-0"
                src={item.repo}
                alt={item.title}
              />
              <span className="font-semibold sm:mt-4 sm:mb-2">
                {item.title}
              </span>
              <span className="text-sm opacity-75 mb-2">
                {item.description}
              </span>

              <GithubStats repoName={item.repoName} />
              <a
                href={item.url}
                className="hover:opacity-[.6] px-3 py-0 rounded mt-1 bg-gray-800 max-[400px]:px-0 max-[400px]:text-xs"
              >
                Link{' '}
                <FaExternalLinkAlt className="inline-flex mb-1 relative text-sm sm:text-xs" />
              </a>
            </div>
          ))}
        </div>
      </HomeBlock>

      <Footer />
    </div>
  );
}
