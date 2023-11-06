import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import { OpenInNew } from '@mui/icons-material';

export default function DjangoDocs() {
  const DjangoTitle = ({ Tag = 'h1', children }) => {
    return <Tag className="text-slate-100 font-mono">{children}</Tag>;
  };

  const Header = ({ Tag = 'h2', children }) => {
    return <Tag className="text-slate-100">{children}</Tag>;
  };
  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed w-full h-12 z-30" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <LectureNav />
        <div className="w-full max-w-none prose px-4 md:px-8 text-slate-100">
          <NavSwitch inline />
          <DjangoTitle>Django</DjangoTitle>
          <hr />
          <Header>Indice</Header>
          <ol className="indice">
            <li>
              <a href="#introduccion">Introducción</a>
            </li>
            <li>
              <a href="#web">Aplicaciones Web</a>
            </li>
            <li>
              <a href="#http">HTTP</a>
            </li>
            <li>
              <a href="#django">Django</a>
            </li>
            <li>
              <a href="#rutas">Rutas</a>
            </li>
            <li>
              <a href="#plantillas">Plantillas</a>
              <ul>
                <li>
                  <a href="#condicionales">Condicionales</a>
                </li>
                <li>
                  <a href="#estilos">Estilos</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#tareas">Tareas</a>
            </li>
            <li>
              <a href="#formularios">Formularios</a>
              <ul>
                <li>
                  <a href="#formularios-django">Formularios Django</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#sesiones">Sesiones</a>
            </li>
          </ol>
          <span id="introduccion" />
          <SectionTitle title="Introducción" />
          <article>
            <ul>
              <li>
                Hasta ahora, hemos hablado sobre cómo crear páginas web simples
                utilizando HTML y CSS, y cómo utilizar Git y GitHub para llevar
                un registro de los cambios en nuestro código y colaborar con
                otros. También nos hemos familiarizado con el lenguaje de
                programación Python.
              </li>
              <li>
                Hoy, trabajaremos en utilizar el marco de Django de Python para
                crear aplicaciones dinámicas.
              </li>
            </ul>
          </article>
          <span id="web" />
          <SectionTitle title="Aplicaciones Web" />
          <article>
            <p>
              Hasta ahora, todas las aplicaciones web que hemos desarrollado han
              sido estáticas. Esto significa que cada vez que abrimos esa página
              web, se ve exactamente igual. Sin embargo, muchos sitios web que
              visitamos a diario cambian cada vez que los visitamos. Si visitas
              los sitios web de
              <Link
                href="https://www.nytimes.com/"
                className="mx-1 text-slate-400"
              >
                The New York Times
                <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
              </Link>
              o
              <Link
                href="https://www.nytimes.com/"
                className="mx-1 text-slate-400"
              >
                Facebook
                <OpenInNew className="inline xl:w-4 xl:h-4 w-[14px] h-[14px] font-thin bottom-[1px] relative mx-[2px]" />
              </Link>
              , por ejemplo, es probable que veas cosas diferentes hoy que
              mañana. Para sitios grandes como esos, sería poco razonable que
              los empleados tengan que editar manualmente un archivo HTML grande
              cada vez que se realice un cambio, es ahí donde las páginas web
              dinámicas pueden ser extremadamente útiles. Un sitio web dinámico
              es aquel que aprovecha un lenguaje de programación (como Python)
              para generar dinámicamente archivos HTML y CSS. Durante esta
              conferencia, aprenderemos cómo crear nuestras primeras
              aplicaciones dinámicas.
            </p>
          </article>
          <span id="http" />
          <SectionTitle title="HTTP" />
          <article>
            <p>
              HTTP, o Protocolo de Transferencia de Hipertexto en español, es un
              protocolo ampliamente aceptado para la transferencia de mensajes
              de ida y vuelta a través de Internet. Normalmente, la información
              en línea se intercambia entre un cliente (usuario) y un servidor.
            </p>
            <div className="images-client">
              <img src="/images/client-removebg-preview.png" />
            </div>
            <p>
              En este protocolo, el cliente enviará una solicitud al servidor,
              que podría lucir algo como el siguiente ejemplo. En el ejemplo a
              continuación, GET es simplemente un tipo de solicitud, uno de los
              tres que discutiremos en este curso. La barra diagonal
              <span className="mx-1 bg-gray-800 px-1 py-[2px] rounded">
                (/)
              </span>
              generalmente indica que estamos buscando la página de inicio del
              sitio web, y los tres puntos suspensivos
              <span className="mx-1 bg-gray-800 px-1 py-[2px] rounded">
                (...)
              </span>
              indican que podríamos estar pasando más información también.
            </p>
            <div className="images-client">
              <img src="/images/request.png" />
            </div>
            <p>
              Después de recibir una solicitud, un servidor enviará una
              respuesta HTTP, que podría verse algo así como la siguiente. Tal
              respuesta incluirá la versión de HTTP, un código de estado (200
              significa OK), una descripción del contenido y luego alguna
              información adicional.
            </p>
            <div className="images-client">
              <img src="/images/response.png" />
            </div>
            <p>
              El 200 es solo uno de los muchos códigos de estado, algunos de los
              cuales podrías haber visto en el pasado:
            </p>
            <div className="images-client">
              <img src="/images/codes.png" />
            </div>
          </article>
          <ShareButton />
          <SectionTitle title="Django" />
          <article>
            <p>
              <Link
                href="https://www.djangoproject.com/"
                className="mr-1 text-[#0C4B33]"
              >
                Django
              </Link>
              es un marco de trabajo web basado en Python que nos permitirá
              escribir código en Python que genera dinámicamente HTML y CSS. La
              ventaja de utilizar un marco de trabajo como Django es que ya hay
              mucho código escrito para nosotros que podemos aprovechar.
            </p>
            <ul>
              <li className="list-css-span">
                Para comenzar, tendremos que instalar Django, lo que significa
                que también tendrás que
                <Link
                  href="https://pip.pypa.io/en/stable/installing/"
                  className="mx-[3px] text-[#0C4B33]"
                >
                  instalar
                </Link>
                <span>pip</span> si aún no lo has hecho.
              </li>
              <li>
                Una vez que tengas Pip instalado, puedes ejecutar
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded border-[#0C4B33] border-b-2">
                  pip3 install Django
                </span>
                en tu terminal para instalar Django.
              </li>
            </ul>
            <p>
              Después de instalar Django, podemos seguir los pasos para crear un
              nuevo proyecto de Django:
            </p>
            <ol>
              <li>
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded border-[#0C4B33] border-b-2">
                  django-admin startproject NOMBRE_DEL_PROYECTO
                </span>
                Ejecuta para crear una serie de archivos iniciales para nuestro
                proyecto.
              </li>
              <li>
                Ejecuta
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded border-[#0C4B33] border-b-2">
                  cd NOMBRE_DEL_PROYECTO
                </span>
                para navegar al directorio de tu nuevo proyecto.
              </li>
              <li>
                Abre el directorio en tu editor de texto de elección. Notarás
                que se han creado algunos archivos para ti. No necesitaremos
                mirar la mayoría de ellos por ahora, pero hay tres que serán muy
                importantes desde el principio:
                <ul className="list-css-span">
                  <li>
                    <span>manage.py</span>
                    es lo que usamos para ejecutar comandos en nuestro terminal.
                    No tendremos que editarlo, pero lo usaremos con frecuencia.
                  </li>
                  <li>
                    <span>settings.py</span>
                    contiene algunas configuraciones importantes para nuestro
                    nuevo proyecto. Hay algunas configuraciones predeterminadas,
                    pero es posible que deseemos cambiar algunas de ellas de vez
                    en cuando.
                  </li>
                  <li>
                    <span>urls.py</span>
                    contiene instrucciones sobre hacia dónde deben ser dirigidos
                    los usuarios después de navegar a una determinada URL.
                  </li>
                </ul>
              </li>
              <li>
                Para comenzar el proyecto, ejecuta
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded border-[#0C4B33] border-b-2">
                  python manage.py
                </span>
                runserver. Esto abrirá un servidor de desarrollo al que puedes
                acceder visitando la URL proporcionada. Este servidor de
                desarrollo se ejecuta localmente en tu máquina, lo que significa
                que otras personas no pueden acceder a tu sitio web. Esto te
                llevará a una página de inicio predeterminada.
              </li>
            </ol>
            <div className="images-client">
              <img src="/images/landing.png" />
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}
