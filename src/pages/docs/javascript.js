import CurrencyConverter from '../../components/CurrencyComponent';
import { Footer } from '../../components/Footer';
import JavascriptExample from '../../components/JavascriptExample';
import HeaderTitle from '../../components/HeaderTitlte';
import IndexTitle from '../../components/IndexTitle';
import LinkButton from '../../components/LinkButton';
import { Pre } from '../../components/Pre';
import { Nav } from '../../components/Nav';
import { NavSwitch } from '../../components/NavSwicth';
import { ShareButton } from '../../components/ShareButton';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import ImageComponent from '../../components/ImageComponent';
import { NavLinks } from '../../components/NavLinks';

export default function JavaScript() {
  return (
    <TitlesContextProvider>
      <Nav className="fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl flex items-stretch">
        <NavLinks />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <HeaderTitle className="relative">
            <span className="highlight">JavaScript</span>
          </HeaderTitle>
          <hr className="border-text-primary" />
          <IndexTitle>Índice</IndexTitle>
          <ol className="indice">
            <li>
              <a href="#introducción">Introducción</a>
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
              <a href="#queryselector">Query Selector</a>
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
              <a href="#almacenamiento-local">Almacenamiento local</a>
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
            <li>
              <a href="#end-point-api">End-Point API</a>
            </li>
          </ol>
          <span id="introduccion" />
          <SectionTitle title="Introducción" />
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
            <li>Hoy, introduciremos un nuevo lenguaje de programación:</li>
          </ul>
          <IndexTitle>Javascript</IndexTitle>
          <figure>
            <svg
              viewBox="0 0 24 24"
              width={120}
              height={60}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_2)">
                <rect width="24" height="24" fill="black" />
                <path
                  d="M0 0H24V24H0V0ZM22.034 18.276C21.859 17.181 21.146 16.261 19.031 15.403C18.295 15.058 17.477 14.818 17.234 14.263C17.143 13.933 17.129 13.753 17.188 13.558C17.338 12.912 18.103 12.718 18.703 12.898C19.093 13.018 19.453 13.318 19.679 13.798C20.713 13.122 20.713 13.122 21.434 12.673C21.164 12.253 21.03 12.072 20.848 11.893C20.218 11.188 19.379 10.828 18.014 10.859L17.309 10.948C16.633 11.113 15.989 11.473 15.599 11.953C14.459 13.244 14.788 15.494 16.168 16.424C17.533 17.444 19.529 17.668 19.784 18.629C20.024 19.799 18.914 20.174 17.818 20.039C17.007 19.859 16.558 19.453 16.063 18.703L14.233 19.754C14.443 20.234 14.683 20.443 15.043 20.863C16.783 22.619 21.133 22.529 21.914 19.859C21.943 19.769 22.154 19.154 21.988 18.209L22.034 18.276ZM13.051 11.031H10.803C10.803 12.969 10.794 14.895 10.794 16.836C10.794 18.068 10.857 19.199 10.656 19.547C10.326 20.236 9.476 20.148 9.09 20.027C8.694 19.831 8.493 19.561 8.26 19.172C8.197 19.067 8.15 18.976 8.133 18.976L6.308 20.101C6.613 20.731 7.058 21.273 7.632 21.618C8.487 22.128 9.636 22.293 10.839 22.023C11.622 21.797 12.297 21.332 12.65 20.612C13.16 19.682 13.052 18.542 13.047 17.266C13.059 15.212 13.047 13.157 13.047 11.087L13.051 11.031Z"
                  fill="#F7DF1E"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </figure>
          <p>Comencemos por volver a examinar un diagrama:</p>
          <ImageComponent
            src="/images/client-server-1-removebg-preview.png"
            altImage="Server"
          />
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
          <ImageComponent
            src="/images/javascript-alert.png"
            altImage="Alerta de Javascript"
          />
          <span id="eventos" />
          <SectionTitle title="Eventos" />
          <article>
            <p>
              Una característica de JavaScript que lo hace útil para la
              programación web es que admite la
              <LinkButton
                url="https://medium.com/@vsvaibhav2016/introduction-to-event-driven-programming-28161b79c223"
                color="orange"
                iconName="ArrowUpRight"
              >
                Programación Orientada a Eventos
              </LinkButton>
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
              <LinkButton
                url="https://www.w3schools.com/js/js_htmldom_eventlistener.asp"
                color="orange"
                iconName="ArrowUpRight"
              >
                Escuchadores de Eventos
              </LinkButton>
              que esperan a que ocurran ciertos eventos y luego ejecutan algún
              código.
            </p>

            <p className="list-css-span">
              Comencemos por convertir nuestro JavaScript anterior en una
              <LinkButton
                url="https://www.w3schools.com/js/js_functions.asp"
                color="orange"
                iconName="ArrowUpRight"
              >
                función
              </LinkButton>
              llamada<span className="bg-amber-400/30">hola</span>:
            </p>
          </article>
          <Pre lang="javascript">{
            /*javascript */ `
            function hola() {
              alert("Hola mundanos!")
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
            <ImageComponent
              src="/images/javascript-alert-count.png"
              altImage="Contador de javascript con alerta"
            />
          </article>
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
            <p className="list-css-span">
              Al igual que en Python, también podemos aprovechar las
              <LinkButton
                url="https://www.w3schools.com/js/js_if_else.asp"
                color="orange"
                iconName="ArrowUpRight"
              >
                condiciones
              </LinkButton>
              en JavaScript. Por ejemplo, supongamos que en lugar de cambiar
              siempre nuestro encabezado a "Goodbye!", queremos alternar entre
              <span className="bg-amber-400/30">"Hola!"</span>y
              <span className="bg-amber-400/30">"Adios!"</span>. Nuestra página
              podría verse algo así. Ten en cuenta que en JavaScript utilizamos
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
                      <title>Contador</title>
                      <script>
                          function hello() {
                              const header = document.querySelector('h1');
                              if (header.innerHTML === 'Bienvenidos!') {
                                  header.innerHTML = 'Adiós..!';
                              }
                              else {
                                  header.innerHTML = 'Bienvenidos!';
                              }
                          }
                      </script>
                  </head>
                  <body>
                      <h1>Hola!</h1>
                      <button onclick="hello()">Haz click aquí</button>
                  </body>
                </html>
                `
            }</Pre>
            <div className="images-client">
              <video src="/images/toggle.mp4" autoPlay loop muted />
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
              <video src="/images/count2.mp4" autoPlay loop muted />
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
              ; alrededor de toda la expresión y un signo peso
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
            <ImageComponent
              src="/images/count3.gif"
              altImage="Javascript query"
            />
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
            <ImageComponent
              src="/images/error0.png"
              altImage="Javascipt query"
            />
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
              <LinkButton
                url="https://www.w3schools.com/js/js_function_definition.asp"
                color="orange"
                iconName="ArrowUpRight"
              >
                anónima
              </LinkButton>
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
            <p className="list-css-span">
              Y un archivo llamado
              <span className="bg-amber-400/30">counter.js</span>
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
                <LinkButton
                  url="https://getbootstrap.com/docs/4.5/getting-started/introduction/#js"
                  color="orange"
                  iconName="ArrowUpRight"
                >
                  Bootstrap
                </LinkButton>
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
              Si ustedes lo prueban pueden ver que el nombre que pongas lo va a
              mostrar en el alert:
            </p>
            <ImageComponent
              src="/images/javascript-alert-name.png"
              altImage="Alerta de javascript"
            />
            <p>Otro nombre:</p>
            <ImageComponent
              src="/images/javascript-alert-name2.png"
              altImage="Alerta de javascript"
            />
            <p>Algunas notas sobre la página anterior:</p>
            <ul className="list-css-span">
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
            <ImageComponent
              src="/videos/colors.gif"
              altImage="Muestra de cambio de colores en javascript"
            />
            <p>Algunas notas en la página anterior:</p>
            <ul className="list-css-span">
              <li>
                Cambiamos el estilo de un elemento utilizando el atributo
                <span className="bg-gray-800">style.ALGO</span>.
              </li>
              <li>
                Utilizamos el atributo
                <span className="bg-gray-800">data-ALGO</span>
                para asignar datos a un elemento HTML. Posteriormente, podemos
                acceder a esos datos en JavaScript utilizando la propiedad
                dataset del elemento.
              </li>
              <li>
                Usamos la función
                <span className="bg-gray-800">querySelectorAll</span>
                para obtener una lista de nodos (similar a una lista en Python o
                a un arreglo en JavaScript) con todos los elementos que
                coinciden con la consulta.
              </li>
              <li>
                La función
                <span className="bg-gray-800">forEach</span>
                en JavaScript toma como argumento otra función y aplica esa
                función a cada elemento en una lista o arreglo.
              </li>
            </ul>
          </article>
          <span id="consola" />
          <SectionTitle title="Consola Javascript" />
          <article>
            <p className="list-css-span">
              La consola es una herramienta útil para probar pequeños fragmentos
              de código y depurar. Puedes escribir y ejecutar código JavaScript
              en la consola, la cual se encuentra al inspeccionar un elemento en
              tu navegador web y luego haciendo clic en <span>"consola"</span>{' '}
              (el proceso exacto puede variar según el navegador). Una
              herramienta útil para la depuración es imprimir en la consola, lo
              cual puedes hacer utilizando la función
              <span>console.log</span>. Por ejemplo, en la página
              <span>"colors.html"</span>
              mencionada arriba, puedo agregar la siguiente línea:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
                console.log(document.querySelectorAll('button'));
                `
            }</Pre>
            <ImageComponent
              src="/images/consoleList.png"
              altImage="Lista  de consola"
            />
            <span id="funciones-de-flecha" />
            <IndexTitle>Funciones Flecha</IndexTitle>
            <p className="list-css-span">
              Funciones de Flecha Además de la notación tradicional de funciones
              que hemos visto anteriormente, JavaScript ahora nos proporciona la
              capacidad de utilizar Funciones de Flecha, donde tenemos una
              entrada (o paréntesis cuando no hay entrada) seguida de
              <span>{'=>'}</span>y luego algún código que se ejecutará. Por
              ejemplo, podemos modificar nuestro script anterior para utilizar
              una función de flecha anónima:
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
            <p className="list-css-span">
              También podemos tener funciones con nombres que utilizan flechas,
              como en esta reescritura de la función
              <span>count</span>:
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
            <p className="list-css-span">
              Para obtener una idea sobre algunos otros eventos que podemos
              utilizar, veamos cómo podemos implementar nuestro cambiador de
              colores utilizando un menú desplegable en lugar de tres botones
              separados. Podemos detectar cambios en un elemento select
              utilizando el atributo
              <span>onchange</span>. En JavaScript, esto es una palabra clave
              que cambia según el contexto en el que se utiliza. En el caso de
              un manejador de eventos,
              <span>this</span>
              se refiere al objeto que desencadenó el evento.
            </p>
            <Pre lang="javascript">{
              /*html  */ `
                <!DOCTYPE html>
                <html lang="en">
                  <head>
                      <title>Colores</title>
                      <script>
                          document.addEventListener('DOMContentLoaded', function() {
                              document.querySelector('select').onchange = function() {
                                  document.querySelector('#hola').style.color = this.value;
                              }
                          });
                      </script>
                  </head>
                  <body>
                      <h1 id="hola">Hola Javascript!</h1>
                      <select>
                          <option value="black">Negro</option>
                          <option value="red">Rojo</option>
                          <option value="blue">Azul</option>
                          <option value="green">Verde</option>
                      </select>
              
                  </body>
                </html>
                `
            }</Pre>
            <div className="images-client">
              <video src="/images/colors2.mp4" autoPlay loop muted />
            </div>
            <p>
              Hay muchos otros eventos que podemos detectar en Javascript
              incluyendo los más comunes, a continuación:
            </p>
            <ul>
              <li>
                <span className="bg-gray-800 border-b-2 text-zinc-100  border-amber-400 px-1 py-[2px] mx-1 rounded">
                  onclick
                </span>
              </li>
              <li>
                <span className="bg-gray-800 border-b-2 text-zinc-100  border-amber-400 px-1 py-[2px] mx-1 rounded">
                  onmouseover
                </span>
              </li>
              <li>
                <span className="bg-gray-800 border-b-2 text-zinc-100  border-amber-400 px-1 py-[2px] mx-1 rounded">
                  onkeydown
                </span>
              </li>
              <li>
                <span className="bg-gray-800 border-b-2 text-zinc-100  border-amber-400 px-1 py-[2px] mx-1 rounded">
                  onkeyup
                </span>
              </li>
              <li>
                <span className="bg-gray-800 border-b-2 text-zinc-100  border-amber-400 px-1 py-[2px] mx-1 rounded">
                  onload
                </span>
              </li>
              <li>
                <span className="bg-gray-800 border-b-2 text-zinc-100  border-amber-400 px-1 py-[2px] mx-1 rounded">
                  onblur
                </span>
              </li>
              <li>
                <span className="bg-gray-800 border-b-2 text-zinc-100  border-amber-400 px-1 py-[2px] mx-1 rounded">
                  ...
                </span>
              </li>
            </ul>
          </article>
          <span id="todo-list" />
          <IndexTitle>TODO List</IndexTitle>
          <article>
            <p className="list-css-span">
              Para aplicar algunas de las cosas que hemos aprendido en esta
              conferencia, trabajemos en la creación de una lista de tareas
              <span className="text-amber-400 bg-gray-800">
                (TODO List)
              </span>{' '}
              completamente en JavaScript. Comenzaremos escribiendo la
              estructura HTML de la página. Observa a continuación cómo dejamos
              espacio para una lista no ordenada, pero aún no agregamos
              elementos a ella. También observa que agregamos un enlace a
              <span>tasks.js</span>, donde escribiremos nuestro JavaScript.
            </p>
            <Pre lang="html">{
              /*html */ `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Tareas</title>
                </head>
                <body>
                    <h1>Lista de Tareas</h1>
                    <ul id="tareas"></ul>
                  <form id="taskForm">
                    <input id="task" placeholder="Nueva Tarea" type="text" />
                    <button id="submit" type="submit">Agregar Tarea</button>
                  </form>
                    </body>
                </html>
                `
            }</Pre>
            <p className="list-css-span">
              Ahora, aquí está nuestro código que podemos mantener en
              <span className="bg-gray-800 border-b-2 text-zinc-100 border-amber-400 px-1 py-[2px] mx-1 rounded">
                tasks.js
              </span>
              . Algunas notas sobre lo que verás a continuación:
            </p>
            <ul className="list-css-span">
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
                <span>.length</span>
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
                <LinkButton
                  url="https://www.w3schools.com/jsref/met_document_createelement.asp"
                  color="orange"
                  iconName="ArrowUpRight"
                >
                  createElement
                </LinkButton>
                . Luego, podemos agregar esos elementos al DOM utilizando la
                función
                <span>append</span>.
              </li>
            </ul>
            <Pre lang="javascript">{
              /*javascript */ `
              // Espera a que el DOM esté completamente cargado antes de ejecutar el código
              document.addEventListener('DOMContentLoaded', function() {
                // Función auxiliar para seleccionar elementos del DOM
                const $ = (selector) => document.querySelector(selector);
              
                // Obtén referencias a los elementos del DOM que necesitaremos
                const tasksList = $('#tareas'); // Lista de tareas (ul)
                const taskForm = $('#taskForm'); // Formulario de tareas
                const newTaskInput = $('#task'); // Input para la nueva tarea
              
                // Agrega un evento de escucha al formulario cuando se envía
                taskForm.addEventListener('submit', function(event) {
                  // Previene el comportamiento predeterminado del formulario (evita la recarga de la página)
                  event.preventDefault();
              
                  // Obtiene el texto de la nueva tarea y elimina los espacios en blanco al principio y al final
                  const taskText = newTaskInput.value.trim();
              
                  // Verifica que el texto de la tarea no esté vacío
                  if (taskText !== "") {
                    // Crea un nuevo elemento de lista (li) en el DOM
                    const li = document.createElement('li');
              
                    // Establece el texto del elemento de lista con el texto de la nueva tarea
                    li.textContent = taskText;
              
                    // Agrega el elemento de lista a la lista de tareas (ul)
                    tasksList.appendChild(li);
              
                    // Limpia el input de la nueva tarea después de agregarla a la lista
                    newTaskInput.value = "";
                  }
                });
                });
              
                `
            }</Pre>
            <div className="images-client">
              <video src="/images/tasks.mp4" autoPlay loop muted />
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
            <LinkButton
              url="https://www.w3schools.com/jsref/met_win_setinterval.asp"
              color="orange"
              iconName="ArrowUpRight"
            >
              setIntervals
            </LinkButton>
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
          <ImageComponent
            src="/images/count4.gif"
            altImage="Contador de javascript"
          />
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
            <ul className="list-css-span">
              <li>
                <span>localStorage.getItem(key)</span>: Esta función busca una
                entrada en el almacenamiento local con una clave dada y devuelve
                el valor asociado con esa clave.
              </li>
              <li>
                <span>localStorage.setItem(key, value)</span>: Esta función
                establece una entrada en el almacenamiento local, asociando la
                clave con un nuevo valor.
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
          <article>
            <p>
              las APIs (Interfaz de Programación de Aplicaciones) pueden
              referirse a diversas interfaces que permiten a los desarrolladores
              interactuar con funciones específicas de plataformas, navegadores
              web u otros servicios. A continuación, se mencionan algunos tipos
              comunes de APIs en el contexto de JavaScript:
            </p>
            <ol className="list-css-span">
              <li>
                <span>APIs del Navegador (Web APIs):</span>
                Los navegadores web proporcionan una serie de APIs que permiten
                a los desarrolladores interactuar con funciones específicas del
                navegador. Algunas de las APIs del navegador más comunes
                incluyen:
                <ul>
                  <li>
                    DOM API: Para manipular la estructura del documento HTML y
                    XML.
                  </li>
                  <li>
                    XMLHttpRequest / Fetch API: Para realizar solicitudes HTTP
                    desde el navegador.
                  </li>
                  <li>
                    Geolocation API: Para acceder a la ubicación del usuario.
                  </li>
                  <li>Canvas API: Para dibujar gráficos en el navegador.</li>
                  <li>
                    Web Storage API: Para almacenar datos localmente en el
                    navegador.
                  </li>
                </ul>
              </li>
              <li>
                <span>APIs de terceros:</span>
                Muchos servicios externos ofrecen APIs que permiten a los
                desarrolladores interactuar con sus plataformas y acceder a sus
                datos. Ejemplos incluyen:
                <ul>
                  <li>API de Twitter: Para acceder a datos de Twitter.</li>
                  <li>
                    API de Google Maps: Para integrar mapas en una aplicación.
                  </li>
                  <li>
                    API de OpenWeatherMap: Para obtener datos meteorológicos.
                  </li>
                </ul>
              </li>
              <li>
                <span>Node.js APIs:</span>
                En el entorno del servidor con Node.js, existen APIs
                incorporadas para realizar operaciones de entrada/salida,
                manejar eventos y más.
                <ul>
                  <li>
                    File System API: Para interactuar con el sistema de
                    archivos.
                  </li>
                  <li>
                    HTTP / HTTPS API: Para crear servidores y realizar
                    solicitudes HTTP.
                  </li>
                  <li>EventEmitter API: Para trabajar con eventos.</li>
                </ul>
              </li>
              <li>
                <span>APIs de Base de Datos</span>
                Al trabajar con bases de datos, se utilizan APIs específicas
                para interactuar con la base de datos. Por ejemplo:
                <ul>
                  <li>
                    MongoDB tiene su propia API para interactuar con bases de
                    datos NoSQL.
                  </li>
                  <li>
                    MySQL proporciona una API para trabajar con bases de datos
                    relacionales.
                  </li>
                </ul>
              </li>
              <li>
                <span>APIs de Servicios en la Nube</span>
                Muchos servicios en la nube ofrecen APIs para interactuar con
                sus servicios. Ejemplos incluyen:
                <ul>
                  <li>
                    AWS SDK: Para interactuar con los servicios de Amazon Web
                    Services.
                  </li>
                  <li>
                    Google Cloud Client Libraries: Para acceder a servicios en
                    la nube de Google.
                  </li>
                </ul>
              </li>
              <li>
                <span>RESTful APIs y GraphQL:</span>
                Muchas aplicaciones web modernas utilizan APIs RESTful o GraphQL
                para la comunicación entre el cliente y el servidor.
              </li>
            </ol>
            <p>
              Estas son solo algunas categorías de APIs en el contexto de
              JavaScript. La elección de una API específica dependerá del tipo
              de desarrollo que estés realizando y de los servicios con los que
              necesitas interactuar.
            </p>
          </article>
          <span id="objetos" />
          <SectionTitle title="Objetos en Javascript" />
          <p>
            Un
            <LinkButton
              url="https://www.w3schools.com/js/js_objects.asp"
              color="orange"
              iconName="ArrowUpRight"
            >
              objeto de JavaScript
            </LinkButton>
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
          <ImageComponent src="/images/console.png" altImage="Consola" />
          <p>
            Una forma en la que los objetos de JavaScript son realmente útiles
            es en la transferencia de datos de un sitio a otro, especialmente al
            usar
            <LinkButton
              url="https://www.mulesoft.com/resources/api/what-is-an-api"
              color="orange"
              iconName="ArrowUpRight"
            >
              APIs
            </LinkButton>
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
            <LinkButton
              url="https://www.w3schools.com/js/js_json_intro.asp"
              color="orange"
              iconName="ArrowUpRight"
            >
              JSON
            </LinkButton>
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
          <IndexTitle>Cambio de moneda</IndexTitle>
          <article>
            <p>
              Para mostrar cómo podemos usar API en nuestras aplicaciones,
              trabajemos en la construcción de una aplicación donde podemos
              encontrar tasas de cambio entre dos monedas. A lo largo del
              ejercicio, utilizaremos la API de tipos de cambio del
              <LinkButton
                url="https://exchangeratesapi.io/"
                color="orange"
                iconName="ArrowUpRight"
              >
                Banco Central Europeo
              </LinkButton>
              . Si visitas su sitio web, verás la documentación de la API, que
              generalmente es un buen lugar para comenzar cuando deseas utilizar
              una API. Podemos probar esta API visitando la URL:
              <LinkButton
                u="https://api.exchangeratesapi.io/latest?base=USD"
                color="orange"
                iconName="ArrowUpRight"
              >
                https://api.exchangeratesapi.io/latest?base=USD
              </LinkButton>
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
            <p className="list-css-span">
              Ahora, utilizaremos algo llamado AJAX, o Asynchronous JavaScript
              And XML (JavaScript y XML asincrónicos), que nos permite acceder a
              información de páginas externas incluso después de que nuestra
              página se haya cargado. Para hacerlo, utilizaremos la función
              fetch, que nos permitirá enviar una solicitud<span>HTTP</span>. La
              función fetch devuelve una promesa. No entraremos en detalles
              sobre qué es una promesa aquí, pero podemos pensar en ella como un
              valor que llegará en algún momento, pero no necesariamente de
              inmediato. Tratamos con promesas proporcionándoles un atributo
              <span>.then</span>que describe qué hacer cuando obtenemos una
              respuesta. El fragmento de código a continuación registrará
              nuestra respuesta en la consola.
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
            <ImageComponent src="/images/curr_log.png" altImage="Log" />
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
            <ImageComponent
              src="/images/exchange.png"
              altImage="Intercambio de divisas"
            />
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
            <p>
              A continuación veremos un ejemplo que lo tengo implementado en el
              sitio.
            </p>
            <span id="cambio-divisas" />
            <SectionTitle title="Convertir Divisas" />
            <CurrencyConverter />
            <p className="list-css-span">
              Más adelante vamos a ver como uso este ejemplo de API routes de
              Next.js donde actualizo los datos desde Google Sheets (Como base
              de datos dinámica), haciendo un fetch del link del archivo
              <span>.csv</span>el cual podemos actualizar los valores de las
              divisas.
            </p>
          </article>
          <JavascriptExample />
          <p>
            ¡Eso es todo para este curso de
            <b className="px-1 py-[2px] bg-[#F7DF1E] mx-1 text-md text-black">
              Js
            </b>
            ! La próxima vez, trabajaré para crear interfaces de usuario aún más
            atractivas.
          </p>
          <ShareButton setTitle={JavaScript.title} />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

JavaScript.title = '🚀 Aprende Javascript en Neotecs!';
