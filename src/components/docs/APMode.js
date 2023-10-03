import { Pre } from '../Pre';
import { PublishDate } from '../PublishDate';
import { SectionTitle } from '../SectionTitle';
import { ShareButton } from '../ShareButton';

export const APMode = () => {
  return (
    <section className="text-white">
      <SectionTitle title="Modo Punto de Acceso" />
      <p>
        Este artículo aplica a los siguientes modelos:
        <strong className="text-text-strong mx-1">
          CPE510 , CPE610 , CPE220 , CPE210 , CPE520 , CPE605.
        </strong>
      </p>
      <p>Vamos a configurar la CPE en modo punto de acceso:</p>
      <PublishDate />
      <hr />
      <p>Para realizarlo de la PC:</p>
      <p>
        Desde una PC con Sistema Operativo de Windows, nos dirigimos a panel de
        control, para acceder a él, presionamos el botón WIN + R y escribimos:
      </p>

      <Pre>ncpa.cpl</Pre>

      <p>le damos enter.</p>
      <p>
        En Red o (Ethernet) hacemos clic derecho sobre el ícono, nos dirijimos a
        propiedades. Dónde está la opción (Habilitar el protocolo de Internet
        versión 4 (TCP/IPv4)), hacemos doble-clic. Seleccionamos en (Usar la
        siguiente dirección IP). Ponemos lo siguiente:
      </p>

      <ol>
        <li>Dirección IP:</li>
        <Pre>192.168.0.100</Pre>
        <li>Máscara de sub red:</li>
        <Pre>255.255.255.0</Pre>
      </ol>

      <hr />
      <p>Vista del menú principal Pharos OS:</p>

      <div className="images-web">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/puntoacceso1.png?raw=true"
          alt="imágen menú principal pharos os"
          id="imgAP"
        />
      </div>

      <p>
        En la pestaña de opciones vamos a la pestaña (inalámbrico), para
        configurar nombre y contraseña del AP:
      </p>

      <div className="images-web">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/puntoacceso2.png?raw=true"
          alt="imágen menú inalámbrico pharos os."
          id="imgAP"
        />
      </div>

      <p>
        A continuación, en el apartado de (configuración del AP inalámbrico),
        ponemos el nombre del AP, vamos a modo de seguridad y seleccionamos
        (WPA-PSK), en versión seleccionamos (WPA2), tipo de encriptación (AES).
        <br />
        Ponemos una contraseña que obtenga 8 caractéres, alfanumérica y hacemos
        clic en el botón (Aplicar). Guardamos la configuración:
      </p>

      <div className="images-web">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/puntoacceso3.png?raw=true"
          alt="imágen menú inalámbrico pharos os2"
          id="imgAP"
        />
      </div>

      <p>
        Una vez hayamos guardado la configuración el equipo está listo para
        funcionar como Punto de Acceso, ya sea de 2.4 Ghz. o de 5 Ghz. Podemos
        ingresar al AP mediante samrtphones, notebooks, otra antena en modo
        Cliente, etc. Escaneamos y buscamos el AP para conectarnos.
      </p>

      <ShareButton />
    </section>
  );
};
