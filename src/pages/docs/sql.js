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

export default function SqlDocs() {
  const SqlTitle = ({ Tag = 'h1', children }) => {
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
          <SqlTitle>SQL</SqlTitle>
          <hr className="border-text-primary" />
          <Header>Índice</Header>
          <ol className="indice">
            <li>
              <a href="#introduccion">Introducción</a>
            </li>
            <li>
              <a href="#javascript">SQL</a>
              <ul>
                <li>
                  <a href="#eventos">Bases de Datos</a>
                </li>
                <li>
                  <a href="#variables">Tipos de Columnas</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#queryselector">Tablas</a>
            </li>
            <li>
              <a href="#dom">SELECT</a>
              <ul>
                <li>
                  <a href="#consola">Trabajando con SQL en la terminal</a>
                </li>
                <li>
                  <a href="#funciones-de-flecha">Funciones</a>
                </li>
                <li>
                  <a href="#todo-list">UPDATE</a>
                </li>
                <li>
                  <a href="#todo-list">DELETE</a>
                </li>
                <li>
                  <a href="#todo-list">Otras cláusulas</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#intervalos">Unir Tablas</a>
              <ul>
                <li>
                  <a href="#local">Unir Query</a>
                </li>
                <li>
                  <a href="#local">Indexando</a>
                </li>
                <li>
                  <a href="#local">Vulnerabilidades SQL</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#apis">Módulos Django</a>
            </li>
            <li>
              <a href="#objetos">Migracionest</a>
            </li>
            <li>
              <a href="#cambio-de-moneda">Shell (Caparazón)</a>
              <ul>
                <li>
                  <a href="#cambio-divisas">Comenzando nuestra aplicación</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#cambio-divisas">Administrador Django</a>
            </li>
            <li>
              <a href="#cambio-divisas">Muchas más relaciones</a>
            </li>
            <li>
              <a href="#cambio-divisas">Usuarios</a>
            </li>
          </ol>
          <span id="introduccion" />
          <SectionTitle title="Introducción a SQL" />
          <article>
            <ul>
              <li>
                Hasta ahora, hemos discutido cómo construir páginas web simples
                utilizando HTML y CSS, y cómo utilizar Git y GitHub para llevar
                un registro de los cambios en nuestro código y colaborar con
                otros. También nos familiarizamos con el lenguaje de
                programación Python y comenzamos a utilizar Django para crear
                aplicaciones web.
              </li>
              <li>
                Hoy aprenderemos a usar SQL y modelos de Django para almacenar y
                acceder eficientemente a datos.
              </li>
            </ul>
          </article>
          <SectionTitle title="SQL" />
          <figure>
            <img
              src="/images/icons/sql-database-generic-svgrepo-com.svg"
              className="w-[300px] h-[60px]"
            />
          </figure>
          <SectionTitle title="Base de Datos" />
          <article>
            <p>
              Antes de adentrarnos en el uso de SQL, es fundamental comprender
              cómo se almacena la información. En SQL, generalmente trabajamos
              con bases de datos relacionales, donde la información se organiza
              en tablas. Cada tabla consta de columnas específicas y un número
              variable de filas.
            </p>
            <p>
              Para nuestra ilustración en SQL, consideremos un sitio web de
              aerolínea que gestiona información sobre vuelos y pasajeros. En la
              siguiente tabla, registramos diversos vuelos, cada uno con un
              origen, destino y duración asociados.
            </p>
            <div>
              <img src="/images/flights1.png" alt="Tabla de vuelos" />
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

SqlDocs.title = 'Aprende SQL · Base de Datos';
