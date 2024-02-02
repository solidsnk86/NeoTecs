import { useState, useEffect } from 'react';

export default function DataFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vRBJ2ICoQMLS-Dfem1ha7yjJQKMgTbZu9PExFjGh2rh6Pj4sgYTl2dBpJw02PQRckCG0SSpaiL6Vwwl/pub?output=csv',
        );
        const csv = await response.text();
        const parsedData = csv
          .split('\n')
          .slice(1)
          .map((row) => {
            const [
              id,
              name,
              description,
              image,
              price,
              posted,
              isOnSale,
              logo,
            ] = row.split(',');
            return {
              id,
              name,
              description,
              image,
              price: Number(price),
              posted,
              isOnSale,
              logo,
            };
          });
        setData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return data;
}
