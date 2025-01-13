import supabase from '../../components/utils/supabase';

export default async function getVisitData(req, res) {
  try {
    const { data, error } = await supabase
      .from('visitors')
      .select('id, ip, city_name, country_name, country_flag, created_at')
      .order('created_at', { ascending: false })
      .limit(1);

    if (error) {
      res.status(400).json({
        message: 'Cannot get data from Supabase',
        error: error.message,
      });
    }

    if (!data) {
      res.status.json({ message: 'Database is empty' });
    }

    const dataDB = data.map((item) => {
      return {
        id: item.id,
        ip: item.ip,
        country: item.country_name,
        flag: item.country_flag,
        city: item.city_name,
        createdAt: item.created_at,
      };
    });

    res.status(200).json({ status: 'success', dataDB });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
}
