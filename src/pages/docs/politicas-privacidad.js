import React from 'react';
import { Nav } from '../../components/Nav';
import LinkButton from '../../components/LinkButton';
import { ArrowLeftIcon } from 'lucide-react';
import { Footer } from '../../components/Footer';

export const PrivacyPolicy = () => {
  return (
    <>
      <Nav className="fixed xl:relative w-full h-12 z-50" />
      <main className="text-text-primary flex flex-col justify-center m-auto p-10 xl:w-[70%] w-full text-sm relative policy">
        <div className="bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 cursor-pointer dark:border-zinc-800 border rounded p-1 xl:left-6 xl:top-14 top-14 left-[5px] fixed mt-3 hover:border-zinc-300 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125">
          <ArrowLeftIcon
            className="text-text-primary"
            onClick={(e) => globalThis.history.back(e)}
          />
        </div>
        <div className="mt-16 space-y-8 policy">
          <h1 className="text-4xl font-bold my-4 font-mono">
            Política de Privacidad
          </h1>
          <hr className="h-[1px] w-full dark:border-zinc-800" />
          <p className="my-10 text-right">
            <strong>Fecha Efectiva:</strong> 15 de Enero 2024
          </p>

          <p>
            Esta Política de Privacidad describe cómo NeoTecs ("nosotros,"
            "nuestro" o "nos") recopila, utiliza y comparte información personal
            obtenida a través de nuestro sitio web https://neotecs.vercel.app.
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
            <LinkButton
              url="mailto:calcagni.gabriel86@gmail.com"
              color="[cornflowerblue] dark:text-text-strong"
              iconName="Mail"
            >
              calcagni.gabriel86@gmail.com
            </LinkButton>
            .
          </p>
          <div className="text-xs my-6 border-l-4 border-button-variant pl-3">
            <p>Neotecs Informática</p>
            <p>Dirección: Avenida Fuerza Aérea 551</p>
            <p>Concarán, San Luis, 5770</p>
            <p>www.neotecs.vercel.app</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

PrivacyPolicy.title = 'Póliticas y Privacidad de Neotecs';
