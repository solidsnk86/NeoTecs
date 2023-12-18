import Link from 'next/link';
import { Nav } from '../components/Nav';
import { HomeHeader } from '../components/HomeHeader';
import { Footer } from '../components/Footer';
import { YouTubeVideoSection } from '../components/YouTubeVideoSection';
import { MarqueeLogos } from '../sections/Brands';
import { ShimmerButton } from '../components/magicui/ShimmerButton';
import { Card } from '../components/Card';
import { BrandsSwitch } from '../components/BrandsSwitch';
import { PlayIcon, Wifi } from 'lucide-react';
import { CpeBrands } from '../components/CpeBrands';

const HomeBlock = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-lg text-center py-16">
        {children}
      </div>
    </div>
  );
};

export const HomeBlockTitle = ({ Tag = 'h2', children }) => {
  return (
    <Tag className="text-4xl font-bold sm:text-5xl mb-10 text-text-primary">
      {children}
    </Tag>
  );
};

const cardContent = [
  {
    feature: 'Práctico',
    children:
      'Este curso de programación se enfoca en ejercicios prácticos para que puedas aplicar lo que aprendes en proyectos reales.',
  },
  {
    feature: 'Tutoriales',
    children:
      'NeoTecs ofrece tutoriales en video y recursos didácticos para que puedas comprender a configurar tu wifi de manera efectiva.',
  },
  {
    feature: 'Documentación',
    children:
      'Sí, el curso incluye documentación detallada y extensa sobre diversos lenguajes de programación y tecnologías relacionadas.',
  },
  {
    feature: 'Paso a paso',
    children:
      'Explicamos los conceptos de programación paso a paso, con ejemplos y ejercicios que te ayudarán a comprenderlos a fondo.',
  },
];

export default function Home() {
  return (
    <div className="text-text-primary">
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
        <section className="xl:flex justify-center mx-auto w-full relative">
          <header className="xl:flex xl:w-1/2 p-2 xl:mt-[70px]">
            <span className="effect-backround"></span>
            <Wifi className="inline bg-button-variant mx-4 w-16 h-16 text-green-600 font-bold border p-3 border-green-400 rounded-lg xl:mx-8 xl:mt-10 mt-4" />
            <div>
              <h2 className="text-3xl mx-auto font-semibold my-3 border-b-4 border-outline w-fit">
                Documentación Wifi
              </h2>
              <p className="text-md text-outline">
                Aprende cómo configurar diferentes modelos <br />
                de dispositvos inalámbricos de las marcas
                <br /> más conocidas con esta guía.
              </p>
            </div>
          </header>
          <aside className="mt-10 border-zinc-800 p-6 rounded-lg shadow-sm shadow-[#222]">
            <p className="text-3xl font-semibold">
              <PlayIcon className="inline mx-2 border mb-[6px] text-green-500 border-green-900 rounded-lg p-2 w-9 h-9 bg-[#072719]" />
              Comencemos!
            </p>
            <p className="my-3">Descubre cómo configurar estas marcas:</p>
            <CpeBrands />
          </aside>
        </section>
      </HomeBlock>

      <HomeBlock>
        <HomeBlockTitle>Características</HomeBlockTitle>
        <section className="grid md:grid-cols-2 gap-4 md:gap-8">
          {cardContent.map((card) => (
            <Card>
              <div className="p-4 rounded-lg border-outline border-opacity-10 border">
                <span className="text-xl font-bold mb-4">{card.feature}</span>
                <p>{card.children}</p>
              </div>
            </Card>
          ))}
        </section>
      </HomeBlock>

      <HomeBlock className="bg-cover">
        <HomeBlockTitle>Aprende Programación Ahora</HomeBlockTitle>
        <b className="underline space-y-3">
          Principios Báscicos de la programación
        </b>
        <p className="mt-4">
          Este curso en NeoTecs va ir adentrándose más profundamente en el
          diseño e implementación de aplicaciones web con Python, JavaScript y
          SQL, utilizando frameworks como Django, React y Bootstrap. Los temas
          abordados incluyen el diseño de bases de datos, escalabilidad,
          seguridad y experiencia de usuario. A través de proyectos prácticos,
          los estudiantes aprenden a escribir y utilizar APIs, crear interfaces
          de usuario interactivas y aprovechar servicios en la nube como GitHub
          y Heroku. Al finalizar este curso, los estudiantes adquieren
          conocimientos y experiencia en principios, lenguajes y herramientas
          que les permiten diseñar e implementar aplicaciones en Internet.
        </p>
        <p className="mt-4">
          <Link href="/docs/program">
            <ShimmerButton shimmerDuration="1.8s" size="large">
              Comencemos
            </ShimmerButton>
          </Link>
        </p>
      </HomeBlock>

      <MarqueeLogos />

      <Footer />
    </div>
  );
}
