import { Pre } from '../Pre';
import { PublishDate } from '../PublishDate';
import { SectionTitle } from '../SectionTitle';
import Link from 'next/link';
import { ExternalLinkIcon } from 'lucide-react';

export const ClientMode = () => {
  return (
    <section className="text-text-primary">
      <SectionTitle title="Modo Cliente" />
      <h2 className="text-text-primary">
        Como Configurar la topologia CPE AP + CPE Cliente con éxito
      </h2>

      <p>Guía de Configuración</p>
      <p>
        Este artículo aplica a los siguientes modelos:
        <strong className="text-text-strong mx-1">
          CPE210 - CPE220 - CPE510 - CPE520 - CPE605 - CPE610 - CPE710
        </strong>
      </p>
      <PublishDate />
      <p>
        Por lo general, usaremos dos CPE para establecer la cobertura de la red
        en las áreas exteriores sin cableado de larga distancia. Por ejemplo, en
        el siguiente escenario de red, puede usarlos para lograr transmitir
        datos de forma inalámbrica a través de una larga distancia y reducir el
        costo del cableado. En esta aplicación, establecerá un CPE como punto de
        acceso y otro CPE como cliente. Al compilar esta aplicación, puede
        encontrar el problema de que los clientes en el sitio B no pueden
        acceder a Internet. Estas preguntas frecuentes pueden ayudarlo a
        solucionar el problema cuando se enfrenta a este escenario y tipo de
        configuración.
      </p>
      <p>Escenario de red:</p>

      <figure className="images-client flex justify-center m-auto">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/antena-dinamica-removebg-preview.png?raw=true"
          alt="esceneraio-diagrama-ap-cliente"
        />
      </figure>

      <p>
        El problema puede estar relacionado con dos razones como a continuación:
      </p>
      <p>(1) CPE_ Client no se conecta con éxito a CPE_ AP.</p>
      <p>
        (2) CPE_ Client se ha conectado con éxito a CPE_ AP, pero los
        dispositivos en el sitio B no pueden acceder a Internet.
      </p>
      <p>
        Para encontrar la razón, primero debemos verificar si el CPE_ Client se
        conectó con éxito al CPE_AP y luego verificar si los dispositivos pueden
        acceder a Internet. Puede seguir los pasos a continuación para
        verificarlo. Primer paso: verifique el estado de la conexión en
        CPE_Client
      </p>

      <p>
        Ir al navegador y escribir la IP que has configurado o el siguiente IP
        predeterminado:
      </p>
      <Pre lang="navegador">192.168.0.254</Pre>

      <p>
        Puede iniciar sesión en la página de administración de CPE_Client, vaya
        a STATUS/ESTADO → Radio Status/Estado de la radio para ver si el
        CPE_Client se ha conectado correctamente al CPE_AP.
      </p>

      <p>
        Si se conectó correctamente al CPE_AP, verá la dirección MAC y el nombre
        SSID del CPE_AP y la Tx / Rx (Rate), como se muestra en la siguiente
        figura. Luego, puede consultar la parte II para resolver los problemas
        por los que los dispositivos conectados al CPE_Client no pueden acceder
        a Internet.
      </p>
      <p>CPE_Client’s Radio Status/Estado de la radio:</p>

      <figure className="images-client">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/estado-radio.png?raw=true"
          alt=""
        />
      </figure>

      <p>
        Si no puede ver ninguna información sobre el CPE_AP en esta página,
        significa que el CPE_Client no se conecta al CPE_AP; consulte los pasos
        de la parte primera parte para solucionar problemas.
      </p>
      <p>
        Paso 1°: La resolución de problemas sobre CPE_Client no se puede
        conectar a CPE_AP Cuando CPE_Client no puede conectarse a CPE_AP, puede
        realizar los siguientes cuatro pasos: Paso 1: Verifique la instalación
        de CPE Asegúrese de que el lado AP y el lado Cliente estén encendidos
        correctamente. Conecte el CPE y el adaptador de corriente como se
        muestra en la figura a continuación, luego verifique las luces LED de
        del CPE se muestren correctamente. (Sugiera usar un cable blindado CAT5e
        (o superior) con cable de tierra) Sobre las instrucciones de instalación
        de CPE, consulte FAQ_2080 en el manual de TP-Link. Conexión eléctrica:
      </p>

      <figure className="images-client flex justify-center m-auto">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/diagrama-poe-cpe-lan-removebg-preview.png?raw=true"
          alt=""
        />
      </figure>

      <p>
        Paso 2: asegúrese de que el AP y el cliente estén en la misma frecuencia
        y ancho de canal Nota: El CPE510 solo tiene una banda de frecuencia 5G,
        mientras que el CPE210 solo tiene una banda de frecuencia 2.4G.
        Entonces, si el CPE_ AP es CPE510 / 210, el CPE_Client también debe ser
        CPE510 / 210. Por lo general, el CPE que funciona en modo Clientes no
        puede admitir la configuración de Canal / Frecuencia; coincidirá
        automáticamente con el canal / frecuencia del SSID del AP. Por lo tanto,
        solo es necesario verificar el ancho del canal que configuró en AP y
        cliente. Por ejemplo, si el ancho del canal que configuró en AP es de
        10MHz, será mejor que seleccione el mismo ancho de canal en el cliente.
        De lo contrario, es posible que el Cliente no pueda conectar el AP.
        Configuración inalámbrica de AP:
      </p>

      <figure className="images-client">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/config-canal-cpe.png?raw=true"
          alt=""
        />
      </figure>

      <p>Escaneo de la página SSID:</p>

      <figure className="images-client">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/escaner-ssid.png?raw=true"
          alt=""
        />
      </figure>

      <ol>
        <p>
          Si aún no se puede encontrar el SSID del AP, aquí hay algunas
          sugerencias que puede hacer: 1. Compruebe si el CPE_ AP y el CPE_
          Client están instalados en la ubicación adecuada: ambos dispositivos
          deben estar a la misma altura, sus paneles frontales están uno frente
          al otro, no hay obstáculo entre ellos, la distancia entre ellos no se
          exceda de acuerdo a sus caracteristicas, y la fuerza de la señal. Hay
          dos preguntas frecuentes que puede consultar:
        </p>
        <li>
          Esta pregunta frecuente describe las inquietudes que necesitábamos
          tener en cuenta en la conexión inalámbrica de larga distancia al usar
          el punto de acceso exterior: FAQ_907
        </li>
        <li>
          Esta pregunta frecuente describe cómo ajustar la orientación de los
          pharos AP externos para una mejor cobertura de señal: FAQ_1044
        </li>
        <li>
          Verifique la versión de firmware del CPE; es mejor que actualice el
          firmware a la última versión. Si ha hecho todas las cosas anteriores,
          el Cliente aún no puede ver la señal de AP incluso si están cara a
          cara. Puede ser el problema de CPE; por favor contactar{' '}
          <a
            href="mailto:support@tp-link.com."
            className="text-[cornflowerblue] link"
          >
            support@tp-link.com.
            <ExternalLinkIcon className="link-icon" />
          </a>
        </li>
        <li>
          A continuación, verifique si el cliente puede conectarse al SSID del
          AP puede verificar el estado de la conexión en la página de estado de
          la radio del CPE_Client, y también puede ir a la página STATUS/ESTADO
          → Monitor → Stations/Estaciones de CPE_AP para verificar si el
          CPE_Client se conectó con éxito al CPE_AP, como se muestra en la
          siguiente figura:
        </li>
      </ol>

      <figure className="images-client">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/monitor.png?raw=true"
          alt=""
        />
      </figure>

      <p>
        Si el Cliente puede ver el SSID del AP, pero no puede conectarse al AP,
        puede realizar la siguiente operación: 1. Si el SSID del AP está
        encriptado, asegúrese de que la contraseña ingresada en la página de
        Configuración del cliente inalámbrico sea correcta. 2. Ajuste el ángulo
        de instalación como el mejor ancho de cordón, y luego intente configurar
        la potencia de transmisión como el valor máximo. 3. Corta la distancia
        entre el AP y el cliente. Nota: Cuando CPE_Client se conecta a CPE_AP,
        sugerimos configurar la dirección IP del AP y el Cliente como la
        dirección IP estática, y asegúrese de que estén en la misma subred. Si
        el Cliente aún no puede conectar el AP después de hacer esto, puede ser
        el problema de CPE; por favor contactar a{' '}
        <a
          href="mailto:support@tp-link.com."
          className="text-[cornflowerblue] link"
        >
          support@tp-link.com
          <ExternalLinkIcon className="link-icon" />
        </a>
      </p>
      <p>
        Muchas gracias por llegar hasta aquí, si quieren visitar el
        <Link
          href={'https://www.youtube.com/@tutosNeoTecs'}
          className="mx-1 underline text-[cornflowerblue]"
        >
          canal de YouTube.
        </Link>
        Ante cualquier duda no dudes en escribir al
        <Link
          href={'/docs/feedback'}
          className="mx-1 underline text-text-strong"
        >
          feedback.
        </Link>
      </p>
    </section>
  );
};
