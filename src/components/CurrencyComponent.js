import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function CurrencyConverter() {
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState('');
  const [date, setDate] = useState('');
  const [update, setUpdate] = useState('');
  const [borderColor, setBorderColor] = useState('border-red-400');
  const [currencyResult, setCurrencyResult] = useState(0);
  const [amountToConvert, setAmountToConvert] = useState('');

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    setBorderColor('border-green-400');
    try {
      const response = await fetch(`/api/currency`);

      if (response.ok) {
        const data = await response.json();
        const rate = data.rates[currency.toUpperCase()];
        const currentDate = data.timestamp;
        const apiUpdateDate = data.update;

        if (rate !== undefined) {
          setResult(`1 USD es igual a $ ${rate.toFixed(2)} ${currency}.`);
          setDate(currentDate);
          setUpdate(apiUpdateDate);
          setCurrencyResult(rate.toFixed(2));
        } else {
          setResult('Moneda no válida.');
          setBorderColor('border-red-400');
        }
      }
    } catch (error) {
      setResult('Error al obtener datos de la API.');
      setBorderColor('border-amber-400');
    }
  };

  const currencyValue = () => {
    const amount = parseFloat(amountToConvert);

    if (!isNaN(amount)) {
      const calculatedResult = currencyResult * amount;
      setCurrencyResult(calculatedResult);
    } else {
      setCurrencyResult('');
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-fit justify-center mx-auto xl:block xl:justify-normal xl:m-0"
      >
        <label htmlFor="currency" className="mr-2 mt-4 list-css-span">
          Ingresa una divisa{' '}
          <span>
            divisas disponibles: ARS - BRL - EUR - GBP - BTC - COP - JPY - CHP -
            UYP - BBP - PGP:
          </span>
        </label>
        <input
          type="text"
          id="currency"
          value={currency}
          placeholder="Ingrese la Divisa"
          onChange={(e) => setCurrency(e.target.value)}
          className="text-black uppercase font-semibold my-6 p-1 placeholder:text-center placeholder:capitalize rounded outline-4 border border-zinc-300"
        />
        <button
          type="submit"
          className="rounded px-4 mx-3 mb-3 outline-2 dark:outline-amber-400 outline-[#0F0F0F] outline-offset-[2px] outline-double bg-button-variant text-text-variant font-semibold hover:brightness-110"
        >
          {isSubmitting ? 'Convirtiendo' : 'Convertir'}
        </button>
        <p>
          Podemos hacer la conversión del valor de la divisa para obtener un
          resultado concreto de acuerdo al monto indicado (La divisa principal
          es dólar a la divisa que se elija):
        </p>
      </form>
      <div
        id="result"
        className={` relative rounded font-mono text-slate-100 text-sm bg-gray-800 my-6 w-fit border-l-[5px] ${borderColor}`}
      >
        <p className="bg-zinc-100/30 w-full font-semibold text-green-400">
          Última actualización de la API: {update}
        </p>
        <p>{result}</p>
        <p>Al día de la fecha {date}</p>
        <aside className="ml-2 block">
          <input
            type="text"
            placeholder="Monto a convertir"
            onChange={(e) => setAmountToConvert(e.target.value)}
            className="text-black font-semibold my-6 placeholder:text-center p-1 rounded outline-4 border border-zinc-300"
          />
          <button
            onClick={(e) => {
              e.preventDefault(currencyValue());
            }}
            className="rounded px-4 mx-3 mb-3 outline-2 dark:outline-amber-400 outline-[#0F0F0F] outline-offset-[2px] outline-double bg-button-variant text-text-variant font-semibold hover:brightness-110"
          >
            Calcular
          </button>
          <p className="text-zinc-100 pb-2">
            {`U$D ${amountToConvert} es alrededor de  ` +
              currencyResult +
              ` ${currency.toUpperCase()}`}
          </p>
        </aside>
      </div>
    </div>
  );
}
