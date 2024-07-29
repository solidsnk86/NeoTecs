import { Nav } from '../../components/Nav';
import { NavSwitch } from '../../components/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import LinkButton from '../../components/LinkButton';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import { DjangoIcon } from '../../components/Icons/DjangoIcon';
import HeaderTitle from '../../components/HeaderTitlte';
import Indextitle from '../../components/IndexTitle';
import ImageComponent from '../../components/ImageComponent';
import { NavLinks } from '../../components/NavLinks';

export default function DjangoDocs() {
  return (
    <TitlesContextProvider>
      <Nav className="fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl mx-auto flex items-stretch">
        <NavLinks />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <HeaderTitle>Django</HeaderTitle>
          <hr className="border-text-primary" />
          <Indextitle>Índice</Indextitle>
          <ol className="indice">
            <li>
              <a href="#introducción">Introducción</a>
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
          <figure>
            <DjangoIcon />
          </figure>
          <article>
            <p>
              Hasta ahora, todas las aplicaciones web que hemos desarrollado han
              sido estáticas. Esto significa que cada vez que abrimos esa página
              web, se ve exactamente igual. Sin embargo, muchos sitios web que
              visitamos a diario cambian cada vez que los visitamos. Si visitas
              los sitios web de
              <LinkButton
                url="https://www.nytimes.com/"
                color="green-600"
                iconName="ArrowUpRight"
              >
                The New York Times
              </LinkButton>
              o
              <LinkButton
                url="https://www.nytimes.com/"
                color="green-600"
                iconName="ArrowUpRight"
              >
                Facebook
              </LinkButton>
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
            <ImageComponent
              src="/images/client-removebg-preview.png"
              altImage="Ejemplo deDjango"
            />
            <p>
              En este protocolo, el cliente enviará una solicitud al servidor,
              que podría lucir algo como el siguiente ejemplo. En el ejemplo a
              continuación, GET es simplemente un tipo de solicitud, uno de los
              tres que discutiremos en este curso. La barra diagonal
              <span className="mx-1 border border-slate-800 px-1 rounded">
                (/)
              </span>
              generalmente indica que estamos buscando la página de inicio del
              sitio web, y los tres puntos suspensivos
              <span className="mx-1 border border-slate-800 px-1 rounded">
                (...)
              </span>
              indican que podríamos estar pasando más información también.
            </p>
            <ImageComponent
              src="/images/request.png"
              altImage="Ejemplo de Django"
            />
            <p>
              Después de recibir una solicitud, un servidor enviará una
              respuesta HTTP, que podría verse algo así como la siguiente. Tal
              respuesta incluirá la versión de HTTP, un código de estado
              <span className="mx-1 border border-slate-800 px-1 rounded">
                200 significa OK
              </span>
              , una descripción del contenido y luego alguna información
              adicional.
            </p>
            <ImageComponent
              src="/images/response.png"
              altImage="Ejemplo de Django"
            />
            <p>
              El 200 es solo uno de los muchos códigos de estado, algunos de los
              cuales podrías haber visto en el pasado:
            </p>
            <ImageComponent
              src="/images/codes.png"
              altImage="Ejemplo de Django"
            />
          </article>
          <SectionTitle title="Django" />
          <article>
            <p>
              <LinkButton
                url="https://www.djangoproject.com/"
                color="green-600"
                iconName="ArrowUpRight"
              >
                Django
              </LinkButton>
              es un marco de trabajo web basado en Python que nos permitirá
              escribir código en Python que genera dinámicamente HTML y CSS. La
              ventaja de utilizar un marco de trabajo como Django es que ya hay
              mucho código escrito para nosotros que podemos aprovechar.
            </p>
            <ul className="list-css-span">
              <li>
                Para comenzar, tendremos que instalar Django, lo que significa
                que también tendrás que
                <LinkButton
                  href="https://pip.pypa.io/en/stable/installing/"
                  color="green-400"
                  iconName="ArrowUpRight"
                >
                  instalar
                </LinkButton>
                <span>pip</span> si aún no lo has hecho.
              </li>
              <li>
                Una vez que tengas Pip instalado, puedes ejecutar
                <span>pip3 install Django</span>
                en tu terminal para instalar Django.
              </li>
            </ul>
            <p>
              Después de instalar Django, podemos seguir los pasos para crear un
              nuevo proyecto de Django:
            </p>
            <ol className="list-css-span">
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
                  python manage.py runserver
                </span>
                . Esto abrirá un servidor de desarrollo al que puedes acceder
                visitando la URL proporcionada. Este servidor de desarrollo se
                ejecuta localmente en tu máquina, lo que significa que otras
                personas no pueden acceder a tu sitio web. Esto te llevará a una
                página de inicio predeterminada.
              </li>
              <ImageComponent
                src="/images/landing.png"
                altImage="Ejemplo de Django"
              />
              <li className="list-css-span">
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
                serán útiles en breve, incluido<span>views.py</span>.
              </li>
            </ol>
          </article>
          <SectionTitle title="Rutas" />
          <article>
            <p>Ahora, para comenzar con nuestra aplicación:</p>
            <ol>
              <li className="list-css-span">
                A continuación, navegaremos hasta<span>views.py</span>. Este
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
              <Pre lang="python">{
                /*django */ `
                from django.shortcuts import render
                from django.http import HttpResponse
               
                # Crea tus vistas aquí.
               
                def index(request):
                    return HttpResponse("Hola Neo!")
                `
              }</Pre>
              <li className="list-css-span">
                Ahora, necesitamos asociar de alguna manera esta vista que
                acabamos de crear con una URL específica. Para hacerlo,
                crearemos otro archivo llamado<span>urls.py</span>en el mismo
                directorio que<span>views.py</span>. Ya tenemos un archivo
                <span>urls.py</span>para todo el proyecto, pero es mejor tener
                uno separado para cada aplicación individual.
              </li>
              <p className="list-css-span">
                En mi caso yo he creado mi proyecto con el nombre
                <span>mysite</span> luego cuando cree la aplicación
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded border-[#0C4B33] border-b-2">
                  python manage.py startapp polls
                </span>
                ; en el cual mi raíz de carpetas se verá así:
              </p>
              <ImageComponent
                src="/images/root_.png"
                altImage="Ejemplo de imagen root"
              />
              <p className="list-css-span">
                La carpeta principal<span>mysite</span> y sus archivos:
              </p>
              <pre className="text-left flex bg-[#0f0f0f]">{`
                mysite/
                  |- manage.py
                  |- mysite/
                  |- __init__.py
                  |- settings.py
                  |- urls.py
                  |- asgi.py
                  |- wsgi.py
                  `}</pre>
              <p>Estos archivos son:</p>
              <ul className="list-css-span">
                <li>
                  El directorio raíz externo <b>mysite/</b> es un contenedor
                  para tu proyecto. Su nombre no importa para Django; puedes
                  renombrarlo como desees.
                </li>
                <li>
                  <span>manage.py</span>: Una utilidad de línea de comandos que
                  te permite interactuar con este proyecto de Django de varias
                  maneras. Puedes leer todos los detalles sobre manage.py en
                  django-admin y manage.py.
                </li>
                <li>
                  El directorio interno <b>mysite/</b> es el paquete Python real
                  para tu proyecto. Su nombre es el nombre del paquete Python
                  que necesitarás usar para importar cualquier cosa dentro de él
                  (por ejemplo, mysite.urls).
                </li>
                <li>
                  <span>mysite/init.py</span>: Un archivo vacío que le dice a
                  Python que este directorio debe considerarse un paquete
                  Python. Si eres un principiante en Python, lee más sobre
                  paquetes en la documentación oficial de
                  <LinkButton
                    url="https://python.org/"
                    color="green-600"
                    iconName="ArrowUpRight"
                  >
                    Python
                  </LinkButton>
                  .
                </li>
                <li>
                  <span>mysite/settings.py</span>: Configuración para este
                  proyecto de Django. La configuración de Django te dirá todo
                  sobre cómo funcionan las configuraciones.
                </li>
                <li>
                  <span>mysite/urls.py</span>: Las declaraciones de URL para
                  este proyecto de Django; una "tabla de contenidos" de tu sitio
                  impulsado por Django. Puedes leer más sobre las URL en el
                  despachador de URL.
                </li>
                <li>
                  <span>mysite/asgi.py</span>: Un punto de entrada para
                  servidores web compatibles con ASGI para servir tu proyecto.
                  Consulta Cómo implementar con ASGI para obtener más detalles.
                </li>
                <li>
                  <span>mysite/wsgi.py</span>: Un punto de entrada para
                  servidores web compatibles con WSGI para servir tu proyecto.
                  Consulta Cómo implementar con WSGI para obtener más detalles.
                </li>
              </ul>
              <p className="list-css-span">
                Para crear tu aplicación, asegúrate de crearla dentro del mismo
                directorio que <b>manage.py</b>, en mi caso la voy a llamar
                <b> polls</b>:<br />
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded border-[#0C4B33] border-b-2">
                  python manage.py startapp polls
                </span>
              </p>
              <p>
                Nos creará un directorio <b>polls</b> que contendrá los
                siguientes archivos dentro:
              </p>
              <pre className="text-left flex bg-[#0f0f0f]">{`
                polls/
                 |- __init__.py
                 |- admin.py
                 |- apps.py
                 |- migrations/
                 |- __init__.py
                 |- models.py
                 |- tests.py
                 |- views.py
                  `}</pre>
              <p className="list-css-span">
                Bien ya habbíamos creado nuestro archivo<span>views.py</span>,
                ahora seguimos:
              </p>
              <li className="list-css-span">
                Dentro de nuestro nuevo<span>urls.py</span>, crearemos una lista
                de patrones de URL que un usuario podría visitar al usar nuestro
                sitio web. Para hacerlo:
                <ol>
                  <li className="list-css-span">
                    Realizaremos algunas importaciones:
                    <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded border-[#0C4B33] border-b-2">
                      from django.urls import path
                    </span>
                    nos proporcionará la capacidad de redirigir URLs. from .
                    import views importará cualquier función que hayamos creado
                    en
                    <span>views.py</span>.
                  </li>
                  <li>Crearemos una lista llamada urlpatterns.</li>
                  <li className="list-css-span">
                    Para cada URL deseada, agregaremos un elemento a la lista
                    urlpatterns que contenga una llamada a la función
                    <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded border-[#0C4B33] border-b-2">
                      path
                    </span>
                    con dos o tres argumentos: una cadena que represente la ruta
                    de la URL, una función de<span>views.py</span>que deseamos
                    llamar cuando se visite esa URL y (opcionalmente) un nombre
                    para esa ruta, en el formato
                    <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded border-[#0C4B33] border-b-2">
                      name="algo"
                    </span>
                    . Aquí tienes un ejemplo de cómo se vería nuestra aplicación
                    simple ahora:
                  </li>
                </ol>
              </li>
              <Pre lang="python">{
                /*django */ `
                from django.urls import path
                from polls import views
               
                urlpatterns = [
                    path("", views.index, name="index"),
                ]
                `
              }</Pre>
              <li className="list-css-span">
                Ahora, hemos creado un <span>urls.py</span> para esta aplicación
                específica, y es hora de editar el urls.py creado para todo el
                proyecto. Cuando abras este archivo, deberías ver que ya existe
                una ruta llamada <b>"admin"</b>, que explicaremos en otros
                cursos posteriores. Queremos agregar otra ruta para nuestra
                nueva aplicación, por lo que agregaremos un elemento a la lista
                de urlpatterns. Esto sigue el mismo patrón que nuestras rutas
                anteriores, excepto que en lugar de agregar una función de
                <span>views.py</span> como segundo argumento, queremos poder
                incluir todas las rutas del archivo
                <span>urls.py</span> dentro de nuestra aplicación. Para hacer
                esto, escribimos:
                <br />
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                  include("NOMBRE_DE_LA_APP.urls")
                </span>
                , donde include es una función a la que obtenemos acceso
                importando include desde django.urls, como se muestra en el
                <span>urls.py</span>a continuación:
              </li>
              <Pre lang="python">{
                /*django */ `
                from django.contrib import admin
                from django.urls import path, include
                
                urlpatterns = [
                  path("polls/", include("polls.urls")),
                  path("admin/", admin.site.urls),
                ]
                `
              }</Pre>
              <li className="list-css-span">
                Al hacer esto, hemos especificado que cuando un usuario visite
                nuestro sitio y luego agregue /polls a la URL en la barra de
                búsqueda, serán redirigidos a las rutas dentro de nuestra nueva
                aplicación. En otras palabras, al acceder a
                <span className="mx-1 font-mono text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                  http://127.0.0.1:8000/polls/
                </span>
                , se activará la lógica de rutas definida en el archivo
                <span>urls.py</span>
                de tu nueva aplicación, y se dirigirá a la vista
                correspondiente, que en este caso es la vista que devuelve
                <b> "Hola Neo"</b>. Esto permite que los usuarios accedan a esta
                vista específica al agregar /polls a la URL de tu sitio web.
              </li>
            </ol>
            <p>
              Cuando inicias tu aplicación usando python manage.py runserver y
              visitas la URL proporcionada:
              <span className="mx-1 font-mono text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                http://127.0.0.1:8000/polls/
              </span>
            </p>
            <ImageComponent src="/images/polls.png" altImage="Más ejemplos" />
            <p>
              Ahora que hemos tenido cierto éxito, repasemos lo que acaba de
              suceder para llegar a ese punto:
            </p>
            <ol className="list-css-span">
              <li>
                Cuando accedimos a la URL
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                  localhost:8000/polls
                </span>
                , Django examinó lo que venía después de la URL base
                <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                  (localhost:8000/)
                </span>
                y fue al archivo<span>urls.py</span>
                de nuestro proyecto, buscando un patrón que coincidiera con
                "polls".
              </li>
              <li>
                Encontró esa extensión porque la definimos, y vio que cuando se
                encontrara con esa extensión, debía incluir nuestro archivo
                <span>urls.py</span>desde dentro de nuestra aplicación.
              </li>
              <li>
                Luego, Django ignoró las partes de la URL que ya había utilizado
                en la redirección
                <span>localhost:8000/polls/ o todo el URL</span>y buscó dentro
                de nuestro otro archivo<span>urls.py</span>un patrón que
                coincidiera con la parte restante de la URL.
              </li>
              <li>
                Descubrió que nuestra única ruta hasta el momento
                <span>("")</span>
                coincidía con lo que quedaba de la URL, y nos dirigió a la
                función de views.py asociada con esa ruta.
              </li>
              <li>
                Finalmente, Django ejecutó esa función dentro de views.py y
                devolvió el resultado
                <i className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                  (HttpResponse("Hola Neo!"))
                </i>
                a nuestro navegador web.
              </li>
            </ol>
            <p className="list-css-span">
              Ahora, si lo deseamos, podemos cambiar la función
              <span>index</span>dentro de<span>views.py</span>para que devuelva
              cualquier cosa que queramos. Incluso podríamos llevar un
              seguimiento de variables y realizar cálculos dentro de la función
              antes de devolver algo.
            </p>
            <p>
              Ahora, veamos cómo podemos agregar más de una vista a nuestra
              aplicación. Podemos seguir muchos de los mismos pasos dentro de
              nuestra aplicación para crear páginas que saluden a Neo.
            </p>
            <p className="list-css-span">
              Dentro de<span>views.py</span>:
            </p>
            <Pre lang="python">{
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
            <Pre lang="python">{
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
            <p>
              Cuando ejecutemos el servidor, en la url si cambiamos como se
              muestra a continuación:
            </p>
            <ImageComponent
              src="/images/dev.png"
              altImage="Ejemplo de Django Desarrollador"
            />
            <ImageComponent
              src="/images/neotecs.png"
              altImage="Ejemplo de Django Neotecs"
            />
            <p>
              Muchos sitios web utilizan parámetros en la URL para mostrar
              información específica. Por ejemplo, al ir a
              <LinkButton
                url="https://twitter.com/CalcagniGabriel"
                color="green-600"
                iconName="ArrowUpRight"
              >
                https://twitter.com/CalcagniGabriel
              </LinkButton>
              se muestran todos mis tweets, y al dirigirse a
              <LinkButton
                url="https://twitter.com/CalcagniGabriel"
                color="green-600"
                iconName="ArrowUpRight"
              >
                https://github.com/solidsnk86
              </LinkButton>
              se accede a la página de GitHub de solidSnk86. Incluso puedes
              encontrar tus propios repositorios públicos de GitHub navegando a
              www.github.com/TU_NOMBRE_DE_USUARIO.
            </p>
            <p className="list-css-span">
              Al pensar en cómo se implementa esto, parece imposible que sitios
              como GitHub y Twitter tengan una ruta de URL individual para cada
              usuario. Entonces, veamos cómo podríamos hacer una ruta más
              flexible. Comenzaremos agregando una función más general llamada
              <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                "saludo"
              </span>
              a <span>views.py</span>:
            </p>
            <Pre lang="python">{
              /*django */ `
              from django.http import HttpResponse

              def saludo(request, name):
                  return HttpResponse(f"Hola, {name}!")
              
              `
            }</Pre>
            <p>
              Esta función recibe no solo una solicitud (request) sino también
              un argumento adicional que es el nombre de un usuario, y luego
              devuelve una respuesta HTTP personalizada basada en ese nombre. A
              continuación, debemos crear una ruta más flexible en urls.py, que
              podría lucir algo así:
            </p>
            <Pre lang="python">{
              /*django */ `
              from django.urls import path

              from . import views
              
              urlpatterns = [
                  path("<str:name>", views.saludo, name="saludo")
              ]
              `
            }</Pre>
            <p>
              Esta es una nueva sintaxis, pero básicamente lo que está
              sucediendo aquí es que ya no estamos buscando una palabra o nombre
              específico en la URL, sino cualquier cadena que un usuario pueda
              ingresar. Ahora, podemos probar el sitio con algunas otras URL:
            </p>
            <ImageComponent src="/images/mario.png" altImage="Usuario Mario" />
            <p className="list-css-span">
              En este ejemplo he puesto un nombre con espacio y automáticamente
              se genera la url con<span>%20</span>lo que significa un espacio en
              blanco.
            </p>
            <ImageComponent
              src="/images/solidsnk.png"
              altImage="Imagen ejemplo de usuarios"
            />
            <p>
              Otra cosa que también podemos hacer es darle mayúscula a la cadena
              de texto, con la función de python
              <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                capitalize
              </span>
              ejemplo:
            </p>
            <Pre lang="python">{
              /*python */ `
              def saludo(request, name):
              return HttpResponse(f"Hola, {name.capitalize()}!")
              `
            }</Pre>
            <ImageComponent
              src="/images/capitalize.png"
              altImage="Ejemplo en Django"
            />
            <p>
              Esta es una excelente ilustración de cómo cualquier funcionalidad
              que tengamos en Python puede ser utilizada en Django antes de ser
              devuelta.
            </p>
          </article>
          <SectionTitle title="Plantillas" />
          <article>
            <p>
              Hasta ahora, nuestras respuestas HTTP han sido solo texto, ¡pero
              podemos incluir cualquier elemento HTML que deseemos! Por ejemplo,
              podría decidir devolver un encabezado magenta en lugar de solo el
              texto en nuestra función de índice:
            </p>
            <Pre lang="python">{
              /*python */ `
              def index(request):
              return HttpResponse("<h1 style=\\"color:#8F41D8;\\">Bienvenidos a NeoTecs!</h1>")
              `
            }</Pre>
            <ImageComponent
              src="/images/color-header.png"
              altImage="Style Header"
            />
            <p className="list-css-span">
              Sería muy tedioso escribir una página HTML completa dentro de
              <span>views.py</span>. También constituiría un mal diseño, ya que
              queremos mantener partes separadas de nuestro proyecto en archivos
              separados siempre que sea posible.
            </p>
            <p>
              Es por eso que ahora vamos a introducir las plantillas de Django,
              que nos permitirán escribir HTML y CSS en archivos separados y
              renderizar esos archivos usando Django. La sintaxis que
              utilizaremos para renderizar una plantilla se ve así:
            </p>
            <Pre lang="python">{
              /*python */ `
              from django.shortcuts import render

              def index(request):
                return render(request, "hola/index.html")
              `
            }</Pre>
            <p className="list-css-span">
              Ahora, necesitaremos crear esa plantilla. Para hacer esto,
              crearemos una carpeta llamada templates dentro de nuestra
              aplicación, luego crearemos una carpeta llamada<span>hola</span>
              (o cualquier nombre que tenga nuestra aplicación) dentro de esa
              carpeta, y luego agregaremos un archivo llamado
              <span>index.html</span>.
            </p>
            <ImageComponent
              src="/images/templates.png"
              altImage="Style Header en Django template"
            />
            <p className="list-css-span">
              Podemos agregar lo siguiente a nuestro archivo
              <span>index.html</span>:
            </p>
            <Pre lang="html">{
              /*html */ `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Bienvenidos a NeoTecs</title>
              </head>
              <style>
              body {
              background: #0f0f0f;
              color: aliceblue;
              font-family:system-ui, -apple-system, BlinkMacSystemFont,
               'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                'Helvetica Neue', sans-serif;
              }
              .container {
                  text-align: center;
                  margin: 20px auto;
                  width: fit-content;
                  border: 1px solid #444;
                  border-radius: 10px;
                  padding: 20px;
              }
              .list {
                  text-align: left;
                  color: #77F34E;
              }
              input:focus {
                  border-color: #77F34E;
              }
              button {
                  border: none;
                  background-color: transparent;
                  padding: 4px 8px;
                  border: 1px solid #fafafa;
                  outline: 2px solid #77F34E;
                  outline-offset: 3px;
                  color: #fafafa;
                  border-radius: 5px;
                  cursor: pointer;
                  margin-inline: 6px;
              }
              button:hover {
                  transform: scale(1.05);
                  background-color: blueviolet;
                  color: #000 bold;
                  filter: drop-shadow(0 0 10px #77F34E);
              }
          </style>
              <body>
                  <div class="container">
                  <h1>Bienvenidos a éste curso de Django</h1>
                  <p>En este archivo podemos escribir más cómodo un documento HTML.</p>
                  <ol class="list">
                      <li>
                          Es que también podemos agregar estilos CSS.
                      </li>
                      <li>
                          También podemos agregar Javascript al documento!
                      </li>
                  </ol>
                  <legend>
                      Escribe tu correo electrónico:
                      <input id="email" type="email" placeholder="Ingresa tu correo">
                      <button type="button" id="sendButton">Enviar</button>
                  </legend>
              </div>
              </body>
              <script>
                  document.addEventListener('DOMContentLoaded', function () {
                      const mail = document.getElementById('email');
                      const sendButton = document.getElementById('sendButton');
              
                      sendButton.addEventListener('click', function () {
                          const inputValue = mail.value;
                          alert(\`Bienvenido: \${inputValue}\`);
                      });
                  });
              
              </script>
              </html>
              `
            }</Pre>
            <p className="list-css-span">
              Ya tenemos algo mucho más estético e interactivo con
              <span>CSS</span>y<span>Javascript</span>.
            </p>
            <ImageComponent
              src="/images/template1.png"
              altImage="Imagen plantilla de ejemplo"
            />
            <ImageComponent
              src="/images/template2.png"
              altImage="Imagen plantilla de ejemplo Django"
            />
            <p>
              Además de escribir algunas páginas HTML estáticas, también podemos
              utilizar el lenguaje de
              <LinkButton
                url="https://docs.djangoproject.com/en/4.0/ref/templates/language/"
                color="green-600"
                iconName="ArrowUpRight"
              >
                plantillas de Django
              </LinkButton>
              para cambiar el contenido de nuestros archivos HTML según la URL
              visitada. Vamos a probarlo cambiando nuestra función
              <span className="mx-1 text-[#23AD8B] bg-gray-800 px-1 py-[2px] rounded">
                saludo
              </span>
              de antes:
            </p>
            <Pre lang="python">{
              /*python */ `
              from django.shortcuts import render

              def saludo(request, name):
              return render(request, "hola/index.html", {
                  "name": name.capitalize()
              })
              `
            }</Pre>
            <p className="list-css-span">
              Observa que pasamos un tercer argumento a la función render aquí,
              que se conoce como el contexto. En este contexto, podemos
              proporcionar información que nos gustaría tener disponible dentro
              de nuestros archivos HTML. Este contexto toma la forma de un
              diccionario de Python. Ahora, podemos crear un archivo
              <span>saludo.html</span>:
            </p>
            <Pre lang="html">{
              /*html */ `
              <!DOCTYPE html>
              <html lang="en">
                  <head>
                      <title>Hello</title>
                  </head>
                  <body>
                      <h1>Hello, {{ name }}!</h1>
                  </body>
              </html>
              `
            }</Pre>
            <p>
              Te habrás dado cuenta de que hemos utilizado una sintaxis nueva:
              doble llaves. Esta sintaxis nos permite acceder a las variables
              que hemos proporcionado en el argumento de contexto. Ahora, cuando
              lo probamos:
            </p>
          </article>
          <ShareButton setTitle={DjangoDocs.title} />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

DjangoDocs.title = 'Aprende Django y Web Dinámicas en Neotecs!';
