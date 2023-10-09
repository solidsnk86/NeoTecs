import Head from 'next/head';
import '../styles/globals.scss';
import { DoNotCopy } from '../components/DoNotCopy';

function MyApp({ Component, pageProps }) {
  const title = Component.title || 'Neotecs - Blog';
  const description = 'Aprende a configurar tu WiFi fácil y rápido.';
  const favicon = '../../public/favicon-32x32.png';

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={favicon} />
        <link rel="apple-touch-icon" href={favicon} />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:site_name" content="Neotecs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CalcagniGabriel" />
        <meta name="twitter:creator" content="@solidSnk86" />
        <meta name="twitter:title" content="Neotecs WiFi Documentation" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/images/logo.png" />
      </Head>
      <DoNotCopy />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
