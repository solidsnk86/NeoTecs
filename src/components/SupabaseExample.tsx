import ImageComponent from './ImageComponent';
import IndexTitle from './IndexTitle';
import { Pre } from './Pre';
import { SectionTitle } from './SectionTitle';

export const SupabaseExample = () => {
  return (
    <article>
      <IndexTitle className="flex items-center gap-3">
        <svg
          width="40"
          height="40"
          viewBox="0 0 109 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
            fill="url(#paint1_linear)"
            fillOpacity="0.2"
          />
          <path
            d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
            fill="#3ECF8E"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="53.9738"
              y1="54.974"
              x2="94.1635"
              y2="71.8295"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#249361" />
              <stop offset="1" stopColor="#3ECF8E" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="36.1558"
              y1="30.578"
              x2="54.4844"
              y2="65.0806"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        supabase
      </IndexTitle>
      <p>
        En este artículo vamos a crear una base de datos con{' '}
        <a href="https://supabase.com/" className="text-[#3ECE8D]">
          supabase
        </a>
        , para luego llamarla desde nuestra aplicación React con Next.js. Además
        de crear notas, también aprenderemos a borrarlas y editarlas.
      </p>
      <p>
        Supabase es una plataforma que proporciona todas las herramientas
        necesarias para gestionar tu base de datos, similar a Firebase, pero con
        la ventaja de ser compatible con PostgreSQL. En este tutorial,
        configuraremos Supabase, crearemos una base de datos y la conectaremos a
        nuestra aplicación React con Next.js.
      </p>
      <p>
        Comenzaremos configurando nuestra base de datos en Supabase, luego
        veremos cómo integrar esta base de datos en nuestra aplicación para
        poder crear, leer, actualizar y eliminar (CRUD) notas. Esto permitirá
        una gestión completa de las notas directamente desde nuestra aplicación.
      </p>
      <ol>
        <li>Crear una cuenta en Supabase y configurar un nuevo proyecto.</li>
        <li>Definir nuestra estructura de datos y tablas para las notas.</li>
        <li>Conectar Supabase con nuestra aplicación React usando Next.js.</li>
        <li>
          Implementar las funcionalidades de creación, lectura, actualización y
          eliminación de notas.
        </li>
      </ol>
      <p>
        Al final de este tutorial, tendrás una aplicación completamente
        funcional que te permitirá gestionar tus notas de manera eficiente.
      </p>
      <IndexTitle>Empezamos...</IndexTitle>
      <p>
        Luego de haber creado una cuenta en supabase, vamos a crear nuestra
        tabla de datos para después consultarlas desde nuestra aplicación,
        creamos un nuevo proyecto con nuestro nombre que elijamos.
      </p>
      <p>En el dashboard de supabase nos dirigimos a SQL Editor:</p>
      <ImageComponent
        src="/images/dashboard-supabase-inicio.png"
        altImage="Dashboard Supabase"
      />
      <p>Veremos el siguiente editor de Supabase:</p>
      <ImageComponent
        src="/images/editor-sql-supabase.png"
        altImage="Editor SQL Supabase"
      />
      <p>
        Bien, ahora vamos a crear nuestra tabla de datos, en este caso la vamos
        a llamar <span>notes</span>. Utilizaremos la siguiente instrucción SQL:
      </p>
      <Pre lang="sql">{
        /**sql */ `
        CREATE TABLE 
            public.notes (
            id SERIAL not null,    
            title TEXT null,
            created_at TIMESTAMP with time zone null default (now() at time zone 'utc'::text),
            constraint notes_pkey PRIMARY key (id)
        )

        -- Vamos a insertar algo de datos para muestra
        INSERT INTO notes (title)
        values
        ('Hoy he creado un proyecto en Supabase')
        ('He agregado algo de datos y la he consultado desde Next.js')
        ('Esto es asombroso 😲')
        `
      }</Pre>
      <p>
        Esta instrucción crea una tabla llamada <span>notes</span> con los
        siguientes campos:
      </p>
      <ul>
        <li>
          <span>id</span>: Un identificador único para cada nota, generado
          automáticamente (serial).
        </li>
        <li>
          <span>title</span>: El título de la nota, que puede ser texto o null.
        </li>
        <li>
          <span>created_at</span>: La fecha y hora de creación de la nota, con
          la zona horaria UTC por defecto.
        </li>
        <li>
          Por último ingresamos algo de datos en la tabla para mostrarlos luego.
        </li>
      </ul>
      <p className="list-css-span">
        Además, definimos una clave primaria<span>primary key</span>en el campo
        <span>id</span>para asegurar que cada nota tenga un identificador único.
        Por último, hacemos click en el botón<span>Run</span>.
      </p>
      <SectionTitle title="Creamos nuestra app con Next.js" />
      <p>
        Bien, empezamos creando nuestro proyecto con Next.js. Para eso, abrimos
        nuestra terminal favorita y escribimos:
      </p>
      <Pre lang="bash">{
        /**bash */ `
        npx create-next-app@latest
        `
      }</Pre>
      <p>
        Este comando iniciará un asistente que te guiará a través de los pasos
        necesarios para configurar tu nuevo proyecto. A continuación, se
        describen algunos de los pasos que encontrarás:
      </p>
      <ul className="list-css-span">
        <li>
          <span>Nombre del Proyecto</span>: Debes proporcionar un nombre para tu
          aplicación. Este nombre se utilizará para crear el directorio que
          contendrá tu proyecto.
        </li>
        <li>
          <span>Tecnologías a Usar</span>: Se te pedirá que selecciones algunas
          tecnologías adicionales que quieras incluir en tu proyecto, como
          TypeScript, ESLint, Tailwind CSS, entre otras.
        </li>
      </ul>
      <p className="list-css-span">
        Una vez que hayas completado estos pasos, Next.js creará una estructura
        de carpetas y archivos para tu proyecto. Dentro de la carpeta{' '}
        <span>app</span>, encontrarás un archivo llamado <span>Page.tsx</span>.
      </p>
      <p className="list-css-span">
        Este archivo,<span>Page.tsx</span>, es el punto de entrada de tu
        aplicación y donde puedes empezar a definir el contenido de la página
        principal. Por ejemplo, puedes editar este archivo para mostrar un
        mensaje de bienvenida, listar productos, o cualquier otra funcionalidad
        que tu aplicación necesite.
      </p>
      <p>
        Antes de proceder con el desarrollo, es importante conectar tu proyecto
        con Supabase si planeas utilizarlo para la gestión de datos. Supabase es
        una plataforma que proporciona una base de datos PostgreSQL,
        autenticación y almacenamiento en tiempo real.
      </p>
      <p>
        Para conectar tu aplicación Next.js con Supabase, sigue estos pasos:
      </p>
      <ul>
        <li>
          Ve a la página de Supabase y crea una nueva cuenta si aún no tienes
          una.
        </li>
        <li>Crea un nuevo proyecto en el panel de Supabase.</li>
        <li>
          Sigue las instrucciones de configuración proporcionadas por Supabase
          para conectar tu proyecto Next.js. Esto generalmente implica instalar
          la biblioteca de cliente de Supabase y configurar las credenciales de
          tu proyecto.
        </li>
      </ul>
      <p>
        Una vez que hayas conectado Supabase, podrás utilizar sus
        funcionalidades para manejar datos en tu aplicación, como crear, leer,
        actualizar y eliminar registros en la base de datos.
      </p>
      <SectionTitle title="Conectando Supabase" />
      <p>
        Para conectar Supabase con nuestra aplicación, necesitamos dos cosas
        importantes:{' '}
        <code className="text-text-primary">
          la URL del proyecto de Supabase
        </code>{' '}
        y la <code className="text-text-primary">anon public key</code>. Estos
        son los pasos:
      </p>
      <p>Primero debemos instalar las dependencias de supabase:</p>
      <Pre lang="bash">{
        /**bash */ `
        npm install @supabase/supabase-js
        `
      }</Pre>
      <ol>
        <li>
          Ve a tu proyecto en Supabase y navega a la sección de configuración
          (Settings).
        </li>
        <li>
          En la sección de configuración, encontrarás la URL del proyecto y la
          anon public key en la pestaña de API.
        </li>
        <li>
          Guarda estos valores en tu aplicación React utilizando{' '}
          <a href="#dot-env" className="text-[#3ECE8D]">
            variables de entorno
          </a>{' '}
          para mayor seguridad.
        </li>
        <li>
          Usa estos valores para inicializar el cliente de Supabase en tu
          aplicación y comenzar a interactuar con la base de datos.
        </li>
      </ol>
      <IndexTitle>En Settings</IndexTitle>
      <p>En la sección de configuración vamos a API:</p>
      <ImageComponent
        src="/images/project-setting.png"
        altImage="Supabase settings"
      />
      <p className="list-css-span">
        Copiamos la<span>URL</span>y la<span>Anon Public Key</span>, estos
        valores son privados y por razones de seguridad se debe crear una
        variable de entorno. Para eso vamos a crear en la carpeta
        <span>📂/src</span>o<span>📁/app</span> de nuestra aplicación React y
        Next.js un archivo<span>⚙ .env.local</span> de la siguiente manera:
      </p>
      <span id="dot-env" />
      <Pre lang=".env">{
        /**.env */ `
        NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase_aquí
        NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_public_anon_key
        `
      }</Pre>
      <SectionTitle title="Creación del Cliente" />
      <p>
        Para crear nuestro cliente de Supabase, vamos a crear el siguiente
        archivo JavaScript en la carpeta <span>🔧 utils</span>. El archivo se
        llamará <span>supabase.js</span>:
      </p>
      <Pre lang="javascript">{
        /**javascript */ `
        import { createClient } from '@supabase/supabase-js';

        const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        
        const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
        
        export default supabase;        
        `
      }</Pre>
      <p>Este código realiza los siguientes pasos:</p>
      <ul className="code">
        <li>
          Importa la función <code>createClient</code> del paquete{' '}
          <code>@supabase/supabase-js</code>.
        </li>
        <li>
          Define las constantes <code>SUPABASE_URL</code> y{' '}
          <code>SUPABASE_API_KEY</code>, que se obtienen de las variables de
          entorno <code>process.env.NEXT_PUBLIC_SUPABASE_URL</code> y{' '}
          <code>process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY</code>. Estas
          variables deben estar configuradas en tu entorno de desarrollo.
        </li>
        <li>
          Utiliza <code>createClient</code> para crear una instancia del cliente
          de Supabase con la URL del proyecto y la clave pública anónima.
        </li>
        <li>
          Exporta la instancia del cliente de Supabase para que pueda ser
          utilizada en otras partes de la aplicación.
        </li>
      </ul>
      <SectionTitle title="Creamos el Componente" />
      <Pre lang="javascript">{
        /**javascript */ `
        import supabase from '../../components/utils/supabase';
        import { useEffect, useState } from 'react';
        
        export default function Notes() {
          const [notes, setNotes] = useState([]);
        
          useEffect(() => {
            const fetchData = async () => {
              try {
                const { data, error } = await supabase.from('notes').select();
        
                if (error) {
                  throw new Error('Error al recibir datos');
                }
        
                if (data) {
                  setNotes(data);
                }
              } catch (error) {
                console.error(error);
              }
            };
        
            fetchData();
          }, []);
        
          return (
            <pre>
              <code className='text-text-primary'>{JSON.stringify(notes, null, 2)}</code>
            </pre>
          );
        }        
        `
      }</Pre>
      <SectionTitle title="Recibiendo Datos" />
      <p>
        Una vez hemos creado nuestro componente, ya podemos renderizarlo en la
        app, a continución veremos los datos:
      </p>
      <ImageComponent
        src="/images/supa-example.png"
        altImage="Supabase Example Data"
      />
      <SectionTitle title="Creando Notas Ejemplo" />
      <p>Aquí les dejo una muestra del ejemplo:</p>
    </article>
  );
};
