import { useState, useEffect } from 'react';
import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { GoogleSheetsExample } from '../../components/GoogleSheetsExample';
import { Footer } from '../../components/Footer';
import { CalendarClockIcon } from 'lucide-react';

export default function CsvSheets() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vTZrR78S4ElPf8QchbHMYPLBrirCqH73WLpT4EKgnAK7sJW54AKII92O_QxE1N6zdXLUXlp9jSkIBy8/pub?output=csv',
        );
        const csv = await response.text();
        const parsedItems = csv
          .split('\n')
          .slice(1)
          .map((row) => {
            const [id, name, description, image, price, posted] =
              row.split(',');
            return {
              id,
              name,
              description,
              image,
              price: Number(price),
              posted,
            };
          });
        setItems(parsedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const SheetsTitle = ({ Tag = 'h1', children }) => {
    return <Tag className="text-text-primary font-mono">{children}</Tag>;
  };
  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-30" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <LectureNav />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <SheetsTitle>Base de Datos con Google Sheets</SheetsTitle>
          <hr className="border-text-primary" />
          <section className="xl:w-1/2 justify-center mx-auto text-text-primary p-10 space-y-5">
            <h1 className="mt-10 flex justify-center mx-auto text-6xl text-transparent relative bottom-[2px] [-webkit-text-stroke-width:4px] [-webkit-text-stroke-color:var(--color-on-surface)]">
              GerArt
            </h1>
            <article className="border border-zinc-200 dark:border-zinc-800 rounded-md text-center p-3">
              <p>¡Bienvenidos a ésta sección de arte y dibujo!</p>
              <p>
                En esta ocasión, aprenderemos cómo crear una base de datos
                utilizando Google Sheets en un formato de Excel (.csv) y cómo
                realizar una solicitud de datos (fetch) en nuestra aplicación de
                ReactJS con Next.js y Api Routes.
              </p>
            </article>
            {items.map((pic) => (
              <article key={pic.id} className="mt-3">
                <p className="text-2xl font-mono text-center py-2">{pic.id}</p>
                <span className="bg-button-variant text-text-variant font-semibold font-mono p-1 w-fit float-right my-3 rounded-md">
                  Price: U$D {pic.price}
                </span>
                <img
                  className="rounded-md"
                  src={pic.image}
                  alt="Items Google Sheets"
                />
                <aside className="font-light my-3">
                  <span>Publicado el {pic.posted}</span>
                  <CalendarClockIcon className="w-4 mx-1 inline mb-1" />
                  <p className="bg-red-500 p-1 w-fit font-semibold rounded-md">
                    {pic.name}
                  </p>
                  <p>{pic.description}</p>
                </aside>
              </article>
            ))}
          </section>
          <hr className="border-[1px] dark:border-zinc-800 border-zinc-300" />
          <GoogleSheetsExample />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}
