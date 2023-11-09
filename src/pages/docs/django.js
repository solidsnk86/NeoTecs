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
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-30" />
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
                <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
              </Link>
              o
              <Link
                href="https://www.nytimes.com/"
                className="mx-1 text-slate-400"
              >
                Facebook
                <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
              </Link>
              , por ejemplo, es probable que veas cosas diferentes hoy que
              mañana. Para sitios grandes como esos, sería poco razonable que
              los empleados tengan que editar manualmente un archivo HTML grande
              cada vez que se realice un cambio, es ahí donde las páginas web
              dinámicas pueden ser extremadamente útiles. Un sitio web dinámico
              es aquel que aprovecha un lenguaje de programación (como Python)
              para generar dinámicamente archivos HTML y CSS. Durante este
              curso, aprenderemos cómo crear nuestras primeras aplicaciones
              dinámicas.
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
                <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
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
                  <OpenInNew className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
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
              <div className="images-client">
                <img src="/images/landing.png" />
              </div>
              <li>
                A continuación, tendremos que crear una aplicación. Los
                proyectos de Django se dividen en una o más aplicaciones. La
                mayoría de nuestros proyectos solo requerirán una aplicación,
                pero los sitios más grandes pueden aprovechar esta capacidad
                para dividir un sitio en varias aplicaciones. Para crear una
                aplicación, ejecutamos el comando
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded border-[#0C4B33] border-b-2">
                  python manage.py startapp NOMBRE_DE_LA_APP
                </span>
                . Esto creará algunos directorios y archivos adicionales que
                serán útiles en breve, incluido views.py.
              </li>
              <li className="list-css-span">
                Ahora, debemos instalar nuestra nueva aplicación. Para hacerlo,
                vamos al archivo <span>settings.py</span>, nos desplazamos hacia
                abajo hasta la lista de <span>INSTALLED_APPS</span> y agregamos
                el nombre de nuestra nueva aplicación a esta lista.
              </li>
            </ol>
            <div className="images-client">
              <img src="/images/installed.png" />
            </div>
          </article>
          <SectionTitle title="Rutas" />
          <article>
            <p>Ahora, para comenzar con nuestra aplicación:</p>
            <ol>
              <li className="list-css-span">
                A continuación, navegaremos hasta <span>views.py</span>. Este
                archivo contendrá varias vistas diferentes, y por ahora podemos
                pensar en una vista como una página que el usuario podría querer
                ver. Para crear nuestra primera vista, escribiremos una función
                que reciba una solicitud <b>(request)</b>. Por ahora,
                simplemente devolveremos una HttpResponse (una respuesta muy
                simple que incluye un código de respuesta de 200 y una cadena de
                texto que se puede mostrar en un navegador web) que diga
                <span>"Hola, Mundo"</span>. Para hacer esto, debemos incluir
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded border-[#0C4B33] border-b-2">
                  from django.http import HttpResponse
                </span>
                . Nuestro archivo se verá así:
              </li>
              <Pre lang="javascript">{
                /*django */ `
                from django.shortcuts import render
                from django.http import HttpResponse
               
                # Crea tus vistas aquí.
               
                def index(request):
                    return HttpResponse("Hello, world!")
                `
              }</Pre>
              <li className="list-css-span">
                Ahora, necesitamos asociar de alguna manera esta vista que
                acabamos de crear con una URL específica. Para hacerlo,
                crearemos otro archivo llamado <span>urls.py</span> en el mismo
                directorio que <span>views.py</span>. Ya tenemos un archivo{' '}
                <span>urls.py</span> para todo el proyecto, pero es mejor tener
                uno separado para cada aplicación individual.
              </li>
              <li>
                Dentro de nuestro nuevo urls.py, crearemos una lista de patrones
                de URL que un usuario podría visitar al usar nuestro sitio web.
                Para hacerlo:
                <ol>
                  <li>
                    Realizaremos algunas importaciones: from django.urls import
                    path nos proporcionará la capacidad de redirigir URLs. from
                    . import views importará cualquier función que hayamos
                    creado en views.py.
                  </li>
                  <li>Crearemos una lista llamada urlpatterns.</li>
                  <li>
                    Para cada URL deseada, agregaremos un elemento a la lista
                    urlpatterns que contenga una llamada a la función path con
                    dos o tres argumentos: una cadena que represente la ruta de
                    la URL, una función de views.py que deseamos llamar cuando
                    se visite esa URL y (opcionalmente) un nombre para esa ruta,
                    en el formato name="algo". Aquí tienes un ejemplo de cómo se
                    vería nuestra aplicación simple ahora:
                  </li>
                </ol>
              </li>
              <Pre lang="javascript">{
                /*django */ `
                from django.urls import path
                from . import views
               
                urlpatterns = [
                    path("", views.index, name="index")
                ]
                `
              }</Pre>
              <li className="list-css-span">
                Ahora, hemos creado un <span>urls.py</span> para esta aplicación
                específica, y es hora de editar el urls.py creado para todo el
                proyecto. Cuando abras este archivo, deberías ver que ya existe
                una ruta llamada <b>"admin"</b>, que explicaremos en
                conferencias posteriores. Queremos agregar otra ruta para
                nuestra nueva aplicación, por lo que agregaremos un elemento a
                la lista de urlpatterns. Esto sigue el mismo patrón que nuestras
                rutas anteriores, excepto que en lugar de agregar una función de
                <span>views.py</span> como segundo argumento, queremos poder
                incluir todas las rutas del archivo
                <span>urls.py</span> dentro de nuestra aplicación. Para hacer
                esto, escribimos:
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                  include("NOMBRE_DE_LA_APP.urls")
                </span>
                , donde include es una función a la que obtenemos acceso
                importando include desde django.urls, como se muestra en el
                <span>urls.py</span> a continuación:
              </li>
              <Pre lang="javascript">{
                /*django */ `
                from django.contrib import admin
                from django.urls import path, include
                
                urlpatterns = [
                    path('admin/', admin.site.urls),
                    path('hello/', include("hello.urls"))
                ]
                `
              }</Pre>
              <li className="list-css-span">
                Al hacer esto, hemos especificado que cuando un usuario visite
                nuestro sitio y luego agregue /hello a la URL en la barra de
                búsqueda, serán redirigidos a las rutas dentro de nuestra nueva
                aplicación. En otras palabras, al acceder a
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                  http://tu-sitio.com/hello/
                </span>
                , se activará la lógica de rutas definida en el archivo
                <span>urls.py</span>
                de tu nueva aplicación, y se dirigirá a la vista
                correspondiente, que en este caso es la vista hello_world que
                devuelve "Hello, World". Esto permite que los usuarios accedan a
                esta vista específica al agregar /hello a la URL de tu sitio
                web.
              </li>
            </ol>
            <p>
              Cuando inicias tu aplicación usando python manage.py runserver y
              visitas la URL proporcionada, te encontrarás con una pantalla. Sin
              embargo, no proporcionaste detalles específicos sobre la pantalla
              que estás viendo. Dependiendo de lo que veas, podría haber varias
              razones detrás de ello.
            </p>
            <div className="images-client">
              <img src="/images/404.png" />
            </div>
            <p>
              Esto ocurre porque solo hemos definido la URL
              <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                localhost:8000/hello
              </span>
              , pero no hemos definido la URL
              <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                localhost:8000
              </span>
              sin nada añadido al final. Entonces, cuando agrego /hello a la URL
              en la barra de búsqueda:
            </p>
            <div className="images-client">
              <img src="/images/helloworld.png" />
            </div>
            <p>
              Ahora que hemos tenido cierto éxito, repasemos lo que acaba de
              suceder para llegar a ese punto:
            </p>
            <ol>
              <li className="list-css-span">
                Cuando accedimos a la URL
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                  localhost:8000/hello
                </span>
                , Django examinó lo que venía después de la URL base
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                  (localhost:8000/)
                </span>
                y fue al archivo<span>urls.py </span>
                de nuestro proyecto, buscando un patrón que coincidiera con
                "hello".
              </li>
              <li>
                Encontró esa extensión porque la definimos, y vio que cuando se
                encontrara con esa extensión, debía incluir nuestro archivo
                urls.py desde dentro de nuestra aplicación.
              </li>
              <li>
                Luego, Django ignoró las partes de la URL que ya había utilizado
                en la redirección (localhost:8000/hello/ o todo el URL) y buscó
                dentro de nuestro otro archivo urls.py un patrón que coincidiera
                con la parte restante de la URL.
              </li>
              <li>
                Descubrió que nuestra única ruta hasta el momento <b>("") </b>
                coincidía con lo que quedaba de la URL, y nos dirigió a la
                función de views.py asociada con esa ruta.
              </li>
              <li>
                Finalmente, Django ejecutó esa función dentro de views.py y
                devolvió el resultado
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                  (HttpResponse("Hello, world!"))
                </span>
                a nuestro navegador web.
              </li>
            </ol>
            <p>
              Ahora, si lo deseamos, podemos cambiar la función hello_world
              dentro de views.py para que devuelva cualquier cosa que queramos.
              Incluso podríamos llevar un seguimiento de variables y realizar
              cálculos dentro de la función antes de devolver algo.
            </p>
            <p>
              Ahora, veamos cómo podemos agregar más de una vista a nuestra
              aplicación. Podemos seguir muchos de los mismos pasos dentro de
              nuestra aplicación para crear páginas que saluden a Neo.
            </p>
            <p className="list-css-span">
              Dentro de<span>views.py</span>:
            </p>
            <Pre lang="javascript">{
              /*django */ `
              from django.shortcuts import render
              from django.http import HttpResponse
              
              # Creamos nuestras vistas aquí.
              
              def index(request):
                  return HttpResponse("Hello, world!")
              
              def neotecs(request):
                  return HttpResponse("Hello, Neo!")
              
              def dev(request):
                  return HttpResponse("Hello, Gabriel!")
              `
            }</Pre>
            <p className="list-css-span">
              Dentro de<span>urls.py</span>(sin nuestra aplicación)
            </p>
            <Pre lang="javascript">{
              /*django */ `
              from django.urls import path
              from . import views
              
              urlpatterns = [
                  path("", views.index, name="index"),
                  path("neotecs", views.neotecs, name="neo"),
                  path("dev", views.dev, name="gabriel")
              ]
              `
            }</Pre>
          </article>
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}
