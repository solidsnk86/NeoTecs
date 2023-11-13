import Link from 'next/link';
import { Nav } from '../components/Nav';
import { HomeHeader } from '../components/HomeHeader';
import { Footer } from '../components/Footer';
import { YouTubeVideoSection } from '../components/YouTubeVideoSection';
import { MarqueeLogos } from '../sections/Brands';
import { ShimmerButton } from '../components/magicui/ShimmerButton';
import { Card } from '../components/Card';

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
        <p>Principios Báscicos de la programación</p>
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
