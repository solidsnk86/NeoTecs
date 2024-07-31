import ImageComponent from './ImageComponent';
import IndexTitle from './IndexTitle';
import LinkButton from './LinkButton';
import { Pre } from './Pre';

export const SupabaseExample = () => {
  return (
    <article>
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
      <ul>
        Los pasos a seguir serán:
        <ol>
          <li>
            <a
              className="text-[#3ECE8D]"
              href="https://supabase.com/dashboard/sign-in?returnTo=%2Fprojects"
            >
              Crear una cuenta
            </a>{' '}
            en Supabase y configurar un nuevo proyecto.{' '}
          </li>
          <li>
            Definir nuestra estructura de datos y{' '}
            <a href="#tabla" className="text-[#3ECE8D]">
              tablas
            </a>{' '}
            para las notas.
          </li>
          <li>
            Conectar Supabase con nuestra aplicación React usando Next.js.
          </li>
          <li>
            Implementar las funcionalidades de creación, lectura, actualización
            y eliminación de notas.
          </li>
        </ol>
      </ul>
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
      <p>
        Al final de este tutorial, tendrás una aplicación completamente
        funcional que te permitirá gestionar tus notas de manera eficiente.
      </p>
    </article>
  );
};
