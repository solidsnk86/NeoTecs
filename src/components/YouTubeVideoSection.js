import { YouTubeVideo } from './YouTubeVideo';

const videos = [
  {
    video: 'brN50pXmZR8',
    cpe: 'Tp-Link',
    children:
      'Configuración de antena Tp-Link CPE 510 de 5Ghz desde smartphone. Configuración de puertos desde el router, fácil y práctico.',
  },
  {
    video: 'BRCsYxWUvpU',
    cpe: 'Tp-Link',
    children:
      'Configuración antena Tp.Link CPE 510 de 5 Ghz desde una PC. Configuración de puertos desde el panel de control de Windows.',
  },
  {
    video: 'Q9bFZgllF7k',
    cpe: 'Ubiquiti',
    children:
      'Configuración de antena Ubiquiti modelo Air Grid M2 HP de 2.4 Ghz desde smartphone, modo estación router. Guía rápida y fácil!',
  },
];

export function YouTubeVideoSection() {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center justify-center my-5">
        {videos.map(({ video, cpe, children }) => (
          <YouTubeVideo
            video={video}
            cpe={cpe}
            children={children}
          ></YouTubeVideo>
        ))}
      </section>
    </>
  );
}
