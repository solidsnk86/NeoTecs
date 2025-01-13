import supabase from '../../components/utils/supabase';

export default async function sendVisitData(req, res) {
  const {
    latitude,
    longitude,
    postal_code,
    city_name,
    country_name,
    country_flag,
    ip,
  } = req.body;

  if (req.method === 'POST') {
    try {
      const { error } = await supabase
        .from('visitors')
        .insert([
          {
            latitude,
            longitude,
            city_name,
            country_name,
            country_flag,
            postal_code,
            ip,
          },
        ]);
      if (error) {
        res
          .status(400)
          .json({ status: 'fail', message: 'Cannot send data to supabase' });
      }
    } catch (err) {
      res
        .status(500)
        .json({ status: 'fail', message: 'Server error', error: err });
    }
  } else {
    res.status(403).json({ message: 'Not allowed method' });
  }
}
