import ImageComponent from '../ImageComponent';
import IndexTitle from '../IndexTitle';
import LinkButton from '../LinkButton';
import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';
import { ShareButton } from '../ShareButton';

export const WanPort = () => {
  return (
    <section className="text-text-primary">
      <SectionTitle title="Solución avería del WAN Port" />
      <article>
        <p className="list-css-span">
          ¿Sabías que el puerto WAN es crucial para conectar tu router a
          Internet? Si este puerto se daña, puedes perder la conexión por
          completo y tampoco dejará configurar tu dispositivo inalámbrico CPE.
          Por éste medio es donde se realiza la entrada y salida de datos del
          <span>router</span>
          al<span>CPE</span>y viceversa. Afortunadamente, existe una solución
          simple que puedes implementar por ti mismo.
        </p>
        <ImageComponent src="/images/router-wan-1.jpg" />
        <p className="list-css-span">
          Aquí vemos el puerto
          <span className="bg-[#14488A] text-zinc-50">WAN</span>y el resto son
          los puertos<span className="bg-[#BD7F14] text-zinc-50">IP</span>
        </p>
        <p className="list-css-span">
          Vamos a explicar que es un puerto
          <span className="bg-[#14488A] text-zinc-50">WAN</span>:
        </p>
        <ul className="list-css-span">
          <li>
            Los puertos<span>WAN</span>son los puntos de conexión en un router
            que se utilizan para conectarse a una red más amplia, como Internet.
          </li>
          <li>
            En un entorno doméstico o empresarial, el router actúa como la
            puerta de enlace entre la red local y la red más grande, que
            generalmente es la Internet.
          </li>
          <li>
            El término<span>WAN</span>se refiere a la red de área amplia y los
            puertos WAN en el router son los interfaces a través de los cuales
            se establece la conexión con el proveedor de servicios de Internet
            (ISP) u otra red externa.
          </li>
          <p>
            Los puertos<span className="bg-[#BD7F14] text-zinc-50">IP</span>:
          </p>
          <li>
            Los puertos<span>IP</span>se refieren a los números de
            identificación asignados a diferentes servicios y aplicaciones en un
            dispositivo que utiliza el protocolo de Internet<span>(IP)</span>.
          </li>
          <li>
            El protocolo<span>TCP/IP</span>, que es la base de Internet, utiliza
            números de puerto para dirigir el tráfico de red entrante y saliente
            a servicios específicos o aplicaciones en un dispositivo.
          </li>
          <li>
            Los puertos IP están divididos en dos rangos: los puertos bien
            conocidos<span>del 0 al 1023</span>que están asignados a servicios
            comúnmente utilizados, como el puerto 80 para HTTP, y los puertos
            registrados
            <span>del 1024 al 49151</span>y dinámicos
            <span>del 49152 al 65535</span>que son utilizados por aplicaciones
            específicas y servicios temporales.
          </li>
        </ul>
        <p>
          Entonces por lo cual, los puertos WAN se utilizan para la conexión
          externa del router, mientras que los puertos IP están relacionados con
          la gestión del tráfico dentro de la red, utilizando direcciones IP y
          números de puerto para dirigir los datos a servicios específicos en
          dispositivos locales.
        </p>
        <IndexTitle>A configurar:</IndexTitle>
        <ol>
          <li className="list-css-span">
            En primer lugar vamos a desconectar el cable de red de nuestro
            <span>WAN port</span>.
          </li>
          <li>
            Ahora vamos a nuestra PC o dispositivo móvil, abrimos nuestro
            navegador predeterminado e introducimos el siguiente IP:
          </li>
          <Pre lang="ip">{
            /*ip */ `
            192.168.1.1
            `
          }</Pre>
          <p>
            También puede ser otra dirección IP del router como por ejemplo:
          </p>
          <Pre lang="ip">{
            /*ip */ `
            192.168.0.1
            `
          }</Pre>
          <p className="list-css-span">
            Estas<span>IP</span>son válidas para ingresar al panel de
            configuración de<span>TP - Link</span>.
          </p>
          <ImageComponent
            src="/images/ip-router.png"
            altImage="Url navegador (Ip Router Tp_link)"
          />
          <li>Ingresamos nuestras credenciales, por defecto sulen ser:</li>
          <pre>
            Usuario: admin
            <br />
            Contraseña: admin
          </pre>
          <p className="list-css-span">
            Podemos ver diferentes estilos y modelos de los paneles de
            configuración de<span>TP-Link</span>según el año del software del
            router, pero la configuración es la misma, a continuación veremos
            dos ejemplos de paneles:
          </p>
          <p>
            Panel modelo Archer C24 <b className="text-text-strong">(NUEVO)</b>
          </p>
          <ImageComponent
            src="/images/panel-router.png"
            altImage="Panel router Tp-Link modelo nuevo (2024)"
          />
          <p>
            Panel modelo TL-WR841N / TL-WR841ND{' '}
            <b className="text-text-strong">(VIEJO)</b>
          </p>
          <ImageComponent
            src="/images/panel-router-2.png"
            altImage="Panel router Tp-Link Viejo (2018)"
          />
        </ol>
        <IndexTitle>Modelo nuevo</IndexTitle>
        <p className="list-css-span">
          Vamos a empezar por el nuevo; nos vamos a la opción
          <span>Avanzado</span>, en el panel izquierdo nos seleccionamos
          <span>Red</span>, dentro la opción<span>Servidor DHCP</span>como vemos
          a continuación:
        </p>
        <ImageComponent
          src="/images/panel-router-dhcp-1.png"
          altImage="Panel opción DHCP"
        />
        <p className="list-css-span">
          Destildamos la opción de<span>Servidor DHCP</span>que por defecto
          viene con el tilde.
        </p>
        <IndexTitle>Modelo Viejo</IndexTitle>
        <p className="list-css-span">
          En este otro software, es de diferente color pero la funcionalidad es
          la misma, nos vamos a dirgir en el panel izquierdo; la opción
          <span>DHCP</span>dentro seleccionamos la opción
          <span>-DHCP Settings</span>:
        </p>
        <ImageComponent
          src="/images/panel-router-dhcp-2.png"
          altImage="Panel router DHCP"
        />
        <p className="list-css-span">
          Por defecto viene activado<span>enabled</span>, tenemos que poner en
          <span>disabled</span>
        </p>
        <p className="list-css-span">
          Una vez completamos los pasos hacemos click en guardar, aceptamos
          todos los cambios ya realizados en ambos equipos, el router debe
          reiniciar, acpetamos el reinico, esperamos unos segundos y ya tenemos
          configurado nuestros puertos
          <span>LAN</span>para permitir la entrada<span>WAN</span>.
        </p>
        <p className="list-css-span">
          Nos queda ahora conetar el cable de red de nuestro adaptador
          <span>POE</span>de la antena<span>CPE</span>a cualquier puerto
          <span>IP</span>, con estos pasos ya debería funcionar correctamente,
          la única desventaja es que no podremos entrar a configurar nuestro
          router, por lo cual aconsejo configurar las credenciales de inicio de
          sesión, el nombre inalámbrico del router y la contraseña antes.
        </p>
        <p>Vemos una breve imágen de cómo quedaría funcionando:</p>
        <ImageComponent
          src="/images/router-wan-2.jpg"
          altImage="Imagen de puertos del router TP-Link"
        />
        <p className="list-css-span">
          Puedes conectar tus dispositivos a cualquiera de los puertos
          <span className="bg-[#BD7F14] text-zinc-50">IP</span> y todo seguirá
          funcionando correctamente. Ahora que hemos comprendido esto, es
          importante tener en cuenta que posibles inconvenientes en el futuro
          podrían estar relacionados con los puertos
          <span className="bg-[#14488A] text-zinc-50">WAN</span>.
        </p>
        <p>
          Esta revisión clarifica que la conexión de dispositivos puede
          realizarse en cualquier puerto IP, asegurando el funcionamiento
          adecuado. Además, se destaca la importancia de estar atentos a
          posibles problemas en los puertos WAN en el futuro. Si necesitas más
          detalles o ajustes, no dudes preguntar en
          <LinkButton
            url="/docs/feedback"
            iconName="MessageSquareWarning"
            color="text-strong"
            target="_self"
          >
            mi feedback
          </LinkButton>
          .
        </p>
        <p>
          Muchas gracias por llegar hasta aquí, les dejo un breve tutorial en
          Youtube:
        </p>
        <div className="flex items-center justify-center">
          <iframe
            src="https://www.youtube.com/embed/q7716CICOiM?si=q74VjDSvyxXCdDbc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg w-96 h-64"
          ></iframe>
        </div>
      </article>
      <ShareButton setTitle={WanPort.title} />
    </section>
  );
};

WanPort.title = 'Guía para configurar dispositivos • Tp Link';
