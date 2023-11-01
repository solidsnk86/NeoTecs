import Link from 'next/link';
import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';

export const HtmlDoc = () => {
  return (
    <main className="text-slate-100 w-full">
      <SectionTitle title="HTML (Lenguaje de Marcado de Hipertexto)" />
      <ul>
        <li>
          HTML es un lenguaje de marcado que define la estructura de una página
          web. Es interpretado por tu navegador web (Safari, Google Chrome,
          Firefox, etc.) para mostrar contenido en tu pantalla.
        </li>
        <li>Vamos a comenzar escribiendo un simple archivo HTML</li>
      </ul>
      <Pre lang="html">
        {
          /* html */ `
        <!DOCTYPE html>
        <html lang="es">
        <head>
        <title>Hola soy el Título de la pestaña!</title>
        </head>
        <body>
          Hola, Neo!
        </body>
        <html>
        `
        }
      </Pre>
      <li>Cuando abramos el archivo en el navegador vamos a obtener ésto:</li>
      <div className="images-client">
        <img src="/images/html-title-preview.png" />
      </div>
      <ol>
        <li>
          Ahora, tomemos un momento para hablar sobre el archivo que acabamos de
          escribir, que parece ser bastante complicado para una página tan
          simple.
        </li>
        <ul>
          <li>
            En la primera línea, estamos declarando (para el navegador web) que
            estamos escribiendo el documento en la última versión de HTML:
            HTML5.
          </li>
          <li>
            Después de eso, la página consta de elementos HTML anidados (como
            html y body), cada uno con una etiqueta de apertura y cierre marcada
            con <element> para una apertura y </element> para un cierre.
          </li>
          <li>
            Observa cómo cada uno de los elementos internos está indentado un
            poco más que el anterior. Aunque esto no es necesariamente requerido
            por el navegador, será muy útil mantener este estilo en tu propio
            código.
          </li>
          <li>
            Los elementos HTML pueden incluir atributos, que proporcionan al
            navegador información adicional sobre el elemento. Por ejemplo,
            cuando incluimos lang="en" en nuestra etiqueta inicial, le estamos
            indicando al navegador que estamos utilizando el español como
            nuestro idioma principal.
          </li>
          <li>
            Dentro del elemento HTML, típicamente queremos incluir tanto una
            etiqueta head como una etiqueta body. La etiqueta head contendrá
            información sobre tu página que no necesariamente se muestra, y la
            etiqueta body contendrá lo que es visible para los usuarios que
            visitan el sitio.
          </li>
          <li>
            Dentro de la etiqueta head, hemos incluido un título para nuestra
            página web, que notarás se muestra en la pestaña en la parte
            superior de nuestro navegador web.
          </li>
          <li>
            Finalmente, hemos incluido el texto "¡Hola, Neo!" en el body, que es
            la parte visible de nuestra página.
          </li>
        </ul>
      </ol>
      <SectionTitle title="DOM (Document Object Model)" />
      <div className="images-client">
        <img src="/images/dom.png" />
      </div>
      <li>
        El DOM (Document Object Model) es una forma conveniente de visualizar la
        manera en que los elementos HTML se relacionan entre sí utilizando una
        estructura similar a un árbol. Arriba tienes un ejemplo del diseño del
        DOM para la página que acabamos de escribir.
      </li>
      <SectionTitle title="Más Elementos HTML" />
      <ul>
        <li>
          Hay muchos elementos HTML que es posible que desees utilizar para
          personalizar tu página, incluyendo encabezados, listas y secciones en
          negrita. En el siguiente ejemplo, veremos algunos de estos en acción.
        </li>
        <li>
          Una cosa más que debes tener en cuenta:{' '}
          <span className="bg-gray-600 px-1 py-[2px] w-fit rounded-sm">
            {'<'}!-- --{'>'}
          </span>{' '}
          nos permite agregar comentarios en HTML, por lo que lo utilizaremos a
          continuación para explicar algunos de los elementos.
        </li>
      </ul>
      <Pre lang="html">
        {
          /* html */ `
          <!DOCTYPE html>
          <html lang="es">
              <head>
                  <title>Elementos HTML</title>
              </head>
              <body>
                  <!-- Podemos crear encabezados usando etiquetas h1 a h6. -->
                  <h1>Un Encabezado Grande</h1>
                  <h2>Un Encabezado Más Pequeño</h2>
                  <h6>El Encabezado Más Pequeño</h6>
          
                  <!-- Las etiquetas strong e i nos proporcionan negritas e itálicas respectivamente. -->
                  Una palabra <strong>en negrita</strong> y una palabra <i>en cursiva</i>!
          
                  <!-- Podemos enlazar a otra página (como la página de NeoTecs) usando la etiqueta a. -->
                  Visita el <a href="https://neotecs.netlify.app/">Sitio web de NeoTecs</a>!
          
                  <!-- Usamos ul para una lista desordenada y ol para una ordenada. Ambas listas contienen li,
                  o elementos de lista. -->
                  Una lista desordenada:
                  <ul>
                      <li>foo</li>
                      <li>bar</li>
                      <li>baz</li>
                  </ul>
                  Una lista ordenada:
                  <ol>
                      <li>foo</li>
                      <li>bar</li>
                      <li>baz</li>
                  </ol>
          
                  <!-- Las imágenes requieren un atributo src, que puede ser la ruta a un archivo en tu 
                  computadora o el enlace a una imagen en línea. También incluye un atributo alt, que proporciona 
                  una descripción en caso de que la imagen no se pueda cargar. -->
                  Una imagen:
                  <img src="../../images/neo.npg" alt="Imagen de Neo, mi mascota">
                  <!-- También podemos ver arriba que para algunos elementos que no contienen otros, las 
                  etiquetas de cierre no son necesarias. -->
          
                  <!-- Aquí, usamos la etiqueta br para agregar espacio en blanco en la página. -->
                  <br/> <br/>
          
                  <!-- Se necesitan varias etiquetas diferentes para crear una tabla. -->
                  <table>
                      <thead>
                          <th>Océano</th>
                          <th>Profundidad Promedio</th>
                          <th>Profundidad Máxima</th>
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
          </html>
          
        `
        }
      </Pre>
      <p>
        Para poder renderizar ésto en el navegador, vamos a instalar un
        extensión de Visual Studio Code llamada,
        <Link
          href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
          className="mx-1 text-amber-400"
        >
          Live Server
        </Link>
        .
      </p>
      <p>Cuando se renderice esta página, veremos algo como ésto:</p>
      <div className="image-client">
        <img src="/images/html-elements-commit.png" />
      </div>
      <li>
        En caso de que te preocupe, ten en cuenta que nunca tendrás que
        memorizar estos elementos. Es muy fácil simplemente buscar algo como
        "imagen en HTML" para encontrar la etiqueta img. Un recurso que es
        especialmente útil para aprender sobre estos elementos es W3 Schools.
      </li>
      <SectionTitle title="Formularios" />
      <ul>
        <li>
          Otro conjunto de elementos que es realmente importante al crear un
          sitio web es cómo recopilar información de los usuarios. Puedes
          permitir que los usuarios ingresen información utilizando un
          formulario HTML, que puede contener varios tipos diferentes de
          entradas. Más adelante en el curso, aprenderemos cómo manejar la
          información una vez que se ha enviado un formulario.
        </li>
        <li>
          Al igual que con otros elementos HTML, no es necesario memorizarlos, y
          W3 Schools es un excelente recurso para aprender acerca de ellos.
        </li>
      </ul>
      <Pre lang="html">{
        /*html*/ `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <title>Forms</title>
        </head>
        <body>
        <form>
        <input type="text" placeholder="First Name" name="first">
        <input type="password" placeholder="Password" name="password">
        <div>
            Color Favorito:
            <input name="color" type="radio" value="blue"> Azul
            <input name="color" type="radio" value="green"> Verde
            <input name="color" type="radio" value="yellow"> Amarillo
            <input name="color" type="radio" value="red"> Rojo

        </div>
        <input type="submit">
        </form>
        </body>
        </html>
        `
      }</Pre>
      <img src="/images/form.png" />
      <ul>
        <li>
          Te dejo un cheat-sheet de etiqueteas <em>HTML</em> para una mejor
          legibilidad semántica.
        </li>
      </ul>
      <Pre lang="html">{
        /*html */ `
        <!-- CHEAT SHEET HTML -->

        <html>...</html> <!-- El elemento raíz (root). Indica que una página web está escrita en HTML5. -->

        <head>...</head> <!-- Esta etiqueta para contener información del documento. -->

        <title>...</title> <!-- Para colocar el título de la página. -->

        <body>...</body> <!-- Contiene todo el contenido que se muestra en la UI (Interfaz de Usuario). -->

        <!-- Los comentarios se envuelven en ésta etiqueta. -->

        <!-- ESTRUCTURA DE LA PAGINA -->

        <h1>...</h1> => <h6>...</h6> <!-- Desde el encabezado de página más importante hasta el menor que es 6. -->

        <p>...</p> <!-- Define un párrafo. -->

        <section>...</section> <!-- Crea una sección para contener elementos. -->

        <div>...</div> <!-- Crea un contenedor de elementos. -->

        <span>...</span> <!-- Crea un contenedor alineado (inline-block) -->

        <br/> <!-- Crea un quiebre de línea simple -->

        <hr/> <!-- Crea una regla o línea horizontal visible, usada para dividir o separar contenidos. -->

        <!-- METADATA -->

        <meta /> <!-- Contiene metadata acerca del documento. -->

        <link/> <!-- Define la relación entre el documento actual y un recurso externo -->

        <style>..</style> <!-- Define la información de estilos del documento. -->

        <script>...</script> <!-- Embeber o incorporar algún script del lado del cliente. -->

        <!-- TEXTO -->

        <strong>...</strong> <!-- Define un texto importante, y muestra en negrita (bold). -->

        <b>...</b  <!-- Crea texto en negrita (bold). -->

        <em>...</em> <!-- Define el texto con enfatizado. -->

        <i>...</i> <!-- Texto en "italics" / También se pueden definir íconos dentro de ésta etiqueta. -->

        <strike>...</strike> <!-- Muestra un texto tachado. -->

        <!-- IMAGENES Y VIDEOS -->

        <img /> <!-- Embebe una imágen al documento -->

        <video /> <!-- Ebebe videos. -->

        <map>...</map> <!-- Crea un mapa de imágenes con áreas para hacer clicks. -->

        <area /> <!-- Especificar un áerea dentro del mapa de imágenes. -->

        <!-- LISTAS & TABLAS -->

        <ul>...</ul> <!-- Lista desordenada. -->

        <ol>...</ol> <!-- Lista ordenada numerada. -->

        <li>...</li> <!-- Crea una lista de ítems dentro de sus padres <ol> o <ul>. -->

        <table>...</table> <!-- Un contenedor para un formulario o tabla. -->

        <caption>...</caption> <!-- Crea una descripción de texto para la tabla. -->

        <thead>...</thead> <!-- Agrega los encabezados de la tabla. -->

        <tbody>...</tbody> <!-- Contenido principal del cuerpo de la tabla. -->

        <tr>...</tr> <!-- Crea una fila para contener datos. -->

        <th>...<th> <!-- Crean un simple ítem de encabezado. -->

        <td>...</td> <!-- Crea una celda simple para la tabla. -->

        <!-- FORMULARIOS -->

        <forms>...</forms> <!-- Crea una sección dónde se atribuyen como debe operar un formulario. -->

        <fieldset>...</fieldset> <!-- Define un número de campos del formulario -->

        <label>...</label> <!-- Crea una etiqueta de un campo con entrada(input). -->

        <input /> <!-- Crea un campo para entrada de datos. -->

        <legend>...</legend> <!-- Se utiliza en conjunto con <fieldset> para descripción o título de un 
                              grupo de elementos. -->

        `
      }</Pre>
      <h4 className="text-slate-100">
        ¡Eso concluye nuestro contenido por aquí! ツ
      </h4>
    </main>
  );
};
