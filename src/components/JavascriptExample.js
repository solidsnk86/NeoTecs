import { ExternalLinkIcon } from 'lucide-react';
import IndexTitle from './IndexTitle';
import Link from 'next/link';
import { SectionTitle } from './SectionTitle';
import { Pre } from './Pre';

export const JavascriptExample = () => {
  return (
    <article>
      <SectionTitle title="End-Point API" />
      <p>
        En esta sección, nos enfocaremos en la creación de nuestro endpoint API,
        y daremos un paso adicional para dotar a nuestra API de una
        funcionalidad extra: la capacidad de actualizarse dinámicamente desde
        Google Sheets. Esto significa que podremos realizar cambios en la
        información directamente desde una hoja de cálculo en Google Sheets, y
        estos cambios se reflejarán automáticamente en nuestra API.
      </p>
      <p>
        Así, al finalizar esta sección, tendremos un endpoint API robusto y
        flexible que se puede mantener al día de manera fácil y eficiente
        mediante la actualización desde Google Sheets. Esto mejorará la
        usabilidad y la accesibilidad de nuestra API, proporcionando una
        solución más completa y adaptada a las necesidades cambiantes del
        usuario.
      </p>
      <p>
        En el contexto de nuestro ejemplo, resulta altamente beneficioso que la
        actualización de las variaciones en los cambios de moneda a nivel
        mundial sea gestionada de esta manera. La utilidad radica en la
        capacidad de mantener nuestra información monetaria siempre actualizada
        y precisa. Imagina que las tasas de cambio fluctúan constantemente
        debido a eventos económicos o políticos. Gracias a la conexión dinámica
        con Google Sheets, podemos reflejar estas variaciones en tiempo real en
        nuestra API sin necesidad de intervenciones manuales. Esto no solo
        mejora la precisión de los datos proporcionados por nuestra API, sino
        que también brinda a los usuarios una experiencia más confiable y
        actualizada al consultar información sobre las tasas de cambio. Además,
        al delegar la gestión de las variaciones de las monedas a una
        herramienta como Google Sheets, facilitamos la tarea de aquellos
        encargados de mantener actualizada la información, permitiéndoles
        realizar ajustes de manera eficiente y sin la necesidad de conocimientos
        técnicos especializados.
      </p>
      <IndexTitle>Empezamos</IndexTitle>
      <article className="list-css-span">
        <p>
          Si estamos en un proyecto con librerías como React y usando de frame
          Nextjs, dentro de la carpeta<span>src</span>vamos a crear una carpeta
          llamada<span>api</span>y luego dentro de ella un archivo
          <span>currency.js</span>que lo vamos a programar después, primero
          vamos nuestra hoja de cálculos de
          <Link
            href="https://docs.google.com/spreadsheets/u/0/"
            className="mx-1 text-amber-600 link"
            target="_blank"
          >
            Google Sheets.
            <ExternalLinkIcon className="link-icon" />
          </Link>
        </p>
        <p>
          En esta hoja de cálculos, vamos hacer un ejemplo rápido. Ustedes lo
          pueden completar con más datos si quieren y necesitan.
        </p>
        <p>
          Seleccionamos hoja de cálculo en blanco, y podemos visualizar de la
          siuiente manera el documento
        </p>
        <figure>
          <div className="images-client">
            <img src="/images/excel-divisas.png" alt="Excel de divisas" />
          </div>
        </figure>
        <p>
          En la primera fila de nuestra hoja de cálculo en Google Sheets,
          asignaremos nombres específicos a cada columna, los cuales actuarán
          como nombres que serán referenciados desde nuestro código en
          JavaScript. Estos nombres proporcionarán una manera organizada y
          significativa de identificar y acceder a los datos correspondientes en
          la hoja de cálculo.
        </p>
        <p>
          En este caso he usado<span>currency, rates y update</span>los cuales
          en currency o divisa en español, irían los nombres en mayúsculas de
          las divisas abreviadas. En el ejemplo tenemos:
          <span>
            ARS - BRL - EUR - GBP - BTC - COP - JPY - CHP - UYP - BBP - PGP
          </span>
        </p>
        <p>
          Evidentemente esto se podría llenar con todas las divisas que faltan,
          pero se lo dejo a criterio de cada uno. Para buscar los precios
          actualizados ya sabemos dónde ir a buscar:
        </p>
        <figure>
          <div className="images-client">
            <img src="/images/dolar-hoy.png" alt="Excel de divisas" />
          </div>
        </figure>
        <p>
          En la columna<span>update</span>podemos poner la fecha de nuestra
          última actualización.
        </p>
        <p>
          Para exportar el documento en formato<span>.csv</span>seguimos estos
          pasos:
        </p>
        <p className=" list-css-span">
          Una vez creada nuestra tabla, podemos acceder a ella mediante la
          opción de Google para compartir y publicar en la web. Vamos a la
          opción de
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
          Una vez tenemos nuestro link, lo podemos pegar en una
          <span>const</span>como lo tengo en mi caso:
        </p>
      </article>
      <Pre lang="javascript">{
        /*javascript */ `
        export const currencyGoogleSheetsURL = "TU_LINK_DE_GOOGLE_SHEETS"
        `
      }</Pre>
      <IndexTitle>A programar</IndexTitle>
      <p className="list-css-span">
        Podríamos tener en nuestro archivo<span>currency.js</span>de la
        siguinete manera:
      </p>
      <Pre lang="javascript">{
        /*javascript */ `
        import { currencyGoogleSheetsURL } from '../../components/Constants';

        export default async function handlerCurrency(req, res) {
          'use-client';
          try {
            const fetchData = async () => {
              const response = await fetch(currencyGoogleSheetsURL);
        
              if (!response.ok) {
                throw new Error(\`Failed to fetch data. Status: \${response.status}\`);
              }
        
              const csvItem = await response.text();
              const parsedItems = csvItem
                .split('\\n'\)
                .slice(1)
                .map((row) => {
                  const [currency, rates, update] = row
                    .split(',')
                    .map((item) => item.trim());
                  return {
                    currency,
                    rates: parseFloat(rates),
                    update,
                  };
                });
              return parsedItems;
            };
        
            const currencyData = await fetchData();
            const lastUpdate = currencyData.length > 0 ? currencyData[0].update : '';
            const ratesObject = currencyData.reduce((acc, { currency, rates }) => {
              acc[currency] = rates;
              return acc;
            }, {});
        
            res.status(200).json({
              success: true,
              timestamp: new Date().toLocaleDateString('es-Es', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }),
              base: 'USD',
              update: lastUpdate,
              rates: ratesObject,
            });
          } catch (error) {
            console.error('Error fetching and processing currency data:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
          }
        }
        
        `
      }</Pre>
      <p>
        De esta forma ya tenemos lista nuestra API endpoint para llamarla y
        trabajar con ella.
      </p>
      <p className="p2p">To be continued...</p>
    </article>
  );
};

export default JavascriptExample;
