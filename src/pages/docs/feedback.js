import { useState } from 'react';
import { Footer } from '../../components/Footer';
import { ArrowLeftIcon } from 'lucide-react';
import { Nav } from '../../components/Nav';
export default function feedBack() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/submitFeedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, email, comentario }),
    });

    if (response.ok) {
      console.log('Feedback enviado correctamente');
    } else {
      console.error('Error al enviar feedback');
    }
  };

  return (
    <>
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-30" />
      <form
        onSubmit={handleSubmit}
        className="xl:w-1/3 p-10 h-screen flex justify-center mx-auto text-text-primary text-left flex-col space-y-3"
      >
        <ArrowLeftIcon
          className="text-text-primary cursor-pointer hover:translate-x-[-2px] transition-all xl:left-3 xl:top-10 top-12 left-2 fixed mt-3"
          onClick={() => window.open('/')}
        />
        <h1 className="flex justify-center mx-auto text-6xl text-transparent relative bottom-[2px] [-webkit-text-stroke-width:4px] [-webkit-text-stroke-color:var(--color-on-surface)]">
          Feedback
        </h1>
        <p className="bg-orange-400/70 border-orange-400/80 border rounded p-3 text-xs xl:text-sm shadow-sm shadow-orange-400">
          "¿Podrías proporcionarme tus comentarios sobre la página web? ¿Hiciste
          alguna observación de errores o inconvenientes? No dudes en compartir
          todas tus dudas y preocupaciones. Estoy aquí para ayudarte y mejorar
          la experiencia en línea."
        </p>
        <div className="border border-zinc-200 p-5 rounded space-y-3 shadow-sm shadow-slate-500">
          <label className="label-feedback">
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>

          <label className="label-feedback">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="label-feedback">
            Comentario:
            <textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder=" Comentarios..."
            />
          </label>

          <button
            className="flex justify-center mx-auto px-2 py-1 outline-4 outline-offset-2 outline-lime-400 rounded-md feedback-button"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}

feedBack.title = 'NeoTecs FeedBack';
