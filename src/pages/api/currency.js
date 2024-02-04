import { currencyGoogleSheetsURL } from '../../components/Constants';

export default async function handlerCurrency(req, res) {
  'use-client';
  try {
    const fetchData = async () => {
      const response = await fetch(currencyGoogleSheetsURL);

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const csvItem = await response.text();
      const parsedItems = csvItem
        .split('\n')
        .slice(1)
        .map((row) => {
          const [currency, rates, update] = row
            .split(',')
            .map((item) => item.trim());
          return {
            currency,
            rates: parseFloat(rates),
            update,
          };
        });
      return parsedItems;
    };

    const currencyData = await fetchData();
    const lastUpdate = currencyData.length > 0 ? currencyData[0].update : '';
    const ratesObject = currencyData.reduce((acc, { currency, rates }) => {
      acc[currency] = rates;
      return acc;
    }, {});

    res.status(200).json({
      success: true,
      timestamp: new Date().toLocaleDateString('es-Es', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      base: 'USD',
      update: lastUpdate,
      rates: ratesObject,
    });
  } catch (error) {
    console.error('Error fetching and processing currency data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
