import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';

export default function CssDoc() {
  const CssTitle = ({ Tag = 'h1', children }) => {
    return <Tag className="text-slate-100 font-mono">{children}</Tag>;
  };
  return (
    <main className="text-slate-100">
      <TitlesContextProvider>
        <Nav className="backdrop-blur-md bg-transparent fixed w-full h-12 z-10" />
        <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
          <LectureNav />
          <div className="w-full max-w-none prose px-4 md:px-8 text-slate-100">
            <NavSwitch inline />
            <CssTitle>CSS (Hojas de Estilo de Cascada)</CssTitle>
            <hr />
            <SectionTitle title="Introducción a CSS" />
            <ul>
              <li>
                CSS se utiliza para personalizar la apariencia de un sitio web.
              </li>
              <li>
                Aunque estamos comenzando, podemos agregar un atributo de estilo
                a cualquier elemento HTML para aplicarle CSS.
              </li>
              <li>
                Cambiamos el estilo al alterar las propiedades de CSS de un
                elemento, escribiendo algo como color: azul o text-align:
                centro.
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
            <li>
              Si aplicamos estilo a un elemento externo, automáticamente todos
              los elementos internos adquieren ese estilo. Podemos ver esto si
              trasladamos el estilo que acabamos de aplicar desde la etiqueta de
              encabezado (header) a la etiqueta de cuerpo (body):
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
              <img src="/images/css-2.png" />
            </div>
            <ul>
              <li>
                Aunque podemos dar estilo a nuestra página web como lo hemos
                hecho anteriormente, para lograr un mejor diseño, deberíamos ser
                capaces de separar nuestro estilo de las líneas individuales
              </li>
              <ol>
                <li>
                  Una forma de hacerlo es añadir tu estilo entre etiquetas
                  <span className="bg-gray-800 px-1 py-[2px] rounded mx-1">
                    {'<style>'}
                  </span>
                  en la sección
                  <span className="border-gray-800 border rounded mx-1">
                    {'<head>'}
                  </span>
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
            <li>
              Otra forma es incluir un elemento
              <span className="bg-gray-800 px-1 py-[2px] rounded mx-1">
                {'<link>'}
              </span>
              en la sección
              <span className="border-gray-800 border rounded mx-1">
                {'<head>'}
              </span>
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
            <SectionTitle title="Propiedades CSS" />
            <ul>
              <li>
                Hay demasiadas propiedades de CSS para cubrir aquí, pero al
                igual que con los elementos HTML, generalmente es fácil buscar
                algo como "cambiar fuente a azul CSS" en Google para obtener el
                resultado deseado. Sin embargo, algunas de las más comunes son
                las siguientes:
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
                  <span>background-color</span>: puede ser establecido a
                  cualquier color.
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
                  <span>border</span>: tamaño, tipo (solid, dotted, groove,
                  etc.) y color.
                </li>
              </ol>
              <li>
                Utilicemos lo que acabamos de aprender para mejorar nuestra
                tabla de océanos que se mencionó anteriormente. Aquí tienes un
                fragmento de HTML para comenzar:
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
              <img src="/images/table-style.png" />
            </div>
            <li>
              Lo anterior se parece mucho a lo que teníamos antes, pero ahora,
              ya sea incluyendo una etiqueta de estilo
              <span className="bg-gray-800 px-1 py-[2px] rounded mx-1">
                {'<style>'}
              </span>
              o un enlace a una hoja de estilo
              <span className="border-gray-800 border rounded mx-1 border-b-2 border-green-400 px-1">
                {'<link rel="stylesheet" href="styles.css">'}
              </span>
              en la sección head de nuestro documento html. Agregamos el
              siguiente CSS:
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
              <img src="/images/table-styled.png" />
            </div>
            <li>
              Es posible que ya estés pensando que hay cierta repetición
              innecesaria en nuestro CSS en este momento, ya que tanto
              <b className="bg-gray-800 px-1 py-[2px] border-b-2 border-[tomato] mx-1">
                td
              </b>
              como
              <b className="bg-gray-800 px-1 py-[2px] border-b-2 border-[tomato] mx-1">
                th
              </b>
              tienen el mismo estilo. Podemos y
              <b className="bg-[#541B1F] px-1 py-[2px] rounded-sm border-b-2 border-[tomato] mx-1">
                debemos
              </b>
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
            <SectionTitle title="Selectores CSS" />
            <ul>
              <li>
                Esto es una buena introducción a lo que se conocen como
                selectores CSS. Hay muchas formas de determinar qué elementos
                HTML estás estilizando, algunas de las cuales mencionaremos
                aquí:
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
                  <span className="border-gray-800 border rounded mx-1 border-b-2 border-green-400 px-1">
                    {'<h1 id="primer-encabezado">¡Hola!</h1>'}
                  </span>
                  y luego aplicar estilos usando
                  <span className="border-gray-800 border rounded mx-1 border-b-2 border-green-400 px-1">
                    {'#first-header {...}'}
                  </span>
                  utilizando el signo de numeral para indicar que estamos
                  buscando por id. Es importante destacar que ningún par de
                  elementos puede tener el mismo id, y ningún elemento puede
                  tener más de un id porque es único.
                </li>
                <li>
                  Clase: Esto es similar al id, pero una clase puede ser
                  compartida por más de un elemento, y un solo elemento puede
                  tener más de una clase. Agregamos clases a un elemento HTML de
                  la siguiente manera:
                  <br />
                  <span className="border-gray-800 border rounded mx-1 border-b-2 border-green-400 px-1">
                    {'<h1 class="texto-pagina atenuado">¡Hola!</h1>'}
                  </span>
                  (nota que acabamos de agregar dos clases al elemento:
                  texto-pagina y atenuado). Luego, estilizamos en función de la
                  clase usando un punto en lugar de un signo de numeral:{' '}
                  <span className="border-gray-800 border rounded mx-1 border-b-2 border-green-400 px-1">
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
              <img src="/images/descendent-css.png" />
            </div>
            <SectionTitle title="Selectores de atributos" />
            <p>
              También podemos afinar nuestra selección basándonos en los
              atributos que asignamos a los elementos HTML utilizando corchetes.
              Por ejemplo, en la siguiente lista de enlaces, optamos por hacer
              que el enlace a Amazon sea de color rojo:
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
              <img src="/images/links-css.png" />
            </div>
            <ul>
              <li>
                No solo podemos usar CSS para cambiar permanentemente la
                apariencia de un elemento, sino también para modificar su
                aspecto bajo ciertas condiciones. Por ejemplo, ¿qué sucede si
                deseamos que un botón cambie de color cuando pasamos el cursor
                sobre él? Podemos lograr esto utilizando una pseudoclase CSS,
                que proporciona estilos adicionales en circunstancias
                especiales. Lo escribimos añadiendo dos puntos después de
                nuestro selector y luego especificando la circunstancia después
                de esos dos puntos.
              </li>
              <li>
                En el caso del botón, agregaríamos{' '}
                <span className="bg-gray-800 px-1 py-[2px] border-l-2 border-lime-400 rounded mx-1">
                  :hover
                </span>
                al selector del botón para indicar el diseño que se aplicará
                solo cuando se pasa el cursor sobre él.
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
                defecto, muchas páginas web asumen que el viewport es el mismo
                en cualquier dispositivo, lo que lleva a que muchos sitios
                (especialmente los más antiguos) sean difíciles de interactuar
                en dispositivos móviles.
              </li>
              <li>
                Una forma sencilla de mejorar la apariencia de un sitio en un
                dispositivo móvil es agregar la siguiente línea en la sección
                head de nuestros archivos HTML. Esta línea indica al dispositivo
                móvil que utilice un viewport que tenga el mismo ancho que el
                del dispositivo que se está utilizando, en lugar de uno mucho
                más grande.
              </li>
            </ul>
            <Pre lang="html">{
              /*html*/ `
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              `
            }</Pre>
            <ul>
              <li>
                Otra forma de adaptarnos a diferentes dispositivos es a través
                de las "media queries" (consultas de medios). Las media queries
                son formas de cambiar el estilo de una página según la forma en
                que se está visualizando la página.
              </li>
              <li>
                Como ejemplo de una consulta de medios (media query), intentemos
                cambiar simplemente el color de la pantalla cuando se reduce a
                un cierto tamaño. Indicamos una consulta de medios escribiendo
                <span className="bg-gray-800 px-1 py-[2px] border-l-2 border-lime-400 rounded mx-1">
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
          </div>
        </div>
      </TitlesContextProvider>
    </main>
  );
}
