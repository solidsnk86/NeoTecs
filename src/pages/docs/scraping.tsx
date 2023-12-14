import React, { useState } from 'react';
import axios from 'axios';
import { ArrowLeftIcon } from 'lucide-react';
import { Pre } from '../../components/Pre';
import Link from 'next/link';

export default function Scraping() {
    const [titles, setTitles] = useState([]);
    const [paragraphs, setParagrhaps] = useState([]);
    const [items, setItems] = useState([]);

    const handleScrape = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/scrape');
            setTitles(response.data.titles);
            setParagrhaps(response.data.paragraphs);
            setItems(response.data.list_items);
        } catch (error) {
            console.error('Error al obtener datos del servidor:', error);
        }
    };

    return (
        <main className=" text-text-primary flex flex-col justify-center m-auto p-10 xl:w-10/12">
            <ArrowLeftIcon
                className="text-text-primary cursor-pointer hover:translate-x-[-2px] transition-all xl:left-6 xl:top-4 top-6 left-2 fixed"
                onClick={() => window.open('/docs/program')}
            />
            <h1 className="flex justify-center mx-auto text-5xl underline mb-3">
                Web Scraping
            </h1>
            <p>
                Pronto voy a terminar bien esta sección, si desean ir viendo algo pueden
                seguir mi proyecto en github:
            </p>
            <Link
                href="https://github.com/solidsnk86/neo-scraper/blob/master/README.md"
                className="mx-1 text-text-strong font-bold underline"
            >neo-scraper</Link>
            <p className="border-l-4 border-sky-400/50 pl-4 m-3 font-semibold">
                En este segmento, exploraremos el fascinante mundo del web scraping, una
                técnica que nos permite extraer información de páginas web. En este
                ejemplo, llevaré a cabo el scraping en mi propio portafolio web. Es
                importante utilizar esta técnica con responsabilidad y respeto a las
                políticas de uso de los sitios web objetivo.
            </p>
            <article className=" space-y-2">
                <p>
                    Bien adentrándonos en esta herramienta, para poder lograrlo vamos a
                    seguir los siguientes pasos:
                </p>
                <ol className=" list-decimal space-y-1">
                    <li className="list-css-span">
                        Primero vamos a crear nuestra aplicación Python, nuestro archivo se
                        va a llamar<span>app.py</span>,vamos a instalar las dependencias que
                        vamos a utilizar:
                    </li>
                    <ul>
                        <li>Flask</li>
                        <pre lang="bash" className=" bg-[#1E1E1E] p-2 text-zinc-100">
                            pip install Flask
                        </pre>
                        <li className="list-disc">Flask CORS</li>
                        <pre lang="bash" className=" bg-[#1E1E1E] p-2 text-zinc-100">
                            pip install flask-cors
                        </pre>
                        <li className="list-disc">Requests</li>
                        <pre lang="bash" className=" bg-[#1E1E1E] p-2 text-zinc-100">
                            pip install requests
                        </pre>
                        <li className="list-disc">Beautifulsoup4</li>
                        <pre lang="bash" className=" bg-[#1E1E1E] p-2 text-zinc-100">
                            pip install beautifulsoup4
                        </pre>
                    </ul>
                    <li>Una vez instalado todo vamos a escribir el siguiente código:</li>
                    <Pre lang="python">{
            /* python*/ `
                    from flask import Flask, jsonify
                    from flask_cors import CORS
                    import requests
                    from bs4 import BeautifulSoup
                    
                    app = Flask(__name__)
                    CORS(app)
                    
                    @app.route('/api/scrape', methods=['GET'])
                    def scrape():
                        try:
                            url = 'https://solidsnk86.netlify.app'
                            response = requests.get(url)
                            soup = BeautifulSoup(response.text, 'html.parser')
                    
                            titles = [h1.text for h1 in soup.find_all('h1')]
                            paragraphs = [paragraphs.text for paragraphs in soup.find_all('p')]
                            list_items = [li.text for li in soup.find_all('li')]
                    
                            return jsonify({'titles': titles , 'paragraphs': paragraphs , 'list_items': list_items })
                        except Exception as e:
                            return jsonify({'error': str(e)})
                    
                    if __name__ == '__main__':
                        app.run(debug=True)
                    `
                    }</Pre>
                </ol>
                <hr className="border-zinc-800 my-6" />
                <p className="list-css-span">
                    Aquí presentamos los resultados obtenidos mediante web scraping. En
                    este caso, hemos instruido a nuestra aplicación Python para recopilar
                    todos los elementos de tipo<span>h1</span>
                    <b>encabezados</b> y los elementos de tipo<span>p</span>
                    <b>párrafos</b>:
                </p>
            </article>
            <button
                className="justify-center mx-auto bg-button-variant text-text-variant font-semibold rounded p-2 w-fit my-3 hover:scale-105 shadow-gray-700"
                onClick={handleScrape}
            >
                Raspar!!
            </button>
            {titles.map((title, index) => (
                <article className="text-zinc-100 space-y-3 border-zinc-300 border-[1px] shadow-md rounded shadow-outline mt-6 p-6 dark:!shadow dark:border-zinc-800 overflow-x-auto">
                    <h1 key={index} className="text-sky-500 underline text-lg">
                        {title}
                    </h1>
                    <p className="text-lime-400 p-3 text-sm">{paragraphs}</p>
                    <li className="text-orange-400">{items}</li>
                </article>
            ))}
        </main>
    );
}
