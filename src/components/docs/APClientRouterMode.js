import { FaWindows } from 'react-icons/fa';
import { AlertTriangle } from 'lucide-react';
import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';
import HeaderTitle from '../HeaderTitlte';
import IndexTitle from '../IndexTitle';
import LinkButton from '../LinkButton';
import ImageComponent from '../ImageComponent';

export const APClientRouterMode = () => {
  return (
    <section className="max-w-800 text-text-primary">
      <HeaderTitle className=" my-6">Configuración Tp Link</HeaderTitle>
      <hr className="border-text-primary" />
      <IndexTitle>Índice</IndexTitle>
      <ol className="indice">
        <li>
          <a href="#modo-ap-router-cliente">Modo Ap Router Cliente</a>
        </li>
        <li>
          <a href="#modo-punto-de-acceso">Modo Punto de Acceso</a>
        </li>
        <li>
          <a href="#modo-cliente">Modo Cliente</a>
        </li>
        <li>
          <a href="#modo-repetidor">Modo Repetidor</a>
        </li>
        <li>
          <a href="#modo-router">Modo Router</a>
        </li>
        <li>
          <a href="#configuración-adaptador-inalámbrico-usb-tl-wn722n">
            Configuración Adaptador inalámbrico USB TL-WN722n
          </a>
        </li>
        <li>
          <a href="#soluci%C3%B3n-aver%C3%ADa-del-wan-port">
            Solución avería del WAN port
          </a>
        </li>
      </ol>
      <IndexTitle>Introducción</IndexTitle>
      <p>Guía de Configuración:</p>
      <p>
        Este artículo aplica a los siguientes modelos:
        <strong className="text-text-strong mx-1">
          CPE210 - CPE220 - CPE510 - CPE520 - CPE605 - CPE610 - CPE710
        </strong>
      </p>
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
      <Pre lang="bash">ncpa.cpl</Pre>
      <p>Damos enter para ejecutar el comando, veremos la siguiente ventana:</p>
      <ImageComponent
        src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/imagen-ap-router-propiedades-red.png?raw=true"
        altImage="Imagen del panel de comtrol (Conexiones de red)"
      />
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
      <ImageComponent
        src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/imagen-ap-router-TCP-IP.png?raw=true"
        altImage="Imagen de Conxiones de Red del panel de control de windows 10"
      />
      <p>Escribimos los siguientes parámetros:</p>

      <ol>
        <li>Dirección IP:</li>
        <Pre lang="bash">192.168.0.100</Pre>
        <li>Máscara de sub red:</li>
        <Pre lang="bash">255.255.255.0</Pre>
      </ol>
      <ImageComponent
        src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/propiedades-ethernet.png?raw=true"
        altImage="Propiedades Ethernet"
      />
      <p>
        Aceptamos los cambios. E ingresamos en el navegador web, en la url
        escribimos:
      </p>

      <Pre lang="bash">https://192.168.0.254/</Pre>

      <p>damos enter y avanzamos.</p>
      <ImageComponent
        src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/navegador.png?raw=true"
        altImage="Imagen Navegador"
      />
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

      <SectionTitle title="Modo AP Router Cliente" />
      <p>Ingresando al panel de configuración de Tp Link</p>
      <ImageComponent
        src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/ApRouterCliente2.png?raw=true"
        altImage="Panel de inico de sesión usuario"
      />

      <p>
        En la siguiente parte creamos un usuario y contraseña que recordemos y
        accedemos al panel general de TP-LINK.
      </p>
      <ImageComponent
        src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/ApRouterCliente3.png?raw=true"
        altImage="Panel de cambio de credenciales, usuario y contraseña nuevos"
      />
      <p>
        Una vez dentro del menú principal de la interfaz de Pharos OS de
        TP-Link, seleccionamos en la pestaña Modo de Operación, y seleccionamos
        AP Router Cliente. Nos va a aparecer si deseamos aceptar el cambio de
        modo, hacemos clic en ( Si ).
      </p>
      <ImageComponent
        src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/ApRouterCliente4.png?raw=true"
        altImage="Menú desplegable, selector de modos CPE"
      />
      <p>
        En el modo Ap Router Cliente nos vamos a la pestaña (Inalámbrico), vamos
        al apartado de configuración de cliente inalámbrico. Hacemos clic en
        Inspección.
      </p>
      <ImageComponent
        src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/ApRouterCliente5.png?raw=true"
        altImage="Panle Inalámbrico de Tp Link"
      />
      <SectionTitle title="Configuración de la distancia CPE" />
      <div className="border-l-4 border-red-500 px-1 bg-opacity-[0.6] p-3 pl-5 font-semibold">
        <p className="font-bold text-xl text-red-500">
          <AlertTriangle className="w-6 inline mb-1" /> Importante
        </p>
        <p>
          Para tener en cuenta, la configuración de distancia de manera
          automática versus la configuración de manera manual, pueden encontrar
          muchas variaciones de rendimiento por lo cual dejo algunas
          consideraciones técnicas importantes:
        </p>
      </div>
      <ol>
        <li>
          El modo automático puede generar inestabilidad por cambios frecuentes
          de canal y potencia.
        </li>
        <li>
          La configuración manual permite:
          <ul>
            <li>Optimizar la conexión según el entorno específico</li>
            <li>Reducir interrupciones de señal</li>
            <li>Controlar mejor la interferencia con otros dispositivos</li>
          </ul>
        </li>
        <li>Para una configuración manual óptima, recomiendo:</li>
        <ul>
          <li>Analizar previamente el espectro de frecuencias</li>
          <li> Elegir un canal con menor interferencia</li>
          <li>Ajustar la potencia de transmisión según la distancia</li>
        </ul>
      </ol>
      <p>
        Bueno seguimos en el caso, espero que se haya comprendido la explicaión
        de la diferencia entre automático y manual. Una vez que termine de
        escanear y seleccionamos el nodo del Gobierno, en éste caso la red WiFi
        gratis del gobierno de San Luis. Tildamos la casilla a nuestra izquierda
        y hacemos clic en Fijar al Punto de Acceso. Configuramos la distancia,
        en éste caso estamos a 200 metros de la antena, 2 cuadras
        aproximadamente; ponemos: 0.2. Aplicamos y guardamos.
      </p>
      <ImageComponent
        src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/ApRouterCliente6.png?raw=true"
        altImage="Panel de inspección de las antenas"
      />
      <p>
        Una vez hemos terminado los pasos, volvemos a la pestaña (Estado) y
        observamos los indicadores de señal, ruido, SNR y transmisión de antena
        a antena (CCQ). Con ésto hemos terminado la configuración y conectado a
        internet.
      </p>
      <ImageComponent
        src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/ApRouterCliente7.png?raw=true"
        altImage="Panel de estado CPE"
      />
      <p>
        Muchas gracias por llegar hasta aquí, si quieren visitar el
        <LinkButton
          url="https://www.youtube.com/@tutosNeoTecs"
          color="youtube-link"
          iconName="Youtube"
        >
          canal de YouTube.
        </LinkButton>
        Ante cualquier duda no dudes en escribir al
        <LinkButton
          url="/docs/feedback"
          color="text-strong"
          iconName="MessageSquareWarning"
        >
          feedback.
        </LinkButton>
      </p>
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
