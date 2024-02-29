import { User, KeyRound } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../../components/utils/supabase';

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({ email, password });
      if (error) {
        console.error('Error al iniciar sesión:', error.message);
      } else {
        console.log('Usuario autenticado:', user);
        onClose();
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error.message);
    }
  };

  return (
    <section className="p-4">
      <div className="dark:border-zinc-800 border-zinc-200 border p-4 rounded-lg xl:w-[25%] login-form justify-center mx-auto mt-16 text-text-primary">
        <header className="grid space-y-2">
          <h2 className="text-center font-semibold text-lg">
            Inicio sesión Admin
          </h2>
          <label>Email:</label>
          <div className="bg-[#ffffff] text-text-variant rounded dark:border-zinc-800 border-zinc-200 border">
            <User className="inline text-zinc-800 border-r-[1px] border-zinc-400 pr-2 m-2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label>Contraseña:</label>
          <div className="bg-[#ffffff] text-black rounded dark:border-zinc-800 border-zinc-200 border">
            <KeyRound className="inline text-zinc-800 border-r-[1px] border-zinc-400 pr-2 m-2" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </header>
        <aside className="pt-4">
          <button
            className="flex justify-center mx-auto px-3 py-1 font-semibold outline-4 outline-offset-2 outline-lime-400 rounded-md bg-button-variant shadow-sm shadow-zinc-400 dark:!shadow text-text-variant hover:opacity-90"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
        </aside>
      </div>
    </section>
  );
};

export default LoginForm;
