import fetchArticleData from "./ArticleData";
import { useState, useEffect } from "react";

const RandomArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchArticleData();
                setArticles(data);

                const intervalId = setInterval(() => {
                    const shuffledArticles = [...data].sort(() => Math.random() - 0.5);
                    setArticles(shuffledArticles);
                }, 4 * 60 * 60 * 1000);

                return () => clearInterval(intervalId);
            } catch (error) {
                console.error("Error al obtner los datos:", error);
            }
        };

        fetchData();
    }, []);

    return articles;
};

export default RandomArticles;
