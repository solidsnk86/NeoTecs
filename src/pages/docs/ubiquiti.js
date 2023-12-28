import { FaMousePointer, FaSignInAlt, FaWindows } from 'react-icons/fa';
import { Nav } from '../../components/Nav';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { SectionTitle } from '../../components/SectionTitle';
import { DocsNav } from '../../components/DocsNav';
import { BrandsSwitch } from '../../components/BrandsSwitch';
import { Pre } from '../../components/Pre';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import { PublishDate } from '../../components/PublishDate';

export default function UbiquitiDocs() {
  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed w-full h-12 z-10" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <DocsNav />
        <div className="w-full max-w-none prose px-4 md:px-8">
          <BrandsSwitch inline />
          <SectionTitle title="Configuración Ubiquiti" />

          <section className="text-text-primary">
            <p>
              Este artículo aplica a los siguientes modelos:
              <strong className="text-text-strong mx-1">
                Lite Beam M5 - Grid M5 - M2 - airMAX - NanoStation M5 - M2
              </strong>
            </p>
            <PublishDate />
            <h3 className="text-[cornflowerblue]">
              Configuración del Lite Beam M5 en Modo Estación
            </h3>
            <p>
              Los dispositivos Lite Beam se pueden configurar como estaciones
              para conectarse con cualquier punto de acceso de marca Ubiquiti.
              Si desea configurar un dispositivo de la serie Lite Beam M como
              una estación para conectarse a estaciones base de diferentes
              marcas, siga estos pasos. Inicialmente, será necesario conectar
              físicamente el dispositivo para acceder a la configuración del
              modo predeterminado. Esta guía del usuario le ayudará a iniciar
              sesión y configurar el Lite Beam como una estación para la
              estación base. Para realizar actualizaciones de firmware,
              configurar el modo inalámbrico, cambiar la dirección IP de la LAN
              y actualizar la contraseña de inicio de sesión, deberá acceder a
              la configuración del Lite Beam a través de su dirección IP.
            </p>

            <ul>
              <li>
                Los dispositivos Lite Beam M5 y Lite Beam M2 tienen un único
                puerto Ethernet con PoE habilitado.
              </li>

              <li>
                El adaptador PoE de 24 voltios viene con un dispositivo, una
                antena y un juego de abrazaderas para el montaje.
              </li>
              <li>Dispositivo + PoE:</li>
              <div className="images-client flex justify-left m-auto">
                <img
                  src="https://github.com/solidsnk86/NeoTecs/blob/master/public/images/poe-injector-ubiquiti-poe-24-24w-g-gigabit-removebg-preview.png?raw=true"
                  alt="imágen menú principal pharos os"
                  id="imgAP"
                />
              </div>
            </ul>
            <p>Configuración desde la PC:</p>
            <p>
              Desde una PC con Sistema Operativo de Windows, nos dirigimos a
              panel de control, para acceder a él, presionamos el botón
              <FaWindows className="inline-flex mx-2 text-xl mb-1 text-[cornflowerblue]" />
              + R y escribimos el siguiente comando:
            </p>
            <Pre lang="cmd">{`ncpa.cpl`}</Pre>
            <p>
              <FaSignInAlt className="inline-flex mr-2" />
              enter, veremos la siguiente ventana:
            </p>
            <div className="images-client">
              <img
                src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/imagen-ap-router-propiedades-red.png?raw=true"
                alt="imágen menú principal pharos os"
                id="imgAP"
              />
            </div>
            <p>Vamos a "Propiedades".</p>
            <p>
              Luego seleccionamos propiedades del protocolo TCP /IP y colocamos
              lo siguiente:
            </p>
            <ol>
              <li>Dirección IP:</li>
              <Pre lang="tcp/ip">192.168.1.25</Pre>
              <li>Máscara de sub red:</li>
              <Pre lang="tcp/ip">255.255.255.0</Pre>
            </ol>
            <div className="images-client flex justify-center m-auto">
              <img
                src="https://github.com/solidsnk86/NeoTecs/blob/master/public/images/protocolo-ip-ubiquiti.png?raw=true"
                alt="imágen menú principal pharos os"
                id="imgAP"
              />
            </div>
            <SectionTitle title="URL y Login Ubiquiti" />
            <p>Nos dirijimos al navegador y colocamos la url:</p>
            <Pre lang="navegador">htpps://198.168.1.20</Pre>
            <p>
              Nos aparecera una interfaz para el login de la antena algo así:
            </p>
            <div className="images-client flex justify-center m-auto">
              <img
                src="https://github.com/solidsnk86/NeoTecs/blob/master/public/images/protocolo-ip-ubiquiti.png?raw=true"
                alt="Propiedades panel de control TCP/IPv4."
                id="imgAP"
              />
            </div>
            <p>Seleccionamos el país, aceptamos los términos y hacemos...</p>
            <p>
              Click en
              <span className="bg-[#CCCCCC] text-black border-[#000] border-[1px] px-3 py-1 cursor-default mx-1">
                Login
              </span>
              <FaMousePointer className="inline-flex relative left-[-25px] top-[15px] dark:text-[#FFFFFF] border-[#000]" />
            </p>
            <p>
              Veremos una interfaz de usuario parecida a ésta. (la imagen de la
              foto ya está configurada y muestra el estado general de la
              antena.)
            </p>
            <div className="images-client flex justify-center m-auto">
              <img
                src="https://img.community.ui.com/7c899a6c-3b35-47f1-88ca-c35f9cd19a95/questions/2139dfc0-1464-497a-982f-b3011d1f910d/da5c6eb2-ec74-43c5-9757-72721f3546c6"
                alt="imágen menú inalámbrico pharos os2"
                id="imgAP"
              />
            </div>
            <p>
              Les dejo éste video de configuración UBNT Grid M2 que en sí los
              despliegues de la configuración son bastantes parecidos de acuerdo
              a la interfaz del sistema airOS de Ubiquiti; modo estación:
            </p>
            <iframe
              src="https://www.youtube.com/embed/Q9bFZgllF7k?si=O4xYo-ZCdiM_9sQ5"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
              className="rounded-lg w-96 h-64 flex justify-center m-auto max-sm:w-[100%]"
            />
            <SectionTitle title="Cambio de contraseña" />
            <p>
              Cambiar la contraseña de inicio de sesión de UBNt Lite Beam M5
              Haga clic en el mensaje emergente la primera vez que inicie sesión
              o vaya a la pestaña Sistema en el menú de pestañas. Busque la
              opción Cuentas del sistema Nombre de usuario del administrador:
              ubnt (cambie el nombre de usuario aquí) Contraseña actual: escriba
              la contraseña actual que utilizó para iniciar sesión. Por defecto
              es "ubnt" Nueva contraseña: escriba la nueva contraseña que desea
              establecer. Verificar nueva contraseña: confirme la nueva
              contraseña nuevamente.
            </p>
            <div className="images-client flex justify-center m-auto">
              <img
                src="https://mikrotrik.com/wp-content/uploads/2020/02/ubnt-lite-beam-m5-login-password-change.jpg"
                alt="imágen menú inalámbrico pharos os2"
                id="imgAP"
              />
            </div>
            <p>
              Presione el botón Cambiar y Aplicar desde las ventanas PoP para
              guardar la configuración. Espere hasta que Lite Beam se reinicie y
              guarde la configuración.
            </p>
            <p>
              Click en
              <span className="bg-[#CCCCCC] text-black border-[#000] border-[1px] px-3 py-1 cursor-default mx-1">
                Change
              </span>
              <FaMousePointer className="inline-flex relative left-[-25px] top-[15px] dark:text-[#FFFFFF] border-[#000]" />
            </p>
            <ShareButton setTitle={UbiquitiDocs.title} />
            <SectionTitle title="Configuración modo estación" />
            <ol>
              <li>
                Configuración inalámbrica básica: Modo inalámbrico: Estación
              </li>
              <li>
                WDS (Modo Puente Transparente): Habilite esta opción solo si la
                estación base también es un dispositivo UBNT.
              </li>
              <li>
                SSID: escriba el nombre del nodo WiFi al que se quiere conectar
                o seleccione el botón
                <span className="bg-[#CCCCCC] ml-1 text-black border-[#000] border-[1px] px-3 py-1 cursor-default">
                  Select
                </span>
                <FaMousePointer className="inline-flex relative left-[-25px] top-[15px] dark:text-[#FFFFFF] border-[#000]" />
              </li>
              <li>
                Ahora puede la antena escanear y puede seleccionar la antena o
                nodo más próximo a conectar, que tenga buena intensidad de señal
                en Dbi por ejemplo:
                <ul>
                  <li className="text-green-500 uppercase">
                    [-42Dbi o -55Dbi] óptimo.
                  </li>
                  <li className="text-orange-500 uppercase">
                    [-62Dbi o -75Dbi] es bueno.
                  </li>
                  <li className="text-red-500 uppercase">
                    [-82Dbi o -95Dbi] es débil.
                  </li>
                </ul>
              </li>
              <li>
                Ancho del canal: 40 MHz -
                <span className="bg-gray-400 mx-1 px-1 py-1 text-[#fafafa] rounded">
                  Si la conexión a Internet es inferior a 20 Mbps utilice 20 MHz
                  para evitar interferencias en el canal.
                </span>
              </li>
              <li>
                Frecuencia: 5210 (seleccione el canal y use el analizador
                inalámbrico para elegir el canal con mejor rendimiento en el
                área).
              </li>
              <li> Antena: seleccione la ganancia de la antena.</li>
              <li>
                Potencia de salida: use la potencia máxima o reduzca según la
                distancia para la conectividad que desea usar con el dispositivo
                Lite Beam.
              </li>
            </ol>
            <p>
              En ésta imagen puede observar la pestaña
              <span className="bg-button-variant text-text-variant px-2 py-1 mx-2 rounded-sm uppercase">
                Wireless
              </span>
            </p>
            <p>Hacemos click en el botón:</p>
            <span className="bg-[#CCCCCC] ml-1 text-black border-[#000] border-[1px] px-3 py-1 cursor-default">
              Seleccione
            </span>
            <FaMousePointer className="inline-flex relative left-[-25px] top-[15px] dark:text-[#FFFFFF] border-[#000]" />

            <div className="images-client flex justify-center m-auto">
              <img
                src="https://i.imgur.com/wwzwKTO.png"
                alt="imágen menú inalámbrico pharos os2"
                id="imgAP"
              />
            </div>
            <p>Tienen que ver una interfaz similar a ésta:</p>

            <div className="images-client flex justify-center m-auto">
              <img
                src="http://i.imgur.com/mUZX5Fq.png"
                alt="imágen menú inalámbrico"
                id="imgAP"
              />
            </div>

            <p>Puede hacer click en el botón:</p>
            <span
              className="bg-[#CCCCCC] ml-1 text-black border-[#000] border-[1px] px-3 py-1 cursor-default mb-2"
              title="Esto es tan solo una ilustración"
            >
              Seleccionar
            </span>
            <FaMousePointer className="inline-flex relative left-[-25px] top-[15px] dark:text-[#FFFFFF] border-[#000]" />
            <br />

            <p>
              En ésta imagen puede observar la pestaña
              <span className=" bg-button-variant text-text-variant px-2 py-1 rounded-sm uppercase mx-2">
                main
              </span>
            </p>

            <p>
              Aquí puede explorar la calidad de la conexión, intensidad,
              transmisión, ruido de la señal, nombre AP, MAC, etc.
            </p>

            <div className="images-client flex justify-center m-auto">
              <img
                src="https://wifisafe.b-cdn.net/wp-content/uploads/2012/02/3_main_enlazado.png"
                alt="imágen menú inalámbrico"
                id="imgAP"
              />
            </div>

            <p>Damos por hecho la conexíon viendo éste último panel.</p>
            <p>
              Muchas gracias por llegar hasta aquí, pueden ver el vídeo
              explicativo en mi canal
            </p>
            <ShareButton setTitle={UbiquitiDocs.title} />

            <SectionTitle title="Video Explicativo" />

            <iframe
              src="https://www.youtube.com/embed/Q9bFZgllF7k?si=O4xYo-ZCdiM_9sQ5"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
              className="rounded-lg w-96 h-64 flex justify-center m-auto max-sm:w-[100%] mb-5"
            />
          </section>
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}
UbiquitiDocs.title = 'NeoTecs · Ubiquiti';
