import { supabase } from '../../components/utils/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, email, comentario } = req.body;

    const { data, error } = await supabase
      .from('feedback')
      .insert([{ nombre, email, comentario }]);

    const file = req.files && req.files.imagen;

    if (file) {
      const { data: storageData, error: storageError } = await supabase.storage
        .from('neotecs-feed')
        .upload(file.tempFilePath, {
          destination: `feedback/${file.name}`,
        });

      if (storageError) {
        return res.status(500).json({ error: 'Error al subir la imagen' });
      }

      if (error) {
        return res.status(500).json({ error: 'Error al enviar feedback' });
      }
    }

    return res.status(200).json({ success: true, data });
  } else {
    return res.status(405).json({ error: 'Método no permitido' });
  }
}
