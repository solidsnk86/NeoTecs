import { useState } from 'react';

const FeedbackForm = () => {
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
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Comentario:
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Enviar Feedback</button>
    </form>
  );
};

export default FeedbackForm;
