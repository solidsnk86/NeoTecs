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
      rates: {
        ARS: '857.39',
        EUR: '0.93',
        GBP: '0.79',
        BRL: '4.95',
        COP: '3939',
        JPY: '149',
        BTC: '0.000002',
        CHP: '970',
        UYP: '39.06',
        BBP: '6.9',
        PGP: '7280',
        AUD: '1.29',
        CAD: '1.25',
        INR: '74.93',
        MXN: '20.27',
        NZD: '1.37',
        SGD: '1.34',
        ZAR: '15.46',
        CNY: '6.43',
        HKD: '7.78',
        KRW: '1177.50',
        TRY: '9.35',
        IDR: '14220',
        RUB: '75.85',
        SEK: '8.60',
        CHF: '0.91',
        NOK: '9.15',
      },
    });
  } catch (error) {
    console.error('Error fetching and processing currency data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
