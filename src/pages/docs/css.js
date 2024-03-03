import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/LectureNav';
import { NavSwitch } from '../../components/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import LinkButton from '../../components/LinkButton';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import HeaderTitle from '../../components/HeaderTitlte';
import Indextitle from '../../components/IndexTitle';
export default function CssDoc() {
  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <LectureNav />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <HeaderTitle>CSS (Hojas de Estilo de Cascada)</HeaderTitle>
          <hr className="border-text-primary" />
          <Indextitle>Índice</Indextitle>
          <ol className="indice">
            <li>
              <a href="#introducción">Introducción</a>
            </li>
            <li>
              <a href="#propiedades">Propiedades CSS</a>
            </li>
            <li>
              <a href="#selectores">Selectores</a>
            </li>
            <li>
              <a href="#selectores-descendientes">Selectores Descendientes</a>
            </li>
            <li>
              <a href="#selectores-atributos">Selectores de Atributos</a>
            </li>
            <li>
              <a href="#responsive">Diseño Responsivo</a>
              <ul>
                <li>
                  <a href="#bootstrap">Bootstrap</a>
                </li>
                <li>
                  <a href="#col">Columnas</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#sass">Sass</a>
            </li>
          </ol>
          <SectionTitle title="Introducción" />
          <figure>
            <svg
              width="120"
              height="60"
              viewBox="0 0 538.584 538.584"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M0 0h538.584v538.583H0V0z" fill="none" />
              <path
                d="M405.5 467.454L269.29 504.13l-136.212-36.676-31.432-340.525h335.29L405.5 467.454z"
                fill="#2062af"
              />
              <path
                d="M269.289 154.511v320.367l.308.084 110.229-29.682 25.443-290.769h-135.98z"
                fill="#3c9cd7"
              />
              <path d="M191.985 76.899V56.631h29.571V34.453h-51.749v62.684h51.749V76.899h-29.571zm82.766-20.268h20.674V34.453h-51.754v22.178c6.924 6.924 10.535 10.238 20.549 20.252-5.854 0-20.549.021-20.549.02v20.234h51.754V76.899l-20.674-20.268zm73.352 0h20.673V34.453H317.02v22.178c6.924 6.924 10.537 10.238 20.551 20.252-5.852 0-20.551.021-20.551.02v20.234h51.757V76.899l-20.674-20.268z" />
              <path
                d="M269.168 239.656l-97.49 40.602 3.233 40.199 94.257-40.301 100.265-42.868 4.157-41.122-104.422 43.49z"
                fill="#ffffff"
              />
              <linearGradient
                id="a"
                gradientUnits="userSpaceOnUse"
                x1="-825.508"
                y1="1338.301"
                x2="-825.508"
                y2="1419.102"
                gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
              >
                <stop offset=".387" stopColor="#d1d3d4" stopOpacity="0" />
                <stop offset="1" stopColor="#d1d3d4" />
              </linearGradient>
              <path
                d="M171.677 280.258l3.233 40.199 94.257-40.301v-40.5l-97.49 40.602z"
                fill="url(#a)"
              />
              <linearGradient
                id="b"
                gradientUnits="userSpaceOnUse"
                x1="-724.552"
                y1="1378.602"
                x2="-724.552"
                y2="1462.591"
                gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
              >
                <stop offset=".387" stopColor="#d1d3d4" stopOpacity="0" />
                <stop offset="1" stopColor="#d1d3d4" />
              </linearGradient>
              <path
                d="M373.59 196.167l-104.422 43.489v40.5l100.265-42.868 4.157-41.121z"
                fill="url(#b)"
              />
              <linearGradient
                id="c"
                gradientUnits="userSpaceOnUse"
                x1="-874.103"
                y1="1302.263"
                x2="-680.039"
                y2="1302.263"
                gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
              >
                <stop offset="0" stopColor="#e8e7e5" />
                <stop offset="1" stopColor="#ffffff" />
              </linearGradient>
              <path
                d="M171.827 280.258l3.234 40.199 144.625.461-3.235 53.598-47.59 13.398-45.748-11.551-2.772-33.268h-42.508l5.545 64.225 85.945 25.412 85.479-24.951 11.09-127.523H171.827z"
                fill="url(#c)"
              />
              <path
                d="M269.168 280.258h-97.49l3.233 40.199 94.257.301v-40.5zm0 107.528l-.462.129-45.742-11.551-2.772-33.268h-42.507l5.544 64.225 85.939 25.412v-44.947z"
                opacity=".05"
              />
              <linearGradient
                id="d"
                gradientUnits="userSpaceOnUse"
                x1="-883.032"
                y1="1442.031"
                x2="-672.341"
                y2="1442.031"
                gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
              >
                <stop offset="0" stopColor="#e8e7e5" />
                <stop offset="1" stopColor="#ffffff" />
              </linearGradient>
              <path
                d="M162.898 196.167H373.59l-4.157 41.122H167.98l-5.082-41.122z"
                fill="url(#d)"
              />
              <path
                d="M269.168 196.167h-106.27l5.082 41.122h101.188v-41.122z"
                opacity=".05"
              />
            </svg>
          </figure>
          <ul>
            <li>
              CSS se utiliza para personalizar la apariencia de un sitio web.
            </li>
            <li>
              Aunque estamos comenzando, podemos agregar un atributo de estilo a
              cualquier elemento HTML para aplicarle CSS.
            </li>
            <li>
              Cambiamos el estilo al alterar las propiedades de CSS de un
              elemento, escribiendo algo como color: azul o text-align: centro.
            </li>
            <li>
              En el siguiente ejemplo, hacemos un ligero cambio en nuestro
              primer archivo para darle un encabezado colorido.
            </li>
          </ul>
          <Pre lang="html">
            {
              /* html */ `
              <!DOCTYPE html>
              <html lang="es">
              <head>
              <title>Hola!</title>
              </head>
              <body>
              <h1 style="color: blue; text-align: center;">Un Encabezado Colorido!</h1>
                Hola, Neo!
              </body>
              <html>
              `
            }
          </Pre>
          <p>Ejemplo:</p>
          <div className="images-client">
            <img src="/images/css-heading-color.png" />
          </div>
          <li className="list-css-span">
            Si aplicamos estilo a un elemento externo, automáticamente todos los
            elementos internos adquieren ese estilo. Podemos ver esto si
            trasladamos el estilo que acabamos de aplicar desde la etiqueta de
            encabezado<span>header</span>a la etiqueta de cuerpo
            <span>body</span>:
          </li>
          <Pre lang="html">{
            /* html */ `
              <!DOCTYPE html>
              <html lang="en">
              <head>
              <title>Hola!</title>
              </head>
              <body style="color: blue; text-align: center;">
                <h1 >Un Encabezado Colorido!</h1>
                  Hola, Neo!
              </body>
              <html>
              `
          }</Pre>
          <div className="images-client">
            <img src="/images/css-2.png" alt="Css ejemplo" />
          </div>
          <ul>
            <li>
              Aunque podemos dar estilo a nuestra página web como lo hemos hecho
              anteriormente, para lograr un mejor diseño, deberíamos ser capaces
              de separar nuestro estilo de las líneas individuales
            </li>
            <ol>
              <li className="list-css-span">
                Una forma de hacerlo es añadir tu estilo entre etiquetas
                <span>{'<style>'}</span>
                en la sección
                <span>{'<head>'}</span>
                del documento HTML. Dentro de estas etiquetas, escribimos qué
                tipos de elementos queremos estilizar y el estilo que deseamos
                aplicar a ellos. Por ejemplo:
              </li>
            </ol>
          </ul>
          <Pre lang="html">
            {
              /*html*/ `
              <html lang="es">
              <!DOCTYPE html>
              <head>
                  <title>Hola!</title>
                  <style>
                      h1 {
                          color: blue;
                          text-align: center;
                      }
                  </style>
              </head>
              <body>
                  <h1 >Un Encabezado de Color!</h1>
                  Hola, Marte!
              </body>
              </html>
              `
            }
          </Pre>
          <li className="list-css-span">
            Otra forma es incluir un elemento
            <span>{'<link>'}</span>
            en la sección
            <span>{'<head>'}</span>
            de tu documento con un enlace a un archivo styles.css que contiene
            algún estilo. Esto significa que el archivo HTML se vería de la
            siguiente manera:
          </li>
          <Pre lang="html">{
            /*html*/ `
              <html lang="es">
              <!DOCTYPE html>
              <head>
                  <title>Hola!</title>
                  <link rel="stylesheet" href="styles.css">
              </head>
              <body>
                  <h1 >Encabezado de Color!</h1>
                  Hola, mundanos!
              </body>
              </html>
              `
          }</Pre>
          <li>
            Crearemos un archivo
            <span className="border border-[#395692] rounded px-1 py-1 border-l-4 mx-1">
              styles.css
            </span>
            que se vería de la siguiente manera:
          </li>
          <Pre lang="css">
            {
              /*css*/ `
              h1 {
                color: blue;
                text-align: center;
              }
              `
            }
          </Pre>
          <span id="propiedades" />
          <SectionTitle title="Propiedades CSS" />
          <ul>
            <li>
              Hay demasiadas propiedades de CSS para cubrir aquí, pero al igual
              que con los elementos HTML, generalmente es fácil buscar algo como
              "cambiar fuente a azul CSS" en Google para obtener el resultado
              deseado. Sin embargo, algunas de las más comunes son las
              siguientes:
            </li>
            <ol className="list-css-span">
              <li>
                <span>color</span>: el color del texto.
              </li>
              <li>
                <span>text-align</span>: la alineación de los elementos en la
                página.
              </li>
              <li>
                <span>background-color</span>: puede ser establecido a cualquier
                color.
              </li>
              <li>
                <span>width</span>: en píxeles o porcentaje de la página.
              </li>
              <li>
                <span>height</span>: en píxeles o porcentaje de la página.
              </li>
              <li>
                <span>padding</span>: cuánto espacio debe dejarse dentro de un
                elemento. element
              </li>
              <li>
                <span>margin</span>: cuánto espacio debe dejarse fuera de un
                elemento.
              </li>
              <li>
                <span>font-family</span>: tipo de fuente para el texto en la
                página.
              </li>
              <li>
                <span>font-size</span>: medida de la fuente en píxeles.
              </li>
              <li>
                <span>border</span>: tamaño, tipo (solid, dotted, groove, etc.)
                y color.
              </li>
            </ol>
            <li>
              Utilicemos lo que acabamos de aprender para mejorar nuestra tabla
              de océanos que se mencionó anteriormente. Aquí tienes un fragmento
              de HTML para comenzar:
            </li>
          </ul>
          <Pre lang="html">
            {
              /*html*/ `
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <title>Tabla con Estilo</title>
                  </head>
                  <body>
                      <table>
                          <thead>
                              <th>Oceano</th>
                              <th>Profundidad Promedio</th>
                              <th>Máxima Profundidad</th>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>Pacífico</td>
                                  <td>4280 m</td>
                                  <td>10911 m</td>
                              </tr>
                              <tr>
                                  <td>Atlántico</td>
                                  <td>3646 m</td>
                                  <td>8486 m</td>
                              </tr>
                          </tbody>
                      </table>
                  </body>
              <html>
              `
            }
          </Pre>
          <div className="images-client">
            <img src="/images/table-style.png" alt="Css example" />
          </div>
          <li>
            Lo anterior se parece mucho a lo que teníamos antes, pero ahora, ya
            sea incluyendo una etiqueta de estilo
            <span className="border-gray-800 border rounded mx-1">
              {'<style>'}
            </span>
            o un enlace a una hoja de estilo
            <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
              {'<link rel="stylesheet" href="styles.css">'}
            </span>
            en la sección head de nuestro documento html. Agregamos el siguiente
            CSS:
          </li>
          <Pre lang="css">{
            /*css*/ `
              table {
                border: 1px solid black;
                border-collapse: collapse;
              }
            
              td {
                border: 1px solid black;
                padding: 2px;
              }
            
              th {
                border: 1px solid black;
                padding: 2px;
              }
              `
          }</Pre>
          <p>Lo que nos deja una hermosa tabla estilada como ésta:</p>
          <div className="images-client">
            <img src="/images/table-styled.png" alt="Css example" />
          </div>
          <li>
            Es posible que ya estés pensando que hay cierta repetición
            innecesaria en nuestro CSS en este momento, ya que tanto
            <b className="border border-[#395692] rounded px-1 border-l-4 mx-1">
              td
            </b>
            como
            <b className="border border-[#395692] rounded px-1 border-l-4 mx-1">
              th
            </b>
            tienen el mismo estilo. Podemos y <em>"debemos" </em>
            condensar esto en el siguiente código, utilizando una coma para
            indicar que el estilo debe aplicarse a más de un tipo de elemento.
          </li>
          <Pre lang="css">
            {
              /*css*/ `
              table {
                border: 1px solid black;
                border-collapse: collapse;
              }
            
              td, th {
                border: 1px solid black;
                padding: 2px;
              }
              `
            }
          </Pre>
          <span id="selectores" />
          <SectionTitle title="Selectores CSS" />
          <ul>
            <li>
              Esto es una buena introducción a lo que se conocen como selectores
              CSS. Hay muchas formas de determinar qué elementos HTML estás
              estilizando, algunas de las cuales mencionaremos aquí:
            </li>
            <ol>
              <li>
                Tipo de elemento: esto es lo que hemos estado haciendo hasta
                ahora, estilizando todos los elementos del mismo tipo.
              </li>
              <li>
                Id: Otra opción es dar a nuestros elementos HTML un id de la
                siguiente manera:
                <br />
                <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
                  {'<h1 id="primer-encabezado">¡Hola!</h1>'}
                </span>
                y luego aplicar estilos usando
                <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
                  {'#first-header {...}'}
                </span>
                utilizando el signo de numeral para indicar que estamos buscando
                por id. Es importante destacar que ningún par de elementos puede
                tener el mismo id, y ningún elemento puede tener más de un id
                porque es único.
              </li>
              <li>
                Clase: Esto es similar al id, pero una clase puede ser
                compartida por más de un elemento, y un solo elemento puede
                tener más de una clase. Agregamos clases a un elemento HTML de
                la siguiente manera:
                <br />
                <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
                  {'<h1 class="texto-pagina atenuado">¡Hola!</h1>'}
                </span>
                (nota que acabamos de agregar dos clases al elemento:
                texto-pagina y atenuado). Luego, estilizamos en función de la
                clase usando un punto en lugar de un signo de numeral:
                <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
                  {'.atenuado {...}'}
                </span>
              </li>
            </ol>
            <li>
              Ahora, también debemos lidiar con el problema del CSS
              potencialmente conflictivo. ¿Qué sucede cuando un encabezado
              debería ser rojo según su clase pero azul según su id? CSS tiene
              un orden de especificidad que va así:
            </li>
            <ol>
              <li>Estilo en línea (in-line styling).</li>
              <li>Id (id="")</li>
              <li>Clase (class="")</li>
              <li>Tipo de Elemento</li>
            </ol>
            <li>
              Además de la coma para múltiples selectores, hay varias otras
              formas de especificar qué elementos deseas estilizar. Esta tabla
              de la conferencia proporciona algunas de ellas, y a continuación
              te presentaré algunos ejemplos.
            </li>
          </ul>
          <Pre lang="css">{
            /*css*/ `
                /*Selector de elementos múltiples*/
                h1, h2 {
                  font-weight: bold;
                }
                /*Para un selector descendiente*/
                article p {
                  font-size: 1rem;
                }
                /*Selector Child (hijo)*/
                div > li {
                  list-style: none;
                }
                /*Selector de hermanos adyacentes*/
                li + li {
                  font-family: 'Roboto';
                }
                /*Selector de atributo*/
                li[data-category="frutas"] {   /*html = <li data-category="frutas">Manzana</li>*/
                  color: green;
                }
                /*Selector de pseudoclases*/
                li:hover {
                  background-color: lightgray;
                }
                li:active {
                  background-color: lightgreen;
                }
                /*Selector de pseudoelementos*/
                span::before {
                  content: "";
                  position: absolute;
                  background: #FAFAFA;
                }
              `
          }</Pre>
          <span id="selectores-descendientes" />
          <SectionTitle title="Selectores descendientes" />
          <p>
            Selector de descendencia: Aquí, utilizamos el selector de
            descendencia para aplicar estilo solo a los elementos de lista que
            se encuentran dentro de una lista desordenada.
          </p>
          <Pre lang="html">{
            /*html */ `
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <title>Usando Selectores</title>
                      <style>
                          ul li {
                              color: blue;
                          }
                      </style>
                  </head>
                  <body>
                      <ol>
                          <li>lista</li>
                          <li> listo
                              <ul>
                                  <li>hola</li>
                                  <li>adiós</li>
                                  <li>madre de dios</li>
                              </ul>
                          </li>
                          <li>listado</li>
                      </ol>
                  </body>
              <html>
              `
          }</Pre>
          <div className="images-client">
            <img src="/images/descendent-css.png" alt="Css example" />
          </div>
          <SectionTitle title="Selectores de atributos" />
          <p>
            También podemos afinar nuestra selección basándonos en los atributos
            que asignamos a los elementos HTML utilizando corchetes. Por
            ejemplo, en la siguiente lista de enlaces, optamos por hacer que el
            enlace a Amazon sea de color rojo:
          </p>
          <Pre lang="html">{
            /*html*/ `
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <title>Usando Selectores</title>
                      <style>
                          a[href="https://www.amazon.com/"] {
                              color: red;
                          }
                      </style>
                  </head>
                  <body>
                      <ol>
                          <li><a href="https://www.google.com/">Google</a></li>
                          <li><a href="https://www.amazon.com/">Amazon</a> </li>
                          <li><a href="https://www.facebook.com/">Facebook</a></li>
                      </ol>
                  </body>
              <html>
              `
          }</Pre>
          <div className="images-client">
            <img src="/images/links-css.png" alt="Css example" />
          </div>
          <ul>
            <li>
              No solo podemos usar CSS para cambiar permanentemente la
              apariencia de un elemento, sino también para modificar su aspecto
              bajo ciertas condiciones. Por ejemplo, ¿qué sucede si deseamos que
              un botón cambie de color cuando pasamos el cursor sobre él?
              Podemos lograr esto utilizando una pseudoclase CSS, que
              proporciona estilos adicionales en circunstancias especiales. Lo
              escribimos añadiendo dos puntos después de nuestro selector y
              luego especificando la circunstancia después de esos dos puntos.
            </li>
            <li>
              En el caso del botón, agregaríamos
              <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
                :hover
              </span>
              al selector del botón para indicar el diseño que se aplicará solo
              cuando se pasa el cursor sobre él.
            </li>
          </ul>
          <Pre lang="html">{
            /*html*/ `
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <title>Pseudoclasses</title>
                      <style>
                          button {
                              background-color: red;
                              width: 200px;
                              height: 50px;
                              font-size: 24px;
                          }
              
                          button:hover {
                              background-color: green;
                          }
                      </style>
                  </head>
                  <body>
                      <button>Button 1</button>
                      <button>Button 2</button>
                      <button>Button 3</button>
                  </body>
              <html>
              `
          }</Pre>
          <div className="images-client">
            <img src="/images/buttons.gif" alt="gif-1" />
          </div>
          <ShareButton setTitle={CssDoc.title} />
          <span id="responsive" />
          <SectionTitle title="Diseño Responsivo" />
          <ul>
            <li>
              Hoy en día, muchas personas visitan sitios web en dispositivos
              distintos a las computadoras, como smartphones y tabletas. Es
              importante asegurarse de que tu sitio web sea legible para las
              personas en todos los dispositivos.
            </li>
            <li>
              Una forma de lograr esto es mediante el conocimiento del
              "viewport" (ventana gráfica). El viewport es la parte de la
              pantalla que es visible para el usuario en un momento dado. Por
              defecto, muchas páginas web asumen que el viewport es el mismo en
              cualquier dispositivo, lo que lleva a que muchos sitios
              (especialmente los más antiguos) sean difíciles de interactuar en
              dispositivos móviles.
            </li>
            <li>
              Una forma sencilla de mejorar la apariencia de un sitio en un
              dispositivo móvil es agregar la siguiente línea en la sección head
              de nuestros archivos HTML. Esta línea indica al dispositivo móvil
              que utilice un viewport que tenga el mismo ancho que el del
              dispositivo que se está utilizando, en lugar de uno mucho más
              grande.
            </li>
          </ul>
          <Pre lang="html">{
            /*html*/ `
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              `
          }</Pre>
          <ul>
            <li>
              Otra forma de adaptarnos a diferentes dispositivos es a través de
              las "media queries" (consultas de medios). Las media queries son
              formas de cambiar el estilo de una página según la forma en que se
              está visualizando la página.
            </li>
            <li>
              Como ejemplo de una consulta de medios (media query), intentemos
              cambiar simplemente el color de la pantalla cuando se reduce a un
              cierto tamaño. Indicamos una consulta de medios escribiendo
              <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
                @media
              </span>
              , seguido del tipo de consulta entre paréntesis:
            </li>
          </ul>
          <Pre lang="html">{
            /*html*/ `
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <title>Tamaño de pantalla</title>
                      <style>
                          @media (min-width: 600px) {
                              body {
                                  background-color: red;
                              }
                          }
              
                          @media (max-width: 599px) {
                              body {
                                  background-color: blue;
                              }
                          }
                      </style>
                  </head>
                  <body>
                      <h1>Bienvenidos a la página!</h1>
                  </body>
              </html>
              `
          }</Pre>
          <div className="images-client">
            <img src="/images/responsive0.gif" alt="gif" />
          </div>
          <li>
            Otra forma de manejar diferentes tamaños de pantalla es utilizando
            un nuevo atributo CSS conocido como
            <LinkButton
              url="https://www.w3schools.com/css/css3_flexbox.asp"
              color="[#395692]"
              iconName={'ArrowUpright'}
            >
              flexbox
            </LinkButton>
            . Esto nos permite que los elementos se ajusten fácilmente a la
            siguiente línea si no caben horizontalmente. Para lograrlo,
            colocamos todos nuestros elementos en un contenedor que llamaremos
            "nuestro contenedor". Luego, añadimos estilo a ese div especificando
            que queremos utilizar un diseño de flexbox para los elementos dentro
            de él. También hemos agregado estilo adicional a los div internos
            para ilustrar mejor el ajuste que está ocurriendo aquí.
          </li>
          <Pre lang="html">{
            /*html */ `
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <title>Screen Size</title>
                      <style>
                          #container {
                              display: flex;
                              flex-wrap: wrap;
                          }
              
                          #container > div {
                              background-color: green;
                              font-size: 20px;
                              margin: 20px;
                              padding: 20px;
                              width: 200px;
                          }
                      </style>
                  </head>
                  <body>
                      <div id="container">
                          <div>Some text 1!</div>
                          <div>Some text 2!</div>
                          <div>Some text 3!</div>
                          <div>Some text 4!</div>
                          <div>Some text 5!</div>
                          <div>Some text 6!</div>
                          <div>Some text 7!</div>
                          <div>Some text 8!</div>
                          <div>Some text 9!</div>
                          <div>Some text 10!</div>
                          <div>Some text 11!</div>
                          <div>Some text 12!</div>
                      </div>
                  </body>
              </html>
              `
          }</Pre>
          <div className="images-client">
            <img src="/images/flexbox.gif" alt="gif-3" />
          </div>
          <li>
            Otra forma popular de estilizar una página es utilizando una
            cuadrícula HTML. En esta cuadrícula, podemos especificar atributos
            de estilo como anchos de columna y espacios entre columnas y filas,
            como se muestra a continuación. Ten en cuenta que cuando
            especificamos anchos de columna, decimos que el tercero es "auto",
            lo que significa que debería ocupar el resto de la página.
          </li>
          <Pre lang="html">{
            /*html */ `
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <title>My Web Page!</title>
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <style>
                          .grid {
                              background-color: green;
                              display: grid;
                              padding: 20px;
                              grid-column-gap: 20px;
                              grid-row-gap: 10px;
                              grid-template-columns: 200px 200px auto;
                          }
              
                          .grid-item {
                              background-color: white;
                              font-size: 20px;
                              padding: 20px;
                              text-align: center;
                          }
                      </style>
                  </head>
                  <body>
                      <div class="grid">
                          <div class="grid-item">1</div>
                          <div class="grid-item">2</div>
                          <div class="grid-item">3</div>
                          <div class="grid-item">4</div>
                          <div class="grid-item">5</div>
                          <div class="grid-item">6</div>
                          <div class="grid-item">7</div>
                          <div class="grid-item">8</div>
                          <div class="grid-item">9</div>
                          <div class="grid-item">10</div>
                          <div class="grid-item">11</div>
                          <div class="grid-item">12</div>
                      </div>
                  </body>
              </html>
              `
          }</Pre>
          <div className="images-client">
            <img src="/images/grid.gif" alt="gif-3" />
          </div>
          <span id="bootstrap" />
          <SectionTitle title="Bootstrap" />
          <ul>
            <li>
              Resulta que existen muchas bibliotecas que otras personas ya han
              desarrollado y que pueden facilitar la estilización de una página
              web. Una biblioteca popular que utilizaremos en todo el curso se
              llama Bootstrap.
            </li>
            <li>
              Podemos incluir Bootstrap en nuestro código agregando una sola
              línea en la sección head de nuestro archivo HTML:
            </li>
          </ul>
          <Pre lang="html">{
            /*html */ `
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
              integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
              `
          }</Pre>
          <ul>
            <li>
              A continuación, podemos explorar algunas de las características de
              <LinkButton
                url="https://getbootstrap.com/docs/4.5/components/"
                color="[#395692]"
                iconName={'ArrowUpRight'}
              >
                Bootstrap
              </LinkButton>
              navegando a la sección de documentación de su sitio web. En esta
              página, encontrarás numerosos ejemplos de clases que puedes
              agregar a elementos para estilizarlos con Bootstrap.
            </li>
            <li>
              Una característica popular de Bootstrap es su
              <LinkButton
                url="https://getbootstrap.com/docs/4.0/layout/grid/"
                color="[#395692]"
                iconName={'ArrowUpRight'}
              >
                sistema de cuadrícula
              </LinkButton>
              . Bootstrap divide automáticamente una página en 12 columnas, y
              podemos decidir cuántas columnas ocupa un elemento agregando la
              clase
              <span className="border-b-2 border-[#395692] rounded px-1 border mx-1">
                col-x
              </span>
              , donde x es un número entre 1 y 12. Por ejemplo, en la página
              siguiente, tenemos una fila de columnas de ancho igual y luego una
              fila donde la columna del centro es más grande:
            </li>
          </ul>
          <Pre lang="html">{
            /*html */ `
              <!DOCTYPE html>
              <html lang="es">
                  <head>
                      <title>Mi Página Web</title>
                      <link rel="stylesheet" 
                      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
                      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
                      crossorigin="anonymous">
                      <style>
                          .row > div {
                              padding: 20px;
                              background-color: teal;
                              border: 2px solid black;
                          }
                      </style>
                  </head>
                  <body>
                      <div class="container">
                          <div class="row">
                              <div class="col-4">
                                  Esto es una sección.
                              </div>
                              <div class="col-4">
                                  Esto es otra sección.
                              </div>
                              <div class="col-4">
                                  Esto es una tercera sección.
                              </div>
                          </div>
                      </div>
                      <br/>
                      <div class="container">
                          <div class="row">
                              <div class="col-3">
                                  Esto es una sección.
                              </div>
                              <div class="col-6">
                                  Esto es otra sección.
                              </div>
                              <div class="col-3">
                                  Esto es una tercera sección.
                              </div>
                          </div>
                      </div>
                  </body>
              </html>
              
              `
          }</Pre>
          <span id="col" />
          <SectionTitle title="Columnas" />
          <li>
            Para mejorar la capacidad de respuesta en dispositivos móviles,
            Bootstrap también nos permite especificar tamaños de columna que
            varían según el tamaño de la pantalla. En el siguiente ejemplo,
            utilizamos
            <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
              'col-lg-3'
            </span>
            para indicar que un elemento debería ocupar 3 columnas en una
            pantalla grande, y
            <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
              'col-sm-6'
            </span>
            para indicar que un elemento debería ocupar 6 columnas cuando la
            pantalla es pequeña:
          </li>
          <Pre lang="html">{
            /*html */ `
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <title>My Web Page!</title>
                      <link rel="stylesheet" 
                      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
                      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
                      crossorigin="anonymous">
                      <style>
                          .row > div {
                              padding: 20px;
                              background-color: teal;
                              border: 2px solid black;
                          }
                      </style>
                  </head>
                  <body>
                      <div class="container">
                          <div class="row">
                              <div class="col-lg-3 col-sm-6">
                                  This is a section.
                              </div>
                              <div class="col-lg-3 col-sm-6">
                                  This is another section.
                              </div>
                              <div class="col-lg-3 col-sm-6">
                                  This is a third section.
                              </div>
                              <div class="col-lg-3 col-sm-6">
                                  This is a fourth section.
                              </div>
                          </div>
                      </div>
                  </body>
              </html>
              `
          }</Pre>
          <span id="sass" />
          <SectionTitle title="Sass (Hojas de Estilo Sintácticamente Asombrosas)" />
          <ul>
            <li>
              Hasta ahora, hemos encontrado varias formas de eliminar la
              redundancia en CSS, como moverlo a archivos separados o usar
              Bootstrap, pero aún hay muchas áreas donde podemos hacer mejoras.
              Por ejemplo, ¿qué pasa si queremos que varios elementos tengan
              estilos diferentes, pero que todos tengan el mismo color? Si
              decidimos más tarde que queremos cambiar el color, tendríamos que
              hacerlo en varios elementos diferentes.
            </li>
            <li>
              <LinkButton
                url="https://sass-lang.com/"
                color="[#395692]"
                iconName={'ArrowupRight'}
              >
                Sass
              </LinkButton>
              es un lenguaje que nos permite escribir CSS de manera más
              eficiente de varias maneras, una de las cuales es permitiéndonos
              utilizar variables, como se muestra en el siguiente ejemplo.
            </li>
            <li>
              Cuando escribimos en Sass, creamos un nuevo archivo con la
              extensión
              <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
                variables.scss
              </span>
              . En este archivo, podemos crear una nueva variable agregando un
              signo de dólar
              <span className="text-[#395692] mx-1">("$")</span>
              antes de un nombre, seguido de dos puntos y luego un valor. Por
              ejemplo, escribiríamos
              <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
                $color: red;
              </span>
              para establecer la variable color en el valor rojo. Luego,
              accedemos a esa variable usando
              <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
                $color
              </span>
              . Aquí tienes un ejemplo de nuestro archivo variables.scss:
            </li>
          </ul>
          <Pre lang="css">{
            /*css */ `
              $color: red;

              ul {
                  font-size: 14px;
                  color: $color;
              }
              
              ol {
                  font-size: 18px;
                  color: $color;
              }
              `
          }</Pre>
          <ul>
            <li>
              Para vincular este estilo a nuestro archivo HTML, no podemos
              simplemente enlazar el archivo
              <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
                .scss
              </span>
              , ya que la mayoría de los navegadores web solo reconocen archivos
              <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
                .css
              </span>
              . Para resolver este problema, debemos
              <LinkButton
                url="https://sass-lang.com/install"
                color="[#395692]"
                iconName={'ArrowUpRight'}
              >
                descargar un programa llamado Sass
              </LinkButton>
              en nuestras computadoras. Luego, en la terminal, escribimos
              <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
                sass variables.scss:variables.css
              </span>
              . Este comando compilará un archivo
              <b className="text-[#395692] mx-1">".scss"</b> llamado
              variables.scss en un archivo
              <b className="text-[#395692] mx-1">".css"</b> llamado
              <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
                variables.css
              </span>
              , al cual puedes agregar un enlace en tu página HTML.
            </li>
            <li>
              Mientras usamos Sass, también podemos anidar físicamente nuestro
              estilo en lugar de usar los selectores CSS de los que hablamos
              anteriormente. Por ejemplo, si deseamos aplicar un estilo solo a
              los párrafos y listas desordenadas dentro de un div, podemos
              escribir lo siguiente:
            </li>
          </ul>
          <Pre lang="css">{
            /*css */ `
              div {
                font-size: 18px;
            
                p {
                    color: blue;
                }
            
                ul {
                    color: green;
                }
            
              `
          }</Pre>
          <p>
            Una vez compilado en CSS, obtendríamos un archivo que se vería así:
          </p>
          <Pre lang="css">{
            /*css */ `
              div {
                font-size: 18px;
            }
            
            div p {
                color: blue;
            }
            
            div ul {
                color: green;
            }
              `
          }</Pre>
          <li>
            Otra característica que Sass nos brinda se conoce como
            <LinkButton
              url="https://sass-lang.com/guide"
              color="[#395692]"
              iconName={'ArrowUpRight'}
            >
              herencia
            </LinkButton>
            . Esto nos permite crear un conjunto básico de estilos que pueden
            ser compartidos por varios elementos diferentes. Lo hacemos
            agregando un <b className="text-[#395692] mx-1">'%'</b> antes del
            nombre de una clase, agregando algunos estilos y luego, más
            adelante, agregando la línea
            <span className="border border-[#395692] rounded px-1 border-l-4 mx-1">
              `@extend %nombre-de-clase`
            </span>
            al principio de algunos estilos. Por ejemplo, el siguiente código
            aplica los estilos dentro de la clase
            <b className="text-[#395692] mx-1">"message"</b> a cada una de las
            clases diferentes a continuación, lo que resulta en una página web
            que se ve de la siguiente manera:
          </li>
          <Pre lang="css">{
            /*css */ `
              %message {
                font-family: sans-serif;
                font-size: 18px;
                font-weight: bold;
                border: 1px solid black;
                padding: 20px;
                margin: 20px;
            }
            
            .success {
                @extend %message;
                background-color: green;
            }
            
            .warning {
                @extend %message;
                background-color: orange;
            }
            
            .error {
                @extend %message;
                background-color: red;
            }
              `
          }</Pre>
          <div className="images-client">
            <img src="/images/inherit.png" alt="Css example" />
          </div>
          <h4 className="text-text-primary">
            ¡Eso concluye nuestro contenido por hoy! ツ
          </h4>
          <ShareButton setTitle={CssDoc.title} />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

CssDoc.title = '🎨 Aprende CSS y SASS en NeoTecs gratis!';
