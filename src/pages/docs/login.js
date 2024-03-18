import 'react-toastify/dist/ReactToastify.css';
import { User, KeyRound } from 'lucide-react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import supabase from '../../components/utils/supabase';
import Link from 'next/link';

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedAttempts, setFailedAttempts] = useState(0);

  const handleLogin = async () => {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (!password || !email) {
      toast.warning('Esta sección es solo para el administrador de NeoTecs.', {
        position: toast.POSITION.TOP_CENTER,
        theme: isDarkMode ? 'dark' : 'light',
      });
      return;
    }

    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.error('Error al iniciar sesión:', error.message);
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          theme: isDarkMode ? 'dark' : 'light',
        });

        setFailedAttempts(failedAttempts + 1);

        if (failedAttempts + 1 >= 2) {
          toast.error(
            'Alto ahí 🛑! Para mí que no eres el verdadero Administrador.',
            {
              position: toast.POSITION.TOP_CENTER,
              theme: isDarkMode ? 'dark' : 'light',
            },
          );
          return;
        }
      } else {
        console.log('Usuario autenticado:', user);
        toast.success('Sesión de Administrador iniciada.', {
          position: toast.POSITION.TOP_CENTER,
          theme: isDarkMode ? 'dark' : 'light',
        });
        setTimeout(() => {
          onClose();
        }, 2300);
      }
    } catch (error) {
      const text =
        'Error en el intento de inicio de sesión. Por favor, asegúrese de ingresar los datos correctos.';
      toast.error(text, {
        position: toast.POSITION.TOP_CENTER,
        theme: isDarkMode ? 'dark' : 'light',
      });
      console.error(text, error.message);
    }
  };

  return (
    <section className="p-4 pt-14 xl:pt-2">
      <div className="dark:border-zinc-800 border-zinc-200 border bg-[#F7F9F9] dark:bg-[#16181C] p-4 rounded-lg xl:w-[25%] login-form justify-center mx-auto mt-16 text-text-primary">
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
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleLogin();
                }
              }}
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
          <div className="hr-container">
            <hr />o<hr />
          </div>
        </aside>
      </div>
      <ToastContainer closeButton closeOnClick />
    </section>
  );
};

export default LoginForm;
