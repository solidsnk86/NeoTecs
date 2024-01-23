import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import HeaderTitle from '../../components/HeaderTitlte';
import Indextitle from '../../components/IndexTitle';
import Link from 'next/link';
import { ExternalLinkIcon } from 'lucide-react';

export default function Testing() {
  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <LectureNav />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <HeaderTitle>Pruebas CI/CD (Testing)</HeaderTitle>
          <hr className="border-text-primary" />
          <Indextitle>Índice</Indextitle>
          <ol className="indice">
            <li>
              <a href="#introducción">Introducción</a>
            </li>
            <li>
              <a href="#pruebas">Pruebas</a>
            </li>
            <li>
              <a href="#afirmar">Afirmar</a>
              <ul>
                <li>
                  <a href="#desarrollo-guiado">Desarrollo Guiado por Pruebas</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#select">Pruebas Unitarias</a>
            </li>
            <li>
              <a href="#pruebas-django">Pruebas en Django</a>
              <ul>
                <li>
                  <a href="#pruebas-de-cliente">Pruebas de Cliente</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#selenium">Selenium</a>
            </li>
            <li>
              <a href="#ci-cd">
                CI/CD (Integración Continua/Despliegue Continuo)
              </a>
            </li>
            <li>
              <a href="#acciones-de-github">Acciones de GitHub</a>
            </li>
            <li>
              <a href="#administrador-django">Docker</a>
            </li>
          </ol>
          <span id="introduccion" />
          <SectionTitle title="Introducción" />
          <article>
            <p>
              Hasta ahora, hemos discutido cómo construir páginas web simples
              utilizando HTML y CSS, y cómo utilizar Git y GitHub para realizar
              un seguimiento de los cambios en nuestro código y colaborar con
              otros. También nos familiarizamos con el lenguaje de programación
              Python, comenzamos a utilizar Django para crear aplicaciones web y
              aprendimos a utilizar los modelos de Django para almacenar
              información en nuestros sitios. Luego, introdujimos JavaScript y
              aprendimos a usarlo para hacer que las páginas web sean más
              interactivas, y hablamos sobre el uso de la animación y React para
              mejorar aún más nuestras interfaces de usuario. Hoy, aprenderemos
              sobre las mejores prácticas cuando se trata de trabajar en
              proyectos más grandes y lanzarlos.
            </p>
          </article>
          <SectionTitle title="Pruebas" />
          <article>
            <p>
              Una parte importante del proceso de desarrollo de software es la
              acción de probar el código que hemos escrito para asegurarnos de
              que todo funcione como esperamos. En este curso, discutiremos
              varias formas en las que podemos mejorar la manera en que probamos
              nuestro código.
            </p>
          </article>
          <SectionTitle title="Afirmar" />
          <article>
            <p className="list-css-span">
              Una de las formas más simples de ejecutar pruebas en Python es
              mediante el uso del comando<span>assert</span>. Este comando va
              seguido de alguna expresión que debería ser verdadera. Si la
              expresión es verdadera, no sucede nada; sin embargo, si es
              <span>falsa</span>, se generará una excepción. Veamos cómo
              podríamos incorporar este comando para probar la función de
              cuadrado que escribimos al aprender Python por primera vez. Cuando
              la función está escrita correctamente, no sucede nada, ya que el
              <span>assert</span>es<span>verdadero</span>.
            </p>
            <Pre lang="python">{
              /*python */ `
                def square(x):
                return x * x
            
                assert square(10) == 100
            
                """ Output:
            
                """
                `
            }</Pre>
            <p>
              Y luego, cuando está escrita incorrectamente, se genera una
              excepción.
            </p>
            <Pre lang="python">{
              /*python */ `
                def square(x):
                return x + x
          
                assert square(10) == 100
          
                """ Output:
                Traceback (most recent call last):
                File "assert.py", line 4, in <module>
                assert square(10) == 100
                AssertionError
                """
                `
            }</Pre>
          </article>
          <SectionTitle title="Desarrollo guiado por pruebas" />
          <article>
            <p>
              Al comenzar a construir proyectos más grandes, es posible que
              desees considerar el uso del desarrollo guiado por pruebas
              (Test-Driven Development, TDD), un estilo de desarrollo en el que
              cada vez que solucionas un error, añades una prueba que verifica
              ese error a un conjunto creciente de pruebas que se ejecutan cada
              vez que realizas cambios. Esto te ayudará a asegurarte de que las
              características adicionales que agregas a un proyecto no
              interfieran con tus características existentes.
            </p>
            <p className="list-css-span">
              Ahora, veamos una función un poco más compleja y pensemos en cómo
              escribir pruebas puede ayudarnos a encontrar errores. Ahora
              escribiremos una función llamada<span>is_prime</span>que devuelve
              <span>True</span>solo si su entrada es un número primo.
            </p>
            <Pre lang="python">{
              /*python */ `
              import math

              def es_primo(n):
                  # Sabemos que los números menores que 2 no son primos
                  if n < 2:
                      return False
              
               # Verificamos factores hasta la raíz cuadrada de n
                  for i in range(2, int(math.sqrt(n))):
              
                      # Si i es un factor, devolvemos False
                      if n % i == 0:
                          return False
              
              # Si no se encontraron factores, devolvemos True
              return True
              `
            }</Pre>
            <p>
              Ahora, echemos un vistazo a una función que hemos escrito para
              probar nuestra función de números primos:
            </p>
            <Pre lang="python">{
              /*python */ `
              from prime import is_prime

              def test_prime(n, expected):
                  if is_prime(n) != expected:
                      print(f"ERROR on is_prime({n}), expected {expected}")
              `
            }</Pre>
            <p>
              En este punto, podemos ingresar a nuestro intérprete de Python y
              probar algunos valores:
            </p>
            <Pre lang="python">{
              /*python */ `
              >>> test_prime(5, True)
              >>> test_prime(10, False)
              >>> test_prime(25, False)
              ERROR on is_prime(25), expected False
              `
            }</Pre>
            <p>
              Podemos observar en la salida anterior que 5 y 10 fueron
              identificados correctamente como primos y no primos, pero 25 fue
              incorrectamente identificado como primo, por lo que debe haber
              algo mal con nuestra función. Antes de investigar qué está mal con
              nuestra función, veamos una manera de automatizar nuestras
              pruebas. Una forma de hacer esto es mediante la creación de un
              script de shell, o algún script que pueda ejecutarse dentro de
              nuestra terminal. Estos archivos requieren una extensión .sh, por
              lo que nuestro archivo se llamará tests0.sh. Cada una de las
              líneas a continuación consta de:
            </p>
            <ol className="list-css-span">
              <li>
                Un<span>python3</span>para especificar la versión de Python que
                estamos ejecutando.
              </li>
              <li>
                Un<span>-c</span>para indicar que deseamos ejecutar un comando.
              </li>
              <li>Un comando a ejecutar en formato de cadena.</li>
            </ol>
            <Pre lang="python">{
              /*python */ `
              python3 -c "from tests0 import test_prime; test_prime(1, False)"
              python3 -c "from tests0 import test_prime; test_prime(2, True)"
              python3 -c "from tests0 import test_prime; test_prime(8, False)"
              python3 -c "from tests0 import test_prime; test_prime(11, True)"
              python3 -c "from tests0 import test_prime; test_prime(25, False)"
              python3 -c "from tests0 import test_prime; test_prime(28, False)"
              `
            }</Pre>
            <p className="list-css-span">
              Ahora podemos ejecutar estos comandos ejecutando
              <span>./tests0.sh</span>en nuestra terminal, lo que nos dará este
              resultado:
            </p>
            <Pre lang="python">{
              /*python */ `
              ERROR on is_prime(8), expected False
              ERROR on is_prime(25), expected False
              `
            }</Pre>
          </article>
          <SectionTitle title="Pruebas Unitarias" />
          <article>
            <p className="list-css-span">
              Aunque pudimos ejecutar pruebas automáticamente utilizando el
              método anterior, aún podríamos querer evitar tener que escribir
              cada una de esas pruebas. Afortunadamente, podemos utilizar la
              biblioteca de pruebas unitarias de Python para facilitar un poco
              este proceso. Echemos un vistazo a cómo podría ser un programa de
              pruebas para nuestra función<span>is_prime</span>.
            </p>
            <Pre lang="python">{
              /*python */ `
              # Importamos la librería de unittest y nuestra función
              import unittest
              from prime import is_prime
              
              # Una clase que contiene todos nuestras pruebas
              class Tests(unittest.TestCase):
              
                  def test_1(self):
                      """Check that 1 is not prime."""
                      self.assertFalse(is_prime(1))
              
                  def test_2(self):
                      """Check that 2 is prime."""
                      self.assertTrue(is_prime(2))
              
                  def test_8(self):
                      """Check that 8 is not prime."""
                      self.assertFalse(is_prime(8))
              
                  def test_11(self):
                      """Check that 11 is prime."""
                      self.assertTrue(is_prime(11))
              
                  def test_25(self):
                      """Check that 25 is not prime."""
                      self.assertFalse(is_prime(25))
              
                  def test_28(self):
                      """Check that 28 is not prime."""
                      self.assertFalse(is_prime(28))
              
              
              # Corremos cada una de las funciones de prueba
              if __name__ == "__main__":
                  unittest.main()
              `
            }</Pre>
            <p className="list-css-span">
              Observa que cada una de las funciones dentro de nuestra clase
              <span>Tests</span>sigue un patrón:
            </p>
            <ul className="list-css-span">
              <li>
                El nombre de las funciones comienza con<span>test_</span>. Esto
                es necesario para que las funciones se ejecuten automáticamente
                con la llamada a<span>unittest.main()</span>.
              </li>
              <li>
                Cada prueba recibe el argumento<span>self</span>. Esto es
                estándar al escribir métodos dentro de clases en Python.
              </li>
              <li>
                La primera línea de cada función contiene una cadena de
                documentación rodeada por tres comillas. No es solo para la
                legibilidad del código. Cuando se ejecutan las pruebas, el
                comentario se mostrará como una descripción de la prueba si
                falla.
              </li>
              <li>
                La siguiente línea de cada una de las funciones contenía una
                afirmación en forma de<span>self.assertSOMETHING</span>.
              </li>
              <ol>
                Hay muchas afirmaciones diferentes que puedes hacer, incluyendo:
                <li>
                  <span>assertTrue</span>
                </li>
                <li>
                  <span>assertFalse</span>
                </li>
                <li>
                  <span>assertEqual</span>
                </li>
                <li>
                  <span>yassertGreater</span>
                </li>
              </ol>
            </ul>
            <p>
              Puedes encontrar estas y más en la documentación. Ahora, echemos
              un vistazo a los resultados de estas pruebas:
            </p>
            <Pre lang="output">{
              /*output */ `
              ...F.F
              ======================================================================
              FAIL: test_25 (__main__.Tests)
              Check that 25 is not prime.
              ----------------------------------------------------------------------
              Traceback (most recent call last):
                File "tests1.py", line 26, in test_25
                  self.assertFalse(is_prime(25))
              AssertionError: True is not false
              
              ======================================================================
              FAIL: test_8 (__main__.Tests)
              Check that 8 is not prime.
              ----------------------------------------------------------------------
              Traceback (most recent call last):
                File "tests1.py", line 18, in test_8
                  self.assertFalse(is_prime(8))
              AssertionError: True is not false
              
              ----------------------------------------------------------------------
              Ran 6 tests in 0.001s
              
              FAILED (failures=2)
              `
            }</Pre>
            <p>
              Después de ejecutar las pruebas, unittest nos proporciona
              información útil sobre lo que encontró. En la primera línea, nos
              muestra una serie de . para éxitos y F para fallos en el orden en
              que se escribieron nuestras pruebas.
            </p>
            <Pre lang="output">...F.F</Pre>
            <p>
              A continuación, para cada una de las pruebas que fallaron, se nos
              proporciona el nombre de la función que falló:
            </p>
            <Pre lang="output">FAIL: test_25 (__main__.Tests)</Pre>
            <p>El comentario descriptivo que proporcionamos anteriormente:</p>
            <Pre lang="output">Check that 25 is not prime.</Pre>
            <p>Y un rastreo (traceback) para la excepción:</p>
            <Pre lang="output">{
              /*output */ `
              Traceback (most recent call last): File "tests1.py", line 26, in
              test_25 self.assertFalse(is_prime(25)) AssertionError: True is not
              false
              `
            }</Pre>
            <p>
              Y finalmente, se nos proporciona una revisión de cuántas pruebas
              se ejecutaron, cuánto tiempo tomaron y cuántas fallaron:
            </p>
            <Pre lang="output">{
              /*output */ `
              Ran 6 tests in 0.001s

              FAILED (failures=2)
              `
            }</Pre>
            <p>
              Ahora, veamos cómo corregir el error en nuestra función. Resulta
              que necesitamos probar un número adicional en nuestro bucle for.
              Por ejemplo, cuando n es 25, la raíz cuadrada es 5, pero cuando
              ese es un argumento en la función de rango, el bucle for termina
              en el número 4. Por lo tanto, simplemente podemos cambiar el
              encabezado de nuestro bucle for a:
            </p>
            <Pre lang="python">{
              /*python */ `
              for i in range(2, int(math.sqrt(n)) + 1):
              `
            }</Pre>
            <p>
              Ahora, cuando ejecutamos las pruebas nuevamente utilizando
              nuestras pruebas unitarias, obtenemos la siguiente salida,
              indicando que nuestro cambio solucionó el error.
            </p>
            <Pre lang="output">{
              /*output */ `
              ......
              ----------------------------------------------------------------------
              Ran 6 tests in 0.000s
              
              OK
              `
            }</Pre>
            <p>
              Estas pruebas automatizadas se volverán aún más útiles a medida
              que trabajes para optimizar esta función. Por ejemplo, es posible
              que desees aprovechar el hecho de que no necesitas verificar todos
              los enteros como factores, solo primos más pequeños (si un número
              no es divisible por 3, tampoco es divisible por 6, 9, 12, ...), o
              es posible que desees utilizar pruebas de primalidad más avanzadas
              como las pruebas de primalidad de Fermat y Miller-Rabin. Cada vez
              que realices cambios para mejorar esta función, querrás tener la
              capacidad de ejecutar fácilmente tus pruebas unitarias nuevamente
              para asegurarte de que tu función siga siendo correcta.
            </p>
          </article>
          <SectionTitle title="Pruebas Django" />
          <article>
            <p>
              Ahora, veamos cómo podemos aplicar las ideas de pruebas
              automatizadas al crear aplicaciones Django. Mientras trabajamos en
              esto, utilizaremos el proyecto "flights" que creamos cuando
              aprendimos por primera vez sobre los modelos de Django. Primero
              vamos a agregar un método a nuestro modelo de Vuelo (Flight) que
              verifique que un vuelo sea válido al verificar dos condiciones:
            </p>
            <ol>
              <li>El origen no es lo mismo que destino.</li>
              <li>La duración es mayor a 0 minutos.</li>
            </ol>
            <p>Ahora nuestro modelo podría verse de la siguiente manera:</p>
            <Pre lang="python">{
              /*python */ `
              class Flight(models.Model):
              origin = models.ForeignKey(Airport, on_delete=models.CASCADE, related_name="departures")
              destination = models.ForeignKey(Airport, on_delete=models.CASCADE, related_name="arrivals")
              duration = models.IntegerField()
          
              def __str__(self):
                  return f"{self.id}: {self.origin} to {self.destination}"
          
              def is_valid_flight(self):
                  return self.origin != self.destination or self.duration > 0
              `
            }</Pre>
            <p className="list-css-span">
              Para asegurarnos de que nuestra aplicación funcione según lo
              esperado, cada vez que creamos una nueva aplicación,
              automáticamente se nos proporciona un archivo<span>tests.py</span>
              . Cuando abrimos este archivo por primera vez, vemos que la
              biblioteca de pruebas de Django
              <Link
                href="https://docs.djangoproject.com/en/4.0/topics/testing/overview/"
                className="mx-1 underline text-purple-400 link"
              >
                TestCase
                <ExternalLinkIcon className="link-icon" />
              </Link>
              se importa automáticamente:
            </p>
            <Pre lang="python">{
              /*python */ `
              from django.test import TestCase
              `
            }</Pre>
            <p>
              Una ventaja de utilizar la biblioteca TestCase es que, al ejecutar
              nuestras pruebas, se creará una base de datos completamente nueva
              solo con fines de prueba. Esto es útil porque evitamos el riesgo
              de modificar o eliminar accidentalmente entradas existentes en
              nuestra base de datos y no tenemos que preocuparnos por eliminar
              entradas ficticias que creamos solo para realizar pruebas.
            </p>
            <p>
              Para comenzar a utilizar esta biblioteca, primero querremos
              importar todos nuestros modelos:
            </p>
            <Pre lang="python">{
              /*python */ `
              from .models import Flight, Airport, Passenger
              `
            }</Pre>
            <p>
              Y luego crearemos una nueva clase que extienda la clase TestCase
              que acabamos de importar. Dentro de esta clase, definiremos una
              función setUp que se ejecutará al inicio del proceso de prueba. En
              esta función, probablemente querremos crear. Así es como se verá
              nuestra clase para comenzar:
            </p>
            <Pre lang="python">{
              /*python */ `
              class FlightTestCase(TestCase):

              def setUp(self):
          
                  # Crear aeropuertos.
                  a1 = Airport.objects.create(code="AAA", city="City A")
                  a2 = Airport.objects.create(code="BBB", city="City B")
          
                  # Crear vuelos.
                  Flight.objects.create(origin=a1, destination=a2, duration=100)
                  Flight.objects.create(origin=a1, destination=a1, duration=200)
                  Flight.objects.create(origin=a1, destination=a2, duration=-100)
              `
            }</Pre>
            <p className="list-css-span">
              Ahora que tenemos algunas entradas en nuestra base de datos de
              prueba, agreguemos algunas funciones a esta clase para realizar
              algunas pruebas. Primero, asegurémonos de que nuestros campos de
              <span>departures</span>y<span>arrives</span>funcionen
              correctamente intentando contar el número de salidas (que sabemos
              deberían ser 3) y llegadas (que deberían ser 1) desde el
              aeropuerto<span>AAA</span>:
            </p>
            <Pre lang="python">{
              /*python */ `
              def test_departures_count(self):
              a = Airport.objects.get(code="AAA")
              self.assertEqual(a.departures.count(), 3)
          
              def test_arrivals_count(self):
              a = Airport.objects.get(code="AAA")
              self.assertEqual(a.arrivals.count(), 1)
              `
            }</Pre>
            <p className="list-css-span">
              También podemos probar la función<span>is_valid_flight</span>que
              agregamos a nuestro modelo de vuelo (`Flight`). Comenzaremos
              haciendo una afirmación de que la función devuelve verdadero
              cuando el vuelo es válido:
            </p>
            <Pre lang="python">{
              /*python */ `
              def test_valid_flight(self):
              a1 = Airport.objects.get(code="AAA")
              a2 = Airport.objects.get(code="BBB")
              f = Flight.objects.get(origin=a1, destination=a2, duration=100)
              self.assertTrue(f.is_valid_flight())
              `
            }</Pre>
            <p>
              A continuación, asegurémonos de que los vuelos con destinos y
              duraciones no válidos devuelvan falso:
            </p>
            <Pre lang="python">{
              /*python */ `
              def test_invalid_flight_destination(self):
              a1 = Airport.objects.get(code="AAA")
              f = Flight.objects.get(origin=a1, destination=a1)
              self.assertFalse(f.is_valid_flight())
          
              def test_invalid_flight_duration(self):
              a1 = Airport.objects.get(code="AAA")
              a2 = Airport.objects.get(code="BBB")
              f = Flight.objects.get(origin=a1, destination=a2, duration=-100)
              self.assertFalse(f.is_valid_flight())
              `
            }</Pre>
            <p className="list-css-span">
              Ahora, para ejecutar nuestras pruebas, ejecutaremos
              <span>python manage.py test</span>. La salida para esto es casi
              idéntica a la salida que vimos al utilizar la biblioteca de
              <span>unittest</span>de Python, aunque también registra que está
              creando y destruyendo una base de datos de prueba:
            </p>
            <Pre lang="output">{
              /**output */ `
              Creating test database for alias 'default'...
              System check identified no issues (0 silenced).
              ..FF.
              ======================================================================
              FAIL: test_invalid_flight_destination (flights.tests.FlightTestCase)
              ----------------------------------------------------------------------
              Traceback (most recent call last):
                File "/Users/Neo/Documents/cs50/web_notes_files/7/django/airline/flights/tests.py", 
                line 37, in test_invalid_flight_destination
                  self.assertFalse(f.is_valid_flight())
              AssertionError: True is not false
              
              ======================================================================
              FAIL: test_invalid_flight_duration (flights.tests.FlightTestCase)
              ----------------------------------------------------------------------
              Traceback (most recent call last):
                File "/Users/Neo/Documents/cs50/web_notes_files/7/django/airline/flights/tests.py", 
                line 43, in test_invalid_flight_duration
                  self.assertFalse(f.is_valid_flight())
              AssertionError: True is not false
              
              ----------------------------------------------------------------------
              Ran 5 tests in 0.018s
              
              FAILED (failures=2)
              Destroying test database for alias 'default'...
              `
            }</Pre>
            <p className="list-css-span">
              Podemos ver en la salida anterior que hay momentos en los que
              <span>is_valid_flight</span>devolvió<span>True</span>cuando
              debería haber devuelto
              <span>False</span>. Al examinar más a fondo nuestra función, vemos
              que cometimos el error de usar<span>or</span>en lugar de
              <span>and</span>, lo que significa que solo uno de los requisitos
              del vuelo debe cumplirse para que sea válido. Si cambiamos la
              función a esto:
            </p>
            <Pre lang="python">{
              /*python */ `
              def is_valid_flight(self):
              return self.origin != self.destination and self.duration > 0
              `
            }</Pre>
            <p>
              Ahora nosotros podemos correr las pruebas con mejores resultados:
            </p>
            <Pre lang="output">{
              /*output */ `
              Creating test database for alias 'default'...
              System check identified no issues (0 silenced).
              .....
              ----------------------------------------------------------------------
              Ran 5 tests in 0.014s
              
              OK
              Destroying test database for alias 'default'...
              `
            }</Pre>
          </article>
          <SectionTitle title="Pruebas de Cliente" />
          <article>
            <p className="list-css-span">
              Al crear aplicaciones web, es probable que deseemos verificar no
              solo si funciones específicas funcionan, sino también si las
              páginas web individuales se cargan según lo previsto. Podemos
              lograr esto creando un objeto<span>Cliente</span>en nuestra clase
              de pruebas de Django y luego realizando solicitudes utilizando ese
              objeto. Para hacer esto, primero tendremos que agregar
              <span>Client</span>a nuestras importaciones.
            </p>
            <Pre lang="python">{
              /*python */ `
              from django.tests import Client, TestCase
              `
            }</Pre>
            <p>
              Por ejemplo, ahora agreguemos una prueba que se asegure de que
              obtengamos un código de respuesta HTTP 200 y que los tres de
              nuestros vuelos se añadan al contexto de una respuesta:
            </p>
            <Pre lang="python">{
              /*python */ `
              def test_index(self):
              # Configurar el cliente para realizar solicitudes
              c = Client()
          
              # Enviar solicitud GET a la página de índice y almacenar la respuesta
              response = c.get("/vuelos/")
          
              # Asegurarse de que el código de estado sea 200
              self.assertEqual(response.status_code, 200)
          
              # Asegurarse de que se devuelvan tres vuelos en el contexto
              self.assertEqual(response.context["vuelos"].count(), 3)
              `
            }</Pre>
            <p className="list-css-span">
              Podemos realizar una verificación similar para asegurarnos de
              obtener un código de respuesta válido para una página de vuelo
              válida y un código de respuesta no válido para una página de vuelo
              que no existe. (Observa que utilizamos la función<span>Max</span>
              para encontrar el<sapn>ID</sapn>máximo, al cual tenemos acceso al
              incluir
              <span>from django.db.models import Max</span>al principio de
              nuestro archivo).
            </p>
            <Pre lang="python">{
              /*python */ `
              def test_valid_flight_page(self):
              a1 = Airport.objects.get(code="AAA")
              f = Flight.objects.get(origin=a1, destination=a1)
          
              c = Client()
              response = c.get(f"/flights/{f.id}")
              self.assertEqual(response.status_code, 200)
          
              def test_invalid_flight_page(self):
              max_id = Flight.objects.all().aggregate(Max("id"))["id__max"]
          
              c = Client()
              response = c.get(f"/flights/{max_id + 1}")
              self.assertEqual(response.status_code, 404)
              `
            }</Pre>
            <p>
              Finalmente, agreguemos algunas pruebas para asegurarnos de que las
              listas de pasajeros y no pasajeros se estén generando como se
              espera:
            </p>
            <Pre lang="python">{
              /*python */ `
              def test_flight_page_passengers(self):
              f = Flight.objects.get(pk=1)
              p = Passenger.objects.create(first="Alice", last="Adams")
              f.passengers.add(p)
          
              c = Client()
              response = c.get(f"/flights/{f.id}")
              self.assertEqual(response.status_code, 200)
              self.assertEqual(response.context["passengers"].count(), 1)
          
              def test_flight_page_non_passengers(self):
              f = Flight.objects.get(pk=1)
              p = Passenger.objects.create(first="Alice", last="Adams")
          
              c = Client()
              response = c.get(f"/flights/{f.id}")
              self.assertEqual(response.status_code, 200)
              self.assertEqual(response.context["non_passengers"].count(), 1)
              `
            }</Pre>
            <p>
              Ahora podemos ejecutar todos nuestros tests juntos, y ver que
              hasta el momento no hay errores.
            </p>
            <Pre lang="output">{
              /*output */ `
              Creating test database for alias 'default'...
              System check identified no issues (0 silenced).
              ..........
              ----------------------------------------------------------------------
              Ran 10 tests in 0.048s
              
              OK
              Destroying test database for alias 'default'...
              `
            }</Pre>
          </article>
          <SectionTitle title="Selenium" />
          <article>
            <p className="list-css-span">
              Hasta ahora, hemos podido probar el código del lado del servidor
              que hemos escrito utilizando Python y Django, pero a medida que
              construimos nuestras aplicaciones, también querremos la capacidad
              de crear pruebas para nuestro código del lado del cliente. Por
              ejemplo, volvamos a nuestra página<span>counter.html</span>y
              trabajemos en escribir algunas pruebas para ella.
            </p>
            <p>
              Comenzaremos escribiendo una página de contador ligeramente
              diferente en la que incluiremos un botón para disminuir el conteo:
            </p>
            <Pre lang="javascript">{
              /*javascript */ `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <title>Counter</title>
                    <script>
                        
                        // Esperamos que cargue la página
                        document.addEventListener('DOMContentLoaded', () => {
            
                            // Inicializamos la variable en 0
                            let counter = 0;
            
                            // Si hacemos click en el botón de incremento, aumeta el valor y lo ingresa al HTML
                            document.querySelector('#increase').onclick = () => {
                                counter ++;
                                document.querySelector('h1').innerHTML = counter;
                            }
            
                            // Si hacemos click en el botón de decremento, disminuye el valor y lo ingresa al HTML
                            document.querySelector('#decrease').onclick = () => {
                                counter --;
                                document.querySelector('h1').innerHTML = counter;
                            }
                        })
                    </script>
                </head>
                <body>
                    <h1>0</h1>
                    <button id="increase">+</button>
                    <button id="decrease">-</button>
                </body>
            </html>
            `
            }</Pre>
            <p>
              Ahora, si deseamos probar este código, podríamos simplemente abrir
              nuestro navegador web, hacer clic en los dos botones y observar
              qué sucede. Sin embargo, esto se volvería muy tedioso a medida que
              escribimos aplicaciones de una sola página más grandes, razón por
              la cual se han creado varios frameworks que ayudan con las pruebas
              en el navegador, uno de los cuales se llama
              <Link
                href="https://www.selenium.dev/"
                className="mx-1 link underline text-purple-400"
              >
                Selenium
                <ExternalLinkIcon className="link-icon" />
              </Link>
              .
            </p>
            <p className="list-css-span">
              Utilizando Selenium, podremos definir un archivo de pruebas en
              Python donde podemos simular que un usuario abre un navegador web,
              navega hacia nuestra página e interactúa con ella. Nuestra
              herramienta principal al hacer esto se conoce como un controlador
              web (Web Driver), que abrirá un navegador web en su computadora.
              Echemos un vistazo a cómo podríamos empezar a usar esta biblioteca
              para comenzar a interactuar con las páginas. Ten en cuenta que a
              continuación utilizamos tanto<span>Selenium</span>como
              <span>ChromeDriver</span>. Selenium se puede instalar para Python
              ejecutando
              <span>pip install selenium</span>, y<span>ChromeDriver</span>se
              puede instalar ejecutando<span>pip install chromedriver-py</span>.
            </p>
            <Pre lang="python">{
              /*python */ `
              import os
              import pathlib
              import unittest
              
              from selenium import webdriver
              
              # Encuentra el Identificador Uniforme de Recursos (Uniform Resource Identifier) de un archivo.
              def file_uri(filename):
                  return pathlib.Path(os.path.abspath(filename)).as_uri()
              
              # configura el controlador web utilizando Google Chrome
              driver = webdriver.Chrome()
              `
            }</Pre>
            <p>
              El código anterior constituye la configuración básica que
              necesitamos, por lo que ahora podemos adentrarnos en algunos usos
              más interesantes empleando el intérprete de Python. Una
              observación sobre las primeras líneas es que, para apuntar a una
              página específica, necesitamos el Identificador Uniforme de
              Recursos (URI) de esa página, que es una cadena única que
              representa ese recurso.
            </p>
            <Pre lang="python">{
              /*python */ `
              # Encontrar la dirección URI de nuestro archivo creado
              >>> uri = file_uri("counter.html")
              
              # Usamos la URI para abrir la página web
              >>> driver.get(uri)
              
              # Accedemos al título de la página actual
              >>> driver.title
              'Counter'

              # Encontrar y almacenar los campos de los botones
              >>> increase = driver.find_element_by_id("increase")
              >>> decrease = driver.find_element_by_id("decrease")
              
              # Simular el clickeo de los usuarios en los botones
              >>> increase.click()
              >>> increase.click()
              >>> decrease.click()
              
              # Incluso podemos incluir clics dentro de otras construcciones de Python:
              >>> for i in range(25):
              ...     increase.click()
              `
            }</Pre>
            <p>
              Ahora demos un vistazo como nosotros podemos utilizar ésta
              simulación y crear un test automático de nuestra página.
            </p>
            <Pre lang="python">{
              /*python */ `
              # Estructura estándar de una clase de pruebas
              class PruebasPaginaWeb(unittest.TestCase):
              
                  def test_titulo(self):
                      """Asegurarse de que el título sea correcto"""
                      driver.get(file_uri("counter.html"))
                      self.assertEqual(driver.title, "Counter")
              
                  def test_aumento(self):
                      """Asegurarse de que el encabezado se actualice a 1 después de hacer clic en el botón 
                      de aumento una vez"""
                      driver.get(file_uri("counter.html"))
                      increase = driver.find_element_by_id("increase")
                      increase.click()
                      self.assertEqual(driver.find_element_by_tag_name("h1").text, "1")
              
                  def test_disminucion(self):
                      """Asegurarse de que el encabezado se actualice a -1 después de hacer clic en el botón 
                      de disminución una vez"""
                      driver.get(file_uri("counter.html"))
                      decrease = driver.find_element_by_id("decrease")
                      decrease.click()
                      self.assertEqual(driver.find_element_by_tag_name("h1").text, "-1")
              
                  def test_aumento_multiple(self):
                      """Asegurarse de que el encabezado se actualice a 3 después de hacer clic en el botón 
                      de aumento tres veces"""
                      driver.get(file_uri("counter.html"))
                      increase = driver.find_element_by_id("increase")
                      for i in range(3):
                          increase.click()
                      self.assertEqual(driver.find_element_by_tag_name("h1").text, "3")
              
              if __name__ == "__main__":
                  unittest.main()
              `
            }</Pre>
            <p>El código completo se vería de la siguiente manera:</p>
            <Pre lang="python">{
              /*python */ `
              import os
              import pathlib
              import unittest
              
              from selenium import webdriver
              
              def file_uri(file_name):
                  return pathlib.Path(os.path.abspath(file_name)).as_uri()
              
              driver = webdriver.Chrome()
              
              uri = file_uri("counter.html")
              
              driver.get(uri)
              
              increase = driver.find_element_by_id("increase")
              decrease = driver.find_element_by_id("decrease")
              
              increase.click()
              increase.click()
              decrease.click()
              
              for i in range(25):
                  increase.click()
              
              class WebpageTests(unittest.TestCase):
              
                  def test_title(self):
                      """Make sure title is correct"""
                      driver.get(file_uri("counter.html"))
                      self.assertEqual(driver.title, "Counter")
              
                  def test_increase(self):
                      """Make sure header updated to 1 after 1 click of increase button"""
                      driver.get(file_uri("counter.html"))
                      increase = driver.find_element_by_id("increase")
                      increase.click()
                      self.assertEqual(driver.find_element_by_tag_name("h1").text, "1")
              
                  def test_decrease(self):
                      """Make sure header updated to -1 after 1 click of decrease button"""
                      driver.get(file_uri("counter.html"))
                      decrease = driver.find_element_by_id("decrease")
                      decrease.click()
                      self.assertEqual(driver.find_element_by_tag_name("h1").text, "-1")
              
                  def test_multiple_increase(self):
                      """Make sure header updated to 3 after 3 clicks of increase button"""
                      driver.get(file_uri("counter.html"))
                      increase = driver.find_element_by_id("increase")
                      for i in range(3):
                          increase.click()
                      self.assertEqual(driver.find_element_by_tag_name("h1").text, "3")
              
              if __name__ == "__main__":
                  unittest.main()              
              `
            }</Pre>
            <p className="list-css-span">
              Ahora, si ejecutamos<span>python tests.py</span>, nuestras
              simulaciones se llevarán a cabo en el navegador y luego los
              resultados de las pruebas se imprimirán en la consola. Aquí tienes
              un ejemplo de cómo podría verse esto cuando hay un error en el
              código y una prueba falla:
            </p>
            <div className="images-client">
              <video src="/images/tests_py.mp4" loop autoPlay muted />
            </div>
            <p>
              Para terminar un test y cerrar el navegador, podríamos terminar el
              código con:
            </p>
            <Pre lang="python">{
              /*python */ `
              driver.quit()
              `
            }</Pre>
            <p>
              La impresión de los resultados en consola serán los siguientes:
            </p>
            <div className="images-client">
              <img
                src="/images/tests_py.png"
                alt="Resultado test python en consola"
              />
            </div>
          </article>
          <SectionTitle title="CI/CD" />
          <article>
            <p>
              CI/CD, que significa Integración Continua y Despliegue Continuo,
              es un conjunto de mejores prácticas de desarrollo de software que
              dicta cómo se escribe el código por un equipo de personas y cómo
              ese código se entrega posteriormente a los usuarios de la
              aplicación. Como su nombre indica, este método consta de dos
              partes principales:
            </p>
            <ul>
              <li>Integración Continua:</li>
              <ul>
                <li>Fusiones presentes con la rama principal.</li>
                <li>Pruebas unitarias automatizadas con cada fusión.</li>
              </ul>
              <li>
                Despliegue Continuo:
                <ul>
                  <li>
                    Programas cortos de lanzamiento, lo que significa que nuevas
                    versiones de una aplicación se lanzan con frecuencia.
                  </li>
                  <li>
                    CI/CD se ha vuelto cada vez más popular entre los equipos de
                    desarrollo de software por varias razones:
                  </li>
                </ul>
              </li>
              <li>
                Cuando diferentes miembros del equipo están trabajando en
                diferentes funciones, pueden surgir muchos problemas de
                compatibilidad cuando se combinan múltiples funciones al mismo
                tiempo. La integración continua permite a los equipos abordar
                pequeños conflictos a medida que surgen.
              </li>
              <li>
                Debido a que las pruebas unitarias se ejecutan con cada fusión,
                cuando una prueba falla, es más fácil aislar la parte del código
                que está causando el problema.
              </li>
              <li>
                El lanzamiento frecuente de nuevas versiones de una aplicación
                permite a los desarrolladores aislar problemas si surgen después
                del lanzamiento.
              </li>
              <li>
                El lanzamiento de cambios pequeños e incrementales permite a los
                usuarios acostumbrarse gradualmente a las nuevas funciones de la
                aplicación en lugar de sentirse abrumados con una versión
                completamente diferente.
              </li>
              <li>
                No esperar para lanzar nuevas funciones permite a las empresas
                mantenerse a la vanguardia en un mercado competitivo.
              </li>
            </ul>
          </article>
          <SectionTitle title="Acciones de GitHub" />
          <article>
            <p>
              Una herramienta popular utilizada para facilitar la integración
              continua es conocida como
              <Link
                href="https://github.com/features/actions"
                className="mx-1 underline text-purple-400 link"
              >
                GitHub Actions
                <ExternalLinkIcon className="link-icon" />
              </Link>
              . GitHub Actions nos permite crear flujos de trabajo donde podemos
              especificar ciertas acciones que se realizarán cada vez que
              alguien haga un push a un repositorio de Git. Por ejemplo,
              podríamos querer verificar con cada push que se cumple con una
              guía de estilo o que se aprueben una serie de pruebas unitarias.
            </p>
            <p>
              Para configurar una GitHub Action, utilizaremos un lenguaje de
              configuración llamado YAML. YAML estructura sus datos en torno a
              pares de clave-valor (como un objeto JSON o un diccionario de
              Python). Aquí tienes un ejemplo de un archivo YAML simple:
            </p>
            <Pre lang="yaml">{
              /*yaml */ `
              key1: value1
              key2: value2
              key3:
                  - item1
                  - item2
                  - item3
              `
            }</Pre>
            <p className="list-css-span">
              Ahora, veamos un ejemplo de cómo configuraríamos un archivo YAML
              (que toma la forma de<span>name.yml</span>o<span>name.yaml</span>)
              que funcione con GitHub Actions. Para hacer esto, crearé un
              directorio<span>.github</span>en mi repositorio, luego un
              directorio<span>workflows</span>dentro de ese, y finalmente un
              archivo
              <span>ci.yml</span>dentro de ese. En ese archivo, escribiremos:
            </p>
            <Pre lang="yaml">{
              /*yaml */ `
              name: Testing
              on: push
              
              jobs:
                test_project:
                  runs-on: ubuntu-latest
                  steps:
                  - uses: actions/checkout@v2
                  - name: Run Django unit tests
                    run: |
                      pip3 install --user django
                      python3 manage.py test
              `
            }</Pre>
            <p>
              Dado que es la primera vez que utilizamos GitHub Actions,
              revisemos qué hace cada parte de este archivo:
            </p>
            <ul className="list-css-span">
              <li>
                Primero, damos un nombre al flujo de trabajo, que en nuestro
                caso es<span>Testing</span>. Luego, con la clave<span>on</span>,
                especificamos cuándo debería ejecutarse el flujo de trabajo.
              </li>
              <li>
                En nuestro caso, queremos realizar las pruebas cada vez que
                alguien haga un push al repositorio.
              </li>
              <li>
                El resto del archivo está contenido dentro de una clave
                <span>jobs</span>, que indica qué trabajos se deben ejecutar en
                cada push.
                <ul>
                  <li>
                    En nuestro caso, el único trabajo es
                    <span>test_project</span>. Cada trabajo debe definir dos
                    componentes:
                    <ul>
                      <li>
                        La clave<span>runs-on</span>especifica en qué máquinas
                        virtuales de GitHub deseamos que se ejecute nuestro
                        código.
                      </li>
                      <li>
                        La clave<span>steps</span>proporciona las acciones que
                        deben ocurrir cuando se ejecute este trabajo.
                        <ul>
                          <li>
                            En la clave<span>uses</span>especificamos qué acción
                            de GitHub deseamos utilizar.
                            <span>actions/checkout@v2</span>
                            es una acción escrita por GitHub que podemos
                            utilizar.
                          </li>
                          <li>
                            La clave<span>name</span>nos permite proporcionar
                            una descripción de la acción que estamos realizando.
                          </li>
                          <li>
                            Después de la clave<span>run</span>, escribimos los
                            comandos que deseamos ejecutar en el servidor de
                            GitHub. En nuestro caso, queremos instalar Django y
                            luego ejecutar el archivo de pruebas.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Ahora, abramos nuestro repositorio en GitHub y echemos un vistazo
              a algunas de las pestañas cerca de la parte superior de la página:
            </p>
            <ul className="list-css-span">
              <li>
                <span>Code</span>: Esta es la pestaña que hemos estado
                utilizando con más frecuencia, ya que nos permite ver los
                archivos y carpetas dentro de nuestro directorio.
              </li>
              <li>
                <span>Issues</span>: Aquí podemos abrir y cerrar problemas, que
                son solicitudes de corrección de errores o nuevas
                características. Podemos pensar en esto como una lista de tareas
                pendientes para nuestra aplicación.
              </li>
              <li>
                <span>Pull Requests</span>: Solicitudes de personas que desean
                fusionar algún código de una rama en otra. Esta es una
                herramienta útil, ya que permite a las personas realizar
                revisiones de código donde comentan y dan sugerencias antes de
                que el código se integre en la rama principal.
              </li>
              <li>
                <span>GitHub Actions</span>: Esta es la pestaña que usaremos al
                trabajar en la integración continua, ya que proporciona
                registros de las acciones que han tenido lugar después de cada
                push.
              </li>
            </ul>
            <p>
              Aquí, imaginemos que hicimos un push de nuestros cambios antes de
              corregir el error que teníamos en la función is_valid_flight en
              models.py dentro de nuestro proyecto de aeropuerto. Ahora podemos
              navegar a la pestaña GitHub Actions, hacer clic en nuestro push
              más reciente, hacer clic en la acción que falló y ver el registro:
            </p>
            <div className="images-client">
              <img src="/images/action.gif" alt="Github actions gif" />
            </div>
            <p>
              Ahora, después de corregir el error, podríamos hacer un push
              nuevamente y obtener un resultado más satisfactorio:
            </p>
            <div className="images-client">
              <img src="/images/action_success.gif" alt="Github actions gif" />
            </div>
          </article>
          <SectionTitle title="Docker" />
          <article>
            <p>
              Los problemas pueden surgir en el mundo del desarrollo de software
              cuando la configuración en tu computadora es diferente a la que se
              está utilizando para ejecutar tu aplicación. Puedes tener una
              versión diferente de Python o algunos paquetes adicionales
              instalados que permiten que la aplicación se ejecute sin problemas
              en tu computadora, mientras que podría fallar en tu servidor. Para
              evitar estos problemas, necesitamos una forma de asegurarnos de
              que todos los que trabajan en un proyecto estén utilizando el
              mismo entorno. Una manera de hacer esto es mediante el uso de una
              herramienta llamada Docker, que es un software de contenerización,
              lo que significa que crea un entorno aislado dentro de tu
              computadora que puede estandarizarse entre muchos colaboradores y
              el servidor en el que se ejecuta tu sitio. Aunque Docker es un
              poco similar a una Máquina Virtual, son tecnologías diferentes.
              Una máquina virtual (como la utilizada en GitHub Actions o al
              lanzar un servidor
              <Link
                href="https://cs50.harvard.edu/web/2020/notes/7/"
                className="link mx-1 underline text-purple-400"
              >
                AWS
                <ExternalLinkIcon className="link-icon" />
              </Link>
              ) es efectivamente una computadora virtual completa con su propio
              sistema operativo, lo que significa que ocupa mucho espacio donde
              se esté ejecutando. Docker, por otro lado, funciona configurando
              un contenedor dentro de una computadora existente, ocupando así
              menos espacio.
            </p>
            <p className="list-css-span">
              Ahora que tenemos una idea de lo que es un contenedor Docker,
              echemos un vistazo a cómo podemos configurar uno en nuestras
              computadoras. Nuestro primer paso para hacer esto será crear un
              archivo Docker que llamaremos<span>Dockerfile</span>. En este
              archivo, proporcionaremos instrucciones sobre cómo crear una
              imagen Docker que describa las bibliotecas y binarios que deseamos
              incluir en nuestro contenedor. Aquí tienes un ejemplo de cómo
              podría verse nuestro<span>Dockerfile</span>:
            </p>
            <Pre lang="dockerfile">{
              /*dockerfile */ `
              FROM python:3
              COPY .  /usr/src/app
              WORKDIR /usr/src/app
              RUN pip install -r requirements.txt
              CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
              `
            }</Pre>
            <p>
              Aquí, examinaremos detenidamente lo que hace el archivo anterior:
            </p>
            <ul className="list-css-span">
              <li>
                <span>FROM python3</span>: Esto indica que estamos basando esta
                imagen en una imagen estándar en la que Python 3 está instalado.
                Esto es bastante común al escribir un archivo Docker, ya que te
                permite evitar la tarea de volver a definir la misma
                configuración básica con cada nueva imagen.
              </li>
              <li>
                <span>COPY . /usr/src/app</span>: Esto indica que deseamos
                copiar todo desde nuestro directorio actual (.) y almacenarlo en
                el directorio /usr/src/app en nuestro nuevo contenedor.
              </li>
              <li>
                <span>WORKDIR /usr/src/app</span>: Esto configura dónde
                ejecutaremos comandos dentro del contenedor. (Un poco como cd en
                la terminal).
              </li>
              <li>
                <span>RUN pip install -r requirements.txt</span>: En esta línea,
                suponiendo que hayas incluido todos tus requisitos en un archivo
                llamado requirements.txt, todos se instalarán dentro del
                contenedor.
              </li>
              <li>
                <span>
                  CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
                </span>
                : Finalmente, especificamos el comando que se ejecutará cuando
                iniciemos el contenedor.
              </li>
            </ul>
            <p className="list-css-span">
              Hasta ahora en esta clase, solo hemos estado utilizando SQLite, ya
              que es el sistema de gestión de bases de datos predeterminado para
              Django. Sin embargo, en aplicaciones en vivo con usuarios reales,
              SQLite casi nunca se usa, ya que no es tan escalable como otros
              sistemas. Afortunadamente, si deseamos ejecutar un servidor de
              base de datos por separado, simplemente podemos agregar otro
              contenedor Docker y ejecutarlos juntos utilizando una función
              llamada Docker Compose. Esto permitirá que dos servidores
              diferentes se ejecuten en contenedores separados, pero también
              puedan comunicarse entre sí. Para especificar esto, usaremos un
              archivo YAML llamado<span>docker-compose.yml</span>:
            </p>
            <Pre lang="dockerfile">{
              /*dockerfile */ `
              version: '3'

              services:
                  db:
                      image: postgres
              
                  web:
                      build: .
                      volumes:
                          - .:/usr/src/app
                      ports:
                          - "8000:8000"
              `
            }</Pre>
            <p>En el archivo anterior:</p>
            <ol className="list-css-span">
              <li>
                Especificamos que estamos utilizando la versión 3 de Docker
                Compose.
              </li>
              <li>
                Detallamos dos servicios:
                <ul>
                  <li>
                    <span>db</span>configura nuestro contenedor de base de datos
                    basado en una imagen ya escrita por Postgres.
                  </li>
                  <li>
                    <span>web</span>configura nuestro contenedor de servidor
                    instruyendo a Docker para:
                    <ul>
                      <li>
                        Utilizar el Dockerfile dentro del directorio actual.
                      </li>
                      <li>
                        Utilizar la ruta especificada dentro del contenedor.
                      </li>
                      <li>
                        Vincular el puerto 8000 dentro del contenedor al puerto
                        8000 en nuestra computadora.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
            <p className="list-css-span">
              Ahora estamos listos para iniciar nuestros servicios con el
              comando<span>docker-compose up</span>. Esto lanzará ambos de
              nuestros servidores dentro de nuevos contenedores Docker.
            </p>
            <p className="list-css-span">
              En este punto, es posible que deseemos ejecutar comandos dentro de
              nuestro contenedor Docker para agregar entradas a la base de datos
              o ejecutar pruebas. Para hacer esto, primero ejecutaremos docker
              ps para mostrar todos los contenedores de Docker que se están
              ejecutando. Luego, encontraremos el<span>ID del CONTENEDOR</span>
              del contenedor que deseamos ingresar y ejecutaremos
              <span>docker exec -it CONTAINER_ID bash -l</span>. Esto te llevará
              al directorio<span>usr/src/app</span>que configuramos dentro de
              nuestro contenedor. Podemos ejecutar cualquier comando que
              deseemos dentro de ese contenedor y luego salir ejecutando
              <span>CTRL-D</span>.
            </p>
            <p>
              ¡Eso es todo en este curso! La próxima vez, trabajaremos en
              escalar nuestros proyectos y asegurarnos de que sean seguros.
            </p>
          </article>
          <ShareButton setTitle={Testing.title} />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

Testing.title = 'Pruebas CI/CD';
