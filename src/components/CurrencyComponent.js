import React, { useState, useEffect } from 'react';

export default function CurrencyConverter() {
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const handleSubmit = (e) => {
      e.preventDefault();

      fetch(
        `http://api.exchangeratesapi.io/v1/latest?access_key=1f570f73b9cc19ca2273e8b1b2616999`,
      )
        .then((response) => response.json())
        .then((data) => {
          const rate = data.rates[currency.toUpperCase()];

          if (rate !== undefined) {
            setResult(`1 USD es igual a $ ${rate.toFixed(3)} ${currency}.`);
          } else {
            setResult('Moneda no válida.');
          }
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    };

    document.querySelector('form').addEventListener('submit', handleSubmit);

    return () => {
      document
        .querySelector('form')
        .removeEventListener('submit', handleSubmit);
    };
  }, [currency]);

  return (
    <div>
      <form>
        <label
          htmlFor="currency"
          className="mx-2 bg-amber-200 px-1 py-1 text-black font-semibold"
        >
          Ingresa una moneda (por ejemplo: ARS):
        </label>
        <input
          type="text"
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="text-black uppercase font-semibold"
        />
        <button
          type="submit"
          className=" rounded px-4 py-2 mx-2 outline-2 outline-double hover:bg-gray-800"
        >
          Convertir
        </button>
      </form>
      <div
        id="result"
        className="bg-gray-800 px-1 my-2 w-fit border-l-4 border-amber-400"
      >
        {result}
      </div>
    </div>
  );
}
