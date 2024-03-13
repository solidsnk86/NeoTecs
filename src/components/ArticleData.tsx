import { articlesURL } from './Constants';
import { Articles } from './Articles';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Preloader } from './Preloader';

const ArticleData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(articlesURL);
            const csvData = await response.text();
            const parsedData = csvData
                .split('\n')
                .slice(1)
                .map((row) => {
                    const [title, content, url, published] = row.split(',');
                    return { title, content, url, published };
                });
            setData(parsedData);
        };
        fetchData();
    }, []);

    return (
        <Suspense fallback={<Preloader />}>
            <div className='p-4 grid md:grid-cols-2 gap-2 text-center'>
                {data.map((article, index) => (
                    <article key={index}>
                        <Articles
                            title={`${article.title}`}
                            content={`${article.content}`}
                            src={`${article.url}`}
                            publishedAt={article.published}
                        />
                    </article>
                ))}
            </div>
        </Suspense>
    );
};

export default ArticleData;
