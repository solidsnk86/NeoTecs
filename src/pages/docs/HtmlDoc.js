import ImageComponent from '../../components/ImageComponent';
import Indextitle from '../../components/IndexTitle';
import LinkButton from '../../components/LinkButton';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { ShareButton } from '../../components/ShareButton';

export default function HtmlDoc() {
  return (
    <main className="text-text-primary w-full">
      <span id="html" />
      <SectionTitle title="HTML (Lenguaje de Marcado de Hipertexto)" />
      <figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={120}
          height={60}
          fill="#currentColor"
          className="html-icon"
        >
          <path d="M6.3 21.475H12v5.63h5.213v-5.63h5.7v17.05h-5.7v-5.7H12v5.7H6.3v-17.05zm24.107 5.655H25.38v-5.654h15.736v5.654h-5.02v11.397h-5.7V27.13zm13.207-5.655h5.943l3.656 6 3.652-6H62.8v17.05h-5.676v-8.452l-3.92 6.063h-.098L49.2 30.074v8.452h-5.576zm22.03 0h5.7V32.9h8.015v5.636H65.645z" />
          <path
            d="M82.07 12.06h31.637l-2.882 32.288L97.87 47.94l-12.92-3.587z"
            fill="#e44d26"
          />
          <path d="M108.36 42.293l2.463-27.592H97.9v30.494z" fill="#f16529" />
          <path
            d="M92.65 26.678l-.362-4.056H97.9v-3.96h-9.93l1.068 11.977H97.9v-3.96zm-3.446 5.942l.555 6.22 8.113 2.252.018-.005v-4.12l-.017.005-4.4-1.2-.282-3.16h-2.143z"
            fill="#ebebeb"
          />
          <path
            d="M106.986 27.74l.097-1.064h-9.206v3.96h4.877l-.46 5.137-4.417 1.192v4.12l8.12-2.25.06-.67zm-9.1-5.118h9.567l.355-3.97h-9.922v3.95z"
            fill="#fff"
          />
        </svg>
      </figure>
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
      <ImageComponent
        src="/images/html-title-preview.png"
        altImage="Imagen previa de nuestro HTML"
      />
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
          <li className="list-css-span">
            Después de eso, la página consta de elementos HTML anidados (como
            html y body), cada uno con una etiqueta de apertura y cierre marcada
            con<span>{'<element>'}</span>para una apertura y
            <span>{'</element>'}</span>para un cierre.
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
      <span id="dom" />
      <SectionTitle title="DOM (Document Object Model)" />
      <ImageComponent src="/images/dom.png" altImage="Ejemplo DOM" />
      <li>
        El DOM (Document Object Model) es una forma conveniente de visualizar la
        manera en que los elementos HTML se relacionan entre sí utilizando una
        estructura similar a un árbol. Arriba tienes un ejemplo del diseño del
        DOM para la página que acabamos de escribir.
      </li>
      <span id="mas-elementos-html" />
      <SectionTitle title="Más Elementos HTML" />
      <ul>
        <li>
          Hay muchos elementos HTML que es posible que desees utilizar para
          personalizar tu página, incluyendo encabezados, listas y secciones en
          negrita. En el siguiente ejemplo, veremos algunos de estos en acción.
        </li>
        <li>
          Una cosa más que debes tener en cuenta:
          <br />
          <span className="border-gray-600 border px-1 mx-1 text-green-800 rounded">
            {'<'}!-- --{'>'}
          </span>
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
      <p>Para visualizarlo les doy dos extensiones de ejemplo:</p>
      <ol>
        <li>
        Esta extensión es de Microsoft llamada
        <LinkButton url='vscode:extension/ms-vscode.live-server' color='sky-400' iconName='Cast'>
        Live Preview
        </LinkButton>
        </li>
        <li>
        Esta otra extensión es
        extensión para Visual Studio Code llamada,
        <LinkButton
          url="vscode:extension/ritwickdey.LiveServer"
          color="[tomato]"
          iconName={'Puzzle'}
        >
          Live Server
        </LinkButton>
        .
        </li>
      </ol>
      <p>Cuando se renderiza esta página, veremos algo como ésto:</p>
      <ImageComponent
        src="/images/html-elements-commit.png"
        altImage="Elementos HTML"
      />
      <li>
        En caso de que te preocupe, ten en cuenta que nunca tendrás que
        memorizar estos elementos. Es muy fácil simplemente buscar algo como
        "imagen en HTML" para encontrar la etiqueta img. Un recurso que es
        especialmente útil para aprender sobre estos elementos es
        <LinkButton
          url="https://www.w3schools.com/html/default.asp"
          color="[tomato]"
          iconName={'ArrowUpRight'}
        >
          W3 Schools
        </LinkButton>
        .
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
      <ImageComponent src="/images/form.png" altImage="Formulario en HTML" />
      <SectionTitle title="Meta Tags" />
      <article>
        <p className="list-css-span">
          Las etiquetas<span>{'<meta>'}</span>en HTML se utilizan para
          proporcionar información adicional sobre la página web. Estas
          etiquetas no tienen contenido visible directo en la página, pero son
          interpretadas por los navegadores web y otros servicios en línea para
          diversos propósitos. Algunas de las funciones más comunes de las
          etiquetas<span>{'<meta>'}</span>incluyen:
        </p>
        <ol>
          <li>
            <span className="font-semibold">Descripción de la Página:</span>
            <Pre lang="html">{
              /**html */ `
              <meta name="description" content="..." />
              `
            }</Pre>
            Proporciona una breve descripción del contenido de la página. Los
            motores de búsqueda a menudo utilizan esta descripción en sus
            resultados.
          </li>
          <li>
            <span className="font-semibold">Descripción del Autor:</span>
            <Pre lang="html">{
              /**html */ `
              <meta name="author" content="..." />
              `
            }</Pre>
            Indica el nombre del autor de la página.
          </li>
          <li>
            <span className="font-semibold">Etiquetas Open Graph:</span>
            <Pre lang="html">{
              /**html */ `
              <meta property="og:..." content="..." />
              `
            }</Pre>
            Se utilizan para controlar cómo se muestra el contenido de una
            página cuando se comparte en redes sociales. Esto incluye la imagen,
            el título, la descripción, etc.
          </li>
          <li>
            <span className="font-semibold">Íconos:</span>
            <Pre lang="html">
              {
                /**html */ `
              <link rel="shortcut icon" href="..." /> y <link rel="apple-touch-icon" href="..." />
              `
              }
            </Pre>
            Establecen los íconos que se mostrarán en la pestaña del navegador y
            en dispositivos Apple, respectivamente.
          </li>
          <li>
            <span className="font-semibold">Color de Tema</span>
            <Pre lang="html">{
              /**html */ `
              <meta name="theme-color" content="..." />
              `
            }</Pre>
            Define el color de tema principal de la página web, que puede
            influir en la apariencia de la interfaz del navegador en
            dispositivos móviles. En definitiva esto cambia el color de la
            pestaña del navegador en la cual se está visualizando la página.
          </li>
          <li>
            <span className="font-semibold">Tarjeta de Twitter</span>
            <Pre lang="html">{
              /**html */ `
              <meta name="twitter:..." content="..." />
              `
            }</Pre>
            Similar a Open Graph, pero específico para Twitter. Permite
            personalizar cómo se muestra el contenido cuando se comparte en esta
            plataforma.
          </li>
        </ol>
      </article>
      <p className="font-semibold">
        ¿Por qué es importante la metainformación?
      </p>
      <p>
        La metainformación juega un papel significativo en mejorar el SEO de una
        página web, haciéndola más accesible y comprensible para los motores de
        búsqueda y las plataformas de redes sociales. La metainformación
        adecuada ayuda a los motores de búsqueda a indexar eficazmente las
        páginas web, mejorando su clasificación en los resultados de búsqueda.
        Además, la metainformación como Open Graph mejora la apariencia de los
        enlaces compartidos en las redes sociales, haciendo que el contenido sea
        más atractivo e informativo para los usuarios.
      </p>
      <Indextitle>Otros Meta Tags:</Indextitle>
      <article>
        <p>
          Metainformación de palabras clave: Esta metainformación incluye las
          palabras clave relacionadas con el contenido de la página web, lo que
          ayuda a los motores de búsqueda a indexar la página.
        </p>
        <Pre lang="html">{
          /*html */ `
            <meta name="keywords" content="palabra_clave1, palabra_clave2, palabra_clave3" />
            `
        }</Pre>
        <p>
          Metainformación de Open Graph: Esta metainformación mejora la forma en
          que se representa una página web cuando se comparte en plataformas de
          redes sociales, proporcionando información como el título, la
          descripción y la imagen previa.
        </p>
        <Pre lang="html">{
          /**html */ `
          <meta property="og:title" content="Título aquí" />
          <meta property="og:description" content="Descripción aquí" />
          <meta property="og:image" content="url_de_la_imagen_aquí" />
          `
        }</Pre>
      </article>
      <SectionTitle title="Cheat Sheet HTML" />
      <ul>
        <li>
          Mejora la legibilidad semántica recordando las etiquetas con este
          Cheat-Sheet de HTML
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

        <span>...</span> <!-- Crea un contenedor alineado (inline-block). -->

        <br/> <!-- Crea un espacio en blanco. -->

        <hr/> <!-- Crea una regla o línea horizontal visible, usada para dividir o separar contenidos. -->

        <!-- METADATA -->

        <meta /> <!-- Contiene metadata acerca del documento. -->

        <link/> <!-- Define la relación entre el documento actual y un recurso externo -->

        <style>...</style> <!-- Define la información de estilos del documento. -->

        <script>...</script> <!-- Embeber o incorporar algún script del lado del cliente. -->

        <!-- TEXTO -->

        <strong>...</strong> <!-- Define un texto importante, y muestra en negrita (bold). -->

        <b>...</b  <!-- Crea texto en negrita (bold). -->

        <em>...</em> <!-- Define el texto con enfatizado. -->

        <i>...</i> <!-- Texto en "italics" / También se pueden definir íconos dentro de ésta etiqueta. -->

        <strike>...</strike> <!-- Muestra un texto tachado. -->

        <!-- IMAGENES Y VIDEOS -->

        <img /> <!-- Embebe una imágen al documento. -->

        <video /> <!-- Embebe videos. -->

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
      <SectionTitle title="Propiedades aria" />
      <article className="list-css-span">
        <p>
          Es importante destacar que las propiedades aria:
          <span>Accessible Rich Internet Applications</span>en<span>HTML</span>
          se utilizan para mejorar la accesibilidad de las páginas web,
          especialmente para personas con discapacidades, incluidas las personas
          con discapacidad visual que utilizan lectores de pantalla. Estas
          propiedades proporcionan información adicional sobre los elementos de
          la página que puede no ser evidente solo con el marcado
          <span>HTML</span>estándar.
        </p>
        <p>
          Aquí hay algunas razones clave por las cuales se utilizan las
          propiedades<span>aria</span>:
        </p>
        <ol>
          <li>
            <span>Accesibilidad</span>: Las propiedades aria permiten mejorar la
            accesibilidad de los elementos de la página web al proporcionar
            información adicional sobre su función, estado o significado. Esto
            ayuda a los lectores de pantalla y otros dispositivos de asistencia
            a interpretar correctamente la página y a comunicar su contenido a
            los usuarios con discapacidades.
          </li>
          <li>
            <span>Semántica mejorada</span>: Aunque<span>HTML5</span>proporciona
            una gran cantidad de elementos semánticos, a veces no es suficiente
            para describir completamente la estructura y el propósito de una
            página web, especialmente en aplicaciones web complejas. Las
            propiedades aria complementan esta semántica al proporcionar más
            detalles sobre la función y el comportamiento de los elementos.
          </li>
          <li>
            <span>Compatibilidad con tecnologías de asistencias</span>: Al
            utilizar propiedades aria, se mejora la compatibilidad con
            tecnologías de asistencia como lectores de pantalla, navegadores de
            voz y otras herramientas de apoyo utilizadas por personas con
            discapacidades.
          </li>
        </ol>
        <p>
          Algunos ejemplos comunes de propiedades aria incluyen
          <span>aria-label</span>,<span>aria-labelledby</span>,{' '}
          <span>aria-describedby</span>,<span>aria-hidden</span>,
          <span>aria-checked</span>, entre otros. Estas propiedades se utilizan
          para describir la relación entre los elementos de la página, su estado
          actual y su función.
        </p>
        <p>
          Es importante utilizar las propiedades<span>aria</span>de manera
          adecuada y significativa para garantizar una experiencia de usuario
          accesible y comprensible para todos los usuarios, independientemente
          de sus capacidades.
        </p>
        <p className="font-semibold">Cabe destacar que:</p>
        <p>
          Estas propiedades no son parte del lenguaje<span>HTML</span>per se,
          sino que son parte de un conjunto de estándares desarrollados por el
          <span>World Wide Web Consortium (W3C)</span>para mejorar la
          accesibilidad de las aplicaciones web. Aunque son utilizadas
          principalmente en el contexto de<span>HTML</span>, también pueden ser
          utilizadas en otros lenguajes de marcado web, como
          <span>XHTML y XML</span>.
        </p>
      </article>
      <p className="text-text-primary">
        ¡Eso concluye nuestro contenido por aquí! ツ
      </p>
      <ShareButton setTitle={HtmlDoc.title} />
    </main>
  );
}
