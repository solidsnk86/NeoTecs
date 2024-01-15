import { useState, useEffect } from "react";
import { supabase } from "../components/utils/supabase";

export const FeedbackData = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const { data, error } = await supabase.from("feedback")
                    .select("*")
                    .order("fecha", { ascending: false });

                if (error) {
                    throw error;
                }

                setItems(data);
            } catch (error) {
                console.error("Error fetching feedback:", error.message);
            }
        };

        fetchFeedback();
    }, []);

    const formatDate = (dateString) => {
        const format = new Date(dateString).toLocaleDateString('es-Es', {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
        return (format)
    }

    const sendMail = (item) => {
        const handleMail = `mailto:${item.email}`
        window.open(handleMail)
    }

    return (
        <div className="bg-gray-100 dark:bg-zinc-800/40 border dark:border-zinc-800 p-4 rounded-xl flex justify-center my-10 mx-auto xl:w-1/2">
            {items.map((item) => (
                <div key={item.id} className="text-text-primary text-xs xl:text-sm">
                    <p className="text-right">{formatDate(item.fecha)}</p>
                    <h6>Comentario:</h6>
                    <p>{item.comentario}</p>
                    <p className="text-right">{item.nombre}</p>
                    <p className="underline cursor-pointer w-fit" onClick={sendMail}>Responder</p>
                </div>
            ))}
        </div>
    );
};

export default FeedbackData
