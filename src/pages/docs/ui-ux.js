import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';

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
          <UiUxTitle>Interfaces de Usuario</UiUxTitle>
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
                  <a href="#scroll">Scroll infinito</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#animacion">Animación</a>
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
            <p className="list-css-span">
              Observa en el HTML anterior que tenemos tres botones y tres
              divisiones<span>divs</span>. En este momento, las divisiones
              contienen solo un pequeño fragmento de texto, pero podríamos
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
              que aprendimos en la conferencia anterior, para realizar una
              solicitud al servidor y obtener el texto de una sección específica
              para mostrarlo en la pantalla:
            </p>
            <Pre lang="jsx">{
              /*javascript */ `
                    
              `
            }</Pre>
          </article>
          <ShareButton setTitle={UiUx.title} />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

UiUx.title = 'Interfacez de Usuario';
