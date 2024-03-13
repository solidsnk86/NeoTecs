import { articlesURL } from './Constants';
import { useState, useEffect } from 'react';
import FormatDate from './FormatDate';

export default function fetchArticleData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(articlesURL);
            const csvData = await response.text();
            const parsedData = csvData
                .split('/n')
                .slice(1)
                .map((row) => {
                    const [title, content, url, published] = row.split(',');
                    return { title, content, url, published: FormatDate(published) };
                });
            setData(parsedData);
        };
        fetchData();
    }, []);

    return data;
}
