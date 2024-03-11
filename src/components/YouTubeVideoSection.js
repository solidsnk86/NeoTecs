import { YouTubeVideo } from './YouTubeVideo';
import { VideoLikes } from './VideoLikes';
import { DescriptionViews } from './DescriptionViews';

export function YouTubeVideoSection() {
  const videos = [
    {
      video: 'brN50pXmZR8',
      cpe: 'Configuración Antena 📡 TP-Link 510 5 Ghz. Wifi Gratis - Gobierno San Luis 3.0 Desde 📱 Smartphone.',
      children:
        'Configuración de antena Tp-Link CPE 510 de 5Ghz desde smartphone. Configuración de puertos desde el router, fácil y práctico.',
    },
    {
      video: 'BRCsYxWUvpU',
      cpe: 'Configuración Antena 📡 TP-Link 510 con PC modo AP Router Cliente - WiFi gratuito de San Luis 3.0',
      children:
        'Configuración antena Tp.Link CPE 510 de 5 Ghz desde una PC. Configuración de puertos desde el panel de control de Windows.',
    },
    {
      video: 'Q9bFZgllF7k',
      cpe: 'Configuración Antena 📡 Ubiquiti - Wifi Gratis - Gobierno San Luis 3.0 - Desde 📲',
      children:
        'Configuración de antena Ubiquiti modelo Air Grid M2 HP de 2.4 Ghz desde smartphone, modo estación router. Guía rápida y fácil!',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center justify-center my-8 flex-wrap z-50">
      {videos.map(({ video, cpe, children }) => (
        <YouTubeVideo key={video} video={video} cpe={cpe}>
          <VideoLikes videoId={video} />
          <div className="bg-card-bg border border-gray-200 dark:border-zinc-800/50 rounded-lg p-2 my-2 z-20">
            <DescriptionViews videoId={video} />
            {children}
          </div>
        </YouTubeVideo>
      ))}
    </div>
  );
}
