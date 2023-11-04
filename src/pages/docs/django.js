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

export default function DjangoDocs() {
  const DjangoTitle = ({ Tag = 'h1', children }) => {
    return <Tag className="text-slate-100 font-mono">{children}</Tag>;
  };

  const Header = ({ Tag = 'h2', children }) => {
    return <Tag className="text-slate-100">{children}</Tag>;
  };
  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed w-full h-12 z-30" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <LectureNav />
        <div className="w-full max-w-none prose px-4 md:px-8 text-slate-100">
          <NavSwitch inline />
          <DjangoTitle>Django</DjangoTitle>
          <hr />
          <Header>Indice</Header>
          <ol className="indice">
            <li>
              <a href="#introduccion">Introducción</a>
            </li>
            <li>
              <a href="#aplicaciones-web">Aplicaciones Web</a>
            </li>
            <li>
              <a href="#http">HTTP</a>
            </li>
            <li>
              <a href="#django">Django</a>
            </li>
            <li>
              <a href="#rutas">Rutas</a>
            </li>
            <li>
              <a href="#plantillas">Plantillas</a>
              <ul>
                <li>
                  <a href="#condicionales">Condicionales</a>
                </li>
                <li>
                  <a href="#estilos">Estilos</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#tareas">Tareas</a>
            </li>
            <li>
              <a href="#formularios">Formularios</a>
              <ul>
                <li>
                  <a href="#formularios-django">Formularios Django</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#sesiones">Sesiones</a>
            </li>
          </ol>
          <SectionTitle title="Introducción" />
          <article>
            <ul>
              <li>
                Hasta ahora, hemos hablado sobre cómo crear páginas web simples
                utilizando HTML y CSS, y cómo utilizar Git y GitHub para llevar
                un registro de los cambios en nuestro código y colaborar con
                otros. También nos hemos familiarizado con el lenguaje de
                programación Python.
              </li>
              <li>
                Hoy, trabajaremos en utilizar el marco de Django de Python para
                crear aplicaciones dinámicas.
              </li>
            </ul>
          </article>
          <SectionTitle title="Aplicaciones Web" />
        </div>
      </div>
    </TitlesContextProvider>
  );
}
