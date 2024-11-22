import { useState } from 'react';

export default function Scraper() {
  const [disabled, setDisabled] = useState(false);
  const [scraping, setScraping] = useState({
    titles: [],
    paragraphs: [],
    items: [],
    inputs: [],
    images: [],
    links: [],
  });

  const handleScrape = async () => {
    try {
      const response = await fetch(
        'https://www.pythonanywhere.com/user/SolidSnk86/files/home/SolidSnk86/scrape/',
        {
          method: 'POST',
        },
      );
      setScraping(response.data);
      setDisabled(true);
    } catch (error) {
      console.error('Error al realizar el raspado:', error);
    }
  };

  return (
    <>
      <div className="justify-center mx-auto my-6">
        <button
          onClick={handleScrape}
          disabled={disabled}
          className="border p-3 bg-zinc-300 dark:bg-zinc-800/95 dark:border-zinc-600/75 cursor-not-allowed rounded dark:border-zinc-800 border-zinc-00/10 hover:opacity-[.6] transition-all"
        >
          Hacer Scraping
        </button>
      </div>
      {Object.keys(scraping.titles).map((value) => (
        <article
          key={value}
          className="text-zinc-100 space-y-3 border-zinc-200 border-[1px] shadow-md rounded shadow-zinc-200 mt-6 p-6 dark:!shadow dark:border-zinc-800 overflow-x-auto"
        >
          <h1 className="text-[tomato] underline text-lg">
            {scraping.titles[value]}
          </h1>
          <p className="text-text-primary p-3 text-sm">
            {scraping.paragraphs[value]}
          </p>
          <ul className="text-zinc-500">
            {Array.isArray(scraping.images[value]) &&
              scraping.images[value].map((image) => (
                <li key={image.src}>
                  <img src={image.src} alt={image.alt} />
                </li>
              ))}
          </ul>
          <div>
            <p>Links:</p>
            <ul>
              {Array.isArray(scraping.links[value]) &&
                scraping.links[value].map((link) => (
                  <li key={link.src}>
                    <p>Alt: {link.alt}</p>
                    <p>Src: {link.src}</p>
                  </li>
                ))}
            </ul>
          </div>
        </article>
      ))}
    </>
  );
}
