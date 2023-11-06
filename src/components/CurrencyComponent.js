import React, { useState } from 'react';

export default function CurrencyConverter() {
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState('');
  const [borderColor, setborderColor] = useState('border-red-400');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setborderColor('border-green-400');

    try {
      const response = await fetch(`/api/currency`);

      if (response.ok) {
        const data = await response.json();
        const rate = data.rates[currency.toUpperCase()];

        if (rate !== undefined) {
          setResult(`1 USD es igual a $ ${rate.toFixed(2)} ${currency}.`);
        } else {
          setResult('Moneda no válida.');
          setborderColor('border-red-400');
        }
      } else {
        setResult('Error al obtener datos de la API.');
      }
    } catch (error) {
      console.log('Error:', error);
      setResult('Error al obtener datos de la API.');
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
          Ingresa una divisa (por ejemplo: ARS, BRL, EUR, GBP, etc):
        </label>
        <input
          type="text"
          id="currency"
          value={currency}
          placeholder="Ingrese la Divisa"
          onChange={(e) => setCurrency(e.target.value)}
          className="text-black uppercase font-semibold my-6 placeholder:text-center placeholder:capitalize rounded outline-4"
        />
        <button
          type="submit"
          className="rounded px-4 mx-3 mb-3 outline-2 outline-amber-400 outline-offset-[3px] outline-double bg-gray-800 hover:brightness-150"
        >
          Convertir
        </button>
      </form>
      <div
        id="result"
        className={`rounded font-mono  bg-gray-800 px-1 my-6 w-fit border-l-[5px] ${borderColor}`}
      >
        {result}
      </div>
    </div>
  );
}
