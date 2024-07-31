import ImageComponent from './ImageComponent';
import IndexTitle from './IndexTitle';
import LinkButton from './LinkButton';
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
            fill-opacity="0.2"
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
              <stop stop-color="#249361" />
              <stop offset="1" stop-color="#3ECF8E" />
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
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        supabase
      </IndexTitle>
      <IndexTitle>Creando una Base de Datos</IndexTitle>
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
      <p className="list-css-span">
        Comenzaremos configurando nuestra base de datos en Supabase, luego
        veremos cómo integrar esta base de datos en nuestra aplicación para
        poder crear, leer, actualizar y eliminar<span>(CRUD)</span>notas. Esto
        permitirá una gestión completa de las notas directamente desde nuestra
        aplicación.
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
      <p className="list-css-span" id="tabla">
        Bien, ahora vamos a crear nuestra tabla de datos, en este caso la vamos
        a llamar<span>notes</span>. Utilizaremos la siguiente instrucción SQL
      </p>
      <Pre lang="sql">{
        /**sql */ `
        create table 
            public.notes (
            id serial not null,    
            title text null,
            created_at timestamp with time zone null default (now() at time zone 'utc'::text),
            constraint notes_pkey primary key (id)
        )
        `
      }</Pre>
      <p className="list-css-span">
        Esta instrucción crea una tabla llamada<span>notes</span>con los
        siguientes campos:
        <ul>
          <li>
            <span>id</span>: Un identificador único para cada nota, generado
            automáticamente (serial).
          </li>
          <li>
            <span>title</span>: El título de la nota, que puede ser texto o
            null.
          </li>
          <li>
            <span>created_at</span>: La fecha y hora de creación de la nota, con
            la zona horaria UTC por defecto.
          </li>
        </ul>
        Además, definimos una clave primaria<span>primary key</span>en el campo
        <span>id</span>para asegurar que cada nota tenga un identificador único.
        Por último hacemos click en el botón<span>Run</span>.
      </p>
      <SectionTitle title="Conectando Supabase" />
      <p>
        Para conectar Supabase con nuestra aplicación, necesitamos dos cosas
        importantes: la URL del proyecto de Supabase y la anon public key. Estos
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
          anon public key bajo la pestaña de API.
        </li>
        <li>
          Guarda estos valores en tu aplicación React utilizando{' '}
          <a href="dot-env" className="text-[#3ECE8D]">
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
        Copiamos la<span>URL</span>y la<span>Anon Public Key</span>, éstos
        valores son privados y por razones de seguridad se debe crear una
        variable de entorno. Para eso vamos a crear en la carpeta
        <span>📂/src</span>o <span>📁/app</span>de nuestra aplicación React y
        Next.js un archivo<span>⚙ .env.local</span>de la siguiente manera:
      </p>
      <Pre lang=".env">{
        /**.env */ `
        NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase_aquí
        NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_public_anon_key
        `
      }</Pre>
      <SectionTitle title="Creación del Cliente" />
      <p className="list-css-span">
        Para crear nuestro cliente de Supabase, vamos a crear el siguiente
        archivo JavaScript en la carpeta<span>🔧 utils</span>. El archivo se
        llamará<span>supabase.js</span>:
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
      <Pre lang="typescript">{
        /**typescript */ `
        import { useState, useEffect } from 'react'
        import { supabase } from '@/utils/supabase'

        export default function Notes() {
            const [notes, setNotes] = useState([]);
          
            const notesDB = async () => {
              try {
                const { data, error } = await supabase
                  .from('notes')
                  .select()
                  .order('created_at', { ascending: true });
                setNotes(data);
          
                if (error) {
                  throw new Error('Cannot query the data');
                }
              } catch (error) {
                console.error('Error querying data from Supabase:', error);
           }
        };

        return <pre>{JSON.stringify(notes, null, 2)}</pre>
        `
      }</Pre>
    </article>
  );
};
