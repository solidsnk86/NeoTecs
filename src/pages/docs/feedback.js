import { useState } from 'react';

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
    <form
      onSubmit={handleSubmit}
      className="xl:w-1/3 p-10 h-screen flex justify-center mx-auto text-text-primary text-left flex-col space-y-3"
    >
      <h1 className="flex justify-center mx-auto text-6xl text-transparent relative bottom-[2px] [-webkit-text-stroke-width:4px] [-webkit-text-stroke-color:#D4D4D8]">
        Feedback
      </h1>
      <p className="bg-orange-400/70 border-orange-400 border rounded p-3">
        "¿Podrías proporcionarme tus comentarios sobre la página web? ¿Hiciste
        alguna observación de errores o inconvenientes? No dudes en compartir
        todas tus dudas y preocupaciones. Estoy aquí para ayudarte y mejorar la
        experiencia en línea."
      </p>
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
          placeholder="Comentarios.."
        />
      </label>

      <button
        className="border border-zinc-800 p-2 rounded hover:bg-gray-800/80 hover:text-zinc-100"
        type="submit"
      >
        Enviar Feedback
      </button>
    </form>
  );
}

feedBack.title = 'NeoTecs FeedBack';
