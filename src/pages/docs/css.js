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
                      <title>Nicer Table</title>
                  </head>
                  <body>
                      <table>
                          <thead>
                              <th>Ocean</th>
                              <th>Average Depth</th>
                              <th>Maximum Depth</th>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>Pacific</td>
                                  <td>4280 m</td>
                                  <td>10911 m</td>
                              </tr>
                              <tr>
                                  <td>Atlantic</td>
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
          </div>
        </div>
      </TitlesContextProvider>
    </main>
  );
}
