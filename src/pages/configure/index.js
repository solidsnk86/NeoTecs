import { useState } from 'react';

export default function Page() {
  const [form, setForm] = useState({
    user: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendData = async () => {
    const res = await fetch('/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm(res);
    } else {
      console.error('Data cannot send properly', res.statusText);
    }
  };

  return (
    <main>
      <form
        onSubmit={sendData}
        className="justify-center grid bg-gray-100 mx-auto text-text-variant gap-3 border border-zinc-700 p-6 rounded-lg m-4 w-fit mb-20"
      >
        <p>Usuario:</p>
        <input
          className="text-black p-2"
          name="user"
          type="text"
          value={form.user}
          placeholder="Username"
          onChange={handleChange}
        />
        <p>Contraseña:</p>
        <input
          className="text-black p-2"
          name="password"
          type="password"
          value={form.password}
          placeholder="•••••••"
          onChange={handleChange}
        />
        <button
          className="bg-bg-card rounded text-text-primary hover:brightness-125"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
