import { Nav } from '../../components/Nav';
import { NavSwitch } from '../../components/NavSwicth';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import HeaderTitle from '../../components/HeaderTitlte';
import Indextitle from '../../components/IndexTitle';
import { NavLinks } from '../../components/NavLinks';
import { useState, useEffect, useRef } from 'react';
import { SupabaseExample } from '../../components/SupabaseExample';
import { Notes } from '../../Model/notes-model';
import { DateFormat } from '@/lib/date-formatter';

export default function SupabaseDB() {
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const noteInputRef = useRef(null);
  const originalText = {};

  const updateData = async () => {
    const data = await Notes.get();
    setNotes(data);
  };

  const sendNote = async () => {
    const noteInput = noteInputRef.current;
    const note = {
      title: noteInput.innerText,
    };
    setIsLoading(true);
    await Notes.create(note);
    await updateData();
    noteInput.innerText = 'Puedes agregar una nota aquí...';
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 100);
    setIsLoading(false);
  };

  const updateNote = async (id) => {
    const preEdit = document.getElementById(`pre-${id}`);
    notes.forEach((note) => {
      originalText[note.id] = note.title;
    });
    const currentText = preEdit.innerText;
    const updatedNote = {
      title: preEdit.innerText,
      edited: originalText[id] !== currentText,
    };
    await Notes.update(id, updatedNote);
    updateData();
  };

  const deleteNote = async (id) => {
    setIsLoading(true);
    await Notes.delete(id);
    updateData();
    setIsLoading(false);
  };

  useEffect(() => {
    updateData();
  }, []);

  const handleEdit = (id) => {
    setEdit(id);
  };

  return (
    <TitlesContextProvider>
      <Nav className="fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl flex items-stretch">
        <NavLinks />
        <div
          className="w-full max-w-none prose px-4 md:px-8 text-text-primary"
          id="container"
        >
          <NavSwitch inline />
          <HeaderTitle>Notas con Supabase</HeaderTitle>
          <hr className="border-text-primary" />
          <SupabaseExample />
          <Indextitle>Crear Nota</Indextitle>
          <article
            className="resize-y max-w-80 dark:bg-zinc-800/60 bg-zinc-100 px-2 rounded z-50"
            id="notes"
            contentEditable
            suppressContentEditableWarning={true}
            ref={noteInputRef}
          >
            <p className="p-2">Puedes agregar una nota aquí...</p>
          </article>
          <button
            onClick={sendNote}
            className="px-2 border dark:border-zinc-800 border-zinc-400/20 bg-slate-300 text-black font-semibold rounded-full my-4 hover:opacity-80"
          >
            {isLoading ? 'Enviando..' : 'Enviar'}
          </button>
          <Indextitle>Notas</Indextitle>
          {notes.map((note, i) => (
            <article key={note.id}>
              <p>Nota: {i + 1}</p>
              <small>Creada el {DateFormat.dateAndTime(note.created_at)}</small>
              <small>{note.edited ? ' • (editada)' : ''}</small>
              <pre
                id={`pre-${note.id}`}
                contentEditable={edit === note.id}
                suppressContentEditableWarning={true}
                className="my-10 max-w-max text-pretty"
                onClick={() => handleEdit(note.id)}
                onBlur={() => updateNote(note.id)}
              >
                {note.title}
              </pre>
              <button
                onClick={() => deleteNote(note.id)}
                className="px-2 border dark:border-zinc-800 border-zinc-400/20 bg-slate-300 text-black font-semibold rounded-full my-4 hover:opacity-80"
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

SupabaseDB.title = 'Crea Notas con Supabase ⚡';
