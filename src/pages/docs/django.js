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
              <a href="#web">Aplicaciones Web</a>
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
          <span id="introduccion" />
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
          <span id="web" />
          <SectionTitle title="Aplicaciones Web" />
          <article>
            <p>
              Hasta ahora, todas las aplicaciones web que hemos desarrollado han
              sido estáticas. Esto significa que cada vez que abrimos esa página
              web, se ve exactamente igual. Sin embargo, muchos sitios web que
              visitamos a diario cambian cada vez que los visitamos. Si visitas
              los sitios web de
              <Link
                href="https://www.nytimes.com/"
                className="mx-1 text-slate-400"
              >
                The New York Times
                <OpenInNew className="inline w-4 h-4 font-thin bottom-[1px] relative mx-[2px]" />
              </Link>
              o
              <Link
                href="https://www.nytimes.com/"
                className="mx-1 text-slate-400"
              >
                Facebook
                <OpenInNew className="inline w-4 h-4 font-thin bottom-[1px] relative mx-[2px]" />
              </Link>
              , por ejemplo, es probable que veas cosas diferentes hoy que
              mañana. Para sitios grandes como esos, sería poco razonable que
              los empleados tengan que editar manualmente un archivo HTML grande
              cada vez que se realice un cambio, es ahí donde las páginas web
              dinámicas pueden ser extremadamente útiles. Un sitio web dinámico
              es aquel que aprovecha un lenguaje de programación (como Python)
              para generar dinámicamente archivos HTML y CSS. Durante esta
              conferencia, aprenderemos cómo crear nuestras primeras
              aplicaciones dinámicas.
            </p>
          </article>
          <span id="http" />
          <SectionTitle title="HTTP" />
          <article>
            <p>
              HTTP, o Protocolo de Transferencia de Hipertexto en español, es un
              protocolo ampliamente aceptado para la transferencia de mensajes
              de ida y vuelta a través de Internet. Normalmente, la información
              en línea se intercambia entre un cliente (usuario) y un servidor.
            </p>
            <div className="images-client">
              <img src="/images/client-removebg-preview.png" />
            </div>
          </article>
        </div>
      </div>
    </TitlesContextProvider>
  );
}
