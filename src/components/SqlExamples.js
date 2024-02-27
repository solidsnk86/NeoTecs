import { ExternalLinkIcon } from 'lucide-react';
import IndexTitle from './IndexTitle';
import Link from 'next/link';
import { Pre } from './Pre';
import { SectionTitle } from './SectionTitle';

export const SqlExamples = () => {
  return (
    <>
      <SectionTitle title="Migraciones" />
      <article>
        <p>
          Ahora, aunque hemos creado un modelo, aún no tenemos una base de datos
          para almacenar esta información. Para crear una base de datos a partir
          de nuestros modelos, navegamos al directorio principal de nuestro
          proyecto y ejecutamos el siguiente comando:
        </p>
        <Pre lang="bash">{
          /*shell */ `
            python manage.py makemigrations
            `
        }</Pre>
        <p>
          Este comando crea algunos archivos en Python que crearán o editarán
          nuestra base de datos para poder almacenar lo que tenemos en nuestros
          modelos. Deberías obtener una salida que se vea algo así como la que
          se muestra a continuación, y si navegas a tu directorio de
          migraciones, notarás que se creó un nuevo archivo para nosotros.
        </p>
        <figure>
          <div className="images-client">
            <img src="/images/migration0.png" alt="Ejemlo de migraciones" />
          </div>
        </figure>
        <p>
          A continuación, para aplicar estas migraciones a nuestra base de
          datos, ejecutamos el siguiente comando:
        </p>
        <Pre lang="bash">{
          /*shell */ `
            python manage.py migrate
            `
        }</Pre>
        <p className="list-css-span">
          Ahora verás que se han aplicado algunas migraciones predeterminadas
          junto con las nuestras, y también notarás que ahora tenemos un archivo
          llamado<span>db.sqlite3</span>en el directorio de nuestro proyecto.
        </p>
        <figure>
          <div className="images-client">
            <img src="/images/migration1.png" alt="Ejemlo de migraciones" />
          </div>
        </figure>
      </article>
      <SectionTitle title="Shell" />
      <article>
        <p>
          Ahora, para empezar a trabajar añadiendo información y manipulando
          esta base de datos, podemos ingresar a la consola de Django, donde
          podemos ejecutar comandos de Python dentro de nuestro proyecto.
        </p>
        <Pre lang="shell">{
          /*shell */ `
          python manage.py shell
          Python 3.7.2 (default, Dec 29 2018, 00:00:04)
          Type 'copyright', 'credits' or 'license' for more information
          IPython 6.5.0 -- An enhanced Interactive Python. Type '?' for help.
            `
        }</Pre>
        <Pre lang="python">{
          /*python */ `
            # Importar nuestro modelo de vuelo
            En [1]: from flights.models import Flight
            
            # Crear un nuevo vuelo
            En [2]: f = Flight(origin="Nueva York", destination="Londres", duration=415)
            
            # Insertar ese vuelo en nuestra base de datos
            En [3]: f.save()
            
            # Consultar todos los vuelos almacenados en la base de datos
            En [4]: Flight.objects.all()
            Out[4]: <QuerySet [<Flight: Flight object (1)>]>
            
            `
        }</Pre>
        <p className="list-css-span">
          Cuando consultamos nuestra base de datos, vemos que obtenemos solo un
          vuelo llamado<span>Flight object (1)</span>. Este nombre no es muy
          informativo, pero podemos solucionarlo. Dentro de models.py,
          definiremos una función<span>__str__</span>que proporciona
          instrucciones sobre cómo convertir un objeto Flight en una cadena:
        </p>
        <Pre lang="python">{
          /*python */ `
          class Flight(models.Model):
          origin = models.CharField(max_length=64)
          destination = models.CharField(max_length=64)
          duration = models.IntegerField()
      
          def __str__(self):
              return f"{self.id}: {self.origin} to {self.destination}"
            `
        }</Pre>
        <p>
          Ahora, cuando regresamos a la consola, nuestra salida es un poco más
          legible:
        </p>
        <Pre lang="python">{
          /*python */ `
            # Crear una variable llamada 'flights' para almacenar los resultados de una consulta
            En [7]: flights = Flight.objects.all()
            
            # Mostrar todos los vuelos
            En [8]: flights
            Out[8]: <QuerySet [<Flight: 1: Nueva York a Londres>]>
            
            # Aislar solo el primer vuelo
            En [9]: flight = flights.first()
            
            # Imprimir información del vuelo
            En [10]: flight
            Out[10]: <Flight: 1: Nueva York a Londres>
            
            # Mostrar el ID del vuelo
            En [11]: flight.id
            Out[11]: 1
            
            # Mostrar el origen del vuelo
            En [12]: flight.origin
            Out[12]: 'Nueva York'
            
            # Mostrar el destino del vuelo
            En [13]: flight.destination
            Out[13]: 'Londres'
            
            # Mostrar la duración del vuelo
            En [14]: flight.duration
            Out[14]: 415  
            `
        }</Pre>
        <p>
          Este es un buen comienzo, pero pensando en lo mencionado
          anteriormente, no queremos tener que almacenar el nombre de la ciudad
          como origen y destino para cada vuelo, así que probablemente queremos
          otro modelo para un aeropuerto que esté de alguna manera relacionado
          con el modelo de vuelo:
        </p>
        <Pre lang="python">{
          /*python */ `
            class Airport(models.Model):
            code = models.CharField(max_length=3)
            city = models.CharField(max_length=64)
        
            def __str__(self):
                return f"{self.city} ({self.code})"
        
            class Flight(models.Model):
            origin = models.ForeignKey(Airport, on_delete=models.CASCADE, related_name="departures")
            destination = models.ForeignKey(Airport, on_delete=models.CASCADE, related_name="arrivals")
            duration = models.IntegerField()
        
            def __str__(self):
                return f"{self.id}: {self.origin} to {self.destination}"
            `
        }</Pre>
        <p className="list-css-span">
          Hemos visto todo en nuestra nueva clase<span>Airport</span>antes, pero
          los cambios en los campos origen y destino dentro de la clase
          <span>Flight</span>
          son nuevos para nosotros:
        </p>
        <ul className="list-css-span">
          <li>
            Especificamos que los campos origen y destino son
            <Link
              href="https://docs.djangoproject.com/en/4.0/topics/db/examples/many_to_one/"
              className="text-[#00BCF2] mx-1 link"
            >
              Foreign Keys
              <ExternalLinkIcon className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
            </Link>
            , lo que significa que se refieren a otro objeto.
          </li>
          <li>
            Al ingresar<span>Airport</span>como nuestro primer argumento,
            estamos especificando el tipo de objeto al que se refiere este
            campo.
          </li>
          <li>
            El siguiente argumento,<span>on_delete=models.CASCADE</span>,
            proporciona instrucciones sobre qué debe suceder si se elimina un
            aeropuerto. En este caso, especificamos que cuando se elimine un
            aeropuerto, todos los vuelos asociados a él también deben ser
            eliminados. Hay
            <Link
              href="https://docs.djangoproject.com/en/4.0/ref/models/fields/#django.db.models.ForeignKey.on_delete/"
              className="text-[#00BCF2] mx-1 link"
            >
              otras varias opciones
              <ExternalLinkIcon className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
            </Link>
            además de<span>CASCADE</span>.
          </li>
          <li>
            Proporcionamos un nombre relacionado, que nos brinda una forma de
            buscar todos los vuelos con un aeropuerto dado como origen o
            destino.
          </li>
          <li>
            Cada vez que realizamos cambios en<span>models.py</span>, debemos
            realizar migraciones y luego migrar. Ten en cuenta que es posible
            que debas eliminar tu vuelo existente de Nueva York a Londres, ya
            que no encaja con la nueva estructura de la base de datos.
          </li>
        </ul>
        <Pre lang="bash">{
          /*bash */ `
            # Crear nuevas Migraciones
            python manage.py makemigration
            
            # Migrar
            python manage.py migrate
            `
        }</Pre>
        <p>Ahora vamos a probar estos nuevos modelos en la consola de Django</p>
        <Pre lang="python">{
          /*python */ `
            # Importar todos los modelos
            In [1]: from flights.models import *
            
            # Crear algunos aeropuertos nuevos
            In [2]: jfk = Airport(code="JFK", city="New York")
            In [4]: lhr = Airport(code="LHR", city="London")
            In [6]: cdg = Airport(code="CDG", city="Paris")
            In [9]: nrt = Airport(code="NRT", city="Tokyo")
            
            # Guardar los aeropuertos en la base de datos
            In [3]: jfk.save()
            In [5]: lhr.save()
            In [8]: cdg.save()
            In [10]: nrt.save()
            
            # Añadir un vuelo y guardarlo en la base de datos
            f = Flight(origin=jfk, destination=lhr, duration=414)
            f.save()
            
            # Mostar alguna información sobre vuelos
            In [14]: f
            Out[14]: <Flight: 1: New York (JFK) to London (LHR)>
            In [15]: f.origin
            Out[15]: <Airport: New York (JFK)>
            
            # Utilizando el nombre relacionado para consultar por el aeropuerto de llegada:
            In [17]: lhr.arrivals.all()
            Out[17]: <QuerySet [<Flight: 1: New York (JFK) to London (LHR)>]>
            `
        }</Pre>
        <IndexTitle>Comenzando nuestra aplicación</IndexTitle>
        <p className="list-css-span">
          Ahora podemos comenzar a construir una aplicación en torno a este
          proceso de utilizar modelos para interactuar con una base de datos.
          Comencemos creando una ruta de índice para nuestra aerolínea. Dentro
          de<span>urls.py</span>:
        </p>
        <Pre lang="python">{
          /*python */ `
            urlpatterns = [
                path('', views.index, name="index"),
            ]
            `
        }</Pre>
        <p className="list-css-span">
          Dentro de<span>views.py</span>
        </p>
        <Pre lang="python">{
          /*python */ `
            from django.shortcuts import render
            from .models import Flight, Airport
            
            # Crea tus vistas aquí.
            
            def index(request):
                return render(request, "flights/index.html", {
                    "flights": Flight.objects.all()
            })
            `
        }</Pre>
        <p className="list-css-span">
          Dentro de nuestro nuevo<sapn>layout.html</sapn>
        </p>
        <Pre lang="html">{
          /*html */ `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <title>Flights</title>
                </head>
                <body>
                    {% block body %}
                    {% endblock %}
                </body>
            </html>
            `
        }</Pre>
        <p className="list-css-span">
          Dentro de nuestro nuevo<span>index.html</span>
        </p>
        <Pre lang="html">{
          /*html */ `
            {% extends "flights/layout.html" %}

            {% block body %}
                <h1>Flights:</h1>
                <ul>
                    {% for flight in flights %}
                        <li>Flight {{ flight.id }}: {{ flight.origin }} to {{ flight.destination }}</li>
                    {% endfor %}
                </ul>
            {% endblock %}
            `
        }</Pre>
        <p>
          Lo que hemos hecho aquí es crear una página predeterminada donde
          tenemos una lista de todos los vuelos que hemos creado hasta ahora.
          Cuando abrimos la página ahora, se ve así:
        </p>
        <figure>
          <div className="images-client">
            <img src="/images/flightspage0.png" alt="Ejemlo de migraciones" />
          </div>
        </figure>
        <p>
          Ahora, agreguemos algunos vuelos más a nuestra aplicación volviendo a
          la consola de Django:
        </p>
        <Pre lang="python">{
          /*python */ `
            # Utilizando el comando filter para encontrar todos los aeropuertos con base en Nueva York
            En [3]: Airport.objects.filter(city="Nueva York")
            Out[3]: <QuerySet [<Airport: Nueva York (JFK)>]>
            
            # Utilizando el comando get para obtener solo un aeropuerto en Nueva York
            En [5]: Airport.objects.get(city="Nueva York")
            Out[5]: <Airport: Nueva York (JFK)>
            
            # Asignando algunos aeropuertos a nombres de variables:
            En [6]: jfk = Airport.objects.get(city="Nueva York")
            En [7]: cdg = Airport.objects.get(city="París")
            
            # Creando y guardando un nuevo vuelo:
            En [8]: f = Flight(origin=jfk, destination=cdg, duration=435)
            En [9]: f.save()
            `
        }</Pre>
        <p>
          Ahora cuando visitemos de nuevo nuestro sitio veremos lo siguiente:
        </p>
        <figure>
          <div className="images-client">
            <img src="/images/flightpage1.png" alt="Ejemlo de migraciones" />
          </div>
        </figure>
      </article>
      <SectionTitle title="Django Admin" />
      <article>
        <p>
          Dado que es tan común que los desarrolladores tengan que crear nuevos
          objetos como lo hemos estado haciendo en la consola, Django viene con
          una interfaz de administración predeterminada que nos permite hacer
          esto de manera más fácil. Para comenzar a usar esta herramienta,
          primero debemos crear un usuario administrativo:
        </p>
        <Pre lang="bash">{
          /*bash */ `
            python manage.py createsuperuser
            `
        }</Pre>
        <p>
          Luego, sigue las instrucciones para ingresar un nombre de usuario, una
          dirección de correo electrónico y una contraseña para el superusuario.
        </p>
        <p className="list-css-span">
          Ahora, debemos agregar nuestros modelos a la aplicación de
          administración al ingresar al archivo<span>admin.py</span>dentro de
          nuestra aplicación, e importar y registrar nuestros modelos. Esto le
          dice a Django a qué modelos queremos tener acceso en la aplicación de
          administración.
        </p>
        <Pre lang="python">{
          /*python */ `
            from django.contrib import admin
            from .models import Flight, Airport
            
            # Registra tus modelos aquí.
            admin.site.register(Flight)
            admin.site.register(Airport)            
            `
        }</Pre>
        <p className="list-css-span">
          Ahora, cuando visitamos nuestro sitio y agregamos<span>/admin</span>a
          la URL, podemos iniciar sesión en una página que se ve así:
        </p>
        <figure>
          <div className="images-client">
            <img src="/images/login.png" alt="Ejemlo de migraciones" />
          </div>
        </figure>
        <p>
          Después de iniciar sesión, serás llevado a una página como la que se
          muestra a continuación, donde puedes crear, editar y eliminar objetos
          almacenados en la base de datos.
        </p>
        <figure>
          <div className="images-client">
            <img src="/images/admin.png" alt="Ejemlo de migraciones" />
          </div>
        </figure>
        <p>
          Ahora, agreguemos algunas páginas más a nuestro sitio. Comenzaremos
          por agregar la capacidad de hacer clic en un vuelo para obtener más
          información al respecto. Para hacer esto, creemos una ruta de URL que
          incluya el id de un vuelo:
        </p>
        <Pre lang="python">{
          /*python */ `
          path("<int:flight_id>", views.flight, name="flight")
          `
        }</Pre>
        <p className="list-css-span">
          Luego, en<span>views.py</span>, crearemos una función
          <span>flight</span>que tome un id de vuelo y renderice una nueva
          página HTML:
        </p>
        <Pre lang="python">{
          /*python */ `
          def flight(request, flight_id):
          flight = Flight.objects.get(id=flight_id)
          return render(request, "flights/flight.html", {
              "flight": flight
          })
          `
        }</Pre>
        <p>
          Ahora crearemos una plantilla para mostrar esta información del vuelo
          con un enlace de regreso a la página de inicio:
        </p>
        <Pre lang="html">{
          /*html */ `
          {% extends "flights/layout.html" %}

          {% block body %}
              <h1>Flight {{ flight.id }}</h1>
              <ul>
                  <li>Origin: {{ flight.origin }}</li>
                  <li>Destination: {{ flight.destination }}</li>
                  <li>Duration: {{ flight.duration }} minutes</li>
              </ul>
              <a href="{% url 'index' %}">All Flights</a>
          {% endblock %}
          `
        }</Pre>
        <p>
          Finalmente, necesitamos agregar la capacidad de enlazar de una página
          a otra, así que modificaremos nuestra página de índice para incluir
          enlaces:
        </p>
        <Pre lang="python">{
          /*python */ `    
          {% extends "flights/layout.html" %}
          {% block body %}
          <h1>Flights:</h1>
          <ul>
            {% for flight in flights %}
            <li><a href="{% url 'flight' flight.id %}">Flight {{ flight.id }}</a>
            : {{ flight.origin }} to {{ flight.destination }}</li>
            {% endfor %}
          </ul>
          {% endblock %}
          `
        }</Pre>
        <p>Nuestra página inicial se verá así:</p>
        <figure>
          <div className="images-client">
            <img src="/images/flights_links.png" alt="Ejemlo de migraciones" />
          </div>
        </figure>
        <p>
          Y cuando hacemos clic en el vuelo 5, por ejemplo, nos lleva a esta
          página.
        </p>
        <figure>
          <div className="images-client">
            <img src="/images/flight5.png" alt="Ejemlo de migraciones" />
          </div>
        </figure>
      </article>
      <SectionTitle title="Muchas más relaciones" />
      <article>
        <p>
          Ahora, trabajemos en integrar a los pasajeros en nuestros modelos.
          Crearemos un modelo de pasajero para empezar:
        </p>
        <Pre lang="python">{
          /*python */ `
          class Passenger(models.Model):
          first = models.CharField(max_length=64)
          last = models.CharField(max_length=64)
          flights = models.ManyToManyField(Flight, blank=True, related_name="passengers")
      
          def __str__(self):
              return f"{self.first} {self.last}"
          `
        }</Pre>
        <p className="list-css-span">
          Como discutimos, los pasajeros tienen una relación de muchos a muchos
          con los vuelos, que describimos en Django utilizando el campo
          ManyToManyField. El primer argumento en este campo es la clase de
          objetos a la que está relacionado. Hemos proporcionado el argumento
          <span>blank=True</span>, lo que significa que un pasajero puede no
          tener vuelos. También hemos agregado un<span>related_name</span>que
          cumple el mismo propósito que antes: nos permitirá encontrar a todos
          los pasajeros en un vuelo dado.
        </p>
        <p className="list-css-span">
          Para realizar estos cambios, debemos realizar migraciones y migrar.
          Luego podemos registrar el modelo de Pasajero en<span>admin.py</span>y
          visitar la página de administración para crear algunos pasajeros.
        </p>
        <p className="list-css-span">
          Ahora que hemos agregado algunos pasajeros, actualicemos nuestra
          página de vuelos para que muestre todos los pasajeros en un vuelo.
          Primero visitaremos<span>views.py</span>y actualizaremos nuestra vista
          de vuelo para proporcionar una lista de pasajeros como contexto.
          Accedemos a la lista utilizando el<span>related_name</span>que
          definimos anteriormente.
        </p>
        <Pre lang="python">{
          /*python */ `
          def flight(request, flight_id):
          flight = Flight.objects.get(id=flight_id)
          passengers = flight.passengers.all()
          return render(request, "flights/flight.html", {
              "flight": flight,
              "passengers": passengers
          })
          `
        }</Pre>
        <p className="list-css-span">Ahora agregamos una lista de pasajeros a<span>flight.html</span>:</p>
        <Pre lang="html">{
          /*html */ `
          <h2>Passengers:</h2>
          <ul>
              {% for passenger in passengers %}
                  <li>{{ passenger }}</li>
              {% empty %}
                  <li>No Passengers.</li>
              {% endfor %}
          </ul>
          `
        }</Pre>
      </article>
    </>
  );
};
