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

export default function Testing() {
  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-30" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <LectureNav />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <HeaderTitle>Pruebas (Testing)</HeaderTitle>
          <hr className="border-text-primary" />
          <Indextitle>Índice</Indextitle>
          <ol className="indice">
            <li>
              <a href="#introduccion">Introducción</a>
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
                  <a href="#pruebas-cliente">Pruebas de Cliente</a>
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
              <a href="#acciones-github">Acciones de GitHub</a>
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
              que todo funcione como esperamos. En esta conferencia,
              discutiremos varias formas en las que podemos mejorar la manera en
              que probamos nuestro código.
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
          <ShareButton setTitle={Testing.title} />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

Testing.title = 'Pruebas CI/CD';
