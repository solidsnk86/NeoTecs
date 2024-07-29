import '../styles/globals.scss';
import Head from 'next/head';
import { CookieNotice } from '../components/CookiesNotice';
import { DoNotCopy } from '../components/DoNotCopy';
import { favicon } from '../components/Constants';
import ColorChangingComponent from '../components/RamdomColor';

function MyApp({ Component, pageProps }) {
  const title = Component.title || 'Neotecs - Informática';
  const description =
    'Aprende programación en este curso gratuito de NeoTecs, que abarca desde conceptos básicos hasta niveles avanzados. Además, disponemos de documentación para facilitar la configuración rápida y sencilla de tu WiFi.';

  const themeColor = ColorChangingComponent();

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={favicon} />
        <link rel="apple-touch-icon" href={favicon} />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="author" content="Gabriel Calcagni" />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/solidsnk86/NeoTecs/master/public/images/logos/NeoTecs_Tutorial_logo.png"
        />
        <meta
          name="keywords"
          content="Configuración Wifi Gobierno de San Luis, Programación Python, Programación Javascript, Conceptos básicos de programación, Conceptos avanzados de programación"
        />
        <meta property="og:site_name" content="Neotecs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CalcagniGabriel" />
        <meta name="twitter:creator" content="@solidSnk86" />
        <meta name="twitter:title" content="Neotecs WiFi Documentation" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="/images/logos/NeoTecs_Tutorial_logo.png"
        />
        <meta name="theme-color" content={themeColor} />
      </Head>
      <DoNotCopy />
      <CookieNotice />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
