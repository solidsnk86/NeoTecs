export default function FormatData(dataString) {
  const formated = new Date(dataString).toLocaleDateString('es-Es', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  return formated;
}
