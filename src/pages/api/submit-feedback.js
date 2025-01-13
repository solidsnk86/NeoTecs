import supabase from '../../components/utils/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, email, comentario } = req.body;

    const { data, error } = await supabase
      .from('feedback')
      .insert([{ nombre, email, comentario }]);

    if (!data) {
      return res
        .status(400)
        .json({ message: 'No se pudo enviar los datos', error });
    }

    return res.status(200).json({ success: true, data });
  } else {
    return res.status(405).json({ error: 'Método no permitido' });
  }
}
