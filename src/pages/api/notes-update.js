import supabase from '../../components/utils/supabase';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id, title } = req.body;

    try {
      const { data, error } = await supabase
        .from('notes')
        .update({ title })
        .match({ id });

      if (error) {
        return res
          .status(500)
          .json({ error: 'Cannot update data', details: error.message });
      } else {
        return res
          .status(200)
          .json({
            success: true,
            message: 'Data was updated successfully',
            data,
          });
      }
    } catch (error) {
      return res
        .status(500)
        .json({
          error: 'Unexpected error updating data',
          details: error.message,
        });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
