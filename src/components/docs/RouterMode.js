import { FaExternalLinkAlt, FaWindows } from 'react-icons/fa';
import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';
import { ShareButton } from '../ShareButton';
import { PublishDate } from '../PublishDate';

export const RouterMode = () => {
  return (
    <section className="text-text-primary">
      <hr />
      <SectionTitle title="Modo Router" />
      <PublishDate />
      <p>
        <strong className="text-text-strong">Definición:</strong> Es similar al
        Router inalámbrico doméstico, el dispositivo en modo Router AP se
        conecta al módem por cable / ADSL raíz. La diferencia radica en que el
        área de cobertura de este dispositivo es más amplia. Los teléfonos
        inteligentes, computadoras portátiles y otros clientes inalámbricos
        pueden compartir una red de área amplia a través del acceso a la red
        inalámbrica que proporciona este dispositivo. Tomemos el CPE como
        ejemplo: para acceder a su página de gestión web y configurarlo, puedes
        seguir este
        <a
          href="https://192.168.0.254/"
          className="text-[lightblue] mx-1"
          target="_blank"
        >
          enlace
          <FaExternalLinkAlt className="inline-flex mx-1 mb-1" />
        </a>
        a través de esta interfaz web, puedes realizar configuraciones rápidas y
        personalizar la red inalámbrica según tus necesidades:
      </p>

      <ol>
        <li>
          Vaya a Configuración rápida
          <span className="text-xl relative mx-1 bottom-0">👉</span>Elija
          "Router AP" , haga clic en
          <span className="bg-[#CCCCCC] text-black border-[#1C67B8] border-[1px] px-2 py-1 mx-2">
            Next / Siguiente
          </span>
        </li>

        <figure className="images-client flex justify-center m-auto">
          <img
            src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/How_to_Configure_the_AP_Router_Mode_on_the_CPE510image002.png?raw=true"
            alt=""
          />
        </figure>

        <li>
          Elija el tipo de conexión WAN que está usando su ISP. Para la mayoría
          de los ISP de DSL y cable, utilizan IP dinámica. Si no está seguro.
          Consulte con el servicio de atención al cliente de su ISP.
        </li>

        <figure className="images-client flex justify-center m-auto">
          <img
            src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/How_to_Configure_the_AP_Router_Mode_on_the_CPE510image004.png?raw=true"
            alt=""
          />
        </figure>
      </ol>

      <p>
        Los procedimientos son diferentes según el tipo de conexión que elija.
      </p>

      <ol>
        <li>
          Seleccione IP dinámica y haga clic en 👉
          <span className="bg-[#CCCCCC] text-black border-[#1C67B8] border-[1px] px-2 py-1 mx-2">
            Next / Siguiente
          </span>
        </li>

        <li>
          Seleccione PPPoE, ingrese el nombre de usuario y la contraseña
          proporcionados por el ISP y click en 👉
          <span className="bg-[#CCCCCC] text-black border-[#1C67B8] border-[1px] px-2 py-1 mx-2">
            Next / Siguiente
          </span>
        </li>

        <figure className="images-client flex justify-center m-auto">
          <img
            src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/how-config-router-ap.png?raw=true"
            alt=""
          />
        </figure>

        <li>
          Seleccione IP estática.Ingrese los parámetros de IP proporcionados por
          el ISP y luego 👉
          <span className="bg-[#CCCCCC] text-black border-[#1C67B8] border-[1px] px-2 py-1 mx-2">
            Next / Siguiente
          </span>
        </li>
      </ol>

      <figure className="images-client flex justify-center m-auto">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/how-config-router-ap2.png?raw=true"
          alt=""
        />
      </figure>

      <p>
        Personalice su nombre inalámbrico (SSID) y contraseña SSID: (Cambie el
        nombre de su nombre inalámbrico) Seguridad: WPA-PSK / WPA2-PSK
        Contraseña de PSK: (Cree una contraseña privada){' '}
        <span className="text-xl relative bottom-0">👉</span>
        <span className="bg-[#CCCCCC] text-black border-[#1C67B8] border-[1px] px-2 py-1 mx-2">
          Next / Siguiente
        </span>
      </p>

      <figure className="images-client flex justify-center m-auto">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/how-config-router-ap3.png?raw=true"
          alt="how-config-router-ap3.png"
        />
        <br />
      </figure>

      <p>
        Haga clic en: Finalizar y espere a que la configuración surta efecto,
        tarda aproximadamente 1 minuto.
      </p>

      <figure className="images-client flex justify-center m-auto">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/how-config-router-ap4.png?raw=true"
          alt=""
        />
      </figure>

      <ol>
        <span className="px-4 py-2 bg-gray-800 border-l-4 border-green-600 rounded">
          Reubicar el CPE
        </span>

        <li>
          Ahora puede desconectar la computadora del puerto LAN del adaptador
          PoE y conectar el módem / router principal a ese puerto LAN. Sus
          dispositivos inalámbricos pueden disfrutar de la Internet inalámbrica
          de CPE ahora. También puede conectar un dispositivo al puerto LAN1 de
          CPE para disfrutar de Internet por cable.
        </li>
        <li>
          Reversión final de la configuración de la computadora (para el sistema
          operativo Windows)
        </li>
        <li>
          Necesitamos volver a cambiar la configuración de IP en la computadora
          después de la configuración. Busque Conexión de área local / Ethernet
          en la computadora.
          <br /> O la tecla
          <FaWindows className="inline-flex text-xl mb-1 mx-1 text-[cornflowerblue]" />
          + R. Ejecutamos el siguiente comando:
        </li>
        <Pre>ncpa.cpl</Pre>
        <li>
          Si no recuerda el procedimiento, consulte nuevamente las
          <a
            href="https://www.tp-link.com/ar/support/faq/"
            className="text-[lightblue]"
          >
            (Preguntas frecuentes FAQs)
          </a>
        </li>
        <li>
          ¿Cómo iniciar sesión en la página de administración web de CPE210 /
          CPE510?
        </li>
        <li>
          Vaya a Propiedades → Protocolo de Internet versión 4 (TCP / IP) →
          Seleccione "Obtener la dirección IP automáticamente" y "Obtener la
          dirección del servidor DNS automáticamente" Haga clic en OK para
          salir.
        </li>
        <li>Haga clic en OK nuevamente para aplicar la configuración.</li>
      </ol>

      <figure className="images-client flex justify-center m-auto">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/propiedades-ethernet2.png?raw=true"
          alt=""
        />
      </figure>

      <p>
        Reversión final de la configuración de la computadora (para Mac OS X)
        Vaya a Apple → Preferencias del sistema → Red → Resaltar Ethernet →
        Configurar IPv4.Usando DHCP. Haga clic en Aplicar.
      </p>
      <br />

      <figure className="images-client flex justify-center m-auto">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/mac-imag-redes.png?raw=true"
          alt=""
        />
      </figure>

      <hr />
      <p>
        Este artículo aplica a los siguientes modelos:
        <strong className="text-text-strong mx-1">
          CPE510 - CPE610 - CPE220 - CPE210 - CPE520 - CPE605.
        </strong>
      </p>

      <ShareButton />
    </section>
  );
};
