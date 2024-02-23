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
        <figure>
          <div className="images-client my-3">
            <img
              src="/images/google-sheets-1.png"
              alt="Hojas de cálculo de Google."
            />
          </div>
        </figure>
        <p>A continuación nos aparecerá una ventana como ésta:</p>
        <figure>
          <div className="images-client my-3">
            <img
              src="/images/google-sheets-2.png"
              alt="Hojas de cálculo de Google."
            />
          </div>
        </figure>
        <p className=" list-css-span">
          Seleccionamos valores separados por comas que es un archivo
          <span>.csv</span>y le damos en<span>Publicar</span>.
        </p>
        <p className=" list-css-span">
          Esto nos generará un link con nuestro archivo de google sheets en
          formato<span>.csv</span>para poder requerirlo en nestra aplicación
          web. A continuación veremos lo siguiente:
        </p>
        <figure>
          <div className="images-client my-3">
            <img
              src="/images/google-sheets-3.png"
              alt="Hojas de cálculo de Google."
            />
          </div>
        </figure>
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
        Vamos a ver las siguientes funciones en nuestro archivo
        <span>currency.js</span>de la siguinete manera:
      </p>
      <Pre lang="javascript">{
        /*javascript */ `
        // 1. En primer lugar la función que obtiene la información asincrónica
        
        import { currencyGoogleSheetsURL } from '@/components/Constants'

        const dataFetch = async () => {
          const response = await fetch(currencyGoogleSheetsURL)
          const csvData = await response.text()

        // 2. Podemos manejar si recibimos respuesta de manera correcta
          if (!response.ok) {
            throw new Error(\`No es posible obtener los datos, \${response.status}\`)
          }
        
        // 3. Manejamos el archivo en formato csv de la siguinte manera
        const parsedData = csvData
        .split('\\n'\)
        .slice(1) 
        .map((row) => {
          const items = [currency, rates, update] = row.split(',')
          .map((items) => items.trim()) 
          return {
          return {
            currency, 
            rates: parsedFloat(rates), 
            update
          }
          return parsedData
        })
        }
        `
      }</Pre>
      <p>Desglosamos un poquito el código:</p>
      <ol className="list-css-span">
        <li>
          La función<span>dataFetch</span>es una función asíncrona que espera
          una respuesta.
        </li>
        <li>
          La constante<span>response</span>siempre que sea asíncrona, espera una
          respuesta como promesa, por lo que debe incluir un<span>await</span>.
        </li>
        <li>
          La constante<span>csvData</span>tambien debe incluir un
          <span>await</span>y la respuesta la convertimos en texto con la
          función<span>text()</span>.
        </li>
        <li>
          Manejamos la respuesta de los datos, si la respuesta no es correcta
          <span>if (!response.ok)</span>arrojamos un error
          <span>throw new Error()</span>
        </li>
        <li>
          La constante<span>parsedData</span>le asigna el valor de csvData, que
          se supone que es una cadena que contiene datos en formato CSV. Para
          poder manipularlo de la siguiente manera:
          <ul>
            <li>
              <span>.split('\n')</span>: Utiliza el método split para dividir la
              cadena en un array de strings, utilizando el salto de línea ('\n')
              como separador. Esto crea un array donde cada elemento es una
              línea del CSV.
            </li>
            <li>
              <span>.slice(1)</span>: Utiliza el método slice para eliminar la
              primera línea del array (índice 0), que generalmente es la
              cabecera del CSV.
            </li>
            <li>
              <span>
                .map((row) {'=>'} {'{...}'})
              </span>
              : Utiliza el método map para iterar sobre cada línea del CSV y
              realizar operaciones en cada una.
            </li>
            <li>
              La constante
              <span>items = [currency, rates, update] = row.split(',')</span>:
              Divide cada línea en elementos utilizando la coma como separador y
              asigna cada elemento a las variables currency, rates, y update. La
              notación<span>[currency, rates, update]</span>crea un array y
              asigna cada elemento a las variables correspondientes.
            </li>
            <li>
              <span>.map((item) {'=>'} item.trim())</span>: Para cada elemento
              en el array creado en el paso anterior, utiliza map nuevamente
              para eliminar los espacios en blanco al principio y al final de
              cada elemento mediante el método<span>trim()</span>.
            </li>
            <li>
              <span>return {'{ currency, rates: parsedFloat(), update }'}</span>
              : Retorna un objeto con las propiedades currency, rates, y update,
              utilizando los valores de las variables currency, rates, y update
              que se asignaron anteriormente, y al valor rates se convierte de
              un valor decimal a un valor flotante con la función
              <span>parsedFloat()</span>.
            </li>
            <li>
              Por último devolvemos los datos analizados con un
              <span>return parsedData</span>
            </li>
          </ul>
        </li>
      </ol>
      <p>
        Bien hasta aquí tenemos la función para traer la información de nestra
        tabla de datos en Google Sheets. Normalmente un archivo para crear un
        endpoint API empieza de la siguiente manera:
      </p>
      <Pre lang="javascript">{
        /*javascript */ `
        export default async function apiExample(req, res) {
          try {
            res.status(200).json({
              succes: true,
              timestamp: new Date().toLocaleDateString('es-Es', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              }),
              base: 'USD',
              rates: {
                ARS: '857.39',
                EUR: '0.93',
                GBP: '0.79',
                BRL: '4.95',
                COP: '3939',
                JPY: '149',
                BTC: '0.000002',
                CHP: '970',
                UYP: '39.06',
                BBP: '6.9',
                PGP: '7280',
                AUD: '1.29',
                CAD: '1.25',
                INR: '74.93',
                MXN: '20.27',
                NZD: '1.37',
                SGD: '1.34',
                ZAR: '15.46',
                CNY: '6.43',
                HKD: '7.78',
                KRW: '1177.50',
                TRY: '9.35',
                IDR: '14220',
                RUB: '75.85',
                SEK: '8.60',
                CHF: '0.91',
                NOK: '9.15',
              },
            });
          } catch (error) {
            console.error('Error en el fetching y procesamientos de los datos:', error);
            res.status(500).json({ success: false, error: 'Error interno del Servidor' });
          }
        }        
        `
      }</Pre>
      <p className="list-css-span">
        Esto nos permite crear un API endpoint con el siguiente<span>JSON</span>
        , pueden chequear la API
        <Link
          href="/api/api-example"
          className="mx-1 text-amber-500"
          target="_blank"
        >
          aquí
        </Link>
        , veremos el siguiente resultado:
      </p>
      <figure>
        <div className="images-client my-3">
          <img src="/images/api-endpoint.png" alt="Api end point." />
        </div>
      </figure>
      <p className="list-css-span">
        Listo esta es la forma más rápida de crear una API, podríamos hacer un
        <span>fetch</span>de estos datos en cualquier componente que creemos
        para la obtención de estos datos, pero dijimos que íbamos hacerla un
        poco más compleja para que sea más eficiente la forma de actualizar los
        datos sin estar sentados detrás de nuestro editor de código favorito 😄!
      </p>
      <p className="list-css-span">
        Bien, vamos a hacer nuestro archivo<span>currency.js</span> más
        completo, manejando los arrays de manera eficiente. ¿Cómo lo hacemos?
        Para ello, utilizaremos nuestro acumulador favorito que es la función
        <span>.reduce</span>, que nos permite acumular los elementos de un array
        y convertirlo en un objeto:
      </p>
      <Pre lang="javascript">{
        /*javascript */ `
        const currencyData = await fethData()
        const lastUpdate = currencyData.lenght > 0 ? currencyData[0].update : ''
        const ratesObject = currencyData.reduce((acc, { currency, rates }) => {
          acc[currency] = rates;
          return acc;
        }, {});
        `
      }</Pre>
      <p>Desglosamos:</p>
      <ol className='list-css-span'>
        <li>
          la constante<span>currencyData</span>:
        </li>
      </ol>
    </article>
  );
};

export default JavascriptExample;
