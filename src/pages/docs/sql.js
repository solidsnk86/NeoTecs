import { Nav } from '../../components/Nav';
import { NavSwitch } from '../../components/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import LinkButton from '../../components/LinkButton';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import { AlertTriangle, InfoIcon } from 'lucide-react';
import HeaderTitle from '../../components/HeaderTitlte';
import Indextitle from '../../components/IndexTitle';
import { SqlExamples } from '../../components/SqlExamples';
import ImageComponent from '../../components/ImageComponent';
import { NavLinks } from '../../components/NavLinks';

export default function SqlDocs() {
  return (
    <TitlesContextProvider>
      <Nav className="fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl mx-auto flex items-stretch">
        <NavLinks />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <HeaderTitle>SQL</HeaderTitle>
          <hr className="border-text-primary" />
          <Indextitle>Índice</Indextitle>
          <ol className="indice">
            <li>
              <a href="#introducción">Introducción</a>
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
                  <a href="#otras-cláusulas">Otras cláusulas</a>
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
              <a href="#modelos-django">Modelos Django</a>
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
              <a href="#django-admin">Django Admin</a>
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
              className="h-[60px]"
              alt="Imagen de logo SQL"
            />
          </figure>
          <span id="base-de-datos" />
          <SectionTitle title="Base de Datos" />
          <article>
            <p>
              Antes de adentrarnos en el uso de SQL, es fundamental comprender
              cómo se almacena la información. En SQL, generalmente trabajamos
              con bases de datos
              <LinkButton
                url="https://www.oracle.com/database/what-is-a-relational-database/#:~:text=A%20relational%20database%20is%20a,of%20representing%20data%20in%20tables."
                color="sky-700"
                iconName="ArrowUpRight"
              >
                relacionales
              </LinkButton>
              , donde la información se organiza en
              <LinkButton
                url="https://www.essentialsql.com/what-is-a-database-table/"
                color="sky-700"
                iconName="ArrowUpRight"
              >
                tablas
              </LinkButton>
              . Cada tabla consta de columnas específicas y un número variable
              de filas.
            </p>
            <p>
              Para nuestra ilustración en SQL, consideremos un sitio web de
              aerolínea que gestiona información sobre vuelos y pasajeros. En la
              siguiente tabla, registramos diversos vuelos, cada uno con un
              origen, destino y duración asociados.
            </p>
            <ImageComponent
              src="/images/flights1.png"
              altImage="Tabla de vuelos"
            />
            <p>
              Existen varios sistemas de gestión de bases de datos relacionales
              comúnmente utilizados para almacenar información y que pueden
              interactuar fácilmente con comandos SQL:
            </p>
            <ul>
              <li>
                <LinkButton
                  url="https://www.mysql.com/"
                  color="sky-700"
                  iconName="ArrowUpRight"
                >
                  MySQL
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  url="https://www.postgresql.org/"
                  color="sky-700"
                  iconName="ArrowUpRight"
                >
                  PostgreeSQL
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  url="https://www.sqlite.org/index.html"
                  color="sky-700"
                  iconName="ArrowUpRight"
                >
                  SQLite
                </LinkButton>
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
              <LinkButton
                url="https://www.sqlite.org/datatype3.html"
                color="sky-700"
                iconName="ArrowUpRight"
              >
                tipos
              </LinkButton>{' '}
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
                nuestra clave primaria
                <LinkButton
                  url="https://www.w3schools.com/sql/sql_primarykey.ASP"
                  color="sky-700"
                  iconName="ArrowUpRight"
                >
                  PRIMARY-KEY
                </LinkButton>
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
              <LinkButton
                url="https://www.tutorialspoint.com/sqlite/sqlite_constraints.htm"
                color="sky-700"
                iconName="ArrowUpRight"
              >
                restrincciones
              </LinkButton>
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
            <ImageComponent src="/images/all.png" altImage="tabla de vuelos" />
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
            <ImageComponent
              src="/images/flights1.png"
              altImage="Tabla de vuelos"
            />
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
            <ImageComponent
              src="/images/where0.png"
              altImage="Tabalasde vuelos"
            />
            <p>Podemos filtrar por cualquier columna, ¡no solo por id!</p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE origin = "New York";
              `
            }</Pre>
            <ImageComponent
              src="/images/where1.png"
              altImage="Tabalas de vuelos"
            />
          </article>
          <span id="terminal-sql" />
          <SectionTitle title="Trabajar con SQL en la terminal" />
          <article>
            <p>
              Ahora que conocemos algunos comandos básicos de SQL, ¡vamos a
              probarlos en la terminal! Para trabajar con SQLite en tu
              computadora, primero debes descargar{' '}
              <LinkButton
                url="https://www.sqlite.org/download.html"
                color="sky-700"
                iconName="ArrowUpRight"
              >
                SQLite
              </LinkButton>
              . (No se usará en este curso, pero también puedes descargar
              <LinkButton
                url="https://sqlitebrowser.org/dl/"
                color="sky-700"
                iconName="ArrowUpRight"
              >
                DB Browser
              </LinkButton>
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
            <ImageComponent src="/images/500.png" altImage="Tablas de vuelos" />
            <p>
              Y también podemos utilizar otras lógicas
              <LinkButton
                url="https://sqlitebrowser.org/dl/"
                color="sky-700"
                iconName="ArrowUpRight"
              >
                (AND, OR)
              </LinkButton>
              como en Python:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE duration > 500 AND destination = "Paris";
              `
            }</Pre>
            <ImageComponent
              src="/images/500andparis.png"
              altImage="Tablas de vuelos"
            />
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE duration > 500 OR destination = "Paris";
              `
            }</Pre>
            <ImageComponent
              src="/images/500orparis.png"
              altImage="Tabla de vuelos"
            />
            <p>
              También podemos usar la palabra clave IN para ver si un dato es
              una de varias opciones:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE origin IN ("New York", "Lima");
              `
            }</Pre>
            <ImageComponent src="/images/in.png" altImage="Tabla de vuelos" />
            <p className="list-css-span">
              Incluso podemos usar expresiones regulares para buscar palabras de
              manera más amplia utilizando la palabra clave<span>LIKE</span>. La
              siguiente consulta encuentra todos los resultados con una
              <span>"a"</span>en el origen, utilizando<span>"%"</span>como un
              carácter comodín.
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM flights WHERE origin LIKE "%a%";
              `
            }</Pre>
            <ImageComponent src="/images/like.png" altImage="Tabla de vuelos" />
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
                <LinkButton
                  url="https://sqlitebrowser.org/dl/"
                  color="sky-700"
                  iconName="ArrowUpRight"
                >
                  AVERAGE (PROMEDIO)
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  url="https://sqlitebrowser.org/dl/"
                  color="sky-700"
                  iconName="ArrowUpRight"
                >
                  COUNT (CONTAR)
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  url="https://sqlitebrowser.org/dl/"
                  color="sky-700"
                  iconName="ArrowUpRight"
                >
                  MAX (MÁXIMO)
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  url="https://sqlitebrowser.org/dl/"
                  color="sky-700"
                  iconName="ArrowUpRight"
                >
                  MIN (MÍNIMO)
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  url="https://sqlitebrowser.org/dl/"
                  color="sky-700"
                  iconName="ArrowUpRight"
                >
                  SUM (SUMA)
                </LinkButton>
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
            <div className="border-l-4 border-sky-700 px-1 bg-opacity-[0.6] p-3 pl-5 font-semibold">
              <p className="font-semibold text-lg text-sky-700">
                <InfoIcon className="w-5 inline mb-1" /> Nota
              </p>
              <p>
                Hay varias cláusulas adicionales que podemos usar para controlar
                las consultas que nos devuelven resultados:
              </p>
            </div>
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
          <SectionTitle title="Unir tablas" />
          <article>
            <p>
              Hasta ahora, solo hemos estado trabajando con una tabla a la vez,
              pero en la práctica, muchas bases de datos están pobladas por
              varias tablas que se relacionan de alguna manera. En nuestro
              ejemplo de vuelos, imaginemos que también queremos agregar un
              código de aeropuerto junto con la ciudad. De la manera en que está
              actualmente configurada nuestra tabla, tendríamos que agregar dos
              columnas más para cada fila. También estaríamos repitiendo
              información, ya que tendríamos que escribir en varios lugares que
              la ciudad X está asociada con el código Y.
            </p>
            <p>
              Una forma de resolver este problema es decidir tener una tabla que
              lleve un registro de los vuelos y luego otra tabla que lleve un
              registro de los aeropuertos. La segunda tabla podría tener un
              aspecto así:
            </p>
            <ImageComponent
              src="/images/airports.png"
              altImage="Tabla de aeropuertos"
            />
            <p className="list-css-span">
              Ahora tenemos una tabla que relaciona códigos y ciudades. En lugar
              de almacenar todo el nombre de la ciudad en nuestra tabla de
              vuelos, ahorraríamos espacio de almacenamiento si pudiéramos
              simplemente guardar el<span>id</span>de ese aeropuerto. Por lo
              tanto, deberíamos reescribir la tabla de vuelos en consecuencia.
              Dado que estamos utilizando la columna id de la tabla de
              aeropuertos para poblar<span>origin_id</span>y
              <span>destination_id</span>, llamamos a esos valores
              <LinkButton
                url="https://www.w3schools.com/sql/sql_foreignkey.asp"
                color="sky-700"
                iconName="ArrowUpRight"
              >
                Claves Foráneas
              </LinkButton>
              .
            </p>
            <ImageComponent
              src="/images/flights2.png"
              altImage="Tabla de aeropuertos"
            />
            <p>
              Además de los vuelos y los aeropuertos, una aerolínea podría
              querer almacenar datos sobre sus pasajeros, como en qué vuelo
              estará cada pasajero. Utilizando la potencia de las bases de datos
              relacionales, podemos agregar otra tabla que almacene nombres y
              apellidos, y una clave foránea que represente el vuelo en el que
              se encuentran.
            </p>
            <ImageComponent
              src="/images/simple_pass.png"
              altImage="Tabla de aeropuertos"
            />
            <p className="list-css-span">
              Podemos hacerlo aún mejor, ya que una misma persona puede estar en
              más de un vuelo. Para tener en cuenta esto, podemos crear una
              tabla de<span>personas</span>que almacene nombres y apellidos, y
              una tabla de
              <span>pasajeros</span>que vincule personas con vuelos.
            </p>
            <b>Personas:</b>
            <ImageComponent
              src="/images/people.png"
              altImage="Tabla de aeropuertos"
            />
            <b>Pasajeros:</b>
            <ImageComponent
              src="/images/passengers.png"
              altImage="Tabla de aeropuertos"
            />
            <p className="list-css-span">
              Debido a que en este caso una sola persona puede estar en muchos
              vuelos y un solo vuelo puede tener muchas personas, llamamos a la
              relación entre<span>vuelos</span>y<span>personas</span>una
              relación de Muchos a Muchos. La tabla de<span>pasajeros</span>que
              conecta ambas se conoce como una tabla de asociación.
            </p>
          </article>
          <SectionTitle title="Unir Query" />
          <article>
            <p>
              Aunque ahora almacenamos nuestros datos de manera más eficiente,
              parece que puede ser más difícil realizar consultas en nuestros
              datos. Afortunadamente, SQL cuenta con una consulta
              <LinkButton
                url="https://www.w3schools.com/sql/sql_join.asp"
                color="sky-700"
                iconName="ArrowUpRight"
              >
                JOIN
              </LinkButton>
              donde podemos combinar dos tablas con el fin de realizar otra
              consulta.
            </p>
            <p className="list-css-span">
              Por ejemplo, digamos que queremos encontrar el origen, destino y
              nombre de cada viaje que un pasajero está tomando. También, para
              simplificar en esta tabla, vamos a estar utilizando la tabla de
              <span>pasajeros</span>no optimizada que incluye el id del vuelo,
              el nombre y apellido. La primera parte de esta consulta se ve
              bastante familiar:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT first, origin, destination
              FROM ...
              `
            }</Pre>
            <p className="list-css-span">
              Pero nos encontramos con un problema aquí porque el nombre
              <span>first</span>se almacena en la tabla de pasajeros, mientras
              que el origen<span>origin</span>y el destino
              <span>destination</span>se almacenan en la tabla de vuelos.
              Resolvemos esto uniendo las dos tablas utilizando el hecho de que
              el<span>flight_id</span>en la tabla de pasajeros corresponde al
              <span>id</span>en la tabla de vuelos:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT first, origin, destination
              FROM flights JOIN passengers
              ON passengers.flight_id = flights.id;
              `
            }</Pre>
            <ImageComponent
              src="/images/join.png"
              altImage="Tabla de aeropuertos"
            />
            <p>
              Acabamos de utilizar algo llamado
              <LinkButton
                url="https://www.w3schools.com/sql/sql_join_inner.asp"
                color="sky-700"
                iconName="ArrowUpRight"
              >
                INNER JOIN
              </LinkButton>
              , lo que significa que estamos ignorando las filas que no tienen
              coincidencias entre las tablas. Pero existen otros tipos de joins,
              incluyendo
              <LinkButton
                url="https://www.w3schools.com/sql/sql_join_left.asp"
                color="sky-700"
                iconName="ArrowUpRight"
              >
                LEFT JOINs
              </LinkButton>
              ,
              <LinkButton
                url="https://www.w3schools.com/sql/sql_join_right.asp"
                ccolor="sky-700"
                iconName="ArrowUpRight"
              >
                RIGHT JOINs
              </LinkButton>
              y
              <LinkButton
                url="https://www.w3schools.com/sql/sql_join_full.asp"
                color="sky-700"
                iconName="ArrowUpRight"
              >
                FULL OUTER JOINs
              </LinkButton>
              , que no discutiremos en detalle aquí.
            </p>
          </article>
          <SectionTitle title="Indexado" />
          <article>
            <p>
              Una forma de hacer que nuestras consultas sean más eficientes al
              trabajar con tablas grandes es crear un índice similar al índice
              que podrías ver en la parte posterior de un libro de texto. Por
              ejemplo, si sabemos que a menudo buscaremos pasajeros por su
              apellido, podríamos crear un índice desde el apellido hasta el id
              utilizando el comando:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              CREATE INDEX name_index ON passengers (last);
              `
            }</Pre>
          </article>
          <SectionTitle title="Vulnerabilidades SQL" />
          <article>
            <p>
              Ahora que conocemos los conceptos básicos de cómo utilizar SQL
              para trabajar con datos, es importante señalar las principales
              vulnerabilidades asociadas con el uso de SQL. Comenzaremos con la
              <LinkButton
                url="https://www.w3schools.com/sql/sql_injection.asp"
                color="sky-700"
                iconName="ArrowUpRight"
              >
                Inyección SQL
              </LinkButton>
              .
            </p>
            <div className="border-l-4 border-red-500 px-1 bg-opacity-[0.6] p-3 pl-5 font-semibold">
              <p className="font-semibold text-red-500 text-lg">
                <AlertTriangle className="w-5 inline mb-1" /> Importante
              </p>
              <p>
                Las inyecciones SQL pueden ocurrir en campos de inicio de sesión
                y en cualquier formulario o entrada de datos que interactúe con
                una base de datos a través de consultas SQL. Los campos de
                inicio de sesión son un objetivo común para este tipo de
                ataques. Es esencial implementar prácticas de seguridad
                adecuadas, como la validación de la entrada del usuario y el uso
                de consultas parametrizadas, para prevenir este tipo de ataques.
                Ejemplo:
              </p>
            </div>
            <pre className="text-green-700 font-mono">
              Usuario: ' OR '1'='1'; -- Contraseña: (dejar en blanco)
            </pre>
            <p>
              Si el sitio no está protegido contra inyecciones SQL, esta entrada
              podría manipular la consulta SQL y permitir al atacante eludir la
              autenticación y acceder a información no autorizada.
            </p>
            <p>
              Cuando un usuario malintencionado ingresa código SQL como entrada
              en un sitio para eludir las medidas de seguridad del sitio. Por
              ejemplo, supongamos que tenemos una tabla que almacena nombres de
              usuario y contraseñas, y luego un formulario de inicio de sesión
              en la página principal del sitio. Podríamos buscar al usuario
              utilizando una consulta como:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM users
              WHERE username = username AND password = password;
              `
            }</Pre>
            <p className="list-css-span">
              Un usuario llamado <b>Neo</b> podría ir a este sitio y escribir
              <span>"Neo"</span>como nombre de usuario y<span>"12345"</span>como
              contraseña, en cuyo caso la consulta se vería así:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM users
              WHERE username = "neo" AND password = "12345";
              `
            }</Pre>
            <p className="list-css-span">
              Un hacker, por otro lado, podría escribir "neo"<span>--</span>como
              nombre de usuario y nada como contraseña. Resulta que
              <span>--</span>representa un comentario en SQL, lo que significa
              que la consulta se vería así:
            </p>
            <Pre lang="sql">{
              /*sql */ `
              SELECT * FROM users
              WHERE username = "neo"--" AND password = "12345";
              `
            }</Pre>
            <p className="list-css-span">
              Esto podría permitir al hacker acceder a información sin
              proporcionar una contraseña válida. La Inyección SQL es un
              problema de seguridad grave, y es crucial tomar medidas para
              prevenirlo, como validar y sanitizar la entrada del usuario, y
              utilizar consultas preparadas o procedimientos almacenados. Debido
              a que en esta consulta se ha comentado la verificación de la
              contraseña, el hacker puede iniciar sesión en la cuenta de Neo sin
              conocer su contraseña. Para resolver este problema, podemos
              utilizar:
            </p>
            <ol>
              <li>
                Caracteres de escape para asegurarnos de que SQL trate la
                entrada como texto plano y no como código SQL.
              </li>
              <li>
                Una capa de abstracción sobre SQL que incluya su propio conjunto
                de caracteres de escape, para que no tengamos que escribir
                consultas SQL nosotros mismos.
              </li>
              <p>
                La otra vulnerabilidad principal cuando se trata de SQL se
                conoce como una Condición de Carrera,
                <LinkButton
                  url="https://www.w3schools.com/sql/sql_injection.asp"
                  color="sky-700"
                  iconName="ArrowUpRight"
                >
                  Race Condition
                </LinkButton>
                .
              </p>
              <p>
                Una condición de carrera es una situación que ocurre cuando
                múltiples consultas a una base de datos se realizan
                simultáneamente. Cuando no se manejan adecuadamente, pueden
                surgir problemas en los momentos precisos en que las bases de
                datos se actualizan. Por ejemplo, supongamos que tengo $150 en
                mi cuenta bancaria. Una condición de carrera podría ocurrir si
                inicio sesión en mi cuenta bancaria tanto en mi teléfono como en
                mi computadora e intento retirar $100 en cada dispositivo. Si
                los desarrolladores de software del banco no manejan
                correctamente las condiciones de carrera, podría ser posible
                retirar $200 de una cuenta que solo tiene $150.
              </p>
              <p>
                Una solución potencial para este problema sería bloquear la base
                de datos. No se permitiría ninguna otra interacción con la base
                de datos hasta que se haya completado una transacción. En el
                ejemplo del banco, después de hacer clic en la página "Realizar
                un retiro" en mi computadora, el banco podría no permitirme
                acceder a esa página en mi teléfono.
              </p>
            </ol>
          </article>
          <SectionTitle title="Modelos Django" />
          <article>
            <p>
              Los
              <LinkButton
                url="https://docs.djangoproject.com/en/4.0/topics/db/models/"
                color="sky-700"
                iconName="ArrowUpRight"
              >
                modelos de Django
              </LinkButton>
              son un nivel de
              <LinkButton
                url="https://techterms.com/definition/abstraction"
                color="sky-700"
                iconName="ArrowUpRight"
              >
                abstracción
              </LinkButton>
              sobre SQL que nos permite trabajar con bases de datos utilizando
              clases y objetos de Python en lugar de consultas SQL directas.
            </p>
            <p>
              Comencemos a usar modelos creando un proyecto de Django para
              nuestra aerolínea y creando una aplicación dentro de ese proyecto.
            </p>
            <Pre lang="bash">{
              /*python */ `
              django-admin startproject airline
              cd airline
              python manage.py startapp flights
              `
            }</Pre>
            <p>
              Ahora tendremos que pasar por el proceso de agregar una aplicación
              como de costumbre:
            </p>
            <ol>
              <li className="list-css-span">
                Agrega 'flights' a la lista INSTALLED_APPS en
                <span>settings.py</span>.
              </li>
              <li className="list-css-span">
                Agrega una ruta para 'flights' en<span>urls.py</span>:
              </li>
              <Pre lang="python">{
                /*python */ `
                path("flights/", include("flights.urls")),
                `
              }</Pre>
              <li className="list-css-span">
                Crea un archivo<span>urls.py</span>dentro de la aplicación
                "flights" y llénalo con las importaciones y listas estándar de
                <span>urls.py</span>.
              </li>
            </ol>
            <p>
              Ahora, en lugar de crear rutas reales y empezar con views.py,
              crearemos algunos modelos en el archivo models.py. En este
              archivo, delinearemos los datos que queremos almacenar en nuestra
              aplicación. Luego, Django determinará la sintaxis SQL necesaria
              para almacenar información sobre cada uno de nuestros modelos.
              Echemos un vistazo a cómo podría ser el modelo para un vuelo
              individual:
            </p>
            <Pre lang="python">{
              /*python */ `
                class Flight(models.Model):
                origin = models.CharField(max_length=64)
                destination = models.CharField(max_length=64)
                duration = models.IntegerField()
                `
            }</Pre>
            <p>
              Echemos un vistazo a lo que está sucediendo en esta definición de
              modelo:
            </p>
            <ul>
              <li>
                En la primera línea, creamos un nuevo modelo que extiende la
                clase de modelo de Django.
              </li>
              <li>
                A continuación, agregamos campos para origen, destino y
                duración. Los dos primeros son campos
                <LinkButton
                  url="https://docs.djangoproject.com/en/4.0/ref/forms/fields/#charfield"
                  color="sky-700"
                  iconName="ArrowUpRight"
                >
                  Char
                </LinkButton>
                , lo que significa que almacenan cadenas, y el tercero es un
                campo
                <LinkButton
                  url="https://docs.djangoproject.com/en/4.0/ref/forms/fields/#integerfield"
                  color="sky-700"
                  iconName="ArrowUpRight"
                >
                  Integer
                </LinkButton>
                . Estos son solo dos de las muchas
                <LinkButton
                  url="https://docs.djangoproject.com/en/4.0/ref/forms/fields/#built-in-field-classes"
                  color="sky-700"
                  iconName="ArrowUpRight"
                >
                  clases de campos integradas
                </LinkButton>
                en Django.
              </li>
              <li>
                Especificamos longitudes máximas de 64 para los dos campos de
                caracteres. Puedes verificar las especificaciones disponibles
                para un campo dado consultando la
                <LinkButton
                  url="https://docs.djangoproject.com/en/4.0/ref/forms/fields/#built-in-field-classes"
                  color="sky-700"
                  iconName="ArrowUpRight"
                >
                  documentación
                </LinkButton>
                .
              </li>
            </ul>
          </article>
          <SqlExamples />
          <ShareButton setTitle={SqlDocs.title} />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

SqlDocs.title = 'SQL · 💿 Base de Datos';
