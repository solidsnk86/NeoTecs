import { Nav } from '../../components/Nav';
import { NavSwitch } from '../../components/NavSwicth';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import HeaderTitle from '../../components/HeaderTitlte';
import Indextitle from '../../components/IndexTitle';
import { NavLinks } from '../../components/NavLinks';
import { useState, useEffect, useRef } from 'react';
import AuthButton from '../../components/auth-button';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

function formatDate(str) {
  const date = new Date(str).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
  return date;
}

const supabase = createClientComponentClient();

export default function SupabaseDB() {
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(null);
  const noteInputRef = useRef(null);

  const notesDB = async () => {
    try {
      const { data, error } = await supabase
        .from('notes')
        .select()
        .order('created_at', { ascending: true });
      setNotes(data);

      if (error) {
        throw new Error('Cannot query the data');
      }
    } catch (error) {
      console.error('Error querying data from Supabase:', error);
    }
  };

  const sendNote = async () => {
    const noteInput = noteInputRef.current;
    const note = {
      title: noteInput.innerText,
    };

    try {
      const res = await fetch('/api/notes-sender', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });

      if (res.ok) {
        notesDB();
      } else {
        const errorData = await res.json();
        console.error('Error sending note:', errorData);
      }
    } catch (error) {
      console.error('Unexpected error sending note:', error);
    }
  };

  const updateNote = async (id) => {
    const preEdit = document.getElementById(`pre-${id}`);
    const updatedNote = {
      id,
      title: preEdit.innerText,
    };

    try {
      const res = await fetch('/api/notes-update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedNote),
      });

      if (res.ok) {
        notesDB();
      } else {
        const errorData = await res.json();
        console.error('Error updating note:', errorData);
      }
    } catch (error) {
      console.error('Unexpected error updating note:', error);
    }
  };

  const deleteNote = async (id) => {
    const { data, error } = await supabase.from('notes').delete().match({ id });

    if (error) {
      throw new Error('Error', error);
    } else {
      console.log('Data deleted:', data);
    }

    const { data: newData, error: newError } = await supabase
      .from('notes')
      .select('*')
      .order('created_at', { ascending: false });

    if (newError) {
      throw new Error('Error', newError);
    }
    setNotes(newData);
    notesDB();
  };

  useEffect(() => {
    notesDB();
  }, []);

  const handleEdit = (id) => {
    setEdit(id);
  };

  return (
    <TitlesContextProvider>
      <Nav className="fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl mx-auto flex items-stretch">
        <NavLinks />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <HeaderTitle>Notas con Supabase DB</HeaderTitle>
          <hr className="border-text-primary" />
          <AuthButton />
          <Indextitle>Crear Nota</Indextitle>
          <article
            className="resize-y max-w-80"
            id="notes"
            contentEditable
            suppressContentEditableWarning={true}
            ref={noteInputRef}
          >
            <p>Puedes agregar una nota aquí...</p>
          </article>
          <button
            onClick={sendNote}
            className="px-2 border border-zinc-800 bg-slate-300 text-black font-semibold rounded-full my-4"
          >
            Enviar
          </button>
          <Indextitle>Notas</Indextitle>
          {notes.map((n, i) => (
            <article key={n.id}>
              <p>Nota: {i + 1}</p>
              <small>Creada el {formatDate(n.created_at)}</small>
              <pre
                id={`pre-${n.id}`}
                contentEditable={edit === n.id}
                suppressContentEditableWarning={true}
                className="my-10 max-w-max text-pretty"
                onClick={() => handleEdit(n.id)}
                onBlur={() => updateNote(n.id)}
              >
                {n.title}
              </pre>
              <button
                onClick={() => deleteNote(n.id)}
                className="px-2 border border-zinc-800 bg-slate-300 text-black font-semibold rounded-full my-4"
              >
                Borrar Nota
              </button>
            </article>
          ))}
        </div>
      </div>
    </TitlesContextProvider>
  );
}
