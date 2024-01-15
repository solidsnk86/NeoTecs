import { useState, useEffect } from 'react';
import { supabase } from '../components/utils/supabase';

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

    const formatDate = (dateString) => {
        const format = new Date(dateString).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return format;
    };

    const sendMail = (item) => {
        const emailLink = `mailto:${item.email}`;
        window.open(emailLink);
    };

    const handleDelete = async (id) => {
        console.log('Eliminando comentario con id:', id);
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

    return (
        <>
            {items.map((item) => (
                <div className="bg-gray-100 dark:bg-zinc-800/40 border dark:border-zinc-800 p-4 rounded-xl my-10 mx-auto xl:w-1/2" key={item.id}>
                    <div className="text-text-primary text-xs xl:text-sm mb-4">
                        <p className="text-right">{formatDate(item.fecha)}</p>
                        <h6>Comentario:</h6>
                        <p>{item.comentario}</p>
                        <p className="text-right">{item.nombre}</p>
                        <p className="underline cursor-pointer w-fit" onClick={() => sendMail(item)}>Responder</p>
                        <button onClick={() => handleDelete(item.id)} className="text-red-500 underline cursor-pointer w-fit mt-2">
                            Eliminar Comentario
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default FeedbackData;
