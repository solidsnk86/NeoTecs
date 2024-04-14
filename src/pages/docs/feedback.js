import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '@nextui-org/button';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Nav';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';

export default function FeedBack() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (!nombre || !email || !comentario) {
      toast.warning('Por favor, completa todos los campos.', {
        position: toast.POSITION.TOP_CENTER,
        theme: isDarkMode ? 'dark' : 'light',
      });
      return;
    }

    const response = await fetch('/api/submit-feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, email, comentario }),
    });

    if (response.ok) {
      toast(
        `Muchas gracias por tu feedback ${nombre}. Estaremos en contacto pronto!`,
        {
          position: toast.POSITION.TOP_CENTER,
          type: 'success',
          theme: isDarkMode ? 'dark' : 'light',
        },
        setTimeout(() => {
          window.location.reload();
        }, 3900),
      );
    } else {
      toast('Error al enviar el feedback', {
        position: toast.POSITION.TOP_CENTER,
        type: 'error',
        theme: isDarkMode ? 'dark' : 'light',
      });
    }
  };

  return (
    <>
      <Nav className="fixed xl:relative w-full z-50" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="xl:w-1/3 p-14 flex justify-center mx-auto text-text-primary text-left flex-col space-y-4"
      >
        <div
          className="bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded p-1 xl:left-6 xl:top-14 top-14 left-2 fixed mt-3 hover:border-zinc-300 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125 cursor-pointer duration-300"
          title="Volver atrás"
        >
          <ArrowLeftIcon
            className="text-text-primary"
            onClick={(e) => history.back(e)}
          />
        </div>
        <h1 className="flex justify-center pt-6 mx-auto text-5xl text-transparent relative [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:var(--color-on-surface)]">
          Feedback
        </h1>
        <p className="bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded p-3 text-text-primary text-xs xl:text-sm shadow-md shadow-slate-200/80 dark:!shadow relative">
          "¿Podrías proporcionarme tus comentarios sobre la página web? ¿Hiciste
          alguna observación de errores o inconvenientes? No dudes en compartir
          todas tus dudas y preocupaciones. Estoy aquí para ayudarte y mejorar
          la experiencia en línea."
        </p>
        <div className="bg-[#F7F9F9] dark:bg-[#16181C] border border-zinc-200/50 dark:border-zinc-800 p-5 rounded space-y-3 shadow-md shadow-slate-200/80 dark:!shadow text-xs xl:text-sm relative">
          <label className="label-feedback">
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingresa tu nombre"
            />
          </label>

          <label className="label-feedback">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo"
            />
          </label>

          <label className="label-feedback">
            Comentario:
            <textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Comentario..."
              className="h-28 resize-y cont"
            />
          </label>

          <Button
            className="flex justify-center mx-auto px-3 py-1 font-semibold outline-4 outline-offset-2 outline-lime-400 rounded-md bg-button-variant shadow-sm shadow-zinc-400 dark:!shadow text-text-variant hover:opacity-90"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </Button>
        </div>
      </form>
      <Footer />
      <ToastContainer closeButton closeOnClick />
    </>
  );
}

FeedBack.title = 'NeoTecs FeedBack';
