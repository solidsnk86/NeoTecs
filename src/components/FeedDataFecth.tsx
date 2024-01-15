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

    return (
        <div className="border dark:border-zinc-800 p-4 rounded-md flex justify-center my-10 mx-auto w-1/2">
            {items.map((item) => (
                <div key={item.id} className="text-text-primary">
                    <span>{formatDate(item.fecha)}</span>
                    <p>Nombre: {item.nombre}</p>
                    <p>Email: {item.email}</p>
                    <p>Comentario: {item.comentario}</p>
                </div>
            ))}
        </div>
    );
};

export default FeedbackData
