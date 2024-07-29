import supabase from '../../components/utils/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title } = req.body;

    const { data, error } = await supabase.from('notes').insert([{ title }]);

    if (error) {
      return res.status(500).json({
        error: 'Error sendindg notes',
        details: error.message,
      });
    }

    return res
      .status(200)
      .json({ success: true, message: 'Data was sent succesfully', data });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
