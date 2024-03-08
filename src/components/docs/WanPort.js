import ImageComponent from '../ImageComponent';
import IndexTitle from '../IndexTitle';
import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';

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
        <IndexTitle>Pasos a seguir:</IndexTitle>
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
          Click en guardar, aceptamos todos los cambios a realizados en ambos
          equipos, el router debe reiniciar, acpetamos el reinico, esperamos
          unos segundos y ya tenemos configurado nuestros puertos
          <span>LAN</span>para permitir la entrada<span>WAN</span>.
        </p>
        <p>
          Nos queda ahora conetar el cable de red de nuestro adaptador POE a
          cualquier puerto IP, con estos pasos ya debería funcionar
          correctamente, la única desventaja es que no podremos entrar a
          configurar nuestro router, por lo cual aconsejo configurar las
          credenciales y nombre de punto de acceso antes.
        </p>
      </article>
    </section>
  );
};
