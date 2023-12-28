import { FaWindows } from 'react-icons/fa';
import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';
import { ShareButton } from '../ShareButton';
import { PublishDate } from '../PublishDate';

export const APClientRouterMode = () => {
  return (
    <section className="max-w-800 text-text-primary">
      <SectionTitle title="Modo Ap Router Cliente" />

      <p>Guía de Configuración:</p>

      <p>
        Este artículo aplica a los siguientes modelos:
        <strong className="text-text-strong mx-1">
          CPE510 - CPE610 - CPE220 - CPE210 - CPE520 - CPE605
        </strong>
      </p>
      <PublishDate />
      <p>
        Para poder configurar el modo AP Router Cliente desde 0, vamos a
        ingresar desde una pc, o desde un smartphone, a continuación voy a
        detallar los diferentes métodos para configurar la CPE.
      </p>
      <p>Configuración desde la PC:</p>
      <p>
        Desde una PC con Sistema Operativo de Windows, nos dirigimos a panel de
        control, para acceder a él, presionamos el botón
        <FaWindows className="inline-flex text-xl mb-1 mx-2 text-[cornflowerblue]" />
        + R y escribimos:
      </p>
      <Pre lang="cmd">{`ncpa.cpl`}</Pre>
      <p>Damos enter para ejecutar el comando, veremos la siguiente ventana:</p>

      <figure className="images-web">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/imagen-ap-router-propiedades-red.png?raw=true"
          alt="panel de control-conexiones de red captura de pantalla"
        />
      </figure>

      <p className="paragraph">
        En Red o (Ethernet) hacemos clic derecho sobre el ícono, nos dirijimos a
        propiedades. Dónde está la opción Habilitar el protocolo de Internet
        versión 4 (TCP /IPv4), hacemos doble-clic. Seleccionamos en, usar la
        siguiente dirección IP:
      </p>

      <SectionTitle
        title="Propiedades de Ethernet"
        className="text-text-strong"
      />
      <p>Propiedades TCP/IPv4</p>

      <figure className="images-web">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/imagen-ap-router-TCP-IP.png?raw=true"
          alt="panel de control-conexiones de red captura de pantalla"
        />
      </figure>

      <p>Escribimos los siguientes parámetros:</p>

      <ol>
        <li>Dirección IP:</li>
        <Pre lang="tcp/ip">192.168.0.100</Pre>
        <li>Máscara de sub red:</li>
        <Pre lang="tcp/ip">255.255.255.0</Pre>
      </ol>

      <figure className="images-client flex m-auto justify-center">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/propiedades-ethernet.png?raw=true"
          alt="propiedades ethernet"
        />
      </figure>

      <p>
        Aceptamos los cambios. E ingresamos en el navegador web, en la url
        escribimos:
      </p>

      <Pre lang="navegador">https://192.168.0.254/</Pre>

      <p>damos enter y avanzamos.</p>

      <figure className="images-web">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/navegador.png?raw=true"
          alt="imágen navegador 192.168.0.254"
        />
      </figure>

      <p className="px-2 py-2 bg-gray-800 rounded w-fit text-text-strong font-mono font-semibold">
        Continuamos a 192.168.0.254 de todas formas.
      </p>

      <p>
        Ingresamos (admin) en usuario y (admin) en contraseña, ambos por igual,
        seleccionamos nuestro país e idioma. En caso que no escanee
        correctamente la señal del nodo. Utilizar
        <strong className="text-text-strong"> (Test Mode)</strong> en selección
        de país.
      </p>

      <figure className="images-web">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/ApRouterCliente2.png?raw=true"
          alt="captura de pantalla sistema pharos tp-link"
        />
      </figure>

      <p>
        En la siguiente parte creamos un usuario y contraseña que recordemos y
        accedemos al panel general de TP-LINK.
      </p>

      <figure className="images-web">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/ApRouterCliente3.png?raw=true"
          alt="captura de pantalla sistema pharos tp-link"
        />
      </figure>

      <p>
        Una vez dentro del menú principal de la interfaz de Pharos OS de
        TP-Link, seleccionamos en la pestaña Modo de Operación, y seleccionamos
        AP Router Cliente. Nos va a aparecer si deseamos aceptar el cambio de
        modo, hacemos clic en ( Si ).
      </p>

      <figure className="images-web">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/ApRouterCliente4.png?raw=true"
          alt="captura de pantalla sistema pharos tp-link"
        />
      </figure>

      <p>
        En el modo Ap Router Cliente nos vamos a la pestaña (Inalámbrico), vamos
        al apartado de configuración de cliente inalámbrico. Hacemos clic en
        Inspección.
      </p>

      <figure className="images-web">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/ApRouterCliente5.png?raw=true"
          alt="captura de pantalla sistema pharos tp-link"
        />
      </figure>

      <p>
        Esperamos que termine de escanear y seleccionamos el nodo del Gobierno,
        en éste caso la red WiFi gratis del gobierno de San Luis. Tildamos la
        casilla a nuestra izquierda y hacemos clic en Fijar al Punto de Acceso.
        Configuramos la distancia, en éste caso estamos a 200 metros de la
        antena, 2 cuadras aproximadamente; ponemos: 0.2. Aplicamos y guardamos.
      </p>

      <figure className="images-web">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/ApRouterCliente6.png?raw=true"
          alt="captura de pantalla sistema pharos tp-link"
        />
      </figure>
      <p>
        Una vez hemos terminado los pasos, volvemos a la pestaña (Estado) y
        observamos los indicadores de señal, ruido, SNR y transmisión de antena
        a antena (CCQ). Con ésto hemos terminado la configuración y conectado a
        internet.
      </p>

      <figure className="images-web">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/ApRouterCliente7.png?raw=true"
          alt="captura de pantalla sistema pharos tp-link"
        />
      </figure>

      <p>
        Si has llegado hasta este punto, espero que este tutorial haya sido de
        ayuda para ti. No dudes en visitar nuestro canal en YouTube, donde
        encontrarás un breve tutorial que te guiará para realizar estos mismos
        pasos desde tu smartphone.
      </p>

      <ShareButton />
      <SectionTitle title="Video Explicativo" />
      <p>
        Este video les puede explicar de manera rápida y efectiva la
        configuración en modo AP Router Cliente de Tp-Link.
      </p>

      <div className="flex items-center justify-center">
        <iframe
          src="https://www.youtube.com/embed/brN50pXmZR8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
          className="rounded-lg w-96 h-64"
        />
      </div>
    </section>
  );
};
