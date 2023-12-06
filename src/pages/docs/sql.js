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
            <p>
              Existen varios sistemas de gestión de bases de datos relacionales
              comúnmente utilizados para almacenar información y que pueden
              interactuar fácilmente con comandos SQL:
            </p>
            <ul>
              <li>
                <Link href="https://www.mysql.com/" className="text-[#00BCF2]">
                  MySQL
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.postgresql.org/"
                  className="text-[#00BCF2]"
                >
                  PostgreeSQL
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.sqlite.org/index.html"
                  className="text-[#00BCF2]"
                >
                  SQLite
                </Link>
              </li>
            </ul>
            <p>
              Los dos primeros, MySQL y PostgreSQL, son sistemas más robustos
              que generalmente se ejecutan en servidores distintos de aquellos
              que ejecutan un sitio web. SQLite, por otro lado, es un sistema
              más liviano que puede almacenar todos sus datos en un único
              archivo. Utilizaremos SQLite a lo largo de este curso, ya que es
              el sistema predeterminado utilizado por Django.
            </p>
          </article>
          <SectionTitle title="Tipos de Columnas" />
          <article>
            <p>
              Así como trabajamos con varios tipos de variables en Python,
              SQLite tiene tipos que representan diferentes formas de
              información. Otros sistemas de gestión pueden tener tipos de datos
              diferentes, pero todos son bastante similares a los de SQLite:
            </p>
            <ul className="list-css-span">
              <li>
                <span>TEXT</span>: Para cadenas de texto (por ejemplo, el nombre
                de una persona)
              </li>
              <li>
                <span>NUMERIC</span>: Una forma más general de datos numéricos
                (por ejemplo, una fecha o un valor booleano)
              </li>
              <li>
                <span>INTEGER</span>: Cualquier número no decimal (por ejemplo,
                la edad de una persona)
              </li>
              <li>
                <span>REAL</span>: Cualquier número real (por ejemplo, el peso
                de una persona)
              </li>
              <li>
                <span>BLOB</span>(Objeto Binario Grande): Cualquier otro dato
                binario que deseemos almacenar en nuestra base de datos (por
                ejemplo, una imagen)
              </li>
            </ul>
          </article>
          <SectionTitle title="Tablas" />
          <article>
            <p>
              Ahora, para comenzar a utilizar SQL para interactuar con una base
              de datos, empecemos por crear una nueva tabla. El comando para
              crear una nueva tabla se parece a algo como esto:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              CREATE TABLE flights(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                origin TEXT NOT NULL,
                destination TEXT NOT NULL,
                duration INTEGER NOT NULL
            );
              `
            }</Pre>
            <p>
              En el comando anterior, estamos creando una nueva tabla que hemos
              decidido llamar "flights", y hemos añadido cuatro columnas a esta
              tabla:
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

SqlDocs.title = 'Aprende SQL · Base de Datos';
