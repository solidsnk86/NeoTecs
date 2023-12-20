import { useState, useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Nav';
import { Pre } from '../../components/Pre';

export default function CsvSheets() {
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJzdlPCNykOkJWbmkFcc3Iw0ZNSVwEnUDgrtCGr0pfDRfVNZmp_iTMaGZfU0z4njNWlFoJ3y3LwFPv/pub?output=csv',
                );
                const csv = await response.text();
                const parsedDrawings = csv
                    .split('\n')
                    .slice(1)
                    .map((row) => {
                        const [id, name, description, image, price] = row.split(',');
                        return { id, name, description, image, price: Number(price) };
                    });
                setDrawings(parsedDrawings);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-30" />
            <section className="xl:w-1/2 justify-center mx-auto text-text-primary p-10 space-y-5">
                <h1 className="flex justify-center mx-auto text-6xl text-transparent relative bottom-[2px] [-webkit-text-stroke-width:4px] [-webkit-text-stroke-color:var(--color-on-surface)]">
                    GerArt
                </h1>
                <article className="border border-zinc-200 dark:border-zinc-800 rounded-md text-center p-3">
                    <p>¡Bienvenidos a ésta sección de arte y dibujo!</p>
                    <p>
                        En esta ocasión podemos aprender a hacer una base de datos con
                        Google Sheets en un Excel de formato .csv y hacer un fetch en
                        nuestra aplicación de Reactjs con Nextjs y Api Routes.
                    </p>
                </article>
                {drawings.map((pic) => (
                    <article key={pic.id}>
                        <p className="text-2xl font-mono text-center py-2">{pic.id}</p>
                        <span className="bg-button-variant text-text-variant font-semibold font-mono p-1 w-fit float-right my-3 rounded-md">
                            Price: u$d {pic.price}
                        </span>
                        <img className="rounded-md" src={pic.image} alt="Drawing GerArt" />
                        <aside className="text-center font-semibold my-3">
                            <p>{pic.name}</p>
                            <p>{pic.description}</p>
                        </aside>
                    </article>
                ))}
            </section>
            <article className="xl:w-10/12 justify-center mx-auto text-text-primary">
                <h1 className="text-center text-2xl my-6 underline">
                    Bien para darle vida a ésto seguiremos los siguientes pasos
                </h1>
                <p className="text-center p-3">
                    Vamos a empezar por crear nuestra tabla en Excel con hojas de cálculo
                    de google.
                </p>
                <div className="images-client my-3">
                    <img
                        src="/images/google-sheets-4.png"
                        alt="Hojas de cálculo de Google."
                    />
                </div>
                <p className=" list-css-span">
                    Creamos una nueva hoja de cálculos, y la vamos a llenar con nuestros
                    datos, también vamos a delimitar nuestra tabla con:
                    <br />
                    <span>id, name, description, image, price.</span>
                    En la tabla podemos llenarla y agregar ítems en la columna para más
                    información, se puede dar una ubicación de algún link de imagen, por
                    ejemplo en mi caso he usado mis imagenes de un repositorio de github,
                    y para probar un link de google fotos.
                </p>
                <div className="images-client my-3">
                    <img
                        src="/images/google-sheets.png"
                        alt="Hojas de cálculo de Google."
                    />
                </div>
                <p className=" list-css-span">
                    Una vez creada nuestra tabla, podemos acceder a ella mediante la
                    opción de Google para compartir y publicar en la web. Vamos a la
                    opción de<span>Archivo</span>
                    {'=>'}
                    <span>Compartir</span>
                    {'=>'}
                    <span>Publicar en la Web</span>.
                </p>
                <div className="images-client my-3">
                    <img
                        src="/images/google-sheets-1.png"
                        alt="Hojas de cálculo de Google."
                    />
                </div>
                <p>A continuación nos aparecerá una ventana como ésta:</p>
                <div className="images-client my-3">
                    <img
                        src="/images/google-sheets-2.png"
                        alt="Hojas de cálculo de Google."
                    />
                </div>
                <p className=" list-css-span">
                    Seleccionamos valores separados por comas que es un archivo
                    <span>.csv</span>y le damos en<span>Publicar</span>.
                </p>
                <p className=" list-css-span">
                    Esto nos generará un link de nuestro archivo de google sheets en
                    formato<span>.csv</span>para poder requerirlo en nestra aplicación
                    web. A continuación veremos lo siguiente:
                </p>
                <div className="images-client my-3">
                    <img
                        src="/images/google-sheets-3.png"
                        alt="Hojas de cálculo de Google."
                    />
                </div>
                <p>
                    Ese link lo copiamos y pegamos en nuestro componente de Reactjs con
                    Nextjs y Api Routes.
                </p>
                <p className=" list-css-span">
                    En nuestro componente de pueden implementarlo como lo hago aquí en mi
                    web, en principio he usado<span>useState y useEffect</span>de la
                    siguiente manera:
                </p>
                <Pre lang="tsx">{
                    /*javascript */
                    `
                    import { useState, useEffect } from 'react'

                    export default function CsvSheets() {
                        const [drawings, setDrawings] = useSatate([])

                    useEffect(() => {
                        const fetchData = async () => {
                            try {
                                const response = await fetch(
                                    'TU_LINK_DE_GOOGLE_SHEETS',
                                );
                                const csv = await response.text();
                                const parsedDrawings = csv
                                    .split('\\n'\)
                                    .slice(1)
                                    .map((row) => {
                                        const [id, name, description, image, price] = row.split(',');
                                        return { id, name, description, image, price: Number(price) };
                                    });
                                setDrawings(parsedDrawings);
                            } catch (error) {
                                console.error('Error fetching data:', error);
                            }
                        };
                
                        fetchData();
                    }, []);

                    return (
                        <article>
                        {drawings.map((pic) => (
                            <article key={pic.id}>
                                <p className="text-2xl font-mono text-center py-2">{pic.id}</p>
                                <span>
                                    Price: u$d {pic.price}
                                </span>
                                <img className="rounded-md" src={pic.image} alt="Drawing GerArt" />
                                <aside className="text-center font-semibold my-3">
                                    <p>{pic.name}</p>
                                    <p>{pic.description}</p>
                                </aside>
                            </article>
                        ))}
                        </article>
                    )
                    `
                }</Pre>
                <p>
                    Explicando un poco el desglose del código, en el fetching de data
                    asíncrono con useEffect creamos una contante<span>response</span>que
                    va a esperar la respuesta de nuestro archivo de Google Sheets. Creamos
                    una constante<span>csv</span>que va esperar el archivo "CSV" y va a
                    leer el texto.
                </p>
                <pre lang='javascript' className='code-block text-zinc-100 p-1 my-2'>
                    const response = await fetch( 'TU_LINK_DE_GOOGLE_SHEETS');
                </pre>
                <pre lang='javascript' className='code-block text-zinc-100 p-1 my-2'>
                    const csv = await response.text()
                </pre>
                <p>
                    Para formatear el archivo y aplicarlo a nuestra app, tenemos que crear una constante:
                </p>
                <pre lang='javascript' className='code-block text-zinc-100 p-1 my-2'>
                    const parsedrawings = csv.slpit('\n').slice(1)
                </pre>
                <p className='list-css-span'>El<span>split('\n')</span>nos da el formato respetando el salto de línea.</p>
                <p className='list-css-span'>El<span>slice(1)</span>sirve para evitar mostrar la columna id de nuestro archivo CSV.</p>
            </article>
            <Footer />
        </>
    );
}
