import supabase from '../components/utils/supabase';

export class Notes {
  static async get() {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      throw new Error(
        `Error al obtener notas desde supabase: ${error.message}`,
      );
    }

    return data;
  }

  static async create(content) {
    const { data, error } = await supabase.from('notes').insert(content);

    if (error) {
      throw new Error(`Error al crear la nota: ${error.message}`);
    }

    await this.get();

    return data;
  }

  static async update(id, content) {
    const { error } = await supabase
      .from('notes')
      .update(content)
      .match({ id });

    if (error) {
      throw new Error(`Error al actualizar la nota: ${error.message}`);
    }

    const { data, error: newError } = await supabase
      .from('notes')
      .select()
      .order('created_at', { ascending: false });

    if (newError) {
      console.error(
        'Error al recibir las notas actualizadas',
        newError.message,
      );
    }

    return data;
  }

  static async delete(id) {
    const { error } = await supabase
      .from('notes')
      .delete()
      .match({ id })
      .select();

    if (error) {
      throw new Error(`Error al borrar la nota: ${error.message}`);
    }

    const { data, error: newError } = await supabase
      .from('notes')
      .select()
      .order('created_at', { ascending: false });

    if (newError) {
      console.error(
        'Error al recibir las notas actualizadas',
        newError.message,
      );
    }

    return data;
  }
}
