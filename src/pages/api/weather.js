import GetLocation from '../../components/GetLocation';

export default async function handler(req, res) {
  const city = await GetLocation();
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
}
