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

export default function Python() {
  const PythontTitle = ({ Tag = 'h1', children }) => {
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
            <PythontTitle>Python</PythontTitle>
            <hr />
            <Header>Indice</Header>
            <ol>
              <li>Introducción</li>
              <li>Python</li>
              <li>Variables</li>
              <li>Formateo de Cadenas</li>
              <li>Condiciones</li>
              <li>Secuencias</li>
              <ul>
                <li>Cadenas de Texto</li>
                <li>Listas</li>
                <li>Tuplas</li>
                <li>Conjuntos</li>
                <li>Diccionarios</li>
                <li>Bucles</li>
              </ul>
              <li>Funciones</li>
              <li>Módulos</li>
              <li>Programación Orientada a Objetos</li>
              <li>Programación Funcional</li>
              <li>Decoradores</li>
              <li>Funciones Lambda</li>
              <li>Excepciones</li>
            </ol>
            <SectionTitle title="Introducción" />
            <article>
              <p>
                Hasta ahora, hemos discutido cómo construir páginas web simples
                utilizando HTML y CSS, y cómo utilizar Git y GitHub para llevar
                un registro de los cambios en nuestro código y colaborar con
                otros.
              </p>
              <p>
                Hoy, profundizaremos en Python, uno de los dos principales
                lenguajes de programación que utilizaremos a lo largo de este
                curso.
              </p>
            </article>
            <SectionTitle title="Python" />
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" width="300" height="60">
                <defs>
                  <linearGradient
                    id="A"
                    x1="82.651"
                    y1="-9.222"
                    x2="134.024"
                    y2="35.404"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#5a9fd4" />
                    <stop offset="1" stop-color="#306998" />
                  </linearGradient>
                  <linearGradient
                    id="B"
                    x1="141.232"
                    y1="72.494"
                    x2="122.887"
                    y2="46.288"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#ffd43b" />
                    <stop offset="1" stop-color="#ffe873" />
                  </linearGradient>
                  <radialGradient
                    id="C"
                    gradientTransform="matrix(2.382716e-8,-0.296405,1.43676,4.683673e-7,-128.544,150.5202)"
                    cx="61.519"
                    cy="132.286"
                    fx="61.519"
                    fy="132.286"
                    r="29.037"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#b8b8b8" stop-opacity=".498" />
                    <stop offset="1" stop-color="#7f7f7f" stop-opacity="0" />
                  </radialGradient>
                </defs>
                <g transform="matrix(.281963 0 0 .281963 -17.339271 18.541234)">
                  <path
                    d="M232.618 37.297c0-12.2-3.478-18.46-10.435-18.804-2.768-.13-5.47.3-8.1 1.33-2.098.75-3.5 1.494-4.254 2.245v29.117c4.45 2.792 8.402 4.1 11.848 3.887 7.3-.482 10.94-6.4 10.94-17.776zm8.582.506c0 6.197-1.453 11.34-4.377 15.432-3.258 4.63-7.773 7.014-13.546 7.145-4.352.14-8.835-1.225-13.448-4.083V82.76l-7.463-2.662V21.36c1.225-1.502 2.8-2.792 4.7-3.887 4.442-2.588 9.84-3.92 16.2-3.985l.106.106c5.805-.073 10.28 2.3 13.423 7.144 2.93 4.434 4.4 10.117 4.4 17.065zm45.6 17.367c0 8.312-.833 14.07-2.5 17.27-1.674 3.2-4.858 5.756-9.56 7.66-3.813 1.502-7.937 2.32-12.362 2.458l-1.233-4.703c4.5-.612 7.667-1.225 9.504-1.837 3.617-1.225 6.1-3.103 7.463-5.618 1.094-2.05 1.633-5.96 1.633-11.75v-1.943a38.34 38.34 0 0 1-16.045 3.47c-3.674 0-6.916-1.15-9.708-3.47-3.135-2.523-4.703-5.724-4.703-9.602v-31.06l7.463-2.556v31.264c0 3.34 1.078 5.912 3.233 7.716s4.948 2.67 8.37 2.605c3.42-.073 7.087-1.396 10.982-3.985V14.615h7.463V55.17zm29.143 4.802l-2.458.106c-4.22 0-7.512-1.004-9.863-3.02-2.343-2.017-3.52-4.8-3.52-8.353V19.3h-5.1v-4.695h5.1V2.146l7.455-2.654v15.122h8.386v4.695h-8.386v29.2c0 2.8.75 4.785 2.254 5.944 1.3.955 3.34 1.502 6.132 1.64v3.887zm45.187-.612h-7.463V30.553c0-2.93-.686-5.454-2.05-7.56-1.576-2.384-3.764-3.576-6.573-3.576-3.42 0-7.7 1.804-12.836 5.413v34.53h-7.463V-9.497l7.463-2.352v31.362c4.768-3.47 9.978-5.2 15.636-5.2 3.952 0 7.153 1.33 9.602 3.985 2.458 2.654 3.682 5.96 3.682 9.912v31.16zm39.666-23.238c0-4.687-.9-8.557-2.662-11.62-2.107-3.73-5.38-5.7-9.806-5.903-8.18.474-12.264 6.336-12.264 17.57 0 5.152.85 9.455 2.564 12.9 2.188 4.4 5.47 6.573 9.847 6.5 8.214-.065 12.32-6.548 12.32-19.458zm8.173.05c0 6.67-1.707 12.223-5.1 16.657-3.748 4.964-8.925 7.455-15.53 7.455-6.548 0-11.652-2.5-15.334-7.455-3.34-4.434-5.005-9.986-5.005-16.657 0-6.27 1.805-11.546 5.413-15.84 3.813-4.556 8.827-6.842 15.024-6.842s11.243 2.286 15.13 6.842c3.6 4.295 5.413 9.57 5.413 15.84zm42.785 23.188h-7.463V28.92c0-3.34-1.004-5.944-3.013-7.822-2-1.87-4.687-2.776-8.026-2.703-3.544.065-6.916 1.225-10.117 3.47V59.36h-7.463V20.943c4.295-3.127 8.247-5.17 11.856-6.124 3.405-.9 6.4-1.33 8.998-1.33 1.772 0 3.438.17 5.005.514 2.93.678 5.315 1.935 7.153 3.78 2.05 2.04 3.07 4.5 3.07 7.357v34.22z"
                    fill="#646464"
                  />
                  <path
                    d="M128.657-9.22c-3.84.018-7.507.345-10.733.916-9.505 1.68-11.23 5.194-11.23 11.675v8.56h22.46v2.853h-30.9c-6.528 0-12.244 3.924-14.03 11.387-2.062 8.555-2.154 13.894 0 22.827 1.597 6.65 5.41 11.387 11.937 11.387h7.723V50.124c0-7.414 6.414-13.953 14.03-13.953h22.435c6.245 0 11.23-5.142 11.23-11.414V3.37c0-6.087-5.135-10.66-11.23-11.675-3.858-.642-7.862-.934-11.702-.916zM116.5-2.337c2.32 0 4.215 1.926 4.215 4.293 0 2.36-1.895 4.267-4.215 4.267-2.328 0-4.215-1.908-4.215-4.267 0-2.368 1.886-4.293 4.215-4.293z"
                    fill="url(#A)"
                  />
                  <path
                    d="M154.4 14.784v9.974c0 7.733-6.556 14.24-14.03 14.24h-22.435c-6.145 0-11.23 5.26-11.23 11.414V71.8c0 6.087 5.293 9.667 11.23 11.414 7.1 2.09 13.928 2.468 22.435 0 5.655-1.637 11.23-4.932 11.23-11.414v-8.56h-22.435v-2.853h33.665c6.528 0 8.96-4.553 11.23-11.387 2.345-7.036 2.245-13.802 0-22.827-1.613-6.498-4.694-11.387-11.23-11.387h-8.43zm-12.618 54.163c2.328 0 4.215 1.908 4.215 4.267 0 2.368-1.886 4.293-4.215 4.293-2.32 0-4.215-1.926-4.215-4.293 0-2.36 1.895-4.267 4.215-4.267z"
                    fill="url(#B)"
                  />
                  <path
                    d="M466.287 7.96h1.308V-.245h3.1v-.978h-7.508v.978h3.1V7.96m5.568 0h1.118V.466L475.4 7.96h1.245l2.528-7.47v7.47h1.22v-9.184h-1.613l-2.763 7.868-2.356-7.868h-1.804V7.96"
                    fill="#646464"
                  />
                  <path
                    transform="matrix(.614922 0 0 .678138 91.579792 8.0448)"
                    d="M110.467 132.286c0 4.753-21.915 8.607-48.948 8.607s-48.948-3.853-48.948-8.607 21.915-8.607 48.948-8.607 48.948 3.853 48.948 8.607z"
                    opacity=".444"
                    fill="url(#C)"
                  />
                </g>
              </svg>
            </figure>
            <ul>
              <li>
                Python es un lenguaje muy poderoso y ampliamente utilizado que
                nos permitirá construir rápidamente aplicaciones web bastante
                complejas. En este curso, utilizaremos Python 3, aunque Python 2
                aún se utiliza en algunos lugares. Al buscar recursos externos,
                ten cuidado de asegurarte de que estén utilizando la misma
                versión.
              </li>
              <li>
                Comencemos donde comenzamos con muchos lenguajes de
                programación: ¡Hola, mundo! Este programa, escrito en Python, se
                vería así:
              </li>
            </ul>
            <Pre lang="python">{
              /*python */ `
                print("Hello, world!")
                `
            }</Pre>
            <ul>
              <li>
                Para desglosar lo que sucede en esa línea, hay una función print
                incorporada en el lenguaje Python, que toma un argumento entre
                paréntesis y muestra ese argumento en la línea de comandos.
              </li>
              <li>
                Para escribir y ejecutar este programa en sus computadoras,
                primero escribirán esta línea en su editor de texto preferido y
                luego guardarán el archivo con un nombre, por ejemplo,
                <span className="bg-gray-800 border-b-2 border-sky-800 px-1 py-[2px] mx-1 rounded">
                  "algo.py"
                </span>
                . Luego, abrirán su terminal, se dirigirán al directorio que
                contiene el archivo y escribirán
                <span className="bg-gray-800 border-b-2 border-sky-800 px-1 py-[2px] mx-1 rounded">
                  "python algo.py"
                </span>
                . En el caso del programa anterior, las palabras "¡Hola, mundo!"
                se mostrarán en la terminal.
              </li>
              <li>
                Dependiendo de cómo esté configurada su computadora, es posible
                que deban escribir <b className="text-sky-400">"Python3"</b> en
                lugar de <b className="text-sky-400">"Python"</b> antes del
                nombre del archivo, e incluso es posible que deban descargar
                <Link
                  href="https://www.python.org/downloads/"
                  className="mx-1 text-sky-600"
                >
                  Python
                  <OpenInNew className="inline w-4 h-4 font-thin bottom-[1px] relative mx-[2px]" />
                </Link>
                si aún no lo han hecho. Después de instalar Python, recomendamos
                que también descarguen
                <Link
                  href="https://pip.pypa.io/en/stable/installing/"
                  className="mx-1 text-sky-600"
                >
                  Pip
                  <OpenInNew className="inline w-4 h-4 font-thin bottom-[1px] relative mx-[2px]" />
                </Link>
                , ya que lo necesitarán más adelante en el curso.
              </li>
              <li>
                Cuando escriben "python archivo.py" en su terminal, un programa
                llamado intérprete, que descargaron junto con Python, lee su
                archivo línea por línea y ejecuta cada línea de código. Esto es
                diferente de lenguajes como C o Java, que deben compilarse a
                código de máquina antes de poder ejecutarse.
              </li>
            </ul>
            <SectionTitle title="Variables" />
            <ul>
              <li>
                Una parte clave de cualquier lenguaje de programación es la
                capacidad de crear y manipular variables. Para asignar un valor
                a una variable en Python, la sintaxis se ve así:
              </li>
            </ul>
            <Pre lang="python">{
              /*python */ `
                a = 28
                b = 1.5
                c = "Hello!"
                d = True
                e = None
                `
            }</Pre>
            <p>
              Cada una de estas líneas toma el valor a la derecha del signo
              igual (=) y lo almacena en la variable que se encuentra a la
              izquierda.
            </p>
            <p>
              A diferencia de algunos otros lenguajes de programación, los tipos
              de variables en Python son inferidos, lo que significa que si bien
              cada variable tiene un tipo, no es necesario declarar
              explícitamente de qué tipo es al crear la variable. Algunos de los
              tipos de variables más comunes son:
            </p>
            <ul className="list-css-span">
              <li>
                <span>int</span>: Un número entero.
              </li>
              <li>
                <span>float</span>Un número decimal.
              </li>
              <li>
                <span>str</span>Una cadena de caracteres o secuencia de
                caracteres.
              </li>
              <li>
                <span>bool</span>: Un valor que es True o False.
              </li>
              <li>
                <span>NoneType</span>: Un valor especial (None) que indica la
                ausencia de un valor.
              </li>
            </ul>
            <p>
              Ahora trabajaremos en escribir un programa más interesante que
              pueda tomar la entrada del usuario y saludar al usuario. Para
              hacer esto, utilizaremos otra función incorporada llamada input,
              que muestra un mensaje al usuario y devuelve lo que el usuario
              proporciona como entrada. Por ejemplo, podemos escribir lo
              siguiente en un archivo llamado
              <span className="bg-gray-800 border-b-2 border-sky-800 px-1 py-[2px] mx-1 rounded">
                "name.py"
              </span>
              :
            </p>
            <Pre lang="python">{
              /*python */ `
                name = input("Name: ")
                print("Hello, " + name)
                `
            }</Pre>
          </div>
        </div>
      </TitlesContextProvider>
    </main>
  );
}
