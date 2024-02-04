import { useState, useEffect } from 'react';
import { googleSheetURL } from './Constants';

export default function DataFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(googleSheetURL);
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
