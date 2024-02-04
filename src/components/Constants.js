export const githubMarkdownURL =
  'https://raw.githubusercontent.com/solidsnk86/neo-scraper/master/LEEME.md';

export const currencyGoogleSheetsURL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQXKUu36nLoEr2X2cXCLAy68aqjUKVavdWplNBUQaGhfYV0WifoyMlCXs3-vfLijDhRDka2jjHsLIsi/pub?output=csv';

export const googleSheetURL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRBJ2ICoQMLS-Dfem1ha7yjJQKMgTbZu9PExFjGh2rh6Pj4sgYTl2dBpJw02PQRckCG0SSpaiL6Vwwl/pub?output=csv';

const user = 'AIzaSyCu_A2nFDYi0TWRgASZJz89Zkuk_yIGhLE';
export const youTube = user;

export default function sendWhatsapp(id, price) {
  const wapNumber = '+5492604586538';
  const wapMessage = encodeURIComponent(
    `Buenas estoy interesado en el dibujo de ${id}! El cual tiene un importe de U$D ${price}. ¿El envío está incluido?`,
  );
  const wapUrl = `https://wa.me/${wapNumber}?text=${wapMessage}`;
  window.open(wapUrl);
}
