import { useState, useEffect } from 'react';
import supabase from './utils/supabase';
import { Swiper, SwiperSlide } from 'swiper/react';

export const FeedbackData = () => {
  const [items, setItems] = useState([]);

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

  useEffect(() => {
    fetchFeedback();
  }, []);

  const handleDelete = async (id: any) => {
    try {
      const { data, error } = await supabase
        .from('feedback')
        .delete()
        .match({ id });

      if (error) {
        throw error;
      } else {
        console.log('Data was sent', data);
      }

      const { data: newData, error: newError } = await supabase
        .from('feedback')
        .select('*')
        .order('fecha', { ascending: false });

      if (newError) {
        throw newError;
      }

      setItems(newData);
      fetchFeedback();
    } catch (error) {
      console.error('Error deleting feedback:', error.message);
    }
  };

  const sendMail = (item: any) => {
    const subjectText = 'Gracias por tu feedback';
    const subject = encodeURIComponent(subjectText);
    const issues = 'https://github.com/solidsnk86/NeoTecs/issues/new';
    const body = `¡Hola ${item.nombre}! Es un agrado para mí recibir retroalimentación en mi web, estaré analizando en breve tu comentario. Puedes generar un issue en ${issues} para discutirlo. Desde ya muchas gracias! Gabriel de NeoTecs.-\n\n`;
    const encodedBody = encodeURIComponent(body);

    const emailLink = `mailto:${item.email}?subject=${subject}&body=${encodedBody}`;
    window.open(emailLink, '_blank');
  };

  const fechaFormateada = (f: Date | string | number) => {
    const fecha = new Date(f).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return fecha;
  };

  const horaFormateada = (h: Date | string | number) => {
    const hora = new Date(h).toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Argentina/Buenos_Aires',
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
          slidesPerView: 2,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="bg-white dark:bg-zinc-800/50 border border-gray-300 dark:border-zinc-700 p-6 rounded-md shadow-md my-10 mx-auto xl:w-1/2 relative z-50">
            <div className="text-gray-600 dark:text-gray-300 text-sm xl:text-base mb-4">
              <p className="text-gray-700 dark:text-gray-400">{item.nombre}</p>
              <label className="block font-bold mt-4">Mensaje:</label>
              <p className="my-2">{item.comentario}</p>
              <div className="flex items-center justify-between my-4">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 dark:text-red-400 hover:underline focus:outline-none"
                  title="Borrar comentario"
                >
                  Eliminar
                </button>
                <button
                  className="text-blue-500 dark:text-blue-400 hover:underline focus:outline-none"
                  title="Responder"
                  onClick={() => sendMail(item)}
                >
                  Responder
                </button>
              </div>
              <time className="text-xs">
                Este feedback se ha creado el{' '}
                {`${fechaFormateada(item.fecha)} a las ${horaFormateada(
                  item.fecha,
                )}`}
              </time>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeedbackData;
