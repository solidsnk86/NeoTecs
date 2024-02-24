import { useState, useEffect } from 'react';

const DataCurrency = () => {
  const [currency, setCurrency] = useState('');

  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch('/api/currency');
      const data = await response.json();
      setCurrency(data);
    };

    dataFetch();
  }, []);

  return (
    <div className="xl:w-1/2 justify-center mx-auto p-2 overflow-hidden overflow-x-auto">
      <table className="table border-collapse border p-2 flex-wrap text-balance">
        <thead className=" bg-bg-card">
          <tr className="border">
            <th>Divisas hoy {currency.timestamp}</th>
            <th>Tipo de Cambio</th>
            <th>Actualización: {currency.update}</th>
          </tr>
        </thead>
        <tbody>
          {currency && (
            <>
              <tr>
                <td>{`1 ${currency.base} es igual a`}</td>
                <td>{currency.rates.EUR}</td>
                <td>Euros</td>
              </tr>
              <tr>
                <td>{`1 ${currency.base} es igual a`}</td>
                <td>{currency.rates.ARS}</td>
                <td>Peso Argentino</td>
              </tr>
              <tr>
                <td>{`1 ${currency.base} es igual a`}</td>
                <td>{currency.rates.BRL}</td>
                <td>Real Brasilero</td>
              </tr>
              <tr>
                <td>{`1 ${currency.base} es igual a`}</td>
                <td>{currency.rates.CHP}</td>
                <td>Peso Chileno</td>
              </tr>
              <tr>
                <td>{`1 ${currency.base} es igual a`}</td>
                <td>{currency.rates.GBP}</td>
                <td>Libra Esterlina</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataCurrency;
