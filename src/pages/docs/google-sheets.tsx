import { useState, useEffect } from 'react';

export default function CsvSheets() {
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJzdlPCNykOkJWbmkFcc3Iw0ZNSVwEnUDgrtCGr0pfDRfVNZmp_iTMaGZfU0z4njNWlFoJ3y3LwFPv/pub?output=csv'
                );
                const csv = await response.text();
                const parsedDrawings = csv
                    .split('\n')
                    .slice(1)
                    .map((row) => {
                        const [id, name, description, image, price] = row.split(',');
                        return { id, name, description, image, price: Number(price) };
                    });
                setDrawings(parsedDrawings);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className='w-1/2 h-screen justify-center mx-auto text-text-primary p-10 space-y-5'>
            {drawings.map((pic) => (
                <article key={pic.id}>
                    <p className='text-2xl font-mono text-center py-2'>{pic.id}</p>
                    <img className='rounded-md' src={pic.image} alt='Drawing GerArt' />
                    <p>{pic.name}</p>
                    <p>{pic.description}</p>
                    <span className='bg-red-400/60 p-1 rounded w-fit float-right'>Price: u$d{pic.price}</span>
                </article>
            ))}
        </section>
    );
}
