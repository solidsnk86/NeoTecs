import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import { Header } from './sql';
import { SqlTitle } from './sql';

export default function Testing() {
  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-30" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <LectureNav />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <SqlTitle>Pruebas (Testing)</SqlTitle>
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
          <ShareButton setTitle={Testing.title} />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

Testing.title = 'Pruebas CI/CD';
