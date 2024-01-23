import { supabase } from '../../components/utils/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, email, comentario } = req.body;

    const { data, error } = await supabase
      .from('feedback')
      .insert([{ nombre, email, comentario }]);

    if (error) {
      console.log('Error al insertar datos en la base de datos', error);
      return res
        .status(500)
        .json({ error: 'Error al insertar datos en la base de datos', data });
    }
    return res.status(405).json({ error: 'Método no permitido' });
  }
}
