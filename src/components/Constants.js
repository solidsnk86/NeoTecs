import { StepForward, FileText, FootprintsIcon, Code2 } from 'lucide-react';

export const githubMarkdownURL =
  'https://raw.githubusercontent.com/solidsnk86/neo-scraper/master/LEEME.md';

export const githubAvatar =
  'https://avatars.githubusercontent.com/u/93176365?s=400&u=6f5ba483bed08a874198c38f5b7140f39e74593f&v=4';

export const currencyGoogleSheetsURL =
  process.env.NEXT_PUBLIC_CURRENCY_GOOGLE_SHEETS_URL;

export const googleSheetURL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

export const articlesURL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ARTICLES;

const user = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
export const youTube = user;

export const cardContent = [
  {
    feature: (
      <>
        <span className="border border-lime-500/45 mx-2 rounded-lg p-[6px] bg-lime-400/25">
          <Code2 className="inline text-lime-500 mb-1" />
        </span>
        Práctico
      </>
    ),
    children:
      'Este curso de programación se enfoca en ejercicios prácticos para que puedas aplicar lo que aprendes en proyectos reales.',
  },
  {
    feature: (
      <>
        <span className="border border-sky-500/45 mx-2 rounded-lg p-[6px] bg-sky-400/25">
          <StepForward className="inline text-sky-500 mb-1" />
        </span>
        Tutoriales
      </>
    ),
    children:
      'NeoTecs ofrece tutoriales en video y recursos didácticos para que puedas comprender a configurar tu wifi de manera efectiva.',
  },
  {
    feature: (
      <>
        <span className="border border-amber-500/45 mx-2 rounded-lg p-[6px] bg-amber-400/25">
          <FileText className="inline text-amber-500 mb-1" />
        </span>
        Documentación
      </>
    ),
    children:
      'Sí, el curso incluye documentación detallada y extensa sobre diversos lenguajes de programación y tecnologías relacionadas.',
  },
  {
    feature: (
      <>
        <span className="border border-red-500/45 mx-2 rounded-lg p-[6px] bg-red-400/25">
          <FootprintsIcon className="inline text-red-500 mb-1" />
        </span>
        Paso a paso
      </>
    ),
    children:
      'Explico los conceptos de programación paso a paso, con ejemplos y ejercicios que te ayudarán a comprenderlos a fondo.',
  },
];

export const links = [
  {
    href: '/docs/program',
    title: 'Html',
  },
  {
    href: '/docs/css',
    title: 'Css',
  },
  {
    href: '/docs/git',
    title: 'Git',
  },
  {
    href: '/docs/python',
    title: 'Python',
  },
  {
    href: '/docs/django',
    title: 'Django',
  },
  {
    href: '/docs/javascript',
    title: 'Javascript',
  },
  {
    href: '/docs/sql',
    title: 'SQL',
  },
  {
    href: '/docs/ui-ux',
    title: 'UI/UX',
  },
  {
    href: '/docs/testing',
    title: 'CI/DI',
  },
  {
    href: 'scalability',
    title: 'Escalabilidad',
  },
  {
    href: '/docs/scraping',
    title: 'Web Scraping',
  },
  {
    href: '/docs/markdown-render',
    title: 'MarkDown Render',
  },
  {
    href: '/docs/google-sheets',
    title: 'Google Sheets',
  },
];

export const aboutNeo =
  'Este curso de NeoTecs se enfoca en el diseño e implementación de aplicaciones web con Python, JavaScript y SQL, utilizando frameworks como React, Django y Bootstrap. Los temas incluyen diseño de bases de datos, escalabilidad, seguridad y experiencia de usuario. Los estudiantes adquieren habilidades en la escritura de APIs, creación de interfaces interactivas y uso de servicios en la nube como GitHub, Vercel y Netlify para diseñar e implementar aplicaciones web. Entre otros ejemplos...';

export const shareText =
  'No te pierdas este tutorial gratuito para aprender a programar con ejemplos y ejercicios prácticos, también incluye contenido de como configurar tu antena inalámbrica 📡!!';

export const microlink = 'https://geolocation.microlink.io';

export const compartirWhatsapp = () => {
  const url = window.location.href;
  const message = `Explora ésta página web dónde aprenderás a configurar tus dispositivos inalámbricos 📡 y encontrarás artículos para aprender a programar 👨‍💻: ${url}`;
  const encodeMessage = encodeURIComponent(message);
  window.open(`https://wa.me/?text=${encodeMessage}`);
};

export const compartirTwitter = () => {
  const encodeUrl = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/share?url=${encodeUrl}`);
};

export const compartirLinkedIn = () => {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`;
  window.open(shareUrl, '_blank');
};

export const compartiTelegram = () => {
  const text = '¡Aprende a configurar tu Wifi en minutos!';
  const url = encodeURIComponent(window.location.href);
  const encodeT = encodeURIComponent(text) + url;
  const telegramLink = `https://t.me/share/url?text=${encodeT}`;

  window.open(telegramLink, '_blank');
};

export function compartirFacebook() {
  const encodeUrl = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeUrl}`);
}

export default function sendWhatsapp(id, price) {
  const wapNumber = '+5492604586538';
  const wapMessage = encodeURIComponent(
    `Buenas estoy interesado en el dibujo de ${id}! El cual tiene un importe de U$D ${price}. ¿El envío está incluido?`,
  );
  const wapUrl = `https://wa.me/${wapNumber}?text=${wapMessage}`;
  window.open(wapUrl);
}

export const portfolioUrl = 'https://portfolio-mgc.vercel.app/';
export const favicon = '/images/icons/favicon-neoctecs2.png';
export const currentYear = new Date().getFullYear();
