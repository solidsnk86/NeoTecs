import supabase from '../../components/utils/supabase';

export default async function sendVisitData(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const {
      latitude,
      longitude,
      postal_code,
      city_name,
      country_name,
      country_flag,
      ip,
    } = body;

    if (!latitude || !longitude || !city_name || !country_name || !ip) {
      return res.status(400).json({
        status: 'fail',
        message: 'Missing required fields',
      });
    }

    const { data, error } = await supabase.from('visitors').insert([
      {
        latitude,
        longitude,
        postal_code,
        city_name,
        country_name,
        country_flag,
        ip,
      },
    ]);

    if (error) {
      console.error('Supabase error:', error);
      return res.status(400).json({
        status: 'fail',
        message: 'Cannot send data to supabase',
        error: error.message,
      });
    }

    return res.status(200).json({
      status: 'success',
      data,
    });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({
      status: 'fail',
      message: 'Server error',
      error: err.message,
    });
  }
}
