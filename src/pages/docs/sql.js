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
import { QuoteIcon } from 'lucide-react';

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
              <a href="#sql">SQL</a>
              <ul>
                <li>
                  <a href="#base-de-datos">Bases de Datos</a>
                </li>
                <li>
                  <a href="#tipos-de-columnas">Tipos de Columnas</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#tablas">Tablas</a>
            </li>
            <li>
              <a href="#select">SELECT</a>
              <ul>
                <li>
                  <a href="#terminal-sql">Trabajando con SQL en la terminal</a>
                </li>
                <li>
                  <a href="#funciones">Funciones</a>
                </li>
                <li>
                  <a href="#update">UPDATE</a>
                </li>
                <li>
                  <a href="#delete">DELETE</a>
                </li>
                <li>
                  <a href="#otras-clausulas">Otras cláusulas</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#unir-tablas">Unir Tablas</a>
              <ul>
                <li>
                  <a href="#unir-query">Unir Query</a>
                </li>
                <li>
                  <a href="#indexado">Indexando</a>
                </li>
                <li>
                  <a href="#vulnerabilidades-sql">Vulnerabilidades SQL</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#modulos-django">Módulos Django</a>
            </li>
            <li>
              <a href="#migraciones">Migraciones</a>
            </li>
            <li>
              <a href="#shell">Shell (Caparazón)</a>
              <ul>
                <li>
                  <a href="#comenzando-aplicacion">
                    Comenzando nuestra aplicación
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#administrador-django">Administrador Django</a>
            </li>
            <li>
              <a href="#mas-relaciones">Muchas más relaciones</a>
            </li>
            <li>
              <a href="#usuarios">Usuarios</a>
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
          <span id="base-de-datos" />
          <SectionTitle title="Base de Datos" />
          <article>
            <p>
              Antes de adentrarnos en el uso de SQL, es fundamental comprender
              cómo se almacena la información. En SQL, generalmente trabajamos
              con bases de datos{' '}
              <Link
                href="https://www.oracle.com/database/what-is-a-relational-database/#:~:text=A%20relational%20database%20is%20a,of%20representing%20data%20in%20tables."
                className="text-[#00BCF2]"
              >
                relacionales
              </Link>
              , donde la información se organiza en{' '}
              <Link
                href="https://www.essentialsql.com/what-is-a-database-table/"
                className="text-[#00BCF2]"
              >
                tablas
              </Link>
              . Cada tabla consta de columnas específicas y un número variable
              de filas.
            </p>
            <p>
              Para nuestra ilustración en SQL, consideremos un sitio web de
              aerolínea que gestiona información sobre vuelos y pasajeros. En la
              siguiente tabla, registramos diversos vuelos, cada uno con un
              origen, destino y duración asociados.
            </p>
            <div className="images-client">
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
          <span id="tipos-de-columnas" />
          <SectionTitle title="Tipos de Columnas" />
          <article>
            <p>
              Así como trabajamos con varios tipos de variables en Python,
              SQLite tiene{' '}
              <Link
                href="https://www.sqlite.org/datatype3.html"
                className="text-[#00BCF2]"
              >
                tipos
                <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
              </Link>{' '}
              que representan diferentes formas de información. Otros sistemas
              de gestión pueden tener tipos de datos diferentes, pero todos son
              bastante similares a los de SQLite:
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
          <span id="tablas" />
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
              decidido llamar <b>"flights"</b>, y hemos añadido cuatro columnas
              a esta tabla:
            </p>
            <ol className="list-css-span">
              <li>
                <span>id</span>: A menudo es útil tener un número que nos
                permita identificar de manera única cada fila en una tabla. Aquí
                hemos especificado que "id" es un número entero y también que es
                nuestra clave primaria{' '}
                <Link
                  href="https://www.w3schools.com/sql/sql_primarykey.ASP"
                  className="text-[#00BCF2]"
                >
                  PRIMARY-KEY
                  <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
                </Link>
                , lo que significa que es nuestro identificador único. Además,
                hemos especificado que será AUTOINCREMENT, lo que significa que
                no tendremos que proporcionar un id cada vez que agreguemos a la
                tabla, ya que se hará automáticamente.
              </li>
              <li>
                <span>origin</span>: Hemos especificado que este será un campo
                de texto, y al escribir NOT NULL hemos requerido que tenga un
                valor.
              </li>
              <li>
                <span>destination</span>: Nuevamente hemos especificado que este
                será un campo de texto y hemos evitado que sea nulo.
              </li>
              <li>
                <span>duration</span>: Nuevamente, este valor no puede ser nulo,
                pero esta vez se representa como un número entero en lugar de
                texto.
              </li>
            </ol>
            <p>
              Acabamos de ver las restricciones <b>NOT NULL</b> y{' '}
              <b>PRIMARY KEY</b> al hacer una columna, pero hay varias otras
              <Link
                href="https://www.tutorialspoint.com/sqlite/sqlite_constraints.htm"
                className="text-[#00BCF2] mx-1"
              >
                restrincciones
                <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
              </Link>
              disponibles:
            </p>
            <ul className="list-css-span">
              <li>
                <span>CHECK</span>: Asegura que se cumplan ciertas restricciones
                antes de permitir que se agregue/modifique una fila.
              </li>
              <li>
                <span>DEFAULT</span>: Proporciona un valor predeterminado si no
                se proporciona ningún valor.
              </li>
              <li>
                <span>NOT NULL</span>: Garantiza que se proporcione un valor.
              </li>
              <li>
                <span>PRIMARY KEY</span>: Indica que esta es la principal manera
                de buscar una fila en la base de datos.
              </li>
              <li>
                <span>UNIQUE</span>: Asegura que no haya dos filas con el mismo
                valor en esa columna.
              </li>
              <li>...</li>
            </ul>
            <p>
              Ahora que hemos visto cómo crear una tabla, veamos cómo podemos
              agregar filas a ella. En SQL, hacemos esto mediante el comando{' '}
              <b>INSERT</b>:
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
              lista de los nombres de las columnas para las cuales
              proporcionaremos información, y luego especificamos los VALORES
              que deseamos llenar en esa fila de la tabla, asegurándonos de que
              los VALORES estén en el mismo orden que nuestra lista
              correspondiente de columnas. Es importante destacar que no es
              necesario proporcionar un valor para "id" porque se incrementa
              automáticamente.
            </p>
          </article>
          <span id="select" />
          <SectionTitle title="SELECT" />
          <article>
            <p>
              Una vez que se ha poblado una tabla con algunas filas, es probable
              que deseemos una manera de acceder a los datos dentro de esa
              tabla. Hacemos esto utilizando la consulta SELECT de SQL. La
              consulta SELECT más simple en nuestra tabla de vuelos podría verse
              algo así:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights;
              `
            }</Pre>
            <p>
              La instrucción anterior <b>(*)</b> recupera todos los datos de
              nuestra tabla de vuelos.
            </p>
            <div className="images-client">
              <img src="/images/all.png" alt="Tabla de Vuelos" />
            </div>
            <p>
              Puede ser el caso de que realmente no necesitemos todas las
              columnas de la base de datos, solo origen y destino. Para acceder
              solo a estas columnas, podemos reemplazar el * con los nombres de
              las columnas a las que queremos acceder. La siguiente consulta
              devuelve todos los orígenes y destinos.
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT origin, destination FROM flights;
              `
            }</Pre>
            <div className="images-client">
              <img src="/images/flights1.png" alt="Tabla de Vuelos" />
            </div>
            <p>
              A medida que nuestras tablas se vuelven más grandes, también
              querremos reducir las filas que devuelve nuestra consulta. Hacemos
              esto agregando un WHERE seguido de alguna condición. Por ejemplo,
              el siguiente comando selecciona solo la fila con un id de 3:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE id = 3;
              `
            }</Pre>
            <div className="images-client">
              <img src="/images/where0.png" alt="Tabla de Vuelos" />
            </div>
            <p>Podemos filtrar por cualquier columna, ¡no solo por id!</p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE origin = "New York";
              `
            }</Pre>
            <div className="images-client">
              <img src="/images/where1.png" alt="Tabla de Vuelos" />
            </div>
          </article>
          <span id="terminal-sql" />
          <SectionTitle title="Trabajar con SQL en la terminal" />
          <article>
            <p>
              Ahora que conocemos algunos comandos básicos de SQL, ¡vamos a
              probarlos en la terminal! Para trabajar con SQLite en tu
              computadora, primero debes descargar{' '}
              <Link
                href="https://www.sqlite.org/download.html"
                className="text-[#00BCF2]"
              >
                SQLLite
                <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
              </Link>
              . (No lo usaremos en la conferencia, pero también puedes descargar
              <Link
                href="https://sqlitebrowser.org/dl/"
                className="text-[#00BCF2] mx-1"
              >
                DB Browser
                <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
              </Link>
              para una forma más amigable de ejecutar consultas SQL).
            </p>
            <p className="list-css-span">
              Podemos empezar creando un archivo para nuestra base de datos, ya
              sea creando manualmente un nuevo archivo o ejecutando
              <span>touch flights.sql</span>en la terminal. Ahora, si ejecutamos
              <span>sqlite3 flights.sql</span>en la terminal, nos llevará a un
              prompt de SQLite donde podemos ejecutar comandos SQL:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              # Ingresando al prompt de SQLite
              (base) % sqlite3 flights.sql
              SQLite version 3.26.0 2018-12-01 12:34:55
              Ingrese ".help" para obtener sugerencias de uso.
              
              # Creando una nueva tabla
              sqlite> CREATE TABLE flights(
                 ...>     id INTEGER PRIMARY KEY AUTOINCREMENT,
                 ...>     origin TEXT NOT NULL,
                 ...>     destination TEXT NOT NULL,
                 ...>     duration INTEGER NOT NULL
                 ...> );
              
              # Listando todas las tablas actuales (solo vuelos por ahora)
              sqlite> .tables
              flights
              
              # Consultando todo dentro de vuelos (que ahora está vacío)
              sqlite> SELECT * FROM flights;
              
              # Agregando un vuelo
              sqlite> INSERT INTO flights
                 ...>     (origin, destination, duration)
                 ...>     VALUES ("Nueva York", "Londres", 415);
              
              # Verificando la nueva información, que ahora podemos ver
              sqlite> SELECT * FROM flights;
              1|Nueva York|Londres|415
              
              # Agregando algunos vuelos más
              sqlite> INSERT INTO flights (origin, destination, duration) VALUES ("Shanghái", "París", 760);
              sqlite> INSERT INTO flights (origin, destination, duration) VALUES ("Estambul", "Tokio", 700);
              sqlite> INSERT INTO flights (origin, destination, duration) VALUES ("Nueva York", "París", 435);
              sqlite> INSERT INTO flights (origin, destination, duration) VALUES ("Moscú", "París", 245);
              sqlite> INSERT INTO flights (origin, destination, duration) VALUES ("Lima", "Nueva York", 455);
              
              # Consultando esta nueva información
              sqlite> SELECT * FROM flights;
              1|Nueva York|Londres|415
              2|Shanghái|París|760
              3|Estambul|Tokio|700
              4|Nueva York|París|435
              5|Moscú|París|245
              6|Lima|Nueva York|455
              
              # Cambiando la configuración para hacer que la salida sea más legible
              sqlite> .mode columns
              sqlite> .headers yes
              
              # Consultando toda la información nuevamente
              sqlite> SELECT * FROM flights;
              id          origin      destination  duration
              ----------  ----------  -----------  ----------
              1           Nueva York  Londres       415
              2           Shanghái    París         760
              3           Estambul    Tokio         700
              4           Nueva York  París         435
              5           Moscú       París         245
              6           Lima        Nueva York    455
              
              # Buscando solo aquellos vuelos que tienen origen en Nueva York
              sqlite> SELECT * FROM flights WHERE origin = "Nueva York";
              id          origin      destination  duration
              ----------  ----------  -----------  ----------
              1           Nueva York  Londres       415
              4           Nueva York  París         435
              
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
              <img src="/images/500.png" alt="Tabla de Vuelos" />
            </div>
            <p>
              Y también podemos utilizar otras lógicas
              <Link
                href="https://sqlitebrowser.org/dl/"
                className="text-[#00BCF2] mx-1"
              >
                (AND, OR)
                <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
              </Link>
              como en Python:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE duration > 500 AND destination = "Paris";
              `
            }</Pre>
            <div className="images-client">
              <img src="/images/500andparis.png" alt="Tabla de Vuelos" />
            </div>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE duration > 500 OR destination = "Paris";
              `
            }</Pre>
            <div className="images-client">
              <img src="/images/500orparis.png" alt="Tabla de Vuelos" />
            </div>
            <p>
              También podemos usar la palabra clave IN para ver si un dato es
              una de varias opciones:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE origin IN ("New York", "Lima");
              `
            }</Pre>
            <div className="images-client">
              <img src="/images/in.png" alt="Tabla de Vuelos" />
            </div>
            <p>
              Incluso podemos usar expresiones regulares para buscar palabras de
              manera más amplia utilizando la palabra clave LIKE. La siguiente
              consulta encuentra todos los resultados con una "a" en el origen,
              utilizando % como un carácter comodín.
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE origin LIKE "%a%";
              `
            }</Pre>
            <div className="images-client">
              <img src="/images/like.png" alt="Tabla de Vuelos" />
            </div>
          </article>
          <span id="funciones" />
          <SectionTitle title="Funciones" />
          <article>
            <p>
              También hay varias funciones de SQL que podemos aplicar a los
              resultados de una consulta. Estas pueden ser útiles si no
              necesitamos todos los datos devueltos por una consulta, sino solo
              algunas estadísticas resumidas de los datos.
            </p>
            <ul>
              <li>
                <Link
                  href="https://sqlitebrowser.org/dl/"
                  className="text-[#00BCF2] mx-1"
                >
                  AVERAGE (PROMEDIO)
                  <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://sqlitebrowser.org/dl/"
                  className="text-[#00BCF2] mx-1"
                >
                  COUNT (CONTAR)
                  <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://sqlitebrowser.org/dl/"
                  className="text-[#00BCF2] mx-1"
                >
                  MAX (MÁXIMO)
                  <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://sqlitebrowser.org/dl/"
                  className="text-[#00BCF2] mx-1"
                >
                  MIN (MÍNIMO)
                  <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://sqlitebrowser.org/dl/"
                  className="text-[#00BCF2] mx-1"
                >
                  SUM (SUMA)
                  <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
                </Link>
              </li>
              <li>...</li>
            </ul>
          </article>
          <SectionTitle title="UPDATE" />
          <article>
            <p className="list-css-span">
              UPDATE (ACTUALIZAR) Hasta ahora, hemos visto cómo agregar y buscar
              en tablas, pero también es posible que deseemos actualizar filas
              de una tabla que ya existe. Hacemos esto utilizando el comando
              <span>UPDATE</span>, como se muestra a continuación. Como podrías
              haber deducido al leer esto en voz alta, el comando encuentra
              todos los vuelos que van de Nueva York a Londres y luego establece
              sus duraciones en 430.
            </p>
            <Pre lang="sql">{
              /*sql */ `
              UPDATE flights
              SET duration = 430
              WHERE origin = "New York"
              AND destination = "London";
              `
            }</Pre>
          </article>
          <span id="delete" />
          <SectionTitle title="DELETE" />
          <article>
            <p>
              También es posible que deseemos la capacidad de eliminar filas de
              nuestra base de datos, y podemos hacer esto utilizando el comando
              DELETE. El siguiente código eliminará todos los vuelos que
              aterrizan en Tokio:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              DELETE FROM flights WHERE destination = "Tokyo";
              `
            }</Pre>
          </article>
          <span id="otras-clausulas" />
          <SectionTitle title="Otras Cláusulas" />
          <article>
            <p className="flex justify-center mx-auto border bg-[#473741] p-2 rounded-xl border-red-500 text-zinc-100">
              Hay varias cláusulas adicionales que podemos usar para controlar
              las consultas que nos devuelven resultados:
            </p>
            <ul className="list-css-span">
              <li>
                <span>LIMIT</span>: Limita el número de resultados devueltos por
                una consulta.
              </li>
              <li>
                <span>ORDER BY</span>: Ordena los resultados basándose en una
                columna especificada.
              </li>
              <li>
                <span>GROUP BY</span>: Agrupa los resultados según una columna
                especificada.
              </li>
              <li>
                <span>HAVING</span>: Permite aplicar restricciones adicionales
                basadas en el número de resultados.
              </li>
            </ul>
          </article>
          <ShareButton setTitle={SqlDocs.title} />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

SqlDocs.title = 'Aprende SQL · 💿 Base de Datos';
