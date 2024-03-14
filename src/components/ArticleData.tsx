import { articlesURL } from './Constants';
import { Articles } from './Articles';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
        <div className="p-4">
            {data.length === 0 ? (
                <Preloader />
            ) : (
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {data.map((article, index) => (
                        <SwiperSlide key={index}>
                            <article>
                                <Articles
                                    title={article.title}
                                    content={article.content}
                                    src={article.url}
                                    publishedAt={article.published}
                                />
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default ArticleData;
