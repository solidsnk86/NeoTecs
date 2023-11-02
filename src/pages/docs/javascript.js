import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';

export default function JavaScript() {
  const JavascriptTitle = ({ Tag = 'h1', children }) => {
    return <Tag className="text-slate-100 font-mono">{children}</Tag>;
  };
  const Header = ({ Tag = 'h2', children }) => {
    return <Tag className="text-slate-100">{children}</Tag>;
  };
  return (
    <main>
      <TitlesContextProvider>
        <Nav className="backdrop-blur-md bg-transparent fixed w-full h-12 z-30" />
        <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
          <LectureNav />
          <div className="w-full max-w-none prose px-4 md:px-8 text-slate-100">
            <NavSwitch inline />
            <JavascriptTitle>Javascript</JavascriptTitle>
            <hr />
            <Header>Indice</Header>
            <ol>
              <li>Introducción</li>
              <li>JavaScript</li>
              <li>Eventos</li>
              <li>Variables</li>
              <li>querySelector</li>
              <li>Manipulación del DOM</li>
              <ul>
                <li>Consola de JavaScript</li>
                <li>Funciones de flecha</li>
                <li>Lista de tareas pendientes (TODO List)</li>
              </ul>
              <li>Intervalos</li>
              <li>Almacenamiento local</li>
              <li>APIs</li>
              <li>Objetos en JavaScript</li>
              <li>Cambio de moneda</li>
            </ol>
            <SectionTitle title="Introducción a Javascript" />
            <ul>
              <li>
                Hasta ahora, hemos discutido cómo construir páginas web simples
                utilizando HTML y CSS, y cómo utilizar Git y GitHub para
                realizar un seguimiento de los cambios en nuestro código y
                colaborar con otros. También nos hemos familiarizado con el
                lenguaje de programación Python, hemos comenzado a utilizar
                Django para crear aplicaciones web y hemos aprendido a utilizar
                los modelos de Django para almacenar información en nuestros
                sitios.
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/1200px-Client-server-model.svg.png"
                alt="Diagrama"
              />
            </div>
            <p>
              Recuerda que en la mayoría de las interacciones en línea, tenemos
              un cliente/usuario que envía una solicitud HTTP a un servidor, que
              devuelve una respuesta HTTP. Todo el código Python que hemos
              escrito hasta ahora utilizando Django se ha ejecutado en un
              servidor. JavaScript nos permitirá ejecutar código en el lado del
              cliente, lo que significa que no es necesario interactuar con el
              servidor mientras se está ejecutando, lo que permite que nuestros
              sitios web sean mucho más interactivos.
            </p>
            <p>
              Para agregar algo de JavaScript a nuestra página, podemos agregar
              un par de etiquetas
              <span className="text-[#43A18E] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                {'<script>'}
              </span>
              en algún lugar de nuestra página HTML. Usamos las etiquetas
              <span className="text-[#43A18E] mx-1 bg-[#1E1E1E] px-1 py-[2px] rounded">
                {'<script>'}
              </span>
              para indicar al navegador que cualquier cosa que escribamos entre
              las dos etiquetas es código JavaScript que deseamos ejecutar
              cuando un usuario visita nuestro sitio. Nuestro primer programa
              podría verse algo así:
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
                página. Casi todo lo que un usuario hace para interactuar con
                una página web se puede considerar como un evento. En
                JavaScript, utilizamos
                <Link
                  href="https://www.w3schools.com/js/js_htmldom_eventlistener.asp"
                  className="mx-1 text-amber-600"
                >
                  Escuchadores de Eventos
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
              Ahora, trabajemos en ejecutar esta función cada vez que se haga
              clic en un botón. Para hacerlo, crearemos un botón HTML en nuestra
              página con un atributo onclick, que proporciona al navegador
              instrucciones sobre lo que debe suceder cuando se hace clic en el
              botón:
            </p>
            <Pre lang="html">{
              /*html */ `
                <button onclick="hola()">Click Here</button>
                `
            }</Pre>
            <SectionTitle title="Variables" />
            <article>
              <p>
                JavaScript es un lenguaje de programación, al igual que Python,
                C o cualquier otro lenguaje con el que hayas trabajado antes, lo
                que significa que tiene muchas de las mismas características que
                otros lenguajes, incluyendo variables. Hay tres palabras clave
                que podemos usar para asignar valores en JavaScript:
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
                  <span>let</span>: se utiliza para definir una variable que
                  está limitada en alcance al bloque actual, como una función o
                  un bucle.
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
                <img
                  src="/images/javascript-alert-count.png"
                  alt="alert-count"
                />
              </div>
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
                para extraer un encabezado. Luego, para manipular el elemento
                que hemos encontrado recientemente, podemos cambiar su propiedad
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
                como una comparación más estricta entre dos elementos que
                también verifica que los objetos sean del mismo tipo. Por lo
                general, es recomendable usar
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
                <img
                  src="https://cs50.harvard.edu/web/2020/notes/5/images/toggle.gif"
                  alt="javascript-query"
                />
              </div>
            </article>
            <SectionTitle title="Manipuación del DOM" />
            <article>
              <p>
                Utilicemos esta idea de manipulación del DOM para mejorar
                nuestra página de contador:
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
                <img
                  src="https://cs50.harvard.edu/web/2020/notes/5/images/count2.gif"
                  alt="javascript-query"
                />
              </div>
              <p>
                Podemos hacer que esta página sea aún más interesante mostrando
                una alerta cada vez que el contador llegue a un múltiplo de
                diez. En esta alerta, queremos formatear una cadena para
                personalizar el mensaje, lo cual en JavaScript podemos hacer
                utilizando plantillas literales (template literals). Las
                plantillas literales requieren que haya comillas invertidas
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
                alrededor de cualquier sustitución. Por ejemplo, cambiemos
                nuestra función de conteo de la siguiente manera:
              </p>
              <Pre lang="javascript">{
                /*javascript */ `
                function count() {
                    counter++;
                    document.querySelector('h1').innerHTML = counter;
                    
                    if (counter % 10 === 0) {
                        alert('Count is now \${{counter}}')
                    }
                }
                `
              }</Pre>
            </article>
            <SectionTitle title="Intérvalos" />
            <SectionTitle title="Almacenamieno local" />
            <SectionTitle title="APIs" />
            <SectionTitle title="Objetos en Javascript" />
          </div>
        </div>
      </TitlesContextProvider>
    </main>
  );
}
