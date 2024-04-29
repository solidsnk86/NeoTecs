export default function locationExample(req, res) {
  res.status(200).json({
    success: true,
    data: 'Me lleva la cahetada',
    fecha: new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }),
  });
}
