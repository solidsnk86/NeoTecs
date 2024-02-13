import { StepForward, FileText, FootprintsIcon, Code2 } from 'lucide-react';

export const githubMarkdownURL =
  'https://raw.githubusercontent.com/solidsnk86/neo-scraper/master/LEEME.md';

export default function sendWhatsapp(id, price) {
  const wapNumber = '+5492604586538';
  const wapMessage = encodeURIComponent(
    `Buenas estoy interesado en el dibujo de ${id}! El cual tiene un importe de U$D ${price}. ¿El envío está incluido?`,
  );
  const wapUrl = `https://wa.me/${wapNumber}?text=${wapMessage}`;
  window.open(wapUrl);
}

export const currencyGoogleSheetsURL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQXKUu36nLoEr2X2cXCLAy68aqjUKVavdWplNBUQaGhfYV0WifoyMlCXs3-vfLijDhRDka2jjHsLIsi/pub?output=csv';

export const googleSheetURL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRBJ2ICoQMLS-Dfem1ha7yjJQKMgTbZu9PExFjGh2rh6Pj4sgYTl2dBpJw02PQRckCG0SSpaiL6Vwwl/pub?output=csv';

const user = 'AIzaSyCu_A2nFDYi0TWRgASZJz89Zkuk_yIGhLE';
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

export const aboutNeo =
  'El curso de NeoTecs se enfoca en el diseño e implementación de aplicaciones web con Python, JavaScript y SQL, utilizando frameworks como Django, React y Bootstrap. Los temas incluyen diseño de bases de datos, escalabilidad, seguridad y experiencia de usuario. Los estudiantes adquieren habilidades en la escritura de APIs, creación de interfaces interactivas y uso de servicios en la nube como GitHub y Netlify para diseñar e implementar aplicaciones web.';

export const microlink = 'https://geolocation.microlink.io';

export function applyLazyLoading() {
  var imgages = document.querySelectorAll('.images-client img');

  imgages.forEach(function (img) {
    img.setAttribute('loading', 'lazy');
  });
}
