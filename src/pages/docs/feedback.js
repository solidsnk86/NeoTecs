import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Footer } from '../../components/Footer';
import { ArrowLeftIcon } from 'lucide-react';
import { Nav } from '../../components/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FeedBack() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      nombre: '',
      email: '',
      comentario: '',
    },
  });

  const onSubmit = async () => {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (!nombre || !email || !comentario) {
      toast.error('Por favor, completa todos los campos.', {
        position: toast.POSITION.TOP_RIGHT,
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
          position: toast.POSITION.TOP_RIGHT,
          type: 'success',
          theme: isDarkMode ? 'dark' : 'light',
        },
      );
    } else {
      toast('Error al enviar el feedback', {
        position: toast.POSITION.TOP_RIGHT,
        type: 'error',
        theme: isDarkMode ? 'dark' : 'light',
      });
    }
  };

  return (
    <>
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-30" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="xl:w-1/3 p-10 h-screen flex justify-center mx-auto text-text-primary text-left flex-col space-y-4"
      >
        <ArrowLeftIcon
          className="text-text-primary cursor-pointer hover:translate-x-[-2px] transition-all xl:left-3 xl:top-10 top-14 left-2 fixed mt-3"
          onClick={(e) => history.back(e)}
        />
        <h1 className="flex justify-center mx-auto text-6xl text-transparent relative bottom-[2px] [-webkit-text-stroke-width:4px] [-webkit-text-stroke-color:var(--color-on-surface)]">
          Feedback
        </h1>
        <p className="bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-100/5 dark:border-zinc-800 border rounded p-3 text-text-primary text-sm xl:text-sm shadow-md shadow-slate-200/80 dark:!shadow">
          "¿Podrías proporcionarme tus comentarios sobre la página web? ¿Hiciste
          alguna observación de errores o inconvenientes? No dudes en compartir
          todas tus dudas y preocupaciones. Estoy aquí para ayudarte y mejorar
          la experiencia en línea."
        </p>
        <div className="bg-[#F7F9F9] dark:bg-[#16181C] border border-zinc-100/5 dark:border-zinc-800 p-5 rounded space-y-3 shadow-md shadow-slate-200/80 dark:!shadow">
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
              className=" h-28 resize-y"
            />
          </label>

          <button
            className="flex justify-center mx-auto px-3 py-1 font-semibold outline-4 outline-offset-2 outline-lime-400 rounded-full bg-button-variant shadow-sm shadow-zinc-400 dark:!shadow text-text-variant hover:opacity-90"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando..' : 'Enviar'}
          </button>
        </div>
      </form>
      <Footer />
      <ToastContainer closeButton closeOnClick />
    </>
  );
}

FeedBack.title = 'NeoTecs FeedBack';
