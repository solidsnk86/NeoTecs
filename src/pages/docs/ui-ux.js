import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import Link from 'next/link';
import { OpenInNew } from '@mui/icons-material';
import { InfoIcon } from 'lucide-react';

export default function UiUx() {
  const UiUxTitle = ({ Tag = 'h1', children }) => {
    return <Tag className="text-text-primary font-mono">{children}</Tag>;
  };
  const Header = ({ Tag = 'h2', children }) => {
    return <Tag className="text-text-primary">{children}</Tag>;
  };
  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-30" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <LectureNav />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <UiUxTitle>Interfaces de Usuario - UI/UX</UiUxTitle>
          <hr className="border-text-primary" />
          <Header>Índice</Header>
          <ol className="indice">
            <li>
              <a href="#introducción">Introducción</a>
            </li>
            <li>
              <a href="#interfaces-de-usuario">Interfaces de usuario</a>
            </li>
            <li>
              <a href="#aplicaciones-de-una-página">
                Aplicaciones de una página
              </a>
            </li>
            <li>
              <a href="#scroll">Scroll</a>
              <ul>
                <li>
                  <a href="#scroll-infintio">Scroll infinito</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#animación">Animación</a>
            </li>
            <li>
              <a href="#react">React</a>
              <ul>
                <li>
                  <a href="#adicion">Adición</a>
                </li>
              </ul>
            </li>
          </ol>
          <SectionTitle title="Introducción" />
          <article>
            <p>
              Hasta ahora, hemos discutido cómo construir páginas web simples
              utilizando HTML y CSS, y cómo utilizar Git y GitHub para realizar
              un seguimiento de los cambios en nuestro código y colaborar con
              otros. También nos familiarizamos con el lenguaje de programación
              Python, comenzamos a utilizar Django para crear aplicaciones web y
              aprendimos a utilizar los modelos de Django para almacenar
              información en nuestros sitios. Luego, introdujimos JavaScript y
              aprendimos cómo utilizarlo para hacer que las páginas web sean más
              interactivas.
            </p>
            <p>
              Hoy, discutiremos paradigmas comunes en el diseño de interfaces de
              usuario, utilizando JavaScript y CSS para hacer que nuestros
              sitios sean aún más amigables para el usuario.
            </p>
          </article>
          <SectionTitle title="Interfaces de Usuario" />
          <article>
            <p>
              Una interfaz de usuario es la forma en que los visitantes
              interactúan con una página web. Nuestro objetivo como
              desarrolladores web es hacer que estas interacciones sean lo más
              agradables posible para el usuario, y hay muchos métodos que
              podemos usar para lograrlo.
            </p>
          </article>
          <SectionTitle title="Aplicaciones de una página" />
          <article>
            <p>
              Anteriormente, si queríamos un sitio web con múltiples páginas, lo
              lograríamos utilizando diferentes rutas en nuestra aplicación
              Django. Ahora, tenemos la capacidad de cargar solo una página y
              luego utilizar JavaScript para manipular el DOM. Una gran ventaja
              de hacer esto es que solo necesitamos modificar la parte de la
              página que realmente está cambiando. Por ejemplo, si tenemos una
              barra de navegación que no cambia según la página actual, no
              querríamos tener que volver a renderizar esa barra de navegación
              cada vez que cambiamos a una nueva parte de la página.
            </p>
            <p>
              Veamos un ejemplo de cómo podríamos simular el cambio de página en
              JavaScript:
            </p>
            <Pre lang="html">{
              /*html */ `
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <title>Single Page</title>
                        <style>
                            div {
                                display: none;
                            }
                        </style>
                        <script src="singlepage.js"></script>
                    </head>
                    <body>
                        <button data-page="page1">Page 1</button>
                        <button data-page="page2">Page 2</button>
                        <button data-page="page3">Page 3</button>
                        <div id="page1">
                            <h1>This is page 1</h1>
                        </div>
                        <div id="page2">
                            <h1>This is page 2</h1>
                        </div>
                        <div id="page3">
                            <h1>This is page 3</h1>
                        </div>
                    </body>
                </html>
                `
            }</Pre>
            <div className="images-client">
              <video
                src="/images/aplicacion-de-una-pagina-0.mp4"
                autoPlay
                muted
                loop
              />
            </div>
            <p className="list-css-span">
              Observa en el HTML anterior que tenemos tres botones y tres
              divisiones<span>divs</span>. En este momento, las divisiones
              contienen solo un poco de texto e imágenes, pero podríamos
              imaginar que cada div contiene el contenido de una página en
              nuestro sitio. Ahora, agregaremos algo de JavaScript que nos
              permita utilizar los botones para cambiar entre páginas.
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
              // Muestra una página y oculta las otras dos
              function showPage(page) {
              
                  // Oculta todas las divisiones (divs):
                  document.querySelectorAll('div').forEach(div => {
                      div.style.display = 'none';
                  });
              
                  // Muestra la div proporcionada en el argumento
                  document.querySelector(\`#\${page}\`).style.display = 'block';
              }
              
              // Espera a que la página se cargue:
              document.addEventListener('DOMContentLoaded', function() {
              
                  // Selecciona todos los botones
                  document.querySelectorAll('button').forEach(button => {
              
                      // Cuando se hace clic en un botón, cambia a esa página
                      button.onclick = function() {
                          showPage(this.dataset.page);
                      }
                  })
              });
              
                `
            }</Pre>
            <p className="list-css-span">
              En muchos casos, sería ineficiente cargar todo el contenido de
              cada página cuando visitamos un sitio por primera vez, por lo que
              necesitaremos utilizar un servidor para acceder a nuevos datos.
              Por ejemplo, al visitar un sitio de noticias, llevaría demasiado
              tiempo cargar todas las noticias disponibles cuando se visita la
              página por primera vez. Podemos evitar este problema utilizando
              una estrategia similar a la que utilizamos al cargar tasas de
              cambio de divisas en curso de javascript anterior. En esta
              ocasión, echaremos un vistazo a cómo utilizar Django para enviar y
              recibir información desde nuestra aplicación de una sola página.
              Para mostrar cómo funciona esto, echemos un vistazo a una
              aplicación Django simple. Tiene dos patrones de URL en
              <span>urls.py</span>:
            </p>
            <Pre lang="python">{
              /*python */ `
              urlpatterns = [
                path("", views.index, name="index"),
                path("sections/<int:num>", views.section, name="section")
            ]
              `
            }</Pre>
            <p>
              Y dos rutas correspondientes en views.py. Observa que la ruta
              "section" toma un entero y luego devuelve una cadena de texto
              basada en ese entero como una respuesta HTTP.
            </p>
            <Pre lang="python">{
              /*python */ `
              from django.http import Http404, HttpResponse
              from django.shortcuts import render
              
              # Create your views here.
              def index(request):
                  return render(request, "singlepage/index.html")
              
              # The texts are much longer in reality, but have
              # been shortened here to save space
              texts = ["Text 1", "Text 2", "Text 3"]
              
              def section(request, num):
                  if 1 <= num <= 3:
                      return HttpResponse(texts[num - 1])
                  else:
                      raise Http404("No such section")
              `
            }</Pre>
            <p>
              Ahora, dentro de nuestro archivo index.html, aprovecharemos AJAX,
              que aprendimos en el curso anterior de
              <Link
                href="/docs/django#django"
                className="mx-1 underline text-lime-500"
              >
                Django
                <OpenInNew className="link-icon" />
              </Link>
              , para realizar una solicitud al servidor y obtener el texto de
              una sección específica para mostrarlo en la pantalla:
            </p>
            <Pre lang="jsx">{
              /*javascript */ `
              <!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>Página Simple</title>
                </head>
                <body>
                  <button data-page="page1">Página 1</button>
                  <button data-page="page2">Página 2</button>
                  <button data-page="page3">Página 3</button>
                  <div id="page1">
                    <h1>Esta es la página 1</h1>
                  </div>
                  <div id="page2">
                    <h1>Esta es la página 2</h1>
                    <p>Y la podemos llenar de contenido como un lorem ipsum dolor...</p>
                    <p>O archivos multimedia..</p>
                    <img 
                    src="https://github.com/solidsnk86/GerArt/blob/master/assets/img/portfolio/Varios-HellBoy.jpg?raw=true" 
                    alt="Tremendo dibujo!"
                    width="400"
                    height="300"
                    />
                  </div>
                  <div id="page3">
                    <h1>Esta es la página 3</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ol>
                      <li>
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                          ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                          eu fugiat nulla pariatur.
                      </li>
                    </ol>
                  </div>
                  <script>
                    function showPage(page) {
                      document.querySelectorAll("div").forEach((div) => {
                        div.style.display = "none";
                      });
                      document.querySelector(\`#$\{page}\`).style.display = "block";
                    }
                    document.addEventListener("DOMContentLoaded", function () {
                      document.querySelectorAll("button").forEach((button) => {
                        button.onclick = function () {
                          showPage(this.dataset.page)
                        }
              `
            }</Pre>
            <div className="images-client">
              <video
                src="/images/aplicacion-de-una-pagina.mp4"
                autoPlay
                muted
                loop
              />
            </div>
            <p>
              Ahora, hemos creado un sitio donde podemos cargar nuevos datos
              desde un servidor sin recargar toda nuestra página HTML. Sin
              embargo, una desventaja de nuestro sitio es que la URL es menos
              informativa. Te darás cuenta en el video anterior que la URL sigue
              siendo la misma incluso cuando cambiamos de sección a sección.
              Podemos resolver este problema utilizando la
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/API/History_API"
                className="mx-1 text-lime-500 underline"
              >
                API de Historial de JavaScript
                <OpenInNew className="link-icon" />
              </Link>
              . Esta API nos permite agregar información a nuestro historial de
              navegación y actualizar manualmente la URL. Veamos cómo podemos
              usar esta API. Imagina que tenemos un proyecto Django idéntico al
              anterior, pero esta vez queremos modificar nuestro script para
              emplear la API de historial:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
              // cuando hacemos click en el botón atrás, muestra la sección previa
              window.onpopstate = function(event) {
                  console.log(event.state.section);
                  showSection(event.state.section);
              }
              
              function showSection(section) {
                  fetch(\`/sections/\${section}\`)
                  .then(response => response.text())
                  .then(text => {
                      console.log(text);
                      document.querySelector('#content').innerHTML = text;
                  });
              
              }
              
              document.addEventListener('DOMContentLoaded', function() {
                  document.querySelectorAll('button').forEach(button => {
                      button.onclick = function() {
                          const section = this.dataset.section;
              
                          // Añade el estado actual al historial
                          history.pushState({section: section}, "", \`section\${section}\`);
                          showSection(section);
                      };
                  });
              });
              `
            }</Pre>
            <p className="list-css-span">
              En la función<span>showSection</span>anterior, utilizamos la
              función
              <span>history.pushState</span>. Esta función agrega un nuevo
              elemento a nuestro historial de navegación basado en tres
              argumentos:
            </p>
            <ol>
              <li>Cualquier dato asociado con el estado.</li>
              <li>
                Un parámetro de título ignorado por la mayoría de los
                navegadores web.
              </li>
              <li>Lo que debería mostrarse en la URL.</li>
            </ol>
            <p>
              El otro cambio que realizamos en el JavaScript anterior es
              establecer el parámetro onpopstate, que especifica qué deberíamos
              hacer cuando el usuario hace clic en la flecha hacia atrás. En
              este caso, queremos mostrar la sección anterior cuando se presiona
              el botón de retroceso. Ahora, el sitio parece un poco más amigable
              para el usuario:
            </p>
            <div className="images-client">
              <img src="/images/singlepage3.gif" alt="Demostración de código" />
            </div>
          </article>
          <SectionTitle title="Scroll" />
          <article>
            <p>
              Para actualizar y acceder al historial del navegador, utilizamos
              un objeto JavaScript importante conocido como window. Hay algunas
              otras propiedades de window que podemos utilizar para mejorar la
              apariencia de nuestros sitios:
            </p>
            <ul className="list-css-span">
              <li>
                <span>window.innerWidth</span>: Ancho de la ventana en píxeles.
              </li>
              <li>
                <span>window.innerHeight</span>: Altura de la ventana en
                píxeles.
              </li>
            </ul>
            <div className="images-client">
              <img
                src="/images/innerMeasures.png"
                alt="Demostración de código"
              />
            </div>
            <p>
              Mientras que window representa lo que actualmente es visible para
              el usuario, document se refiere a toda la página web, que a menudo
              es mucho más grande que la ventana, obligando al usuario a
              desplazarse hacia arriba y hacia abajo para ver el contenido de la
              página. Para trabajar con el desplazamiento, tenemos acceso a
              otras variables:
            </p>
            <ul className="list-css-span">
              <li>
                <span>window.scrollY</span>: Cuántos píxeles hemos desplazado
                desde la parte superior de la página.
              </li>
              <li>
                <span>document.body.offsetHeight</span>: La altura en píxeles de
                todo el documento.
              </li>
            </ul>
            <div className="images-client">
              <img src="/images/scroll.png" alt="Demostración de código" />
            </div>
            <p className="list-css-span">
              Podemos utilizar estas medidas para determinar si el usuario ha
              llegado al final de una página mediante la comparación
              <span>
                window.scrollY + window.innerHeight {'>='}
                document.body.offsetHeight
              </span>
              . La siguiente página, por ejemplo, cambiará el color de fondo a
              verde cuando lleguemos al final de la página:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <title>Scroll</title>
                      <script>
                          // Evento escuchador para el deslizamiento (scrolling)
                          window.onscroll = () => {
              
                              // Chequeamos si estamos en el fondo
                              if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
              
                                  // Cambiar color a verde
                                  document.querySelector('body').style.background = 'green';
                              } else {
              
                                  // Cambiar color a blanco
                                  document.querySelector('body').style.background = 'white';
                              }
                          };
                      </script>
                  </head>
                  <body>
                      <p>1</p>
                      <p>2</p>
                      <!-- Más párrafos que dejarán guardar el espacio -->
                      <p>99</p>
                      <p>100</p>
                  </body>
              </html
              `
            }</Pre>
            <div className="images-client">
              <video src="/images/scroll-1.mp4" autoPlay muted loop />
            </div>
          </article>
          <SectionTitle title="Scroll Infinito" />
          <article>
            <p className="list-css-span">
              Cambiar el color de fondo al final de la página probablemente no
              sea muy útil, pero puede que queramos detectar que hemos llegado
              al final de la página si queremos implementar un desplazamiento
              infinito. Por ejemplo, si estás en un sitio de redes sociales, no
              querrás cargar todas las publicaciones de una vez; podrías querer
              cargar las primeras diez y, luego, cuando el usuario llegue al
              final, cargar las siguientes diez. Echemos un vistazo a una
              aplicación de Django que podría hacer esto. Esta aplicación tiene
              dos rutas en<span>urls.py</span>.
            </p>
            <Pre lang="python">{
              /*python */ `
              urlpatterns = [
                path("", views.index, name="index"),
                path("posts", views.posts, name="posts")
            ]
              `
            }</Pre>
            <p className="list-css-span">
              Y dos vistas correspondientes a<span>views.py</span>:
            </p>
            <Pre lang="python">{
              /*python */ `
              import time

              from django.http import JsonResponse
              from django.shortcuts import render
              
              # Create your views here.
              def index(request):
                  return render(request, "posts/index.html")
              
              def posts(request):
              
                  # Get start and end points
                  start = int(request.GET.get("start") or 0)
                  end = int(request.GET.get("end") or (start + 9))
              
                  # Generate list of posts
                  data = []
                  for i in range(start, end + 1):
                      data.append(f"Post #{i}")
              
                  # Artificially delay speed of response
                  time.sleep(1)
              
                  # Return list of posts
                  return JsonResponse({
                      "posts": data
                  })
              `
            }</Pre>
            <p className="list-css-span">
              Ten en cuenta que la vista de<span>publicaciones</span>requiere
              dos argumentos: un punto de<span>inicio</span>y un punto
              <span>final</span>. En esta vista, hemos creado nuestra propia
              API, que podemos probar visitando la URL
              <span>localhost:8000/posts?start=10&end=15</span>, la cual
              devuelve el siguiente JSON:
            </p>
            <Pre lang="json">{
              /*json */ `
              {
                "posts": [
                    "Post #10",
                    "Post #11", 
                    "Post #12", 
                    "Post #13", 
                    "Post #14", 
                    "Post #15"
                ]
            }
              `
            }</Pre>
            <p className="list-css-span">
              Ahora, en la plantilla<span>index.html</span>que carga el sitio,
              comenzamos con solo un<span>div</span>vacío en el cuerpo y algún
              estilo. Observa que cargamos nuestros archivos estáticos al
              principio y luego hacemos referencia a un archivo JavaScript
              dentro de nuestra carpeta<span>estática</span>.
            </p>
            <Pre lang="html">{
              /*html */ `
              {% load static %}
              <!DOCTYPE html>
              <html>
                  <head>
                      <title>My Webpage</title>
                      <style>
                          .post {
                              background-color: #77dd11;
                              padding: 20px;
                              margin: 10px;
                          }
              
                          body {
                              padding-bottom: 50px;
                          }
                      </style>
                      <script scr="{% static 'posts/script.js' %}"></script>
                  </head>
                  <body>
                      <div id="posts">
                      </div>
                  </body>
              </html>
              `
            }</Pre>
            <p>
              Ahora, con JavaScript, esperaremos hasta que un usuario haga
              scroll hasta el final de la página y luego cargaremos más
              publicaciones utilizando nuestra API:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
              // Comenzar con la primera publicación
              let counter = 1;
              
              // Cargar 20 publicaciones a la vez
              const quantity = 20;
              
              // Cuando el DOM se carga, renderizar las primeras 20 publicaciones
              document.addEventListener('DOMContentLoaded', load);
              
              // Si se hace scroll hasta el final, cargar las siguientes 20 publicaciones
              window.onscroll = () => {
                  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                      load();
                  }
              };
              
              // Cargar el próximo conjunto de publicaciones
              function load() {
              
                  // Establecer números de inicio y fin de las publicaciones, y actualizar el contador
                  const start = counter;
                  const end = start + quantity - 1;
                  counter = end + 1;
              
                  // Obtener nuevas publicaciones y agregarlas
                  fetch(\`/posts?start=\${start}&end=\${end}\`)
                  .then(response => response.json())
                  .then(data => {
                      data.posts.forEach(add_post);
                  })
              };
              
              // Agregar una nueva publicación con el contenido dado al DOM
              function add_post(contents) {
              
                  // Crear nueva publicación
                  const post = document.createElement('div');
                  post.className = 'post';
                  post.innerHTML = contents;
              
                  // Agregar la publicación al DOM
                  document.querySelector('#posts').append(post);
              };
              `
            }</Pre>
            <div className="images-client">
              <img src="/images/infscroll.gif" alt="Descripción del código." />
            </div>
          </article>
          <SectionTitle title="Animación" />
          <article>
            <p>
              Otra forma de hacer que nuestros sitios sean un poco más
              interesantes es añadiendo alguna animación a ellos. Resulta que,
              además de proporcionar estilos, CSS nos facilita la tarea de
              animar elementos HTML.
            </p>
            <p>
              Para crear una animación en CSS, utilizamos el formato que se
              muestra a continuación, donde los detalles de la animación pueden
              incluir estilos de inicio y fin (from y to), o estilos en
              diferentes etapas durante la duración (desde 0% hasta 100%). Por
              ejemplo:
            </p>
            <Pre lang="css">{
              /*css */ `
              @keyframes animation_name {
                from {
                    /* Algún estilo del inicio */
                }
            
                to {
                    /* Algún estilo del final */
                }
            }
              `
            }</Pre>
            <p>o también podemos usar un porcentaje:</p>
            <Pre lang="css">{
              /*css */ `
              @keyframes animation_name {
                0% {
                    /* Algún estilo del inicio */
                }
            
                75% {
                    /* Algún estilo de 3/4 de la animación */
                }
            
                100% {
                    /* Algún estilo del final */
                }
            }
              `
            }</Pre>
            <p>
              Luego, para aplicar una animación a un elemento, incluimos el
              nombre de la animación (animation-name), la duración de la
              animación (en segundos) y el modo de llenado de la animación (por
              lo general, forwards). Por ejemplo, aquí hay una página en la que
              un título crece cuando entramos por primera vez en la página:
            </p>
            <Pre lang="html">{
              /*html */ `
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <title>Animate</title>
                      <style>
                          @keyframes grow {
                              from {
                                  font-size: 20px;
                              }
                              to {
                                  font-size: 100px;
                              }
                          }
                          h1 {
                              animation-name: grow;
                              animation-duration: 2s;
                              animation-fill-mode: forwards;
                          }
                      </style>
                  </head>
                  <body>
                      <h1>Bienvenidos a Neotecs!</h1>
                  </body>
              </html>
              `
            }</Pre>
            <div className="images-client">
              <video src="/images/animation.mp4" autoPlay muted loop />
            </div>
            <p>
              Podemos hacer más que solo manipular el tamaño: el siguiente
              ejemplo muestra cómo podemos cambiar la posición de un encabezado
              simplemente modificando algunas líneas:
            </p>
            <Pre lang="css">{
              /*css */ `
              @keyframes move {
                0% {
                    left: 0%;
                }
                50% {
                    left: 50%;
                }
                100% {
                    left: 0%;
                }
            }
              `
            }</Pre>
            <p>
              Ahora, veamos cómo configurar algunas propiedades intermedias de
              CSS. Podemos especificar el estilo en cualquier porcentaje del
              recorrido de una animación. En el siguiente ejemplo, moveremos el
              título de izquierda a derecha y luego de nuevo a la izquierda,
              alterando solo la animación mencionada anteriormente.
            </p>
            <Pre lang="html">{
              /*html */ `
              <!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>Document</title>
                </head>
                <body>
                  <style>
                    @keyframes move {
                      0% {
                        left: 0%;
                      }
                      50% {
                        left: 50%;
                      }
                      100% {
                        left: 0%;
                      }
                    }
                    h1 {
                      position: relative;
                      animation-name: move;
                      animation-duration: 2s;
                      animation-fill-mode: forwards;
                    }
                  </style>
                  <h1>Bienvenidos!</h1>
                </body>
              </html>
              
              `
            }</Pre>
            <div className="images-client">
              <video src="/images/animation-1.mp4" autoPlay muted loop />
            </div>
            <p className="list-css-span">
              Si queremos repetir una animación varias veces, podemos cambiar la
              propiedad<span>animation-iteration-count</span>a un número mayor
              que uno (o incluso<span>infinite</span>para una animación sin
              fin). Hay muchas propiedades de animación que podemos establecer
              para cambiar diferentes aspectos de nuestra animación.
            </p>
            <p className="list-css-span">
              Además de CSS, podemos utilizar JavaScript para controlar aún más
              nuestras animaciones. Utilicemos nuestro ejemplo de encabezado en
              movimiento<span>(con repetición infinita)</span>para mostrar cómo
              podemos crear un botón que inicia y detiene la animación.
              Suponiendo que ya tenemos una animación, un botón y un encabezado,
              podemos agregar el siguiente script para iniciar y pausar la
              animación:
            </p>
            <Pre lang="javascript">{
              /*javascript*/ `
              document.addEventListener("DOMContentLoaded", function () {
                // Buscar el encabezdo
                const h1 = document.querySelector("h1");
        
                // Pausamos la anomación por defecto
                h1.style.animationPlayState = "paused";
        
                // Seleccionamos el botón para que espere el click
                document.querySelector("button").onclick = () => {
                  // Si la animación está pausada, comenzar la animación
                  if (h1.style.animationPlayState == "paused") {
                    h1.style.animationPlayState = "running";
                  }
        
                  // De otra manera, pausar la animación
                  else {
                    h1.style.animationPlayState = "paused";
                  }
                };
              });
              `
            }</Pre>
            <div className="images-client">
              <video src="/images/animation-3.mp4" autoPlay muted loop />
            </div>
            <p className="list-css-span">
              Ahora, veamos cómo podemos aplicar nuestro nuevo conocimiento de
              animaciones a la página de publicaciones que creamos
              anteriormente. Específicamente, supongamos que queremos la
              capacidad de ocultar las publicaciones una vez que hayamos
              terminado de leerlas. Imaginemos un proyecto de Django idéntico al
              que acabamos de crear, pero con HTML y JavaScript ligeramente
              diferentes. El primer cambio que haremos será en la función
              <span>add_post</span>, agregando esta vez también un botón al lado
              derecho de la publicación:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
              // Añadir un nuevo post con los contenidos dados al DOM
              function add_post(contents) {
              
                  // Crear un nuevo post
                  const post = document.createElement('div');
                  post.className = 'post';
                  post.innerHTML = \`\${contents} <button class="hide">Hide</button>\`;
              
                  // Añadir post al DOM
                  document.querySelector('#posts').append(post);
              };
              `
            }</Pre>
            <p className="list-css-span">
              Ahora, trabajaremos en ocultar una publicación cuando se hace clic
              en el botón de ocultar. Para hacer esto, agregaremos un event
              listener que se activa cada vez que un usuario hace clic en
              cualquier parte de la página. Luego, escribiremos una función que
              tome el evento como argumento, lo cual es útil porque podemos usar
              el atributo<span>event.target</span>para acceder a lo que se hizo
              clic. También podemos utilizar la clase `parentElement` para
              encontrar el elemento padre de un elemento dado en el DOM.
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
              // Al hacer click en el botón esconder, eliminar el post
              document.addEventListener('click', event => {
              
                  // Encontrar donde fue el click
                  const element = event.target;
              
                  // Chequear si el usuario hizo click en el botón hide
                  if (element.className === 'hide') {
                      element.parentElement.remove()
                  }
                  
              });
              `
            }</Pre>
            <div className="images-client">
              <video src="/images/hide-posts.mp4" autoPlay muted loop />
            </div>
            <p className="list-css-span">
              Ahora podemos ver que hemos implementado el botón de ocultar, pero
              no se ve tan bien como podría. Tal vez queremos que la publicación
              se desvanezca y se encoja antes de eliminarla. Para hacer esto,
              primero crearemos una animación CSS. La siguiente animación
              dedicará el 75% de su tiempo cambiando la<span>opacidad</span>de 1
              a 0, lo que esencialmente hace que la publicación se desvanezca
              lentamente. Luego, pasa el resto del tiempo moviendo todos sus
              atributos relacionados con la<span>altura</span>a 0, reduciendo
              efectivamente la publicación a nada.
            </p>
            <Pre lang="css">{
              /*css */ `
              @keyframes hide {
                0% {
                    opacity: 1;
                    height: 100%;
                    line-height: 100%;
                    padding: 20px;
                    margin-bottom: 10px;
                }
                75% {
                    opacity: 0;
                    height: 100%;
                    line-height: 100%;
                    padding: 20px;
                    margin-bottom: 10px;
                }
                100% {
                    opacity: 0;
                    height: 0px;
                    line-height: 0px;
                    padding: 0px;
                    margin-bottom: 0px;
                }
              }
              `
            }</Pre>
            <p className="list-css-span">
              A continuación, agregaríamos esta animación al CSS de nuestra
              publicación. Observa que inicialmente establecemos
              <span>animation-play-state</span>en<span>paused</span>, lo que
              significa que la publicación no estará oculta por defecto.
            </p>
            <Pre lang="css">{
              /*css */ `
              .post {
                background-color: #77dd11;
                padding: 20px;
                margin-bottom: 10px;
                animation-name: hide;
                animation-duration: 2s;
                animation-fill-mode: forwards;
                animation-play-state: paused;
              }
              `
            }</Pre>
            <p>
              Finalmente, queremos poder iniciar la animación una vez que se ha
              hecho clic en el botón de ocultar y luego eliminar la publicación.
              Podemos hacer esto editando nuestro JavaScript de arriba:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
              // Si el boton escucha el click, borrar el post
              document.addEventListener('click', event => {
              
                  // Encontar que fue clickeado
                  const element = event.target;
              
                  // Chequea si el usuario hizo click en el botón hide
                  if (element.className === 'hide') {
                      element.parentElement.style.animationPlayState = 'running';
                      element.parentElement.addEventListener('animationend', () => {
                          element.parentElement.remove();
                      });
                  }
                  
              });
              `
            }</Pre>
            <p>
              Estos son los códigos javascript que usé para las cartas y los
              posts de ejemplo:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
              // Esta constante sirve para dar formato a la fecha
              var date = new Date();
              const formatedDate = date.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });
              // Una vez que el DOM está cargado inserta la fecha en todos los posts
              document.addEventListener('DOMContentLoaded', () => {
                // Una manera fácil de crear un selector
                const $ = (selector) => document.querySelectorAll(selector);
                const posted = $('.posted');
                posted.forEach((p) => {
                    p.textContent = formatedDate
                })
              });
              `
            }</Pre>
            <p>
              Para que se guíen tenemos que tener un HTML de la siguiente
              manera:
            </p>
            <Pre lang="html">{
              /*html */ `
              <div class="posts" id="posts">
              <p class="posted"></p>
              <p>Post #1</p>
              <p>Welcome!</p>
              <button class="hide">Hide</button>
              </div>

              <div class="posts">
              <p class="posted"></p>
              <p>Post #2</p>
              <p>Bienvenidos!</p>
              <button class="hide">Hide</button>
              </div>

              <div class="posts">
              <p class="posted"></p>
              <p>Post #3</p>
              <p>Welkome!</p>
              <button class="hide">Hide</button>
              </div>
              `
            }</Pre>
            <p className="list-css-span">
              Como pudimos ver en el video de demostración de los post ahora la
              función de esconder
              <span>hide</span>se ve más atractiva. Aca les dejo el CSS:
            </p>
            <Pre lang="css">{
              /*css */ `
              .posts {
                position: relative;
                width: 50%;
                border: 1px solid #999;
                padding: 10px;
                border-radius: 15px;
                box-shadow: 1px 2px 3px #999;
                margin-block: 10px;
                margin-inline: auto;
                background-color: lawngreen;
                animation-name: hide;
                animation-duration: 2s;
                animation-fill-mode: forwards;
                animation-play-state: paused;
              }
              .posts p {
                margin-inline: 10px;
              }
              button {
                position: absolute;
                top: 40%;
                right: 10px;
                padding: 4px 8px;
                border-radius: 5px;
                border: none;
                border: 1px solid #999;
              }
              button:hover {
                transform: scale(1.1);
                transition: 0.2s all;
              }
              .posted {
                color: black;
                font-weight: 300;
              }
              @keyframes hide {
                0% {
                  opacity: 1;
                  height: 100%;
                  line-height: 100%;
                  padding: 20px;
                  margin-bottom: 10px;
                }
                75% {
                  opacity: 0;
                  height: 100%;
                  line-height: 100%;
                  padding: 20px;
                  margin-bottom: 10px;
                }
                100% {
                  opacity: 0;
                  height: 0px;
                  line-height: 0px;
                  padding: 0px;
                  margin-bottom: 0px;
                }
              }
              `
            }</Pre>
          </article>
          <SectionTitle title="React" />
          <article>
            <p>
              React es una biblioteca de JavaScript que permite construir
              interfaces de usuario de manera declarativa y eficiente. A
              diferencia de los enfoques imperativos tradicionales, en React
              describes cómo debería ser la interfaz de usuario y React se
              encarga de actualizar y renderizar eficientemente los componentes
              en respuesta a los cambios de estado.
            </p>
            <p>
              Hasta este punto, puedes imaginarte cuánto código JavaScript se
              necesitaría para un sitio web más complicado. Puedes mitigar la
              cantidad de código que realmente necesitas escribir utilizando un
              marco de JavaScript, al igual que usamos Bootstrap como un marco
              de CSS para reducir la cantidad de CSS que realmente teníamos que
              escribir. Uno de los marcos de JavaScript más populares es una
              biblioteca llamada
              <Link
                href="https://reactjs.org/"
                className="mx-1 underline text-lime-500"
              >
                React
                <OpenInNew className="link-icon" />
              </Link>
              .
            </p>
            <p>
              Hasta ahora, en este curso, hemos estado utilizando métodos de
              programación imperativa, donde le damos a la computadora un
              conjunto de declaraciones para ejecutar. Por ejemplo, para
              actualizar el contador en una página HTML, podríamos tener código
              que se ve así:
            </p>
            <p>Vista</p>
            <Pre lang="jsx">{`<h1>0</h1>`}</Pre>
            <p>Lógica</p>
            <Pre lang="jsx">{
              /*jsx */ `
              let num = parseInt(document.querySelector("h1").innerHTML);
              num += 1;
              document.querySelector("h1").innerHTML = num;
              `
            }</Pre>
            <p>
              React nos permite utilizar la programación declarativa, lo que nos
              permite simplemente escribir código que explica qué deseamos
              mostrar y no preocuparnos por cómo lo estamos mostrando. En React,
              un contador podría lucir algo así:
            </p>
            <p>Vista:</p>
            <Pre lang="jsx">{`<h1>{num}</h1>`}</Pre>
            <p>Lógica</p>
            <Pre lang="jsx">{
              /*jsx */ `
              num += 1
              `
            }</Pre>
            <p>
              El framework React se basa en la idea de componentes, cada uno de
              los cuales puede tener un estado subyacente. Un componente podría
              ser algo que se puede ver en una página web, como una publicación
              o una barra de navegación, y un estado es un conjunto de variables
              asociadas con ese componente. La belleza de React radica en que
              cuando el estado cambia, React cambiará automáticamente el DOM en
              consecuencia.
            </p>
            <p>
              Hay varias formas de usar React (incluido el popular comando
              create-react-app publicado por Facebook), pero hoy nos centraremos
              en comenzar directamente en un archivo HTML. Para hacer esto,
              tendremos que importar tres paquetes de JavaScript:
            </p>
            <ul>
              <li>React: Define componentes y su comportamiento.</li>
              <li>
                ReactDOM: Toma componentes de React e los inserta en el DOM.
              </li>
              <li>
                Babel: Traduce desde JSX, el lenguaje en el que escribiremos en
                React, a JavaScript plano que nuestros navegadores pueden
                interpretar. JSX es muy similar a JavaScript, pero con algunas
                características adicionales, incluida la capacidad de
                representar HTML dentro de nuestro código.
              </li>
            </ul>
            <p>
              ¡Vamos a sumergirnos y crear nuestra primera aplicación React!
            </p>
            <p>
              Esta es una manera de crearla, hay otras las cuales les voy a
              enseñar más adelante..
            </p>
            <Pre lang="jsx">{
              /*jsx */ `
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
                      <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
                      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
                      <title>Hello</title>
                  </head>
                  <body>
                      <div id="app"></div>
              
                      <script type="text/babel">
                          function App() {
                              return (
                                  <div>
                                      Hello!
                                  </div>
                              );
                          }
              
                          ReactDOM.render(<App />, document.querySelector("#app"));
                      </script>
                  </body>
              </html>
              `
            }</Pre>
            <div className="border-l-4 border-amber-500 my-10 px-1 bg-opacity-[0.6] p-3 pl-5 text-amber-500 font-semibold">
              <p className="font-semibold text-lg">
                <InfoIcon className="w-5 inline mb-1" /> Importante
              </p>
              <p>
                En React, la capacidad de crear componentes y reutilizarlos en
                otros componentes es una parte fundamental del diseño y la
                organización del código. Esto sigue el principio de la
                programación modular, donde puedes dividir tu aplicación en
                piezas más pequeñas y reutilizables, lo que facilita el
                mantenimiento y la comprensión del código.
              </p>
            </div>
            <p>
              {' '}
              Aquí hay algunos conceptos clave relacionados con la creación y el
              uso de componentes en React:{' '}
            </p>

            <ol>
              <li>
                <p>Componentes Funcionales y de Clase:</p>
                <ul>
                  <li>
                    <em>Funcionales:</em> Son funciones de JavaScript y se
                    escriben como funciones puras. No tienen estado propio ni
                    métodos de ciclo de vida.
                  </li>
                  <li>
                    <em>De Clase:</em> Son clases de JavaScript que extienden la
                    clase React.Component. Pueden tener estado y métodos de
                    ciclo de vida.
                  </li>
                </ul>
              </li>

              <li>
                <p>Props (Propiedades):</p>
                <p>
                  Los componentes pueden recibir datos externos llamados "props"
                  (propiedades). Estos son como parámetros de función que puedes
                  pasar a un componente cuando lo utilizas.
                </p>
              </li>

              <li>
                <p>Composición de Componentes:</p>
                <p>
                  Puedes construir interfaces de usuario complejas combinando y
                  anidando componentes más pequeños. Esto fomenta la
                  reutilización del código y facilita el mantenimiento.
                </p>
              </li>

              <li>
                <p>Estado del Componente:</p>
                <p>
                  Los componentes de clase pueden tener un estado interno que
                  afecta su representación y comportamiento. El estado es
                  mutable y se puede actualizar.
                </p>
              </li>

              <li>
                <p>Ciclo de Vida del Componente:</p>
                <p>
                  Los componentes de clase tienen métodos de ciclo de vida, como
                  componentDidMount y componentDidUpdate, que te permiten
                  realizar acciones en diferentes puntos durante la vida útil
                  del componente.
                </p>
              </li>

              <li>
                <p>HOC (Higher-Order Components):</p>
                <p>
                  Son funciones que toman un componente y devuelven un nuevo
                  componente con funcionalidades adicionales. Esto se utiliza
                  para reutilizar lógica entre componentes.
                </p>
              </li>

              <li>
                <p>Hooks:</p>
                <p>
                  Los hooks son funciones especiales que te permiten usar el
                  estado y otros recursos de React en componentes funcionales.
                  El hook useState permite agregar estado a los componentes
                  funcionales.
                </p>
              </li>

              <li>
                <p>Contexto:</p>
                <p>
                  El contexto de React permite pasar datos a través del árbol de
                  componentes sin tener que pasar props manualmente en cada
                  nivel.
                </p>
              </li>
            </ol>

            <p className="bg-[#F7F9F9] dark:bg-[#16181C] border border-zinc-100/80 dark:border-zinc-800 rounded-xl text-center p-3">
              La creación y reutilización de componentes en React fomenta un
              desarrollo más limpio, modular y fácil de mantener. Puedes
              construir componentes especializados para tareas específicas y
              combinarlos para construir interfaces complejas de manera
              estructurada. Esto mejora la legibilidad del código y facilita la
              colaboración en equipos de desarrollo.
            </p>
            <p>
              Dado que esta es nuestra primera aplicación React, echemos un
              vistazo detallado a lo que está haciendo cada parte del código:
            </p>
            <ol>
              <li>
                En las tres líneas anteriores al título, importamos las
                versiones más recientes de React, ReactDOM y Babel.
              </li>
              <li>
                En el cuerpo, incluimos un solo div con un id de app. Casi
                siempre queremos dejar esto vacío y completarlo en nuestro
                código de React a continuación.
              </li>
              <li>
                Incluimos una etiqueta de script donde especificamos que
                type="text/babel". Esto indica al navegador que el script
                siguiente debe traducirse utilizando Babe
              </li>
              <li>
                A continuación, creamos un componente llamado App. Los
                componentes en React pueden representarse mediante funciones de
                JavaScript.
              </li>
              <li className="list-css-span">
                Nuestro componente devuelve lo que nos gustaría renderizar en el
                DOM. En este caso, simplemente devolvemos
                <span>{'<div>Hello!</div>'}</span>.
              </li>
              <li>
                La última línea de nuestro script utiliza la función
                ReactDOM.render, que toma dos argumentos:
                <ul>
                  <li>Un componente para renderizar.</li>
                  <li>
                    Un elemento en el DOM dentro del cual se debe renderizar el
                    componente.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              Ahora que entendemos qué hace el código, podemos echar un vistazo
              a la página web resultante:
            </p>
            <div className="images-client">
              <img src="/images/react0.png" alt="Imagen demo React" />
            </div>
            <p>
              Una característica útil de React es la capacidad de renderizar
              componentes dentro de otros componentes. Para demostrar esto,
              creemos otro componente llamado Hello:
            </p>
            <Pre lang="jsx">{
              /*jsx */ `
              function Hello(props) {
                return (
                    <h1>Hello</h1>
                );
              }
              `
            }</Pre>
            <p>
              Y ahora, vamos a renderizar tres componentes Hello dentro de
              nuestro componente App:
            </p>
            <Pre lang="jsx">{
              /*jsx */ `
              function App() {
                return (
                    <div>
                        <Hello />
                        <Hello />
                        <Hello />
                    </div>
                );
              }
              `
            }</Pre>
            <p>Esto nos va a dar algo parecido a esto:</p>
            <div className="images-client">
              <img src="/images/react1.png" alt="React demo" />
            </div>
            <p>
              Hasta ahora, los componentes no han sido muy interesantes, ya que
              son todos exactamente iguales. Podemos hacer que estos componentes
              sean más flexibles agregándoles propiedades adicionales (props en
              términos de React). Por ejemplo, digamos que queremos saludar a
              tres personas diferentes. Podemos proporcionar los nombres de esas
              personas de una manera similar a los atributos HTML:
            </p>
            <Pre lang="jsx">{
              /*jsx */ `
              function App() {
                return (
                    <div>
                        <Hello name="Harry" />
                        <Hello name="Ron" />
                        <Hello name="Hermione" />
                    </div>
                );
              }
              `
            }</Pre>
            <p>
              Podemos acceder a esas props usando props.NOMBRE_PROP. Luego,
              podemos insertar esto en nuestro JSX usando llaves:
            </p>
            <Pre lang="jsx">{
              /*jsx */ `
              function Hello(props) {
                return (
                    <h1>Hello, {props.name}!</h1>
                );
              }
              `
            }</Pre>
            <p>Ahora nuestra página mostrará lo siguiente:</p>
            <div className="images-client">
              <img src="/images/react2.png" alt="React demo" />
            </div>
            <p>
              Ahora, veamos cómo podemos usar React para volver a implementar la
              página del contador que construimos al trabajar por primera vez
              con JavaScript. Nuestra estructura general seguirá siendo la
              misma, pero dentro de nuestro componente App, usaremos el hook
              useState de React para agregar estado a nuestro componente. El
              argumento de useState es el valor inicial del estado, que
              estableceremos en 0. La función devuelve tanto una variable que
              representa el estado como una función que nos permite actualizar
              el estado.
            </p>
            <Pre lang="jsx">{
              /*jsx */ `
              const [count, setCount] = React.useState(0);
              `
            }</Pre>
            <p>
              Ahora, podemos trabajar en lo que la función renderizará, donde
              especificaremos un encabezado y un botón. También agregaremos un
              event listener para cuando se haga clic en el botón, lo cual React
              maneja utilizando el atributo onClick:
            </p>
            <Pre lang="jsx">{
              /*jsx */ `
              return (
                <div>
                    <h1>{count}</h1>
                    <button onClick={updateCount}>Count</button>
                </div>
              );
              `
            }</Pre>
            <p>
              Finalmente, definamos la función updateCount. Para hacer esto,
              utilizaremos la función setCount, que puede tomar como argumento
              un nuevo valor para el estado.
            </p>
            <Pre lang="jsx">{
              /*jsx */ `
              function updateCount() {
                setCount(count + 1);
              }
              `
            }</Pre>
            <p>Ahora tenemos una página con función de conteo:</p>
            <div className="images-client">
              <img src="/images/react3.gif" alt="React demo" />
            </div>
            <p>
              En esta web tengo claros ejemplos del uso de React con Nextjs para
              hacer diferentes solicitudes a API's, con API Routes o hacer un
              fetch usando Reactjs y AJAX con un server Flask y Python para
              hacer web scraping, incluido ahí mismo hay un ejemplo como hacer
              un fetch de tu
              <b className="bg-zinc-300 dark:bg-zinc-800 rounded mx-1 p-[2px] text-button-variant">
                README.md
              </b>
              (GitHub MarkDown) a tu aplicación web. Si quieren ver algo más
              avanzado del uso de React, aquí les dejo algunos ejemplos:
            </p>
            <ol>
              <li>
                <Link
                  href="/docs/scraping"
                  className="mx-1 underline text-lime-500"
                >
                  Web Scraping con React Js y Python
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/google-sheets"
                  className="mx-1 underline text-lime-500"
                >
                  Base de datos con Google Sheets (Hojas de Cálculos de Excel)
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/javascript#cambio-divisas"
                  className="mx-1 underline text-lime-500"
                >
                  Api Routes con javascript (Cambio de Divisas)
                </Link>
              </li>
            </ol>
          </article>
          <ShareButton setTitle={UiUx.title} />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

UiUx.title = 'Interfaces de Usuario - UI/UX';
