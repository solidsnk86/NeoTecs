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
import { Footer } from '../../components/Footer';
import { GetLocation } from '../../components/GetLocation';

export default function SupabaseDB() {
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setoLocation] = useState([]);
  const noteInputRef = useRef(null);
  const originalText = {};

  const updateData = async () => {
    const data = await Notes.get();
    setNotes(data);
  };

  const getLocation = async () => {
    const p = await GetLocation.province();
    const c = await GetLocation.country();
    setoLocation({
      province: p,
      country: c,
    });
  };

  const sendNote = async () => {
    const noteInput = noteInputRef.current;
    const note = {
      title: noteInput.innerText,
      province: location.province,
      country: location.country,
    };
    if (noteInput.innerText.length > 100) {
      noteInput.innerText = 'Límite de caracteres excedido. MAX=100';
      return;
    } else {
      setIsLoading(true);
      await Notes.create(note);
      await updateData();
    }
    noteInput.innerText = 'Agregar una nota aquí... 100 caracteres máximo.';
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
      province: location.province,
      country: location.country,
    };
    if (preEdit.innerText.length > 100) {
      preEdit.innerText = 'Límite de caracteres excedido. MAX=100';
    } else {
      await Notes.update(id, updatedNote);
      updateData();
    }
  };

  const deleteNote = async (id) => {
    setIsLoading(true);
    await Notes.delete(id);
    updateData();
    setIsLoading(false);
  };

  useEffect(() => {
    updateData();
    getLocation();
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
            <p className="p-2">
              Agrega una nota aquí... 100 caracteres máximo.
            </p>
          </article>
          <button
            onClick={sendNote}
            className="px-2 border dark:border-zinc-800 border-zinc-400/20 bg-slate-300 text-black font-semibold rounded-full my-4 hover:opacity-80"
          >
            {isLoading ? 'Enviando..' : 'Enviar'}
          </button>
          <Indextitle>Notas</Indextitle>
          <section className="grid xl:grid-cols-3 lg:grid-cols-2 my-20 gap-3">
            {notes.map((note, i) => (
              <div
                key={note.id}
                className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg dark:bg-zinc-800/80 bg-zinc-100/90 backdrop-blur-sm border dark:border-zinc-700/50 border-zinc-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium dark:text-zinc-400 text-zinc-600">
                    Nota {i + 1}{' '}
                    {note.edited && (
                      <>
                        <span className="mr-1">•</span>
                        <span className="italic text-xs">editada</span>
                      </>
                    )}
                  </span>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="text-sm px-3 py-1 rounded-full transition-colors duration-200 hover:bg-red-500/10 dark:hover:text-red-400 hover:text-red-600"
                  >
                    Borrar
                  </button>
                </div>

                <pre
                  id={`pre-${note.id}`}
                  contentEditable={edit === note.id}
                  suppressContentEditableWarning={true}
                  className={`min-h-24 bg-slate-700/15 mb-4 font-sans text-base whitespace-pre-wrap break-words text-text-primary
                  focus:outline-none focus:ring-2 focus:ring-blue-500/30 rounded-lg p-2 transition-colors duration-200`}
                  onClick={() => handleEdit(note.id)}
                  onBlur={() => updateNote(note.id)}
                >
                  {note.title}
                </pre>

                <div className="flex items-center gap-2 text-xs dark:text-zinc-400 text-zinc-500">
                  <time>
                    {DateFormat.dateAndTime(note.created_at)} • {note.province},{' '}
                    {note.country}
                  </time>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

SupabaseDB.title = 'Crea Notas con Supabase ⚡';
