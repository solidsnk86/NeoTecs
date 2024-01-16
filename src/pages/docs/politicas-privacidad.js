import React from 'react';
import { Nav } from '../../components/Nav';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';
import { Footer } from '../../components/Footer';

export const PrivacyPolicy = () => {
  return (
    <>
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-50" />
      <main className="text-text-primary flex flex-col justify-center m-auto p-10 xl:w-10/12 text-sm">
        <span onClick={() => history.back()}>
          <ArrowLeftIcon className="text-text-primary cursor-pointer hover:translate-x-[-2px] transition-all xl:left-6 xl:top-14 top-12 left-2 fixed mt-3" />
        </span>
        <div className="my-10">
          <h1 className="text-2xl font-bold mb-4">Política de Privacidad</h1>

          <p className="my-6 text-right">
            <strong>Fecha Efectiva:</strong> 15 de Enero 2024
          </p>

          <p>
            Esta Política de Privacidad describe cómo NeoTecs ("nosotros,"
            "nuestro" o "nos") recopila, utiliza y comparte información personal
            obtenida a través de nuestro sitio web https://neotecs.netlify.app.
          </p>

          <h2 className="text-xl font-bold mt-4 mb-2">
            Información que Recopilamos:
          </h2>
          <p>
            Podemos recopilar los siguientes tipos de información personal
            cuando visitas nuestro sitio web:
          </p>
          <ul className="list-disc pl-8">
            <li>
              Información que proporcionas directamente, como tu nombre,
              dirección de correo electrónico y cualquier otra información que
              elijas proporcionar al completar formularios en nuestro sitio web.
            </li>
            <li>
              Información recopilada automáticamente, incluida tu dirección IP,
              tipo de navegador, sistema operativo y otros detalles técnicos
              cuando visitas nuestro sitio web.
            </li>
          </ul>
          <h2 className="text-xl font-bold mt-4 mb-2">
            Uso de la Información:
          </h2>
          <p>
            Utilizamos la información recopilada para los siguientes propósitos:
          </p>
          <ul className="list-disc pl-8">
            <li>
              Para proporcionar y mantener la funcionalidad de nuestro sitio
              web.
            </li>
            <li>Para mejorar y personalizar tu experiencia de navegación.</li>
            <li>
              Para análisis y métricas con el fin de comprender cómo interactúan
              los visitantes con nuestro sitio web.
            </li>
            <li>
              Para enviarte boletines informativos, materiales de marketing y
              otras comunicaciones si has optado por recibirlos.
            </li>
          </ul>
          <h2 className="text-xl font-bold mt-4 mb-2">
            Compartir Información:
          </h2>
          <p>
            No vendemos, intercambiamos ni transferimos tu información personal
            a partes externas. Sin embargo, podemos compartir información con
            terceros de confianza que nos ayuden a operar nuestro sitio web,
            llevar a cabo nuestro negocio o brindarte servicios.
          </p>
          <h2 className="text-xl font-bold mt-4 mb-2">Cookies:</h2>
          <p>
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.
            Puedes controlar las cookies a través de la configuración de tu
            navegador.
          </p>
          <h2 className="text-xl font-bold mt-4 mb-2">Tus Opciones:</h2>
          <p>
            Puedes optar por no proporcionar cierta información personal, pero
            esto puede limitar tu capacidad para acceder a ciertas funciones de
            nuestro sitio web.
          </p>
          <h2 className="text-xl font-bold mt-4 mb-2">Seguridad:</h2>
          <p>
            Tomamos medidas razonables para proteger la seguridad y
            confidencialidad de tu información personal.
          </p>
          <h2 className="text-xl font-bold mt-4 mb-2">
            Actualizaciones a esta Política de Privacidad:
          </h2>
          <p>
            Podemos actualizar nuestra Política de Privacidad periódicamente. La
            última versión se publicará en esta página.
          </p>
          <h2 className="text-xl font-bold mt-4 mb-2">
            Información de Contacto:
          </h2>
          <p>
            Si tienes alguna pregunta o inquietud sobre esta Política de
            Privacidad, contáctame a
            <Link
              href="mailto:calcagni.gabriel86@gmail.com"
              className="underline mx-1 text-blue-950"
            >
              calcagni.gabriel86@gmail.com
            </Link>
            .
          </p>
          <div className="text-xs my-6">
            <p>Neotecs Informática</p>
            <p>Dirección: Avenida Fuerza Aérea 551</p>
            <p>Concarán, San Luis, 5770</p>
            <p>www.neotecs.netlify.app</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
