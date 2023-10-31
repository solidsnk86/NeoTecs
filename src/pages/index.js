import Link from 'next/link';
import { Nav } from '../components/Nav';
import { HomeHeader } from '../components/HomeHeader';
import { Footer } from '../components/Footer';
import { YouTubeVideoSection } from '../components/YouTubeVideoSection';
import { MarqueeLogos } from '../sections/Brands';
import { ShimmerButton } from '../components/magicui/ShimmerButton';

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

const cardContent = [
  {
    feature: 'Práctico',
    children:
      ' Neotecs es una guía rápida para aprender a configurar CPE inalámbricos Tp-Link, Ubiquiti, Mikrotik',
  },
  {
    feature: 'Tutoriales',
    children:
      'Neotecs tiene un canal de youtube con videos muy bien explicados en poco tiempo.',
  },
  {
    feature: 'Documentación',
    children:
      'Sí, Neotecs tiene documentación más extensa sobre varios modelos y marcas de dispositivos inalámbricos',
  },
  {
    feature: 'Paso a paso',
    children:
      ' Se explican los distintos tipos de configuración detalladamete en la documentación con imágenes y figuras.',
  },
];

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
          {cardContent.map((card) => (
            <div className="p-4 rounded-lg border-white border-opacity-10 border">
              <span className="text-xl font-bold mb-4">{card.feature}</span>
              <p>{card.children}</p>
            </div>
          ))}
        </section>
      </HomeBlock>

      <HomeBlock className="bg-[url-de-tu-imagen] bg-cover">
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
