import { PublishDate } from '../PublishDate';
import { SectionTitle } from '../SectionTitle';
import { ShareButton } from '../ShareButton';

export const RepeaterMode = () => {
  return (
    <section className="text-text-primary">
      <SectionTitle title="Modo Repetidor" />
      <PublishDate />

      <figure className="images-client">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/repeater-removebg-preview.png?raw=true"
          className="flex justify-center items-center m-auto"
          alt=""
        />
      </figure>

      <p>Los pasos para instalar el repetidor wifi son sencillos:</p>

      <figure className="images-client">
        <img
          src="https://github.com/solidsnk86/neotecs.tech/blob/master/img/repetidor1.png?raw=true"
          id="imgAP"
          alt=""
        />
      </figure>

      <p>
        Conecta el repetidor wifi al POE y conecta el POE a la corriente
        eléctrica y a tu router wifi. A través de tu ordenador accede al panel
        de control del repetidor wifi (es simplemente introducir una url en el
        navegador web) Configura desde el panel (Centralized Management System
        Pharos Control) el TP-LINK CPE510 en modo repetidor Desenchufa el
        TP-LINK CPE510 e instálalo permanentemente en tu jardín, terraza o
        balcón. Enchúfalo a la corriente, verás como empezará a repetir tu señal
        wifi por todo el exterior.
      </p>
      <h3 className="text-[cornflowerblue] font-bold">Pasos:</h3>
      <p>
        <strong className="text-text-strong">Paso 1:</strong> Conecta tu
        computadora al CPE510 Conecta tu computadora al CPE510 a través de un
        cable Ethernet. Puedes usar el puerto LAN del CPE510 para hacer esto.
      </p>
      <p>
        <strong className="text-text-strong">Paso 2:</strong> Accede a la página
        de configuración Abre un navegador web en tu computadora e ingresa la
        dirección IP predeterminada del CPE510 en la barra de direcciones. La
        dirección IP predeterminada suele ser 192.168.0.254. Presiona Enter para
        acceder a la página de inicio de sesión del CPE510.
      </p>
      <p>
        <strong className="text-text-strong">Paso 3:</strong> Inicia sesión en
        el CPE510 Ingresa el nombre de usuario y la contraseña para acceder al
        CPE510. Los valores predeterminados son "admin" tanto para el nombre de
        usuario como para la contraseña. Si has cambiado estos valores, ingresa
        las credenciales actualizadas.
      </p>
      <p>
        <strong className="text-text-strong">Paso 4:</strong> Navega hasta la
        configuración de modo repetidor Una vez que hayas iniciado sesión en el
        CPE510, busca la opción "Modo de operación" o "Modo de funcionamiento"
        en el menú de configuración. Selecciona la opción "Modo repetidor" o
        "Repeater mode".
      </p>
      <p>
        <strong className="text-text-strong">Paso 5:</strong> Configura la
        conexión inalámbrica Una vez en la configuración del modo repetidor,
        busca la opción para escanear redes inalámbricas disponibles. El CPE510
        debería mostrar una lista de redes Wi-Fi disponibles. Selecciona la red
        Wi-Fi a la que deseas repetir la señal y proporciona la contraseña de
        esa red cuando se te solicite.
      </p>
      <p>
        <strong className="text-text-strong">Paso 6:</strong> Configura la
        conexión cableada (opcional) Si deseas usar el puerto LAN del CPE510
        para conectar dispositivos por cable, asegúrate de configurar la opción
        adecuada en la configuración del modo repetidor. Puedes elegir si deseas
        que el puerto LAN funcione como un puerto WAN o como un puerto LAN
        normal.
      </p>
      <p>
        <strong className="text-text-strong">Paso 7:</strong> Guarda la
        configuración Una vez que hayas completado la configuración del modo
        repetidor y hayas proporcionado toda la información necesaria, asegúrate
        de guardar los cambios. Busca un botón o enlace como "Guardar" o
        "Aplicar cambios" y haz clic en él para guardar la configuración.
      </p>
      <p>
        <strong className="text-text-strong">Paso 8:</strong> Reinicia el CPE510
        Para que los cambios surtan efecto, es posible que debas reiniciar el
        CPE510. Puedes hacerlo apagando y volviendo a encender el dispositivo o
        utilizando la opción de reinicio en la página de configuración.
      </p>
      <p>
        Después de seguir estos pasos, el TP-Link CPE510 debería estar
        configurado en modo repetidor y repetirá la señal de la red Wi-Fi que
        hayas seleccionado. Recuerda que es importante colocar el CPE510 en un
        lugar adecuado para obtener una buena calidad de señal y asegurarte de
        que esté dentro del rango de la red Wi-Fi original.
      </p>

      <ShareButton />
      <hr />

      <p>
        Este artículo aplica a los siguientes modelos:
        <span className="color-acento">
          <strong className="text-text-strong mx-1">
            CPE510 , CPE610 , CPE220 , CPE210 , CPE520 , CPE605.
          </strong>
        </span>
      </p>
    </section>
  );
};
