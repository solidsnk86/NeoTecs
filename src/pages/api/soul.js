import configureCPE from '../../components/utils/configureCPE';

function timeStamp() {
  const date = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return date;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { ip, userName, password } = req.body;
    try {
      await configureCPE(ip, userName, password);
      res.status(200).json({
        success: true,
        timestamp: timeStamp(),
        message: 'Conexión exitosa.',
      });
    } catch (error) {
      console.error('No fue posible conectarse al servidor:', error);
      res.status(500).json({
        success: false,
        timestamp: timeStamp(),
      });
    }
  } else {
    res.status(405).end(`Metodo ${req.method} no permitido`);
  }
}
