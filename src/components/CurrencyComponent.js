import React, { useState, useEffect } from 'react';

export default function CurrencyConverter() {
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const handleSubmit = (e) => {
      e.preventDefault();

      fetch('/api/currency')
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
          className="mr-2 bg-amber-200 px-1 py-1 text-black font-semibold"
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
          className="rounded px-4 py-1 mx-3 my-4 hover:outline-2 outline-amber-400 hover:outline-double outline-offset-2 bg-[#484848]"
        >
          Convertir
        </button>
      </form>
      <div
        id="result"
        className="bg-gray-800 px-1 my-2 w-fit border-l-4 border-amber-400 visible"
      >
        {result}
      </div>
    </div>
  );
}
