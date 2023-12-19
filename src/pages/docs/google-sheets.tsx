import { useState, useEffect } from 'react';

export default function CsvSheets() {
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJzdlPCNykOkJWbmkFcc3Iw0ZNSVwEnUDgrtCGr0pfDRfVNZmp_iTMaGZfU0z4njNWlFoJ3y3LwFPv/pub?output=csv',
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
        <section className="w-1/2 h-screen justify-center mx-auto text-text-primary p-10 space-y-5">
            <h1 className="flex justify-center mx-auto text-6xl text-transparent relative bottom-[2px] [-webkit-text-stroke-width:4px] [-webkit-text-stroke-color:var(--color-on-surface)]">
                GerArt
            </h1>
            <article className="border border-zinc-200 dark:border-zinc-800 rounded-md text-center p-3">
                <p>¡Bienvenidos a ésta sección de arte y dibujo!</p>
                <p>
                    En esta ocasión podemos aprender a hacer una base de datos con Google
                    Sheets en un Excel de formato .csv y hacer un fetch en nuestra
                    aplicación de Reactjs con Nextjs y Api Routes
                </p>
            </article>
            {drawings.map((pic) => (
                <article key={pic.id}>
                    <p className="text-2xl font-mono text-center py-2">{pic.id}</p>
                    <span className="bg-button-variant text-text-variant p-1 w-fit float-right">
                        Price: u$d {pic.price}
                    </span>
                    <img className="" src={pic.image} alt="Drawing GerArt" />
                    <aside className="text-center font-semibold my-3">
                        <p>{pic.name}</p>
                        <p>{pic.description}</p>
                    </aside>
                </article>
            ))}
        </section>
    );
}
