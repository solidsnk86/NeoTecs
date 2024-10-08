import { Pre } from './Pre';
import LinkButton from './LinkButton';
import { GoogleSheetsExample2 } from './GoogleSheetsExample2';
import { SectionTitle } from './SectionTitle';

export const GoogleSheetsExample = () => {
  return (
    <article className="justify-center mx-auto text-text-primary article-sheets">
      <h1 className="text-center text-text-primary text-2xl my-14">
        Bien para darle vida a ésto seguiremos los siguientes pasos
      </h1>
      <p>
        Vamos a empezar por crear nuestra tabla en Excel con hojas de cálculo de
        google.
      </p>
      <SectionTitle title="Google Sheets" />
      <p className="list-css-span">
        Creamos una nueva hoja de cálculo y la llenamos con nuestros datos.
        También vamos a delimitar nuestra tabla con:
        <br />
        <span>id, name, description, image, price.</span>
        Podemos completar la tabla y agregar ítems en las columnas para obtener
        más información. Puedes proporcionar una ubicación de algún enlace de
        imagen; por ejemplo, en mi caso, he utilizado imágenes de un repositorio
        de GitHub y, para probar, un enlace de Google Fotos.
      </p>

      <div className="images-client my-3">
        <img
          src="/images/google-sheets.png"
          alt="Hojas de cálculo de Google."
        />
      </div>
      <SectionTitle title="Publicar en la web" />
      <p className=" list-css-span">
        Una vez creada nuestra tabla, podemos acceder a ella mediante la opción
        de Google para compartir y publicar en la web. Vamos a la opción de
        <span>Archivo</span>
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
        Esto nos generará un link con nuestro archivo de google sheets en
        formato<span>.csv</span>para poder requerirlo en nestra aplicación web.
        A continuación veremos lo siguiente:
      </p>
      <div className="images-client my-3">
        <img
          src="/images/google-sheets-3.png"
          alt="Hojas de cálculo de Google."
        />
      </div>
      <SectionTitle title="API Routes" />
      <p>
        Copiamos y pegamos el link en nuestro componente de Reactjs con Nextjs y
        Api Routes.
      </p>
      <p className="list-css-span">
        En nuestro componente vamos a escribir como lo hago aquí, en principio
        he usado<span>useState y useEffect</span>de la siguiente manera:
      </p>
      <Pre
        lang="tsx"
        className="overflow-hidden overflow-x-auto code-block text-white"
      >{`
        import { useState, useEffect } from 'react'

        export default function CsvSheets() {
          const [items, setItems] = useSatate([])

        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch(
                'TU_LINK_DE_GOOGLE_SHEETS',
              );
              const csv = await response.text();
              const parsedItems = csv
              .split('\\n'\)
              .slice(1)
              .map((row) => {
                  const [id, name, description, image, price] = row.split(',');
                  return { id, name, description, image, price: Number(price) };
              });
              setItems(parsedItems)
                } catch (error) {
                    console.error('Error fetching data:', error);
              }
            };
            
            fetchData();
            }, []);

            return (
              <div>
                {items.map((pic) => (
                <article key={pic.id}>
                  <p className="text-2xl font-mono text-center py-2">{pic.id}</p>
                  <span>
                    Price: U$D {pic.price}
                  </span>
                    <img className="rounded-md" src={pic.image} alt="Drawing GerArt" />
                 <aside className="text-center font-semibold my-3">
                    <p>{pic.name}</p>
                    <p>{pic.description}</p>
                 </aside>
                </article>
                ))}
              </div>
            )
          }
      `}</Pre>
      <p className="list-css-span">
        Explicando un poco el desglose del código, en la obtención asíncrona de
        datos mediante el uso de useEffect, creamos una constante
        <span>response</span> que espera la respuesta de nuestro archivo de
        Google Sheets. Además, creamos una constante<span>csv</span>que espera
        el archivo en formato "CSV" y extrae su texto.
      </p>
      <pre lang="javascript" className="code-block text-zinc-100 p-1 my-2">
        const response = await fetch( 'TU_LINK_DE_GOOGLE_SHEETS');
      </pre>
      <pre lang="javascript" className="code-block text-zinc-100 p-1 my-2">
        const csv = await response.text()
      </pre>
      <p>
        Para formatear el archivo y aplicarlo a nuestra app, vamos a crear una
        constante:
      </p>
      <pre lang="javascript" className="code-block text-zinc-100 p-1 my-2">
        const parseItems = csv.slpit('\n').slice(1)
      </pre>
      <p className="list-css-span">
        El<span>split('\n')</span>nos da el formato respetando y separando cada
        texto por un salto de línea.
      </p>
      <p className="list-css-span">
        El<span>slice(1)</span>sirve para evitar mostrar la fila: id, nombre,
        descripción, etcétera, de nuestro archivo CSV
      </p>
      <p>
        Se realiza una iteración sobre cada artículo para crear un objeto con
        las propiedades necesarias.
      </p>
      <p className="list-css-span">
        Posteriormente, se utiliza un <span>.map</span> para recorrer cada
        artículo y mostrarlo en pantalla.
      </p>
      <GoogleSheetsExample2 />
      <p>
        ¡Gracias por acompañarnos hasta el final de este artículo! Hemos
        concluido, y espero que puedan aplicar lo aprendido según sus
        necesidades.
      </p>
      <hr className="border-[1px] border-zinc-300 dark:border-zinc-800" />
      <p>
        ¡Si les gusta el diseño y efecto de las cajas que contienen los dibujos!
        Utilizo{' '}
        <b className="decoration-wavy underline underline-offset-2 decoration-red-500">
          Atropos js
        </b>{' '}
        la cuál he modificado a mi gusto el estilo de las mismas.
      </p>
      <p className="inline">
        Aquí les dejo el enlace para que puedan leer su documentación y
        utilizarlo, es de código abierto y tiene otros asombrosos efectos de
        cartas 3d las cuales utilizo en ésta web;
      </p>
      <LinkButton
        url="https://atroposjs.com/docs"
        color="tomato"
        iconName="ArrowUpRight"
      >
        Atropos js
      </LinkButton>
    </article>
  );
};

export default GoogleSheetsExample;
