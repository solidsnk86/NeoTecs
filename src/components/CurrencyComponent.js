import { data } from 'autoprefixer';
import React, { useState } from 'react';

export default function CurrencyConverter() {
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState('');
  const [date, setDate] = useState('');
  const [update, setUpdate] = useState('');
  const [borderColor, setborderColor] = useState('border-red-400');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setborderColor('border-green-400');

    try {
      const response = await fetch(`/api/currency`);

      if (response.ok) {
        const data = await response.json();
        const rate = data.rates[currency.toUpperCase()];
        const date = data.timestamp;
        const update = data.date;

        if (rate !== undefined) {
          setResult(`1 USD es igual a $ ${rate.toFixed(2)} ${currency}.`);
          setDate(date);
          setUpdate(update);
        } else {
          setResult('Moneda no válida.');
          setborderColor('border-red-400');
        }
      }
    } catch (error) {
      setResult('Error al obtener datos de la API.');
      setborderColor('border-amber-400');
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-fit justify-center mx-auto xl:block xl:justify-normal xl:m-0"
      >
        <label
          htmlFor="currency"
          className="mr-2 mt-4 border border-gray-800 rounded px-1 py-1 font-semibold"
        >
          Ingresa una divisa (por ejemplo: ARS, BRL, EUR, GBP, BTC, etc):
        </label>
        <input
          type="text"
          id="currency"
          value={currency}
          placeholder="Ingrese la Divisa"
          onChange={(e) => setCurrency(e.target.value)}
          className="text-black uppercase font-semibold my-6 placeholder:text-center placeholder:capitalize rounded outline-4 border"
        />
        <button
          type="submit"
          className="rounded px-4 mx-3 mb-3 outline-2 dark:outline-amber-400 outline-[#0F0F0F] outline-offset-[3px] outline-double bg-button-variant text-text-variant font-semibold hover:brightness-110"
        >
          Convertir
        </button>
      </form>
      <div
        id="result"
        className={`rounded font-mono text-slate-100 bg-gray-800 my-6 w-fit border-l-[5px] ${borderColor}`}
      >
        <p className="bg-zinc-100/30 w-full font-semibold text-green-400">
          Última actualización de la API: {update}
        </p>
        <p>{result}</p>
        <p>Al día de la fecha {date}</p>
      </div>
    </div>
  );
}
