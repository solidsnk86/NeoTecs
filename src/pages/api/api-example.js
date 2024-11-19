import rates from './json-currency-data/rates.json';

export default async function apiExample(req, res) {
  try {
    res.status(200).json({
      succes: true,
      timestamp: new Date().toLocaleDateString('es-Es', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
      base: 'USD',
      rates,
      last_update: { date: '18 de Noviembre 2024' },
    });
  } catch (error) {
    console.error('Error fetching and processing currency data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
