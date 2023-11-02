import Head from 'next/head';
import '../styles/globals.scss';
import { renderToString } from 'react-dom/server';
import { DoNotCopy } from '../components/DoNotCopy';
import { NeoTecsIcon } from '../components/NeoTecsIcon';

function MyApp({ Component, pageProps }) {
  const title = Component.title || 'Neotecs - Blog';
  const description = 'Aprende a configurar tu WiFi fácil y rápido.';

  const neoTecsIconString = renderToString(<NeoTecsIcon />);

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={`data:image/svg+xml,${encodeURIComponent(neoTecsIconString)}`}
        />
        <link
          rel="apple-touch-icon"
          href={`data:image/svg+xml,${encodeURIComponent(neoTecsIconString)}`}
        />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="/images/NeoTecs _Tutorial_logo.png"
        />
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
