import { BrandsSwitch } from '../../components/BrandsSwitch';
import { DocsNav } from '../../components/DocsNav';
import HeaderTitle from '../../components/HeaderTitlte';
import IndexTitle from '../../components/IndexTitle';
import { FaSignInAlt, FaWindows } from 'react-icons/fa';
import { Footer } from '../../components/Footer';
import LinkButton from '../../components/LinkButton';
import { Nav } from '../../components/Nav';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { ShareButton } from '../../components/ShareButton';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import ImageComponent from '../../components/ImageComponent';

export default function MikrotikDocs() {
  return (
    <TitlesContextProvider>
      <Nav className="fixed w-full h-12 z-50" />
      <div className="max-w-screen-xl mx-auto flex items-stretch">
        <DocsNav />
        <div className="w-full max-w-none prose px-4 md:px-8">
          <BrandsSwitch inline />
          <HeaderTitle className=" my-6">Configuración MikroTik</HeaderTitle>
          <hr className="border-text-primary" />
          <IndexTitle>Índice</IndexTitle>
          <ol className="indice">
            <li>
              <a href="#url-mikrotik">URL Mikrotik</a>
            </li>
            <li>
              <a href="#sección-quick-set">Sección Quick Set</a>
            </li>
            <li>
              <a href="#sección-webfig">Sección WebFig</a>
            </li>
          </ol>
          <IndexTitle>Introducción</IndexTitle>
          <section className="text-text-primary">
            <p>
              Este artículo aplica a los siguientes modelos:
              <strong className="text-text-strong mx-1">
                AC5 5Ghz - LHG HP5 5Ghz - STX 2.4Ghz y 5Ghz - OmniTik Series
              </strong>
            </p>
            <p>
              Para poder configurar el modo AP Router Cliente desde 0, vamos a
              ingresar desde una pc, o desde un smartphone, a continuación voy a
              detallar los diferentes métodos para configurar la CPE.
            </p>
            <p>Configuración desde la PC:</p>
            <p>
              Desde una PC con Sistema Operativo de Windows, nos dirigimos a
              panel de control, para acceder a él, presionamos el botón
              <FaWindows className="inline-flex mx-1 mb-1 text-xl text-[cornflowerblue]" />
              + R y escribimos:
            </p>
            <Pre lang="bash">ncpa.cpl</Pre>
            <p>
              <FaSignInAlt className="inline-flex mr-2" />
              enter, veremos la siguiente ventana:
            </p>
            <ImageComponent
              src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/imagen-ap-router-propiedades-red.png?raw=true"
              altImage="Panel de control Windos 10 / Conexiones de Red"
            />
            <p>Vamos a "Propiedades"</p>
            <p>
              Luego seleccionamos protocolo TCP /IP y entramos en las
              propiedades del protocolo; colocamos lo siguiente:
            </p>
            <ol>
              <li>Dirección IP:</li>
              <Pre lang="bash">192.168.88.10</Pre>
              <li>Máscara de sub red:</li>
              <Pre lang="bash">255.255.255.0</Pre>
            </ol>
            <ImageComponent
              src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/propiedades-ethernet-mikrotik.png?raw=true"
              altImage="Propiedades para el habilitar el protocolo TCP/IP v4"
            />
            <SectionTitle title="URL Mikrotik" />
            <p>Nos dirijimos al navegador y colocamos la url:</p>
            <Pre lang="bash">http://198.168.88.1</Pre>
            <p>
              Nos aparecera una interfaz para el login de la antena algo así:
            </p>
            <ImageComponent
              src="https://www.hardreset.info/es/lpb/mikrotik-login-page/mikrotik-routerboard-hex-s-rb760igs.jpeg"
              altImage="Router OS Login de Mirotik / Credenciales: usuario y contraseña"
            />
            <p>
              A continuación, en usuario, ponemos (admin) y dejamos en blanco la
              contraseña. hacemos click en Login y veremos una interfaz
              principal así:
            </p>
            <ImageComponent
              src="https://www.technotrade.com.ua/userfiles/images/mikrotik_quickset_2012-10-12/quickset-menu.jpg"
              altImage="Panel principal después del login / RouterOS Mikrotik"
            />
            <SectionTitle title="Sección Quick Set" />
            <p>
              Seleccionamos el botón
              <span className="bg-[#CCCCCC] text-black border-[#1C67B8] border-[1px] mx-1 px-2 py-1">
                Quick Set
              </span>
            </p>
            <ImageComponent
              src="https://wiki.mikrotik.com/images/thumb/2/24/Quickset639.png/717px-Quickset639.png?20170728075938"
              altImage="Quick Set / Configuración rápida del CPE Mikrotik"
            />
            <p>
              Seleccionamos Modo (Router), Address Aquisition: (Automatic),
              tildamos las casillas DHCP server y NAT. Aplicamos la y guardamos
              la configuración.
            </p>
            <p>
              De ésta misma ventana veremos en la parte izquierda una ventana de
              Wireless Client, a veces por defecto tenemos que apretar el botón
              (Desconectar o Disconnect), para que empezemos a ver las antenas
              escaneadas. Recordar configurar el nodo más próximo y que tenga
              mejor señal en Dbi, por ejemplo un rango (-75Dbi a -50Dbi), es un
              rango óptimo de conexión; aplicamos los cambios.
            </p>
            <SectionTitle title="Sección WebFig" />
            <p>
              Luego de aplicar nos ubicamos en el WebFig dentro de esta solapa
              nos figurara a la izquierda el listado con todos los parámetros de
              configuración, hay que solo buscar Wireless la marcamos con el
              mouse y veremos las placas de red, dependiendo el modelo será la
              cantidad de placas que vea.- Mikrotik SXT Lite 5 AC: Tiene un
              total de 2 placas de red.- Mikrotik LGH: tiene solo 1 placa de
              red.- Una vez identificado el modelo ingresaremos a la placa,
              haciendo clik en el nombre de la misma en este caso es la Wan 2.-
            </p>
            <ImageComponent
              src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/Web-Fig-Mikrotik.png?raw=true"
              altImage="Web Fig / Sección de configuración avanzada de RouterOS Mikrotik"
            />
            <p>
              Una vez dentro de la placa de red de la antena veremos el
              siguiente solapa, es importante que vean los títulos siempre a la
              derecha para no perderse, como verán tenemos los botones Ok,
              Cancelar, Apply y Advance Mode marcamos Advance y configuramos los
              parámetros como salen en la imagen seleccionamos →
            </p>
            <ul>
              <li>Scan.- Band: 5Ghz-A/N/AC.</li>
              <li>Country: Argentina.</li>
              <li>Wireless Protocol: 802.11</li>
            </ul>
            <ol>
              <p className="bg-gray-800 w-fit px-2 text-[aliceblue] rounded border-l-4 border-text-strong">
                Modelo: Mikrotik Lhg Xl 5 Ac 802.11a/n/ac
              </p>
              <li>
                Si en el escaneo no se produce ningún resultado o no se quiere
                asociar, no se visualiza a la hora de realizar el Scan;
                seleccionar país Japon.
              </li>
            </ol>
            <p>
              Muchas gracias por llegar hasta aquí, pueden ver el vídeo
              explicativo en mi
              <LinkButton
                url="https://www.youtube.com/@tutosNeoTecs"
                color="tomato"
                iconName="Youtube"
              >
                canal
              </LinkButton>
              . Ante cualquier duda no dudes en escribir al
              <LinkButton
                url="/docs/feedback"
                color="tomato"
                iconName="MessageSquareWarning"
              >
                feedback.
              </LinkButton>
            </p>
            <ShareButton setTitle={MikrotikDocs.title} />
          </section>
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}
MikrotikDocs.title = 'NeoTecs · MikroTik';
