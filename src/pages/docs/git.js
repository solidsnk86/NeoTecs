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

export default function GitDocs() {
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
          <Header>Introducción a Git</Header>
          <hr className="border-text-primary" />
          <Header>Índice</Header>
          <ol className="indice">
            <li>
              <a href="#introduccion">Introducción</a>
            </li>
            <li>
              <a href="#git">Git</a>
            </li>
            <li>
              <a href="#selectores">GitHub</a>
            </li>
            <li>
              <a href="#selectores-descendientes">
                Commits (Compromisos o Confirmaciones)
              </a>
            </li>
            <li>
              <a href="#selectores-atributos">
                Merge Conflicts (Conflictos de Fusión)
              </a>
            </li>
            <li>
              <a href="#responsive">Branching (Ramificación)</a>
              <ul>
                <li>
                  <a href="#bootstrap">Más Funcionalidades de GitHub</a>
                </li>
              </ul>
            </li>
          </ol>
          <SectionTitle title="Introducción" />
          <article>
            <p>
              ¡Bienvenidos de nuevo a la clase 1! En la clase 0, presentamos
              HTML, CSS y Sass como herramientas que podemos utilizar para crear
              algunas páginas web básicas. Hoy, aprenderemos sobre el uso de Git
              y GitHub para ayudarnos en el desarrollo de aplicaciones de
              programación web.
            </p>
          </article>
          <SectionTitle title="Git" />
          <article>
            <p>
              Git es una herramienta de línea de comandos que nos ayudará con el
              control de versiones de varias maneras:
            </p>
            <ul>
              <li>
                Permitiéndonos hacer un seguimiento de los cambios que
                realizamos en nuestro código al guardar instantáneas (snapshots)
                de nuestro código en un momento dado.
              </li>
              <div className="images-client">
                <img
                  src="/images/change_file.png"
                  alt="Cambio de archivos Git."
                />
              </div>
              <li>
                Permitiéndonos sincronizar fácilmente el código entre diferentes
                personas que trabajan en el mismo proyecto, al permitir que
                varias personas obtengan información (pull) y envíen información
                (push) a un repositorio almacenado en la web.
              </li>
              <div className="images-client">
                <img
                  src="/images/mult_users.png"
                  alt="Cambio de archivos Git."
                />
              </div>
              <li>
                Permitiéndonos realizar cambios y probar el código en una rama
                diferente sin alterar nuestra base de código principal, y luego
                fusionar las dos juntas.
              </li>
              <li>
                Permitiéndonos revertir a versiones anteriores de nuestro código
                si nos damos cuenta de que hemos cometido un error.
              </li>
            </ul>
            <p>
              En las explicaciones anteriores, utilizamos la palabra
              "repositorio", que aún no hemos explicado. Un repositorio Git es
              una ubicación de archivos donde almacenaremos todos los archivos
              relacionados con un proyecto dado. Estos pueden ser remotos
              (almacenados en línea) o locales (almacenados en tu computadora).
            </p>
          </article>
          <SectionTitle title="GitHub" />
          <article>
            <ul>
              <li>
                GitHub es un sitio web que nos permite almacenar repositorios
                Git de forma remota en la web.
              </li>
              <li>
                Comencemos creando un nuevo repositorio en línea. Asegúrate de
                tener configurada una cuenta de GitHub. Si aún no tienes una,
                puedes crear una
                <Link
                  href="https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"
                  className="ml-1 text-[#1F6FEB]"
                >
                  aquí
                  <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
                </Link>
                .
                <ol>
                  <li>
                    Haz clic en el símbolo + en la esquina superior derecha y
                    luego selecciona "Nuevo repositorio".
                  </li>
                  <li>
                    Crea un nombre para el repositorio que describa tu proyecto.
                  </li>
                  <li>
                    (Opcional) Proporciona una descripción para tu repositorio.
                  </li>
                  <li>
                    Elige si el repositorio debe ser público (visible para
                    cualquier persona en la web) o privado (visible solo para ti
                    y otros a quienes concedas acceso específicamente).
                  </li>
                  <li>
                    (Opcional) Decide si deseas agregar un README, que es un
                    archivo que describe tu nuevo repositorio.
                  </li>
                </ol>
              </li>
              <div className="images-client">
                <img src="/images/github-repo.png" alt="Crear Repositorio" />
              </div>
              <li>
                Una vez que tenemos un repositorio, probablemente querremos
                añadir algunos archivos a él. Para hacer esto, tomaremos nuestro
                repositorio remoto recién creado y crearemos una copia, o
                clonaremos, de él como un repositorio local en nuestra
                computadora.
                <ol>
                  <li>
                    Asegúrate de tener Git instalado en tu computadora
                    escribiendo git en tu terminal. Si no está instalado, puedes
                    descargarlo
                    <Link
                      href="https://git-scm.com/downloads"
                      className="ml-1 text-[#1F6FEB]"
                    >
                      aquí
                      <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
                    </Link>
                    .
                  </li>
                  <li>
                    Haz clic en el botón verde "Code" en la página de tu
                    repositorio y copia la URL que aparece. Si no creaste un
                    README, este enlace aparecerá cerca de la parte superior de
                    la página en la sección "Quick Setup".
                  </li>
                  <div className="images-client">
                    <img
                      src="/images/github-repo-1.png"
                      alt="Crear Repositorio"
                    />
                  </div>
                  <li className="list-css-span">
                    En tu terminal, ejecuta git clone
                    <span>{'<URL del repositorio>'}</span>. Esto descargará el
                    repositorio a tu computadora. Si no creaste un README, es
                    posible que obtengas la advertencia: "You appear to have
                    cloned into an empty repository" (Parece que has clonado en
                    un repositorio vacío). Esto es normal y no hay necesidad de
                    preocuparse por ello.
                  </li>
                </ol>
              </li>
            </ul>
          </article>
          <ShareButton />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

GitDocs.title = 'Aprendiendo 🐱‍🚀 Git y GitHub';
