import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import { ExternalLinkIcon } from 'lucide-react';
import HeaderTitle from '../../components/HeaderTitlte';
import Indextitle from '../../components/IndexTitle';
export default function GitDocs() {
  return (
    <TitlesContextProvider>
      <Nav className="fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <LectureNav />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <HeaderTitle>Introducción a Git</HeaderTitle>
          <hr className="border-text-primary" />
          <Indextitle>Índice</Indextitle>
          <ol className="indice">
            <li>
              <a href="#introducción">Introducción</a>
            </li>
            <li>
              <a href="#git">Git</a>
            </li>
            <li>
              <a href="#selectores">GitHub</a>
            </li>
            <li>
              <a href="#commits">Commits (Compromisos o Confirmaciones)</a>
            </li>
            <li>
              <a href="#merge-conflicts">
                Merge Conflicts (Conflictos de Fusión)
              </a>
            </li>
            <li>
              <a href="#branching">Branching (Ramificación)</a>
              <ul>
                <li>
                  <a href="#más-características-de-github">
                    Más Funcionalidades de GitHub
                  </a>
                </li>
              </ul>
            </li>
          </ol>
          <SectionTitle title="Introducción" />
          <article>
            <p>
              ¡Bienvenidos de nuevo a la clase! Anteriormente, presentamos HTML,
              CSS y Sass como herramientas que podemos utilizar para crear
              algunas páginas web básicas. Hoy, aprenderemos sobre el uso de Git
              y GitHub para ayudarnos en el desarrollo de aplicaciones de
              programación web.
            </p>
          </article>
          <SectionTitle title="Git" />
          <figure>
            <img
              width={120}
              height={90}
              src="https://imgs.search.brave.com/QBtVPyyL0OxsEIQmfKaGPXK3lS2xfK_DXvdWKSvd2Xw/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9lL2UwL0dp/dC1sb2dvLnN2Zy81/MTJweC1HaXQtbG9n/by5zdmcucG5n"
              alt="Git icon"
            />
          </figure>
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
              <li className="list-css-span">
                Permitiéndonos sincronizar fácilmente el código entre diferentes
                personas que trabajan en el mismo proyecto, al permitir que
                varias personas obtengan información<span>pull</span>y envíen
                información
                <span>push</span>a un repositorio almacenado en la web.
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
                  className="mx-1 text-[#1F6FEB] link"
                  target="_blank"
                >
                  aquí
                  <ExternalLinkIcon className="link-icon" />.
                </Link>
                <ol className="list-css-span">
                  <li>
                    Haz clic en el símbolo<span>+</span>en la esquina superior
                    derecha y luego selecciona<span>"Nuevo repositorio"</span>.
                  </li>
                  <li>
                    Crea un nombre para el repositorio que describa tu proyecto.
                  </li>
                  <li>
                    Proporciona una descripción para tu repositorio. (Opcional).
                  </li>
                  <li>
                    Elige si el repositorio debe ser público (visible para
                    cualquier persona en la web) o privado (visible solo para ti
                    y otros a quienes concedas acceso específicamente).
                  </li>
                  <li>
                    Decide si deseas agregar un README, que es un archivo que
                    describe tu nuevo repositorio. (Opcional)
                  </li>
                </ol>
              </li>
              <li>
                <div className="images-client">
                  <img src="/images/github-repo.png" alt="Crear Repositorio" />
                </div>
              </li>
              <li>
                Una vez que tenemos un repositorio, probablemente querremos
                añadir algunos archivos a él. Para hacer esto, tomaremos nuestro
                repositorio remoto recién creado y crearemos una copia, o
                clonaremos, de él como un repositorio local en nuestra
                computadora.
                <ol className="list-css-span">
                  <li>
                    Asegúrate de tener Git instalado en tu computadora
                    escribiendo<span>git</span>en tu terminal. Si no está
                    instalado, puedes descargarlo
                    <Link
                      href="https://git-scm.com/downloads"
                      className="mx-1 text-[#1F6FEB] link"
                      target="_blank"
                    >
                      aquí
                      <ExternalLinkIcon className="link-icon" />.
                    </Link>
                  </li>
                  <li>
                    Haz clic en el botón verde "Code" en la página de tu
                    repositorio y copia la URL que aparece. Si no creaste un
                    README, este enlace aparecerá cerca de la parte superior de
                    la página en la sección "Quick Setup".
                    <div className="images-client">
                      <img
                        src="/images/github-repo-1.png"
                        alt="Crear Repositorio"
                      />
                    </div>
                  </li>
                  <li className="list-css-span">
                    En tu terminal, ejecuta
                    <span>git clone &lt;URL del repositorio&gt;</span>. Esto
                    descargará el repositorio a tu computadora. Si no creaste un
                    README, es posible que obtengas la advertencia: "You appear
                    to have cloned into an empty repository" (Parece que has
                    clonado en un repositorio vacío). Esto es normal y no hay
                    necesidad de preocuparse por ello.
                    <div className="images-client">
                      <img
                        src="/images/git-clone.png"
                        alt="Captura de pantalla de consola git clone."
                      />
                    </div>
                  </li>
                  <li>
                    Ejecuta el comando<span>ls</span>, que lista todos los
                    archivos y carpetas en tu directorio actual. Deberías ver el
                    nombre del repositorio que acabas de clonar.
                  </li>
                  <li className="list-css-span">
                    Ejecuta<span>cd &lt;nombre del repositorio&gt;</span>para
                    cambiar al directorio de esa carpeta.
                  </li>
                  <li>
                    Ejecuta<span>touch &lt;nombre del nuevo archivo&gt;</span>
                    para crear un nuevo archivo en esa carpeta. Ahora puedes
                    realizar ediciones en ese archivo. Alternativamente, puedes
                    abrir la carpeta en tu editor de texto y agregar nuevos
                    archivos manualmente.
                  </li>
                  <li>
                    Para informar a Git que debe realizar un seguimiento del
                    nuevo archivo que has creado, ejecuta
                    <span>git add &lt;nombre del nuevo archivo&gt;</span>para
                    realizar un seguimiento de ese archivo específico, o
                    <span>git add .</span>para realizar un seguimiento de todos
                    los archivos dentro de ese directorio.
                  </li>
                </ol>
              </li>
            </ul>
          </article>
          <SectionTitle title="Commits" />
          <article>
            <ul className="list-css-span">
              <li>
                Ahora, comenzaremos a explorar para qué puede ser realmente útil
                Git. Después de realizar algunos cambios en un archivo, podemos
                confirmar esos cambios, tomando una instantánea del estado
                actual de nuestro código. Para hacer esto, ejecutamos:
                <span>git commit -m "algún mensaje"</span>donde el mensaje
                describe los cambios que acabas de realizar.
              </li>
              <li>
                Después de este cambio, podemos ejecutar<span>git</span>status
                para ver cómo nuestro código se compara con el código en el
                repositorio remoto.
              </li>
              <li>
                Cuando estemos listos para publicar nuestras confirmaciones
                locales en GitHub, podemos ejecutar<span>git push</span>. Ahora,
                cuando vayamos a GitHub en nuestro navegador web, se reflejarán
                nuestros cambios.
              </li>
              <li>
                Si solo has modificado archivos existentes y no has creado
                nuevos, en lugar de usar<span>git add .</span>y luego
                <span>git commit...</span>, podemos condensar esto en un solo
                comando:<span>git commit -am "algún mensaje"</span>. Este
                comando confirmará todos los cambios que hayas realizado.
              </li>
              <li>
                A veces, el repositorio remoto en GitHub estará más actualizado
                que la versión local. En este caso, quieres confirmar primero
                cualquier cambio y luego ejecuta<span>git pull</span>para traer
                cualquier cambio remoto a tu repositorio.
              </li>
            </ul>
          </article>
          <SectionTitle title="Merge Conflicts" />
          <article>
            <ul>
              <li>
                Un problema que puede surgir al trabajar con Git, especialmente
                cuando colaboras con otras personas, es algo llamado conflicto
                de fusión. Un conflicto de fusión ocurre cuando dos personas
                intentan cambiar un archivo de maneras que entran en conflicto
                entre sí.
              </li>
              <li>
                Esto suele ocurrir al realizar git push o git pull. Cuando esto
                sucede, Git cambiará automáticamente el archivo a un formato que
                indica claramente cuál es el conflicto. Aquí tienes un ejemplo
                en el que se agregó la misma línea de dos maneras diferentes:
              </li>
            </ul>
            <Pre lang="javascript">{
              /*git */ `
              a = 1
              <<<<< HEAD
              b = 2
              =====
              b = 3
              >>>>> 56782736387980937883
              c = 3
              d = 4
              e = 5
              `
            }</Pre>
            <ul className="list-css-span">
              <li>
                En el ejemplo anterior, agregaste la línea<span>b = 2</span>y
                otra persona escribió<span>b = 3</span>, y ahora debemos elegir
                una de esas para mantener. El número largo es un hash que
                representa la confirmación que está entrando en conflicto con
                tus ediciones. Muchos editores de texto también ofrecerán
                resaltado y opciones simples como "aceptar actual" o "aceptar
                entrante" que te ahorran el tiempo de eliminar las líneas
                agregadas anteriormente.
              </li>
              <li>
                Otro comando de Git potencialmente útil es git log, que te
                proporciona un historial de todas tus confirmaciones en ese
                repositorio.
              </li>
            </ul>
            <div className="images-client">
              <img src="/images/git_log.png" />
            </div>
            <ul className="list-css-span">
              <li>
                Potencialmente aún más útil, si te das cuenta de que has
                cometido un error, puedes revertir a una confirmación anterior
                utilizando el comando<span>git reset</span>de una de dos
                maneras:
                <li>
                  <span>git reset --hard {'<commit>'}</span>revierte tu código
                  exactamente a cómo estaba después de la confirmación
                  especificada. Para especificar la confirmación, utiliza el
                  hash de confirmación asociado con esa confirmación, que puedes
                  encontrar usando git log como se mostró anteriormente.
                </li>
                <li>
                  <span>git reset --hard origin/master</span>revierte tu código
                  a la versión actualmente almacenada en línea en GitHub
                  (origin/master).
                </li>
              </li>
            </ul>
          </article>
          <SectionTitle title="Branching" />
          <article>
            <p>
              Después de haber estado trabajando en un proyecto durante algún
              tiempo, es posible que decidas que deseas agregar una función
              adicional. En este momento, simplemente podríamos confirmar los
              cambios a esta nueva función, como se muestra en la gráfica a
              continuación.
            </p>
            <div className="images-client">
              <img src="/images/no_branch.png" />
            </div>
            <p>
              Pero esto podría volverse problemático si luego descubrimos un
              error en nuestro código original y queremos revertirlo sin afectar
              la nueva función. Aquí es donde las ramas (branching) pueden
              resultar realmente útiles.
            </p>
            <ul>
              <li>
                El branching (ramificación), es un método para avanzar en una
                nueva dirección al crear una nueva función y solo combinar esta
                nueva función con la parte principal de tu código, o la rama
                principal, una vez que hayas terminado. Este flujo de trabajo se
                verá más como se muestra en la siguiente gráfica:
              </li>
            </ul>
            <div className="images-client">
              <img src="/images/branch.png" />
            </div>
            <ul>
              <li>
                La rama que estás viendo actualmente está determinada por el
                HEAD, que apunta a una de las dos ramas. Por defecto, el HEAD
                apunta a la rama principal (master), pero también podemos
                cambiar a otras ramas.
              </li>
              <li>
                Ahora, adentrémonos en cómo implementamos realmente el branching
                en nuestros repositorios de Git:
                <ol>
                  <li className="list-css-span">
                    Ejecuta<span>git branch</span>para ver en qué rama estás
                    trabajando actualmente, la cual tendrá un asterisco a la
                    izquierda de su nombre.
                    <div className="images-client">
                      <img
                        src="/images/git_branch.png"
                        alt="Captura de pantalla de git branch"
                      />
                    </div>
                  </li>
                  <li className="list-css-span">
                    Para crear una nueva rama, ejecutaremos el comando
                    <span>{`git checkout -b <nombre de la nueva rama>`}</span>.
                    <div className="images-client">
                      <img
                        src="/images/new_branch.png"
                        alt="Captura de pantalla de git checkout -b"
                      />
                    </div>
                  </li>
                </ol>
              </li>
              <li className="list-css-span">
                Cambiar entre ramas utilizando el comando git checkout
                <span>{'<nombre de la rama>'}</span>y realizar confirmaciones de
                cualquier cambio en cada rama.
              </li>
              <li className="list-css-span">
                Cuando estemos listos para fusionar nuestras dos ramas,
                cambiaremos a la rama que deseamos conservar (casi siempre la
                rama principal, generalmente llamada master), y luego
                ejecutaremos el comando git merge
                <span>{'<nombre de la otra rama>'}</span>. Esto se tratará de
                manera similar a un push o pull, y pueden surgir conflictos de
                fusión.
              </li>
            </ul>
          </article>
          <SectionTitle title="Más Características de GitHub" />
          <article>
            <p>
              Hay algunas características útiles específicas de GitHub que
              pueden ayudarte cuando estás trabajando en un proyecto:
            </p>
            <ul className="list-css-span">
              <li>
                <span>Forking Bifurcación</span>: Como usuario de GitHub, tienes
                la capacidad de bifurcar cualquier repositorio al que tengas
                acceso, lo que crea una copia del repositorio del que eres el
                propietario. Hacemos esto haciendo clic en el botón "Fork" en la
                esquina superior derecha.
              </li>
              <li>
                <span>Pull Requests Solicitudes de extracción</span>: Una vez
                que hayas bifurcado un repositorio y hayas realizado algunos
                cambios en tu versión, es posible que desees solicitar que esos
                cambios se agreguen a la versión principal del repositorio. Por
                ejemplo, si quisieras agregar una nueva característica a
                Bootstrap, podrías bifurcar el repositorio, hacer algunos
                cambios y luego enviar una solicitud de extracción. Esta
                solicitud de extracción podría ser evaluada y posiblemente
                aceptada por las personas que gestionan el repositorio de
                Bootstrap. Este proceso, en el que las personas realizan algunos
                cambios y luego solicitan que se fusionen en un repositorio
                principal, es vital para lo que se conoce como software de
                código abierto, o software creado por contribuciones de varios
                desarrolladores.
              </li>
              <li>
                GitHub Pages: GitHub Pages es una forma sencilla de publicar un
                sitio estático en la web. (Aprenderemos más tarde sobre sitios
                estáticos frente a dinámicos.) Para hacer esto:
                <ol>
                  <li>Crea un nuevo repositorio en GitHub.</li>
                  <li>
                    Clona el repositorio y realiza cambios localmente,
                    asegurándote de incluir un archivo index.html que será la
                    página de inicio de tu sitio web.
                  </li>
                  <li>Sube esos cambios a GitHub.</li>
                  <li>
                    Ve a la página de Configuración de tu repositorio,
                    desplázate hacia abajo hasta GitHub Pages y elige la rama
                    principal en el menú desplegable.
                  </li>
                  <li>
                    Desplázate de nuevo hacia abajo a la sección de GitHub Pages
                    en la página de configuración, y después de unos minutos,
                    deberías ver una notificación que dice "Tu sitio se ha
                    publicado en: ..." que incluirá una URL donde puedes
                    encontrar tu sitio.
                  </li>
                </ol>
              </li>
            </ul>
            <p>
              ¡Eso es todo para esta clase! ¡La próxima vez, estaremos viendo
              Python!
            </p>
          </article>
          <ShareButton setTitle={GitDocs.title} />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

GitDocs.title = 'Aprende Git y GitHub 🐱‍🚀 en Neotecs gratis!';
