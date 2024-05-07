import { useState, useEffect } from 'react';
import supabase from '../components/utils/supabase';
import { Swiper, SwiperSlide } from 'swiper/react';

export const FeedbackData = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const { data, error } = await supabase
          .from('feedback')
          .select('*')
          .order('fecha', { ascending: false });

        if (error) {
          throw error;
        }

        setItems(data);
      } catch (error) {
        console.error('Error fetching feedback:', error.message);
      }
    };
    fetchFeedback();
  }, []);

  const handleDelete = async (id) => {
    try {
      const { data, error } = await supabase
        .from('feedback')
        .delete()
        .match({ id });

      if (error) {
        throw error;
      }

      const { data: newData, error: newError } = await supabase
        .from('feedback')
        .select('*')
        .order('fecha', { ascending: false });

      if (newError) {
        throw newError;
      }

      setItems(newData);
    } catch (error) {
      console.error('Error deleting feedback:', error.message);
    }
  };

  const sendMail = (item) => {
    const subjectText = 'Gracias por tu feedback';
    const subject = `subject=${encodeURIComponent(subjectText)}`;
    const issues = 'https://github.com/solidsnk86/NeoTecs/issues/new';
    const body = `¡Hola ${item.nombre}! Es un agrado para mí recibir retroalimentación en mi web, estaré analizando en breve tu comentario. Puedes generar un issue en ${issues} para discutirlo. Desde ya muchas gracias! Gabriel de NeoTecs.-\n\n`;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const emailLink = `mailto:${item.email}?${encodedSubject}&body=${encodedBody}`;
    window.open(emailLink, '_blank');
  };

  const fechaFormateada = (f) => {
    const fecha = new Date(f).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Argentina/Buenos_Aires',
    });
    return fecha;
  };

  const horaFormateada = (h) => {
    const hora = new Date(h).toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return hora;
  };

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item) => (
        <SwiperSlide>
          <div
            className="bg-white dark:bg-zinc-800/50 border border-gray-300 dark:border-zinc-700 p-6 rounded-md shadow-md my-10 mx-auto xl:w-1/2 relative z-50"
            key={item.id}
          >
            <div className="text-gray-600 dark:text-gray-300 text-sm xl:text-base mb-4">
              <p className="">
                Este feedback se ha creado el{' '}
                {`${fechaFormateada(item.fecha)} a las ${horaFormateada(
                  item.fecha,
                )}`}
              </p>
              <label className="block font-bold mt-4">Mensaje:</label>
              <p className="my-2">{item.comentario}</p>
              <p className="text-right text-gray-700 dark:text-gray-400">
                {item.nombre}
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <button
                  className="text-blue-500 dark:text-blue-400 hover:underline focus:outline-none"
                  title="Responder"
                  onClick={() => sendMail(item)}
                >
                  Responder
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 dark:text-red-400 hover:underline focus:outline-none"
                  title="Borrar comentario"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeedbackData;
