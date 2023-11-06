import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import { OpenInNew } from '@mui/icons-material';
import CurrencyConverter from '../../components/CurrencyComponent';

export default function JavaScript() {
  const JavascriptTitle = ({ Tag = 'h1', children }) => {
    return <Tag className="text-slate-100 font-mono">{children}</Tag>;
  };
  const Header = ({ Tag = 'h2', children }) => {
    return <Tag className="text-slate-100">{children}</Tag>;
  };

  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent w-full h-12 z-30" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <LectureNav />
        <div className="w-full max-w-none prose px-4 md:px-8 text-slate-100">
          <NavSwitch inline />
          <JavascriptTitle>Javascript</JavascriptTitle>
          <hr />
          <Header>Índice</Header>
          <ol className="indice">
            <li>
              <a href="#introduccion">Introducción</a>
            </li>
            <li>
              <a href="#javascript">JavaScript</a>
            </li>
            <li>
              <a href="#eventos">Eventos</a>
            </li>
            <li>
              <a href="#variables">Variables</a>
            </li>
            <li>
              <a href="#queryselector">querySelector</a>
            </li>
            <li>
              <a href="#dom">Manipulación del DOM</a>
              <ul>
                <li>
                  <a href="#consola">Consola de JavaScript</a>
                </li>
                <li>
                  <a href="#funciones-de-flecha">Funciones de flecha</a>
                </li>
                <li>
                  <a href="#todo-list">
                    Lista de tareas pendientes (TODO List)
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#intervalos">Intervalos</a>
            </li>
            <li>
              <a href="#local">Almacenamiento local</a>
            </li>
            <li>
              <a href="#apis">APIs</a>
            </li>
            <li>
              <a href="#objetos">Objetos en JavaScript</a>
            </li>
            <li>
              <a href="#cambio-de-moneda">Cambio de moneda</a>
            </li>
            <li>
              <a href="#cambio-divisas">Cambio de divisas (ejemplo)</a>
            </li>
          </ol>
          <span id="introduccion" />
          <SectionTitle title="Introducción a Javascript" />
          <ul>
            <li>
              Hasta ahora, hemos discutido cómo construir páginas web simples
              utilizando HTML y CSS, y cómo utilizar Git y GitHub para realizar
              un seguimiento de los cambios en nuestro código y colaborar con
              otros. También nos hemos familiarizado con el lenguaje de
              programación Python, hemos comenzado a utilizar Django para crear
              aplicaciones web y hemos aprendido a utilizar los modelos de
              Django para almacenar información en nuestros sitios.
            </li>
            <li>
              Hoy, introduciremos un nuevo lenguaje de programación:
              <b className="px-1 py-[2px] bg-amber-400 mx-2 text-md text-black">
                Js
              </b>
            </li>
          </ul>
          <Header>Javascript</Header>
          <p>Comencemos por volver a examinar un diagrama:</p>
          <div className="images-client">
            <img
              src="/images/client-server-1-removebg-preview.png"
              alt="Diagrama"
            />
          </div>
          <p>
            Recuerda que en la mayoría de las interacciones en línea, tenemos un
            cliente/usuario que envía una solicitud HTTP a un servidor, que
            devuelve una respuesta HTTP. Todo el código Python que hemos escrito
            hasta ahora utilizando Django se ha ejecutado en un servidor.
            JavaScript nos permitirá ejecutar código en el lado del cliente, lo
            que significa que no es necesario interactuar con el servidor
            mientras se está ejecutando, lo que permite que nuestros sitios web
            sean mucho más interactivos.
          </p>
          <p>
            Para agregar algo de JavaScript a nuestra página, podemos agregar un
            par de etiquetas
            <span className="text-[#43A18E] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
              {'<script>'}
            </span>
            en algún lugar de nuestra página HTML. Usamos las etiquetas
            <span className="text-[#43A18E] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
              {'<script>'}
            </span>
            para indicar al navegador que cualquier cosa que escribamos entre
            las dos etiquetas es código JavaScript que deseamos ejecutar cuando
            un usuario visita nuestro sitio. Nuestro primer programa podría
            verse algo así:
          </p>
          <Pre lang="javascript">{
            /*javascript */ `
                alert('Hola, terrícolas!');
                `
          }</Pre>
          <p>
            La función alert en JavaScript muestra un mensaje al usuario que
            luego pueden cerrar. Para mostrar dónde encajaría esto en un
            documento HTML real, aquí tienes un ejemplo de una página sencilla
            con algo de JavaScript:
          </p>
          <Pre lang="javascript">{
            /*javascript */ `
              <!DOCTYPE html>
              <html>
                <head>
                  <title>Mi Página con JavaScript</title>
                </head>
                <body>
                  <h1>Bienvenido a mi página</h1>
                  <p>Haz clic en el botón para ver un mensaje de alerta.</p>
              
                  <button onclick="showAlert()">Mostrar Alerta</button>
              
                  <script>
                    // Función para mostrar una alerta
                    function showAlert() {
                      alert("¡Hola, esta es una alerta de JavaScript!");
                    }
                  </script>
                </body>
              </html>
                `
          }</Pre>
          <div className="images-client">
            <img src="/images/javascript-alert.png" alt="alert" />
          </div>
          <span id="eventos" />
          <SectionTitle title="Eventos" />
          <article>
            <p>
              Una característica de JavaScript que lo hace útil para la
              programación web es que admite la
              <Link
                href="https://medium.com/@vsvaibhav2016/introduction-to-event-driven-programming-28161b79c223"
                className="mx-1 text-amber-600"
              >
                Programación Orientada a Eventos
                <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
              </Link>
              .
            </p>
            <p>
              La Programación Orientada a Eventos es un paradigma de
              programación que se centra en la detección de eventos y las
              acciones que deben realizarse cuando se detecta un evento.
            </p>
            <p>
              Un evento puede ser casi cualquier cosa, como hacer clic en un
              botón, mover el cursor, escribir una respuesta o cargar una
              página. Casi todo lo que un usuario hace para interactuar con una
              página web se puede considerar como un evento. En JavaScript,
              utilizamos
              <Link
                href="https://www.w3schools.com/js/js_htmldom_eventlistener.asp"
                className="mx-1 text-amber-600"
              >
                Escuchadores de Eventos
                <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
              </Link>
              que esperan a que ocurran ciertos eventos y luego ejecutan algún
              código.
            </p>

            <p>
              Comencemos por convertir nuestro JavaScript anterior en una
              <Link
                href="https://www.w3schools.com/js/js_functions.asp"
                className="mx-1 text-amber-600"
              >
                función
                <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
              </Link>
              llamada "hola":
            </p>
          </article>
          <Pre lang="javascript">{
            /*javascript */ `
                function hola() {
                    alert('Hola, Mundanos!')
                }
                `
          }</Pre>
          <p>
            Ahora, trabajemos en ejecutar esta función cada vez que se haga clic
            en un botón. Para hacerlo, crearemos un botón HTML en nuestra página
            con un atributo onclick, que proporciona al navegador instrucciones
            sobre lo que debe suceder cuando se hace clic en el botón:
          </p>
          <Pre lang="html">{
            /*html */ `
                <button onclick="hola()">Click Here</button>
                `
          }</Pre>
          <span id="variables" />
          <SectionTitle title="Variables" />
          <article>
            <p>
              JavaScript es un lenguaje de programación, al igual que Python, C
              o cualquier otro lenguaje con el que hayas trabajado antes, lo que
              significa que tiene muchas de las mismas características que otros
              lenguajes, incluyendo variables. Hay tres palabras clave que
              podemos usar para asignar valores en JavaScript:
            </p>
            <ul className="list-css-span">
              <li>
                <span>var</span>: se utiliza para definir una variable
                globalmente.
              </li>
            </ul>
            <Pre lang="javascript">{
              /*javascript */ `
                var age = 20;
                `
            }</Pre>
            <ul className="list-css-span">
              <li>
                <span>const</span>: se utiliza para definir un valor que no
                cambiará.
              </li>
            </ul>
            <Pre lang="javascript">{
              /*javascript */ `
                const PI = 3.14;
                `
            }</Pre>
            <ul className="list-css-span">
              <li>
                <span>let</span>: se utiliza para definir una variable que está
                limitada en alcance al bloque actual, como una función o un
                bucle.
              </li>
            </ul>
            <Pre lang="javascript">{
              /*javascript */ `
                let counter = 1;
                `
            }</Pre>
            <p>
              Para un ejemplo de cómo podemos usar una variable, echemos un
              vistazo a una página que lleva un contador:
            </p>
            <Pre lang="javascript">{
              /*html */ `
                <!DOCTYPE html>
                <html>
                  <head>
                    <title>Contador en JavaScript</title>
                  </head>
                  <body>
                    <h1>Contador</h1>
                    <p id="counter">0</p>
                    <button onclick="incrementCounter(alert(counterValue))">Incrementar</button>
                
                    <script>
                      // Variable para almacenar el contador
                      let counterValue = 0;
                
                      // Función para incrementar el contador
                      function incrementCounter() {
                        counterValue++;
                        document.getElementById("counter").innerText = counterValue;
                      }
                    </script>
                  </body>
                </html>
                
                `
            }</Pre>
            <div className="images-client">
              <img src="/images/javascript-alert-count.png" alt="alert-count" />
            </div>
          </article>
          <span id="queryselector" />
          <SectionTitle title="querySelector" />
          <article>
            <p>
              Además de permitirnos mostrar mensajes a través de alertas,
              JavaScript también nos permite cambiar elementos en la página.
              Para hacer esto, primero debemos introducir una función llamada
              document.querySelector. Esta función busca y devuelve elementos
              del DOM. Por ejemplo, la utilizaríamos de la siguiente manera:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                const element = document.querySelector(selector);

                let heading = document.querySelector('h1');
                `
            }</Pre>
            <p>
              para extraer un encabezado. Luego, para manipular el elemento que
              hemos encontrado recientemente, podemos cambiar su propiedad
              innerHTML:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                // Encuentra el primer encabezado h1 en el DOM
                const headingElement = document.querySelector('h1');
                // Cambia el contenido del encabezado
                headingElement.innerHTML = 'Nuevo texto para el encabezado'; 
                `
            }</Pre>
            <p>
              Al igual que en Python, también podemos aprovechar las
              <Link
                href="https://www.w3schools.com/js/js_if_else.asp"
                className="text-amber-600 mx-1"
              >
                condiciones
                <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
              </Link>
              en JavaScript. Por ejemplo, supongamos que en lugar de cambiar
              siempre nuestro encabezado a "Goodbye!", queremos alternar entre
              <span className="text-[#43A18E] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                "Hola!"
              </span>
              y
              <span className="text-[#43A18E] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                "Adios!"
              </span>
              . Nuestra página podría verse algo así. Ten en cuenta que en
              JavaScript utilizamos
              <span className="text-[#95D1F1] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                ===
              </span>
              como una comparación más estricta entre dos elementos que también
              verifica que los objetos sean del mismo tipo. Por lo general, es
              recomendable usar
              <span className="text-[#95D1F1] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                ===
              </span>
              siempre que sea posible.
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <title>Count</title>
                        <script>
                            function hello() {
                                const header = document.querySelector('h1');
                                if (header.innerHTML === 'Hello!') {
                                    header.innerHTML = 'Goodbye!';
                                }
                                else {
                                    header.innerHTML = 'Hello!';
                                }
                            }
                        </script>
                    </head>
                    <body>
                        <h1>Hello!</h1>
                        <button onclick="hello()">Click Here</button>
                    </body>
                </html>
                `
            }</Pre>
            <div className="images-client">
              <img src="/images/toggle.gif" alt="javascript-query" />
            </div>
          </article>
          <span id="dom" />
          <SectionTitle title="Manipuación del DOM" />
          <article>
            <p>
              Utilicemos esta idea de manipulación del DOM para mejorar nuestra
              página de contador:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <title>Count</title>
                        <script>
                            let counter = 0;
                            function count() {
                                counter++;
                                document.querySelector('h1').innerHTML = counter;
                            }
                        </script>
                    </head>
                    <body>
                        <h1>0</h1>
                        <button onclick="count()">Count</button>
                    </body>
                </html>
                `
            }</Pre>
            <div className="images-client">
              <img src="/images/count2.gif" alt="javascript-query" />
            </div>
            <p>
              Podemos hacer que esta página sea aún más interesante mostrando
              una alerta cada vez que el contador llegue a un múltiplo de diez.
              En esta alerta, queremos formatear una cadena para personalizar el
              mensaje, lo cual en JavaScript podemos hacer utilizando plantillas
              literales (template literals). Las plantillas literales requieren
              que haya comillas invertidas
              <span className="text-[#95D1F1] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                (backticks, `` ) en windows: alt + 96
              </span>
              ; alrededor de toda la expresión y un signo de dólar
              <span className="text-[#95D1F1] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                ($)
              </span>
              y llaves
              <span className="text-[#95D1F1] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                {'{...}'}
              </span>
              alrededor de cualquier sustitución. Por ejemplo, cambiemos nuestra
              función de conteo de la siguiente manera:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                function count() {
                    counter++;
                    document.querySelector('h1').innerHTML = counter;
                    
                    if (counter % 10 === 0) {
                        alert('Count is now \${counter}')
                    }
                }
                `
            }</Pre>
            <div className="images-client">
              <img src="/images/count3.gif" alt="javascript-query" />
            </div>
            <p>
              Ahora, veamos algunas formas en las que podemos mejorar el diseño
              de esta página. En primer lugar, al igual que tratamos de evitar
              el estilo en línea con CSS, queremos evitar el uso de JavaScript
              en línea tanto como sea posible. Podemos hacerlo en nuestro
              ejemplo de contador agregando una línea de script que cambia el
              atributo
              <span className="text-[#95D1F1] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                onclick
              </span>
              de un botón en la página y eliminando el atributo
              <span className="text-[#95D1F1] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                onclick
              </span>
              del interior de la etiqueta del
              <span className="text-[#95D1F1] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                botón
              </span>
              .
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                <!DOCTYPE html>
                <html>
                  <head>
                    <title>Contador en JavaScript</title>
                    <script>
                      // Variable para almacenar el contador
                      let counterValue = 0;
                
                      // Función para incrementar el contador y mostrar una alerta si es múltiplo de 10
                      function incrementCounter() {
                        counterValue++;
                        document.querySelector('h1').innerHTML = counterValue;
                
                        if (counterValue % 10 === 0) {
                          alert('Count is now ' + counterValue);
                        }
                      }
                
                      // Función para cambiar el evento onclick del botón
                      function setupCounterButton() {
                        const button = document.querySelector('#counterButton');
                        button.onclick = incrementCounter;
                      }
                    </script>
                  </head>
                  <body>
                    <h1>Contador</h1>
                    <p id="counter">0</p>
                    <button id="counterButton">Incrementar</button>
                
                    <script>
                    // Llamamos a la función para configurar el botón una vez que se haya cargado el DOM
                      window.onload = setupCounterButton;
                    </script>
                  </body>
                </html>                
                `
            }</Pre>
            <p>
              Una cosa importante a tener en cuenta acerca de lo que acabamos de
              hacer es que no estamos llamando a la función "count" añadiendo
              paréntesis después, sino que simplemente estamos nombrando la
              función. Esto especifica que solo deseamos llamar a esta función
              cuando se haga clic en el botón. Esto funciona porque, al igual
              que en Python, JavaScript admite la programación funcional, por lo
              que las funciones pueden tratarse como valores por sí mismas.
            </p>
            <p>
              Sin embargo, el cambio anterior por sí solo no es suficiente, como
              podemos ver al inspeccionar la página y observar la consola de
              nuestro navegador.
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                document.querySelector('button').onclick = count;
                `
            }</Pre>
            <div className="images-client">
              <img src="/images/error0.png" alt="javascript-query" />
            </div>
            <p>
              Este error surgió porque cuando JavaScript buscó un elemento
              utilizando document.querySelector('button'), no encontró nada.
              Esto se debe a que toma un pequeño tiempo para que la página se
              cargue y nuestro código JavaScript se ejecutó antes de que el
              botón se renderizara. Para tener en cuenta esto, podemos
              especificar que el código se ejecutará solo después de que la
              página se haya cargado utilizando la función addEventListener.
              Esta función toma dos argumentos:
            </p>
            <ol>
              <li>
                El evento al que escuchar (por ejemplo,
                <b className="text-amber-400 mx-1">"click"</b>).
              </li>
              <li>
                Una función que se ejecutará cuando se detecte el evento (por
                ejemplo, la función
                <b className="text-amber-400 mx-1">"hello"</b> de arriba).
              </li>
            </ol>
            <p>
              Podemos utilizar esta función para ejecutar el código solo una vez
              que todo el contenido se haya cargado:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                // Esperar a que la página se cargue por completo antes de ejecutar el código
                document.addEventListener('DOMContentLoaded', function() {
                    // Otro código acá
                });
                // Otro ejemplo

                window.addEventListener('load', function() {
                  // El código que deseamos ejecutar después de que la página se ha cargado
                  // Puede incluir configuraciones, interacciones con elementos, etc.
                });
                `
            }</Pre>
            <p>
              En el ejemplo anterior, hemos utilizado una función
              <Link
                href="https://www.w3schools.com/js/js_function_definition.asp"
                className="text-amber-600 mx-1"
              >
                anónima
                <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
              </Link>
              , que es una función a la que nunca se le da un nombre. Reuniendo
              todo esto, nuestro código JavaScript ahora se ve de la siguiente
              manera:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                let counter = 0;

                function count() {
                    counter++;
                    document.querySelector('h1').innerHTML = counter;
                    
                    if (counter % 10 === 0) {
                        alert('Count is now \${counter}')
                    }
                }
                
                document.addEventListener('DOMContentLoaded', function() {
                    document.querySelector('button').onclick = count;
                });
                `
            }</Pre>
            <p>
              Otra forma en la que podemos mejorar nuestro diseño es moviendo
              nuestro JavaScript a un archivo separado. La manera de hacerlo es
              muy similar a cómo colocamos nuestro CSS en un archivo separado
              para dar estilo:
            </p>
            <ol>
              <li>
                Escribe todo tu código JavaScript en un archivo separado que
                termine en
                <span className="text-amber-400 mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                  .js
                </span>
                , quizás
                <span className="text-amber-400 mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                  index.js
                </span>
                .
              </li>
              <li>
                Añade un atributo src a la etiqueta
                <span className="text-[#95D1F1] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                  {'<script>'}
                </span>
                que apunte a este nuevo archivo.
              </li>
            </ol>
            <p>
              Para nuestra página de contador, podríamos tener un archivo
              llamado counter.html que se ve así:
            </p>
            <Pre lang="html">{
              /*html */ `
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <title>Count</title>
                        <script src="counter.js"></script>
                    </head>
                    <body>
                        <h1>0</h1>
                        <button>Count</button>
                    </body>
                </html>
                `
            }</Pre>
            <p>
              Y un archivo llamado
              <span className="text-amber-400 mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                counter.js
              </span>
              que se vería de la siguiente manera:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                let counter = 0;

                function count() {
                    counter++;
                    document.querySelector('h1').innerHTML = counter;
                    
                    if (counter % 10 === 0) {
                        alert('Count is now \${counter}');
                    }
                }
                
                document.addEventListener('DOMContentLoaded', function() {
                    document.querySelector('button').onclick = count;
                });
                `
            }</Pre>
            <ShareButton />
            <p>
              Tener JavaScript en un archivo separado es útil por varias
              razones:
            </p>
            <ul>
              <li>
                Atractivo visual: Nuestros archivos HTML y JavaScript
                individuales se vuelven más legibles. Acceso entre archivos
                HTML: Ahora podemos tener varios archivos HTML que comparten el
                mismo JavaScript
              </li>
              <li>
                Colaboración: Ahora es fácil que una persona trabaje en el
                JavaScript mientras otra trabaja en el HTML.
              </li>
              <li>
                Importación: Tenemos la capacidad de importar bibliotecas de
                JavaScript que otras personas ya han escrito. Por ejemplo,
                <Link
                  href="https://getbootstrap.com/docs/4.5/getting-started/introduction/#js"
                  className="text-amber-400 mx-1"
                >
                  Bootstrap
                  <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
                </Link>
                tiene su propia biblioteca de JavaScript que puedes incluir para
                hacer tu sitio más interactivo.
              </li>
            </ul>
            <p>
              Comencemos con otro ejemplo de una página que puede ser un poco
              más interactiva. A continuación, crearemos una página en la que un
              usuario pueda escribir su nombre para obtener un saludo
              personalizado.
            </p>
            <Pre lang="html">
              {
                /*html */ `
                  <!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <title>Hola</title>
                      <script>
                          document.addEventListener('DOMContentLoaded', function() {
                              document.querySelector('form').onsubmit = function() {
                                  const name = document.querySelector('#name').value;
                                  alert(\`Hola, \${name}\`);
                              };
                          });
                      </script>
                  </head>
                  <body>
                      <form>
                          <input autofocus id="name" placeholder="Name" type="text">
                          <input type="submit">
                      </form>
                  </body>
                  </html>
                `
              }
            </Pre>
            <p>
              Si ustedes lo pruban pueden ver que el nombre que pongas lo va a
              mostrar en el alert:
            </p>
            <div className="images-client">
              <img src="/images/javascript-alert-name.png" />
            </div>
            <p>Otro nombre:</p>
            <div className="images-client">
              <img src="/images/javascript-alert-name2.png" />
            </div>
            <p>Algunas notas sobre la página anterior:</p>
            <ul>
              <li>
                Usamos el campo de enfoque automático (autofocus) en la entrada
                de nombre para indicar que el cursor debe situarse dentro de ese
                campo tan pronto como se carga la página.
              </li>
              <li>
                Utilizamos #name dentro de document.querySelector para encontrar
                un elemento con un identificador
                <span className="text-amber-400 mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                  (id)
                </span>
                de
                <span className="text-amber-400 mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                  "name"
                </span>
                . Podemos utilizar los mismos selectores en esta función que
                podríamos usar en CSS.
              </li>
              <li>
                Utilizamos el atributo value de un campo de entrada para obtener
                lo que se ha escrito en él.
              </li>
            </ul>
            <p>
              ¡Podemos hacer más que simplemente añadir HTML a nuestra página
              utilizando JavaScript! También podemos cambiar el estilo de una
              página. En la página a continuación, utilizamos botones para
              cambiar el color de nuestro encabezado.
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                     <title>Colors</title>
                     <script>
                         document.addEventListener('DOMContentLoaded', function() {
                            document.querySelectorAll('button').forEach(function(button) {
                                button.onclick = function() {
                                    document.querySelector("#hello").style.color = button.dataset.color;
                                }
                            });
                         });
                     </script>
                </head>
                <body>
                    <h1 id="hello">Hello</h1>
                    <button data-color="red">Red</button>
                    <button data-color="blue">Blue</button>
                    <button data-color="green">Green</button>
                </body>
                </html>
                `
            }</Pre>
            <div className="images-client">
              <img src="/videos/colors.gif" />
            </div>
            <p>Algunas notas en la página anterior:</p>
            <ul>
              <li>
                Cambiamos el estilo de un elemento utilizando el atributo
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  style.ALGO
                </span>
                .
              </li>
              <li>
                Utilizamos el atributo
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  data-ALGO
                </span>
                para asignar datos a un elemento HTML. Posteriormente, podemos
                acceder a esos datos en JavaScript utilizando la propiedad
                dataset del elemento.
              </li>
              <li>
                Usamos la función
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  querySelectorAll
                </span>
                para obtener una lista de nodos (similar a una lista en Python o
                a un arreglo en JavaScript) con todos los elementos que
                coinciden con la consulta.
              </li>
              <li>
                La función
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  forEach
                </span>
                en JavaScript toma como argumento otra función y aplica esa
                función a cada elemento en una lista o arreglo.
              </li>
            </ul>
          </article>
          <span id="consola" />
          <SectionTitle title="Consola Javascript" />
          <article>
            <p>
              La consola es una herramienta útil para probar pequeños fragmentos
              de código y depurar. Puedes escribir y ejecutar código JavaScript
              en la consola, la cual se encuentra al inspeccionar un elemento en
              tu navegador web y luego haciendo clic en{' '}
              <b className="text-amber-400 mx-[2px]">"consola"</b> (el proceso
              exacto puede variar según el navegador). Una herramienta útil para
              la depuración es imprimir en la consola, lo cual puedes hacer
              utilizando la función
              <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                console.log
              </span>
              . Por ejemplo, en la página
              <b className="text-amber-400 mx-1">"colors.html"</b>
              mencionada arriba, puedo agregar la siguiente línea:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                console.log(document.querySelectorAll('button'));
                `
            }</Pre>
            <div className="images-client">
              <img src="/images/consoleList.png" />
            </div>
            <span id="funciones-de-flecha" />
            <Header>Funciones Flecha</Header>
            <p>
              Funciones de Flecha Además de la notación tradicional de funciones
              que hemos visto anteriormente, JavaScript ahora nos proporciona la
              capacidad de utilizar Funciones de Flecha, donde tenemos una
              entrada (o paréntesis cuando no hay entrada) seguida de
              <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                {'=>'}
              </span>
              y luego algún código que se ejecutará. Por ejemplo, podemos
              modificar nuestro script anterior para utilizar una función de
              flecha anónima:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                document.addEventListener('DOMContentLoaded', () => {
                    document.querySelectorAll('button').forEach(button => {
                        button.onclick = () => {
                            document.querySelector("#hello").style.color = button.dataset.color;
                        }
                    });
                });
                `
            }</Pre>
            <p>
              También podemos tener funciones con nombres que utilizan flechas,
              como en esta reescritura de la función
              <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                count
              </span>
              :
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                count = () => {
                    counter++;
                    document.querySelector('h1').innerHTML = counter;
                    
                    if (counter % 10 === 0) {
                        alert(\`Count is now \${counter}\`)
                    }
                }
                `
            }</Pre>
            <p>
              Para obtener una idea sobre algunos otros eventos que podemos
              utilizar, veamos cómo podemos implementar nuestro cambiador de
              colores utilizando un menú desplegable en lugar de tres botones
              separados. Podemos detectar cambios en un elemento select
              utilizando el atributo
              <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                onchange
              </span>
              . En JavaScript, esto es una palabra clave que cambia según el
              contexto en el que se utiliza. En el caso de un manejador de
              eventos,
              <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                this
              </span>
              se refiere al objeto que desencadenó el evento.
            </p>
            <Pre lang="javascript">{
              /*html  */ `
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <title>Colors</title>
                        <script>
                            document.addEventListener('DOMContentLoaded', function() {
                                document.querySelector('select').onchange = function() {
                                    document.querySelector('#hello').style.color = this.value;
                                }
                            });
                        </script>
                    </head>
                    <body>
                        <h1 id="hello">Hello</h1>
                        <select>
                            <option value="black">Black</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                        </select>
                
                    </body>
                </html>
                `
            }</Pre>
            <div className="images-client">
              <img src="/images/colors2.gif" />
            </div>
            <p>
              Hay muchos otros eventos que podemos detectar en Javascript
              incluyendo los más comunes, a continuación:
            </p>
            <ul>
              <li>
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  onclick
                </span>
              </li>
              <li>
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  onmouseover
                </span>
              </li>
              <li>
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  onkeydown
                </span>
              </li>
              <li>
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  onkeyup
                </span>
              </li>
              <li>
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  onload
                </span>
              </li>
              <li>
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  onblur
                </span>
              </li>
              <li>
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  ...
                </span>
              </li>
            </ul>
          </article>
          <span id="todo-list" />
          <Header>TODO List</Header>
          <article>
            <p>
              Para aplicar algunas de las cosas que hemos aprendido en esta
              conferencia, trabajemos en la creación de una lista de tareas
              <b className="text-amber-400 mx-1">(TODO List)</b> completamente
              en JavaScript. Comenzaremos escribiendo la estructura HTML de la
              página. Observa a continuación cómo dejamos espacio para una lista
              no ordenada, pero aún no agregamos elementos a ella. También
              observa que agregamos un enlace a
              <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                tasks.js
              </span>
              , donde escribiremos nuestro JavaScript.
            </p>
            <Pre lang="html">{
              /*html */ `
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <title>Tasks</title>
                        <script src="tasks.js"></script>
                    </head>
                    <body>
                        <h1>Tasks</h1>
                        <ul id="tasks"></ul>
                        <form>
                            <input id="task" placeholder = "New Task" type="text">
                            <input id="submit" type="submit">
                        </form>
                    </body>
                </html>
                `
            }</Pre>
            <p>
              Ahora, aquí está nuestro código que podemos mantener en
              <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                tasks.js
              </span>
              . Algunas notas sobre lo que verás a continuación:
            </p>
            <ul>
              <li>
                Este código es ligeramente diferente al código de la
                conferencia. Aquí, solo consultamos nuestro botón de envío y el
                campo de entrada de tareas una vez al principio y almacenamos
                esos dos valores en las variables submit y newTask.
              </li>
              <li>
                Podemos habilitar/deshabilitar un botón estableciendo su
                atributo disabled en{' '}
                <b className="text-amber-400 mx-1">false/true</b>.
              </li>
              <li>
                En JavaScript, usamos
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  .length
                </span>
                para encontrar la longitud de objetos como cadenas y arreglos.
              </li>
              <li>
                Al final del script, agregamos la línea return false. Esto evita
                la presentación predeterminada del formulario, que implica
                recargar la página actual o redirigir a una nueva.
              </li>
              <li>
                En JavaScript, podemos crear elementos HTML utilizando la
                función
                <Link
                  href="https://www.w3schools.com/jsref/met_document_createelement.asp"
                  className="mx-1 text-amber-600"
                >
                  createElement
                  <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
                </Link>
                . Luego, podemos agregar esos elementos al DOM utilizando la
                función
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  append
                </span>
                .
              </li>
            </ul>
            <Pre lang="javascript">{
              /*javascript */ `
                // Selecciona el botón de envío y el campo de entrada para su uso posterior
                const submit = document.querySelector('#submit');
                const newTask = document.querySelector('#task');
                
                // Deshabilita el botón de envío de forma predeterminada:
                submit.disabled = true;
                
                // Escucha la entrada en el campo de entrada
                newTask.onkeyup = () => {
                    if (newTask.value.length > 0) {
                        submit.disabled = false;
                    }
                    else {
                        submit.disabled = true;
                    }
                }
                
                // Escucha la presentación del formulario
                document.querySelector('form').onsubmit = () => {
                
                    // Encuentra la tarea que el usuario acaba de enviar
                    const task = newTask.value;
                
                    // Crea un elemento de lista para la nueva tarea y agrega la tarea a él
                    const li = document.createElement('li');
                    li.innerHTML = task;
                
                    // Agrega el nuevo elemento a nuestra lista desordenada:
                    document.querySelector('#tasks').append(li);
                
                    // Limpia el campo de entrada:
                    newTask.value = '';
                
                    // Vuelve a deshabilitar el botón de envío:
                    submit.disabled = true;
                
                    // Evita que el formulario se envíe de forma predeterminada
                    return false;
                }
                
                `
            }</Pre>
            <div className="images-client">
              <img src="/images/tasks.gif" />
            </div>
          </article>
          <span id="intervalos" />
          <SectionTitle title="Intérvalos" />
          <p>
            Además de especificar que las funciones se ejecutan cuando se
            desencadena un evento, también podemos programar funciones para que
            se ejecuten después de un período de tiempo determinado. Por
            ejemplo, volvamos al script de nuestra página de contador y
            agreguemos un intervalo para que, incluso si el usuario no hace clic
            en nada, el contador se incremente cada segundo. Para hacer esto,
            utilizamos la función
            <Link
              href="https://www.w3schools.com/jsref/met_win_setinterval.asp"
              className="mx-1 text-amber-600"
            >
              setIntervals
              <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
            </Link>
            , que toma como argumento una función que se ejecutará y un
            intervalo de tiempo (en milisegundos) entre las ejecuciones de la
            función.
          </p>
          <Pre lang="javascript">{
            /*javascript */ `
                let counter = 0;
            
                function count() {
                    counter++;
                    document.querySelector('h1').innerHTML = counter;
                }
                
                document.addEventListener('DOMContentLoaded', function() {
                    document.querySelector('button').onclick = count;
                
                    setInterval(count, 1000);
                });
                `
          }</Pre>
          <div className="images-client">
            <img src="/images/count4.gif" />
          </div>
          <ShareButton />
          <span id="local" />
          <SectionTitle title="Almacenamiento Local" />
          <article>
            <p>
              Una cosa a notar sobre todos nuestros sitios hasta ahora es que
              cada vez que recargamos la página, toda nuestra información se
              pierde. El color del encabezado vuelve a ser negro, el contador
              vuelve a 0 y todas las tareas se borran. A veces esto es lo que
              pretendemos, pero otras veces querremos poder almacenar
              información que podamos utilizar cuando un usuario regrese al
              sitio.
            </p>
            <p>
              Una forma de hacerlo es utilizando el Almacenamiento Local (Local
              Storage), es decir, almacenar información en el navegador web del
              usuario que podamos acceder más tarde. Esta información se
              almacena como un conjunto de pares clave-valor, casi como un
              diccionario en Python. Para utilizar el almacenamiento local,
              utilizaremos dos funciones clave:
            </p>
            <ul>
              <li>
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  localStorage.getItem(key)
                </span>
                : Esta función busca una entrada en el almacenamiento local con
                una clave dada y devuelve el valor asociado con esa clave.
              </li>
              <li>
                <span className="bg-gray-800 border-b-2 border-amber-400 px-1 py-[2px] mx-1 rounded">
                  localStorage.setItem(key, value)
                </span>
                : Esta función establece una entrada en el almacenamiento local,
                asociando la clave con un nuevo valor.
              </li>
            </ul>
            <p>
              Veamos cómo podemos usar estas nuevas funciones para actualizar
              nuestro contador. En el código a continuación,
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                // Verificar si ya existe un valor en el almacenamiento local
                if (!localStorage.getItem('counter')) {
                
                    // Si no existe, establecer el contador en 0 en el almacenamiento local
                    localStorage.setItem('counter', 0);
                }
                            
                function count() {
                    // Recuperar el valor del contador desde el almacenamiento local
                    let counter = localStorage.getItem('counter');
                
                    // Actualizar el contador
                    counter++;
                    document.querySelector('h1').innerHTML = counter;
                
                    // Almacenar el contador en el almacenamiento local
                    localStorage.setItem('counter', counter);
                }
                
                document.addEventListener('DOMContentLoaded', function() {
                    // Establecer el encabezado con el valor actual en el almacenamiento local
                    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
                    document.querySelector('button').onclick = count;
                });
                
                `
            }</Pre>
          </article>
          <span id="apis" />
          <SectionTitle title="APIs" />
          <hr />
          <span id="objetos" />
          <SectionTitle title="Objetos en Javascript" />
          <p>
            Un
            <Link
              href="https://www.w3schools.com/js/js_objects.asp"
              className="mx-1 text-amber-600"
            >
              objeto de JavaScript
              <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
            </Link>
            es muy similar a un diccionario en Python, ya que nos permite
            almacenar pares clave-valor. Por ejemplo, podría crear un objeto de
            JavaScript que represente a Harry Potter:
          </p>
          <Pre lang="javascript">{
            /*javascript */ `
                const harryPotter = {
                    name: "Harry Potter",
                    age: 17,
                    house: "Gryffindor",
                    wand: "Holly and phoenix feather, 11 inches",
                    friends: ["Hermione Granger", "Ron Weasley"],
                    isWizard: true
                };
                `
          }</Pre>
          <p>
            Puedo acceder o cambiar partes de este objeto utilizando tanto la
            notación de corchetes como la notación de punto:
          </p>
          <Pre lang="javascript">{
            /*javascript */ `
              console.log(harryPotter.name); // Muestra "Harry Potter"
              console.log(harryPotter.age); // Muestra 17
              
                `
          }</Pre>
          <p>Acceder a los valores utilizando la notación de corchetes:</p>
          <Pre lang="javascript">{
            /*javascript */ `
              console.log(harryPotter['name']); // Muestra "Harry Potter"
              console.log(harryPotter['age']); // Muestra 17              
                `
          }</Pre>
          <p>Otro ejemplo:</p>
          <Pre lang="javascript">{
            /*javascript */ `
            let person = {
                first: 'Harry',
                last: 'Potter'
            };              
                `
          }</Pre>
          <div className="images-client">
            <img src="/images/console.png" />
          </div>
          <p>
            Una forma en la que los objetos de JavaScript son realmente útiles
            es en la transferencia de datos de un sitio a otro, especialmente al
            usar
            <Link
              href="https://www.mulesoft.com/resources/api/what-is-an-api"
              className="text-amber-600 mx-1"
            >
              APIs
              <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
            </Link>
            .
          </p>
          <p>
            Una API, o Interfaz de Programación de Aplicaciones, es una forma
            estructurada de comunicación entre dos aplicaciones diferentes.
          </p>
          <p>
            Por ejemplo, es posible que deseemos que nuestra aplicación obtenga
            información de Google Maps, Amazon o algún servicio meteorológico.
            Podemos hacer esto realizando llamadas a la API de un servicio, la
            cual nos devolverá datos estructurados, a menudo en formato JSON
            <b className="text-amber-400">(Notación de Objetos JavaScript)</b>.
            Por ejemplo, un vuelo en formato
            <Link
              href="https://www.w3schools.com/js/js_json_intro.asp"
              className="text-amber-600 mx-1"
            >
              JSON
              <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
            </Link>
            podría verse así:
          </p>
          <Pre lang="javascript">{
            /*json */ `
                {
                    "origin": "New York",
                    "destination": "London",
                    "duration": 415
                }
                `
          }</Pre>
          <p>
            Los valores dentro de un JSON no tienen por qué ser solo cadenas y
            números, como en el ejemplo anterior. También podemos almacenar
            listas o incluso otros objetos de JavaScript:
          </p>
          <Pre lang="javascript">{
            /*json */ `
              {
                "flightNumber": "A123",
                "departureCity": "New York",
                "arrivalCity": "Los Angeles",
                "passengers": ["Alice", "Bob", "Charlie"],
                "aircraft": {
                  "model": "Boeing 747",
                  "seats": 400
                }
              }
                `
          }</Pre>
          <span id="cambio-de-moneda" />
          <Header>Cambio de moneda</Header>
          <article>
            <p>
              Para mostrar cómo podemos usar API en nuestras aplicaciones,
              trabajemos en la construcción de una aplicación donde podemos
              encontrar tasas de cambio entre dos monedas. A lo largo del
              ejercicio, utilizaremos la API de tipos de cambio del
              <Link
                href="https://exchangeratesapi.io/"
                className="text-amber-600 mx-1"
              >
                Banco Central Europeo
                <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
              </Link>
              . Si visitas su sitio web, verás la documentación de la API, que
              generalmente es un buen lugar para comenzar cuando deseas utilizar
              una API. Podemos probar esta API visitando la URL:
              <Link
                href="https://api.exchangeratesapi.io/latest?base=USD"
                className="text-amber-600 mx-1"
              >
                https://api.exchangeratesapi.io/latest?base=USD
                <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
              </Link>
              . Cuando visites esta página, verás la tasa de cambio entre el
              dólar estadounidense y muchas otras monedas, escrita en formato
              JSON. También puedes cambiar el parámetro GET en la URL de USD a
              cualquier otro código de moneda para cambiar las tasas que
              obtienes.
            </p>
            <p>
              Echemos un vistazo a cómo implementar esta API en una aplicación
              creando un nuevo archivo HTML llamado "currency.html" y
              vinculándolo a un archivo JavaScript, pero dejemos el cuerpo del
              archivo HTML vacío:
            </p>
            <Pre lang="html">{
              /*html */ `
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <title>Currency Exchange</title>
                        <script src="currency.js"></script>
                    </head>
                    <body></body>
                </html>
                `
            }</Pre>
            <p>
              Ahora, utilizaremos algo llamado AJAX, o Asynchronous JavaScript
              And XML (JavaScript y XML asincrónicos), que nos permite acceder a
              información de páginas externas incluso después de que nuestra
              página se haya cargado. Para hacerlo, utilizaremos la función
              fetch, que nos permitirá enviar una solicitud HTTP. La función
              fetch devuelve una promesa. No entraremos en detalles sobre qué es
              una promesa aquí, pero podemos pensar en ella como un valor que
              llegará en algún momento, pero no necesariamente de inmediato.
              Tratamos con promesas proporcionándoles un atributo .then que
              describe qué hacer cuando obtenemos una respuesta. El fragmento de
              código a continuación registrará nuestra respuesta en la consola.
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
            document.addEventListener('DOMContentLoaded', function() {
                // Enviar una solicitud GET a la URL
                fetch('https://api.exchangeratesapi.io/latest?base=USD')
                // Convertir la respuesta a formato JSON
                .then(response => response.json())
                .then(data => {
                    // Registrar los datos en la consola
                    console.log(data);
                });
            });
            
                `
            }</Pre>
            <div className="images-client">
              <img src="/images/curr_log.png" />
            </div>
            <p>
              Un punto importante sobre el código anterior es que el argumento
              de .then siempre es una función. Aunque parece que estamos creando
              las variables response y data, en realidad son los parámetros de
              dos funciones anónimas.
            </p>
            <p>
              En lugar de simplemente registrar estos datos, podemos usar
              JavaScript para mostrar un mensaje en la pantalla, como se muestra
              en el siguiente código:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
              document.addEventListener('DOMContentLoaded', function() {
                // Enviar una solicitud GET a la URL
                fetch('https://api.exchangeratesapi.io/latest?base=USD')
                // Convertir la respuesta a formato JSON
                .then(response => response.json())
                .then(data => {
                    // Obtener la tasa de cambio de los datos
                    const tasaDeCambio = data.rates.EUR;
            
                    // Mostrar un mensaje en la pantalla
                    document.querySelector('body').innerHTML = \`1 USD es igual a \${tasaDeCambio.toFixed(3)} EUR.\`;
                });
            });
            
                `
            }</Pre>
            <div className="images-client">
              <img src="/images/exchange.png" />
            </div>
            <p>
              Ahora, vamos a hacer que el sitio sea un poco más interactivo al
              permitir que el usuario elija la moneda que le gustaría ver.
              Comenzaremos modificando nuestro HTML para permitir al usuario
              ingresar una moneda:
            </p>
            <Pre lang="html">{
              /*javascript */ `
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <title>Currency Exchange</title>
                      <script src="currency.js"></script>
                  </head>
                  <body>
                      <form>
                          <input id="currency" placeholder="Currency" type="text">
                          <input type="submit" value="Convert">
                      </form>
                      <div id="result"></div>
                  </body>
              </html>            
                `
            }</Pre>
            <p>
              Ahora, haremos algunos cambios en nuestro JavaScript para que solo
              se actualice cuando se envíe el formulario y para que tenga en
              cuenta la entrada del usuario. También agregaremos algunas
              verificaciones de errores aquí:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                document.addEventListener('DOMContentLoaded', function() {
                    document.querySelector('form').onsubmit = function() {
                
                        // Enviar una solicitud GET a la URL
                        fetch('https://api.exchangeratesapi.io/latest?base=USD')
                        // Convertir la respuesta a formato JSON
                        .then(response => response.json())
                        .then(data => {
                            // Obtener la moneda ingresada por el usuario y convertirla a mayúsculas
                            const currency = document.querySelector('#currency').value.toUpperCase();
                
                            // Obtener la tasa de cambio de los datos
                            const rate = data.rates[currency];
                
                            // Verificar si la moneda es válida:
                            if (rate !== undefined) {
                                // Mostrar el tipo de cambio en la pantalla
                                document.querySelector('#result').innerHTML = 
                                \`1 USD es igual a \${rate.toFixed(3)} \${currency}.\`;
                            }
                            else {
                                // Mostrar un mensaje de error en la pantalla
                                document.querySelector('#result').innerHTML = 'Moneda no válida.';
                            }
                        })
                        // Capturar cualquier error y registrarlo en la consola
                        .catch(error => {
                            console.log('Error:', error);
                        });
                        // Prevenir la presentación por defecto del formulario
                        return false;
                    }
                });
                
                `
            }</Pre>
            <div className="images-client">
              <img src="/images/exchange-2.gif" />
            </div>
            <span id="cambio-divisas" />
            <SectionTitle title="Convertir Divisas" />
            <CurrencyConverter />
            <p>
              ¡Eso es todo para este curso de
              <b className="px-1 py-[2px] bg-amber-400 mx-1 text-md text-black">
                Js
              </b>
              ! La próxima vez, trabajaré para crear interfaces de usuario aún
              más atractivas.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}
