import { useState, useEffect } from 'react';
import supabase from '../components/utils/supabase';
import FormatData from './FormatDate';
import { MessageCircleIcon, Trash2Icon } from 'lucide-react';

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

        const fetchImage = async (imageName) => {
            try {
                await supabase.storage
                    .from('simbiosis')
                    .getPublicUrl(imageName)

            } catch (error) {
                console.error('Error al obtener la imagen:', error.message);
            }
        };

        const fetchFeedbackWithImages = async () => {
            await fetchFeedback();

            items.forEach((item) => {
                if (item.imagen) {
                    fetchImage(item.imagen);
                }
            });
        };

        fetchFeedbackWithImages();
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
        const emailLink = `mailto:${item.email}`;
        window.open(emailLink);
    };

    return (
        <>
            {items.map((item) => (
                <div className="bg-gray-100 dark:bg-zinc-800/40 border dark:border-zinc-800 p-4 rounded-xl my-10 mx-auto xl:w-1/2" key={item.id}>
                    <div className="text-text-primary text-xs xl:text-sm mb-4">
                        <p className="text-right">{FormatData(item.fecha)}</p>
                        <p className='my-6'>{item.comentario}</p>
                        <p className='text-right'>{item.nombre}</p>
                        {item.imagen && (
                            <img src={`https://yyqjcfzddjozcwahhugs.supabase.co/storage/v1/object/public/simbiosis/imagen/${item.imagen}`} alt="Imagen" />
                        )}
                        <button className="underline cursor-pointer w-fit mt-1 float-right" title='Responder' onClick={() => sendMail(item)}><MessageCircleIcon className='mx-1 hover:text-blue-400' /></button>
                        <button onClick={() => handleDelete(item.id)} className="underline cursor-pointer w-fit mt-1 hover:text-red-500" title='Borrar comentario'>
                            <Trash2Icon className='mx-1 ' />
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default FeedbackData;
