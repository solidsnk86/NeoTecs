import HeaderTitle from '../../components/HeaderTitlte';
import IndexTitle from '../../components/IndexTitle';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Nav';
import { NavLinks } from '../../components/NavLinks';
import { NavSwitch } from '../../components/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import ImageComponent from '../../components/ImageComponent';
import LinkButton from '../../components/LinkButton';

export default function Page() {
  return (
    <TitlesContextProvider>
      <Nav className="fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl mx-auto flex items-stretch">
        <NavLinks />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <HeaderTitle>Kali Linux</HeaderTitle>
          <hr className="border-text-primary" />
          <IndexTitle>Índice</IndexTitle>
          <ol className="indice">
            <li>
              <a href="#introducción">Introducción</a>
            </li>
            <li>
              <a href="#kali-linux">Kali Linux</a>
            </li>
            <li>
              <a href="#ingienería-social">Ingienería Social</a>
            </li>
            <li>
              <a href="#algunas-herramientas">Algunas Herramientas</a>
            </li>
            <li>
              <a href="#queryselector">Query Selector</a>
            </li>
            <li>
              <a href="#dom">Manipulación del DOM</a>
              <ul>
                <li>
                  <a href="#consola">Consola de JavaScript</a>
                </li>
                <li>
                  <a href="#funciones-de-flecha">Funciones de flecha</a>
                </li>
                <li>
                  <a href="#todo-list">
                    Lista de tareas pendientes (TODO List)
                  </a>
                </li>
              </ul>
            </li>
          </ol>
          <span id="introduccion" />
          <SectionTitle title="Introducción" />
          <ul>
            <li>
              Kali Linux es una herramienta poderosa y ética que se utiliza para
              mejorar la seguridad de sistemas y redes, realizar investigaciones
              forenses digitales y educar a profesionales de la seguridad
              informática sobre las mejores prácticas en el campo de la
              seguridad cibernética. Es importante utilizar estas herramientas
              de manera responsable y ética, respetando siempre la privacidad y
              los derechos de los demás.
            </li>
          </ul>
          <SectionTitle title="Kali Linux" />
          <figure>
            <img
              width={120}
              height={90}
              src="/images/kali-linux-logo.png"
              alt="Git icon"
            />
          </figure>
          <article>
            <p>
              Kali Linux es una distribución de Linux especializada en pruebas
              de penetración y seguridad informática. Su objetivo principal es
              proporcionar a los profesionales de la seguridad informática y a
              los entusiastas de la tecnología una plataforma robusta y versátil
              para realizar pruebas de seguridad, análisis forense y auditorías
              de sistemas. Aquí tienes algunas de sus funcionalidades éticas:
            </p>
            <ol className="list-css-span">
              <li>
                <span>Pruebas de penetración éticas</span>: Kali Linux
                proporciona una amplia gama de herramientas de prueba de
                penetración que pueden ser utilizadas por profesionales de la
                seguridad para evaluar la seguridad de sistemas, redes y
                aplicaciones. Estas pruebas se realizan de manera ética y con el
                consentimiento explícito del propietario del sistema o la red.
              </li>
              <li>
                <span>Análisis forense digital</span>: Kali Linux incluye
                herramientas especializadas para la investigación y el análisis
                forense digital. Estas herramientas pueden utilizarse para
                recopilar evidencia digital, analizar sistemas comprometidos y
                llevar a cabo investigaciones en caso de incidentes de
                seguridad.
              </li>
              <li>
                <span>Auditorías de seguridad</span>: Kali Linux ofrece
                herramientas para realizar auditorías de seguridad en sistemas y
                redes. Estas auditorías ayudan a identificar vulnerabilidades,
                configuraciones inseguras y otros riesgos potenciales de
                seguridad, permitiendo a los administradores de sistemas tomar
                medidas correctivas para mejorar la seguridad de sus sistemas.
              </li>
              <li>
                <span>Educación y capacitación</span>: Kali Linux se utiliza
                ampliamente en entornos educativos y de capacitación para
                enseñar a los estudiantes y profesionales de la seguridad
                informática sobre técnicas de hacking ético, pruebas de
                penetración y seguridad de la información. Proporciona un
                entorno seguro y controlado para que los usuarios adquieran
                experiencia práctica en seguridad informática.
              </li>
              <li>
                <span>Desarrollo de herramientas de seguridad</span>: Kali Linux
                es una plataforma popular para el desarrollo y la distribución
                de herramientas de seguridad informática. La comunidad de código
                abierto que rodea a Kali contribuye al desarrollo de nuevas
                herramientas y al mantenimiento de las existentes, lo que ayuda
                a mejorar continuamente las capacidades de seguridad de la
                distribución.
              </li>
            </ol>
            <p>
              Podemos descargar ésta última versión full offline, para sistemas
              operativos basados en 64 bits, descargar:
              <LinkButton
                url="https://cdimage.kali.org/kali-2024.1/kali-linux-2024.1-installer-amd64.iso"
                iconName="Download"
                color="sky-700"
              >
                Kali Linux 64 Bits
              </LinkButton>
            </p>
            <p>
              Versión de 32 Bits para ordenadores más viejitos, descargar:
              <LinkButton url="" iconName="Download" color="sky-700">
                Kali Linux 32 Bits
              </LinkButton>
            </p>
            <IndexTitle>Instalación de la ISO en USB</IndexTitle>
            <p>
              Para poder instalar ésta ISO en USB portable debemos seguir los
              siguientes pasos:
            </p>
            <ol>
              <li>
                <b>Descargar Rufus</b>: Si aún no tienes Rufus instalado en tu
                sistema, puedes elegir la versión que más se adapte a tu sistema
                operativo y entorno, descargarlo desde el sitio web oficial:
                <LinkButton
                  url="https://rufus.ie"
                  iconName="ArrowUpRight"
                  color="sky-700"
                >
                  https://rufus.ie
                </LinkButton>
                . Rufus es una herramienta gratuita y de código abierto que te
                permite crear unidades USB de arranque de manera fácil y rápida.
              </li>
              <p>
                Si tienen sistema operativo Windows de 64-Bits les recomiendo
                ésta versión de
                <LinkButton
                  url="/rufus-4.4.exe"
                  download={true}
                  color="red-400"
                  iconName="Download"
                >
                  rufus-4.4
                </LinkButton>
              </p>
              <li className="list-css-span">
                <b>Insertar el USB</b>: Conecta tu unidad USB al puerto USB de
                tu ordenador. Asegúrate de que no haya datos importantes, ya que
                el proceso de instalación formateará la unidad y eliminará todos
                los datos existentes.
                <span>(La unidad debe tener al menos 4 GB)</span>
              </li>
            </ol>
          </article>
          <SectionTitle title="Ingienería Social" />
          <article>
            <p className="font-semibold">
              Vamos entender el un poco a lo que ésta se refiere:
            </p>
            <p>
              La ingeniería social es una técnica utilizada en seguridad
              informática que se enfoca en manipular a las personas para obtener
              información confidencial o acceso no autorizado a sistemas, redes
              o datos. Kali Linux, como una distribución especializada en
              pruebas de penetración y seguridad informática, incluye varias
              herramientas que pueden ser utilizadas en actividades de
              ingeniería social con propósitos éticos, como pruebas de seguridad
              autorizadas y concientización.
            </p>
          </article>
          <SectionTitle title="Algunas Herramientas" />
          <article>
            <p>
              Aquí tienes una lista de algunas de las herramientas más conocidas
              incluidas en Kali Linux, organizadas por categorías:
            </p>
            <ul>
              <li className="font-semibold">
                Pruebas de penetración y explotación
              </li>
            </ul>
            <ol>
              <li>Metasploit Framework</li>
              <li>Nmap</li>
              <li>Burp Suite</li>
              <li>Wireshark</li>
              <li>Aircrack-ng</li>
              <li>SQLMap</li>
              <li>John the Ripper</li>
              <li>Hydra</li>
              <li>THC-Hydra</li>
              <li>Nikto</li>
            </ol>
            <ul>
              <li className="font-semibold">Ingianería Social:</li>
            </ul>
            <ol>
              <li>Social Engineering Toolkit (SET)</li>
              <li>Maltego</li>
              <li>BeEF (Browser Exploitation Framework)</li>
              <li>Harvester</li>
              <li>Linset (Linux Evil Twin)</li>
            </ol>
            <ul>
              <li className="font-semibold">Análisis Forense Digital:</li>
            </ul>
            <ol>
              <li>Autopsy</li>
              <li>Foremost</li>
              <li>Volatility</li>
              <li>Sleuth Kit</li>
              <li>Bulk Extractor</li>
            </ol>
            <ul>
              <li className="font-semibold">
                Auditoría de seguridad y análisis de vulnerabilidades:
              </li>
            </ul>
            <ol>
              <li>OpenVAS</li>
              <li>Nessus</li>
              <li>Nexpose</li>
              <li>Nikto</li>
              <li>Skipfish</li>
            </ol>
            <p>
              Bueno esta ya es una larga lista de las herramientas que contiene
              y para que propósito se usan, tiene alrededor de 600 y 700
              programas diferentes 🤯, pero ésta puede variar según sus
              actualizaciónes, no vamos a ver en profundidad todas, solamente
              las que he utilizado alguna vez.
            </p>
          </article>
          <SectionTitle title="Linux Evil Twin (Linset)" />
          <article>
            <p>
              Aquí voy hablar sobre mi experincia usando ésta herramienta, ya
              que mayor parte de mi tiempo lo he dedicado al trabajo de
              instalación de redes, redes WiFi, servers, entre otras.
            </p>
            <IndexTitle>Linset</IndexTitle>
            <p className="list-css-span">
              Linset, también conocido como<span>Linux Evil Twin</span>, es una
              herramienta de hacking incluida en Kali Linux. Esta herramienta se
              utiliza específicamente para realizar ataques de ingeniería social
              y comprometer redes inalámbricas mediante la creación de un punto
              de acceso falso (AP) o
              <span>Evil Twin (Gemelo Malvado) o (Doble Malvado)</span>
              👾.
            </p>
            <p>
              Aquí hay una descripción básica de cómo funciona Linset y qué
              puede hacer:
            </p>
            <ul className="list-css-span">
              <li>
                <span>Creación de un punto de acceso falso</span>: Linset crea
                un punto de acceso falso que se hace pasar por una red legítima
                a la que los usuarios pueden estar intentando conectarse. Este
                punto de acceso falso suele tener el mismo nombre (SSID) que la
                red original para engañar a los usuarios y hacerles creer que
                están conectándose a la red deseada.
              </li>
              <li>
                <span>Ataque de deautenticación</span>: Una vez que los usuarios
                intentan conectarse al punto de acceso falso creado por Linset,
                la herramienta realiza ataques de deautenticación para
                desconectar a los dispositivos conectados a la red legítima.
                Esto obliga a los dispositivos a buscar automáticamente otra red
                a la que conectarse, lo que aumenta las posibilidades de que se
                conecten al punto de acceso falso.
              </li>
              <li>
                <span>Captura de credenciales</span>: Una vez que los
                dispositivos se conectan al punto de acceso falso, Linset puede
                intentar capturar las credenciales de inicio de sesión de los
                usuarios cuando intentan autenticarse en la red. Esto puede
                incluir contraseñas de Wi-Fi, credenciales de inicio de sesión
                de sitios web, y cualquier otra información sensible transmitida
                a través de la red comprometida.
              </li>
            </ul>
            <p>Bien nos vamos ir lavando nos las 👏 por aquí...</p>
            <p>
              Es importante destacar que el uso de Linset y herramientas
              similares para realizar ataques de ingeniería social y comprometer
              redes inalámbricas está estrictamente regulado y puede ser ilegal
              sin el consentimiento explícito del propietario de la red. Estas
              herramientas deben ser utilizadas únicamente con fines éticos y
              autorizados, como pruebas de penetración en entornos controlados y
              concienciación sobre las vulnerabilidades de seguridad de las
              redes inalámbricas. El uso indebido de Linset u otras herramientas
              similares puede tener graves consecuencias legales y éticas.
            </p>
          </article>
          <SectionTitle title="Preparación del Entorno" />
          <article>
            <p>
              Este es el escritorio de inicial de Kali Linux, dependiendo las
              versiones y actualizaciónes que vayamos a descargar.
            </p>
            <ImageComponent
              src="/images/inicio-kali.jpg"
              altImage="Inicio de Kali Linux"
            />
            <p>
              Aquí está un resumen de los pasos típicos para utilizar Linset:
            </p>
            <ol>
              <li>
                Asegúrate de tener una tarjeta de red inalámbrica compatible con
                el modo de monitorización. Kali Linux suele incluir
                controladores y herramientas compatibles con una amplia variedad
                de tarjetas inalámbricas.
              </li>
              <li className="list-css-span">
                <b>Inicio de Linset</b>: Abre una terminal en Kali Linux y
                ejecuta Linset con los permisos adecuados. Puedes hacerlo
                escribiendo<span>linset</span>en la terminal y presionando
                Enter.
              </li>
              <p className="list-css-span">
                Un atajo<span>Ctrl + Alt + T</span>
              </p>
            </ol>
            <p>Van a ver la siguiente terminal:</p>
            <ImageComponent
              src="/images/terminal-kali.jpg"
              altImage="Terminal de Kali Linux"
            />
            <Pre lang="shell bash">{
              /**shell bash */ `
                linset
                `
            }</Pre>
          </article>
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}
