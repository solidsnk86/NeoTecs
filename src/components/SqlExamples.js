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
        <Pre lang="shell">{
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
      </article>
    </>
  );
};
