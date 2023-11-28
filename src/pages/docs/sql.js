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
          <p>
            SQL, o Lenguaje de Consulta Estructurado, es un lenguaje de
            programación que nos permite actualizar y consultar bases de datos
            de manera eficiente. Se utiliza para gestionar y manipular datos
            almacenados en sistemas de gestión de bases de datos relacionales
            (RDBMS, por sus siglas en inglés). Con SQL, podemos realizar
            diversas operaciones, como insertar nuevos datos, actualizar
            registros existentes, recuperar información específica y eliminar
            datos no deseados.
          </p>
          <SectionTitle title="Base de datos" />
          <article>
            <p>
              Antes de adentrarnos en cómo utilizar el lenguaje SQL, debemos
              hablar sobre cómo se almacena nuestra información. Al utilizar
              SQL, trabajaremos con una base de
              <Link
                className="mx-1 text-[#00BCF2]"
                href="https://www.oracle.com/database/what-is-a-relational-database/#:~:text=A%20relational%20database%20is%20a,of%20representing%20data%20in%20tables."
              >
                datos relacional
              </Link>
              en la que podemos encontrar todos nuestros datos almacenados en
              varias tablas. Cada una de estas
              <Link
                className="mx-1 text-[#00BCF2]"
                href="https://www.essentialsql.com/what-is-a-database-table/"
              >
                tablas
              </Link>
              está compuesta por un número definido de columnas y un número
              flexible de filas.
            </p>
            <p className="list-css-span">
              Para ilustrar cómo trabajar con SQL, utilizaremos el ejemplo de un
              sitio web de una aerolínea utilizado para hacer un seguimiento de
              vuelos y pasajeros. En la siguiente tabla, observamos que estamos
              registrando varios vuelos, cada uno de los cuales tiene un
              <span>origen</span>, un<span>duración</span>y una
              <span>duración</span>.
            </p>
            <div className="images-client">
              <img src="/images/flights0.png" alt="Tabla de datos de vuelos." />
            </div>
            <p>
              Hay varios sistemas de gestión de bases de datos relacionales
              comúnmente utilizados para almacenar información y que pueden
              interactuar fácilmente con comandos SQL:
            </p>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>SQLite</li>
            </ul>
            <p>
              Los dos primeros, MySQL y PostgreSQL, son sistemas de gestión de
              bases de datos más robustos que generalmente se ejecutan en
              servidores separados de aquellos que ejecutan un sitio web. Por
              otro lado, SQLite es un sistema más ligero que puede almacenar
              todos sus datos en un solo archivo. Utilizaremos SQLite a lo largo
              de este curso, ya que es el sistema predeterminado utilizado por
              Django.
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
                <span>TEXT (TEXTO)</span>: Para cadenas de texto (por ejemplo,
                el nombre de una persona).
              </li>
              <li>
                <span>NUMERIC (NUMÉRICO)</span>: Una forma más general de datos
                numéricos (por ejemplo, una fecha o un valor booleano).
              </li>
              <li>
                <span>INTEGER (ENTERO)</span>: Cualquier número no decimal (por
                ejemplo, la edad de una persona).
              </li>
              <li>
                <span>REAL (REAL)</span>: Cualquier número real (por ejemplo, el
                peso de una persona).
              </li>
              <li>
                <span>BLOB (Objeto Binario Grande)</span>: Cualquier otro dato
                binario que deseemos almacenar en nuestra base de datos (por
                ejemplo, una imagen).
              </li>
              <p>
                Estos tipos de datos son esenciales para definir la estructura
                de nuestras tablas en una base de datos SQLite. Al igual que con
                otros sistemas de gestión de bases de datos, la elección del
                tipo de datos adecuado es crucial para garantizar la integridad
                y la consistencia de los datos almacenados.
              </p>
            </ul>
          </article>
          <SectionTitle title="Tablas" />
          <article>
            <p>
              Ahora, para comenzar a usar SQL para interactuar con una base de
              datos, las instrucciones comienzan creando una nueva tabla. El
              <Link
                className="mx-1 text-[#00BCF2]"
                href="https://www.w3schools.com/sql/sql_create_table.asp"
              >
                comando para crear una nueva tabla
              </Link>
              se ve algo como esto:
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
              En el comando anterior, weisre está creando una nueva tabla a la
              que weiesve decidió llamar flights, y weesve añadió cuatro
              columnas a esta tabla:
            </p>
            <ol className="list-css-span">
              <li>
                <span>id</span>: A menudo es útil tener un número que nos
                permita identificar de forma única cada fila de una tabla. Aquí
                hemos especificado eso id es un entero, y también que es nuestro
                clave primaria, lo que significa que es nuestro identificador
                único. Además, hemos especificado que lo hará AUTOINCREMENT, lo
                que significa que no tendremos que proporcionar una
                identificación cada vez que agreguemos a la tabla porque se hará
                automáticamente.
              </li>
              <li>
                <span>origin</span>: Aquí hemos especificado que este será un
                campo de texto, y al escribir NOT NULL hemos requerido que tenga
                un valor.
              </li>
              <li>
                <span>destination</span>: Nuevamente hemos especificado que este
                será un campo de texto y evitado que sea nulo.
              </li>
              <li>
                <span>duration</span>: Nuevamente, este valor no puede ser nulo,
                pero esta vez se representa como un número entero en lugar de
                texto.
              </li>
            </ol>
            <p>
              Acabamos de ver las restricciones NOT NULL y PRIMARY KEY al crear
              una columna, pero hay varias otras restricciones disponibles para
              nosotros:
            </p>
            <ul className="list-css-span">
              <li>
                <span>CHECK</span>: Asegura que se cumplan ciertas restricciones
                antes de permitir agregar/modificar una fila.
              </li>
              <li>
                <span>DEFAULT</span>: Proporciona un valor predeterminado si no
                se proporciona ningún valor.
              </li>
              <li>
                <span>NOT NULL</span>: Garantiza que se proporcione un valor.
              </li>
              <li>
                <span>PRIMARY KEY</span>: Indica que esta es la forma principal
                de buscar una fila en la base de datos.
              </li>
              <li>
                <span>UNIQUE</span>: Asegura que no haya dos filas con el mismo
                valor en esa columna.
              </li>
            </ul>
            <p>
              Ahora que hemos visto cómo crear una tabla, veamos cómo podemos
              agregar filas a ella. En SQL, hacemos esto utilizando el comando
              INSERT:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              INSERT INTO flights
              (origin, destination, duration)
              VALUES ("New York", "London", 415);
              `
            }</Pre>
            <p>
              En el comando anterior, hemos especificado el nombre de la tabla
              en la que deseamos realizar la inserción, luego proporcionamos una
              lista de los nombres de las columnas sobre las que
              proporcionaremos información y luego especificamos los VALORES que
              nos gustaría llenar en esa fila de la tabla, asegurándonos de que
              los VALORES vengan en el mismo orden que nuestra lista
              correspondiente de columnas. Observa que no necesitamos
              proporcionar un valor para "id" porque se incrementa
              automáticamente.
            </p>
          </article>
          <SectionTitle title="SELECT" />
          <article>
            <p>
              Una vez que una tabla ha sido poblada con algunas filas,
              probablemente desearemos una forma de acceder a los datos dentro
              de esa tabla. Hacemos esto utilizando la consulta SELECT de SQL.
              La consulta SELECT más simple en nuestra tabla "flights" podría
              verse algo así:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights;
              `
            }</Pre>
            <p>
              El comando anterior (*) recupera todos los datos de nuestra tabla
              "flights".
            </p>
            <div className="images-client">
              <img src="/images/all.png" alt="Tabla Vuelos." />
            </div>
            <p>
              Puede ser el caso de que realmente no necesitemos todas las
              columnas de la base de datos, solo "origin" y "destination". Para
              acceder solo a estas columnas, podemos reemplazar el * con los
              nombres de las columnas a las que queremos acceder. La siguiente
              consulta devuelve todos los origenes y destinos.
            </p>
            <div className="images-client">
              <img src="/images/flights1.png" alt="Tabla Vuelos." />
            </div>
            <p>
              A medida que nuestras tablas crecen, también querremos limitar las
              filas que devuelve nuestra consulta. Hacemos esto agregando un
              WHERE seguido de alguna condición. Por ejemplo, el siguiente
              comando selecciona solo la fila con un id de 3:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE id = 3;
              `
            }</Pre>
            <div className="images-client">
              <img src="/images/where0.png" alt="Tabla Vuelos." />
            </div>
            <p>Podemos filtrar por cualquier columna, ¡no solo por id!</p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE origin = "New York";
              `
            }</Pre>
            <div className="images-client">
              <img src="/images/where1.png" alt="Tabla Vuelos." />
            </div>
          </article>
          <SectionTitle title="Trabajnado con sql en la terminal" />
          <article>
            <p>
              Ahora que conocemos algunos comandos SQL básicos, ¡vamos a
              probarlos en la terminal! Para trabajar con SQLite en tu
              computadora, primero debes descargar SQLite. (No lo utilizaremos
              en la charla, pero también puedes descargar DB Browser para una
              forma más fácil de ejecutar consultas SQL).
            </p>
            <p>
              Podemos empezar creando un archivo para nuestra base de datos, ya
              sea creando manualmente un archivo nuevo o ejecutando touch
              flights.sql en la terminal. Ahora, si ejecutamos sqlite3
              flights.sql en la terminal, iremos a un prompt de SQLite donde
              podemos ejecutar comandos SQL.
            </p>
            <Pre lang="sql">{
              /*sql */ `
              # Entering into the SQLite Prompt
              (base) % sqlite3 flights.sql
              SQLite version 3.26.0 2018-12-01 12:34:55
              Enter ".help" for usage hints.

              # Creating a new Table
              sqlite> CREATE TABLE flights(
                 ...>     id INTEGER PRIMARY KEY AUTOINCREMENT,
                 ...>     origin TEXT NOT NULL,
                 ...>     destination TEXT NOT NULL,
                 ...>     duration INTEGER NOT NULL
                 ...> );

              # Listing all current tables (Just flights for now)
              sqlite> .tables
              flights

              # Querying for everything within flights (Which is now empty)
              sqlite> SELECT * FROM flights;

              # Adding one flight
              sqlite> INSERT INTO flights
                 ...>     (origin, destination, duration)
                 ...>     VALUES ("New York", "London", 415);

              # Checking for new information, which we can now see
              sqlite> SELECT * FROM flights;
              1|New York|London|415

              # Adding some more flights
              sqlite> INSERT INTO flights (origin, destination, duration) VALUES ("Shanghai", "Paris", 760);
              sqlite> INSERT INTO flights (origin, destination, duration) VALUES ("Istanbul", "Tokyo", 700);
              sqlite> INSERT INTO flights (origin, destination, duration) VALUES ("New York", "Paris", 435);
              sqlite> INSERT INTO flights (origin, destination, duration) VALUES ("Moscow", "Paris", 245);
              sqlite> INSERT INTO flights (origin, destination, duration) VALUES ("Lima", "New York", 455);

              # Querying this new information
              sqlite> SELECT * FROM flights;
              1|New York|London|415
              2|Shanghai|Paris|760
              3|Istanbul|Tokyo|700
              4|New York|Paris|435
              5|Moscow|Paris|245
              6|Lima|New York|455

              # Changing the settings to make output more readable
              sqlite> .mode columns
              sqlite> .headers yes

              # Querying all information again
              sqlite> SELECT * FROM flights;
              id          origin      destination  duration
              ----------  ----------  -----------  ----------
              1           New York    London       415
              2           Shanghai    Paris        760
              3           Istanbul    Tokyo        700
              4           New York    Paris        435
              5           Moscow      Paris        245
              6           Lima        New York     455

              # Searching for just those flights originating in New York
              sqlite> SELECT * FROM flights WHERE origin = "New York";
              id          origin      destination  duration
              ----------  ----------  -----------  ----------
              1           New York    London       415
              4           New York    Paris        435
              `
            }</Pre>
            <p>
              También podemos utilizar más que solo la igualdad para filtrar
              nuestros vuelos. Para valores enteros y reales, podemos usar mayor
              que o menor que:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE duration > 500;
              `
            }</Pre>
            <div className="images-client">
              <img src="/images/500.png" alt="Tabla vuelos." />
            </div>
            <p className="list-css-span">
              Inclusive tambien nosotros podemos usar otra lógica
              <span>AND</span>y<span>OR</span> como en Python:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE duration > 500;
              `
            }</Pre>
            <div className="images-client">
              <img src="/images/500andparis.png" alt="Tabla vuelos." />
            </div>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE duration > 500 OR destination = "Paris";
              `
            }</Pre>
            <div className="images-client">
              <img src="/images/500orparis.png" alt="Tabla vuelos." />
            </div>
            <p className="list-css-span">
              También podemos usar la palabra clave<span>IN</span>para verificar
              si un conjunto de datos es una de varias opciones:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE origin IN ("New York", "Lima");
              `
            }</Pre>
            <div className="images-client">
              <img src="/images/in.png" alt="Tabla vuelos." />
            </div>
            <p className="list-css-span">
              Incluso podemos utilizar expresiones regulares para buscar
              palabras de manera más amplia utilizando la palabra clave
              <Link
                href="https://www.w3schools.com/sql/sql_like.asp"
                className="mx-1 text-[#00BCF2]"
              >
                LIKE
              </Link>
              . La siguiente consulta encuentra todos los resultados con una
              <span>"a"</span>en el origen, utilizando<span>%</span>como un
              carácter comodín.
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE origin LIKE "%a%";
              `
            }</Pre>
          </article>
          <ShareButton />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

SqlDocs.title = 'Aprende SQL · Base de Datos';
