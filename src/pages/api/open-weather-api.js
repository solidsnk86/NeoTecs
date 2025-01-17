import { fetchWeatherData } from '../../lib/fetch-weather-data';

export default async function GET(req, res) {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    res
      .status(402)
      .json({ message: 'You must provide the latitude and longitude params' });
  }

  try {
    const { main, coord, weather, wind, sys, name } = await fetchWeatherData({
      latitude: parseFloat(lat),
      longitude: parseFloat(lon),
    });

    if (!main || !coord || !weather) {
      res.status(400).json({
        status: res.status,
        message: 'Cannot get weather data',
        error_message: res.statusText,
      });
    }
    res
      .status(200)
      .json({ status: res.status, main, coord, weather, wind, sys, name });
  } catch (error) {
    res
      .status(500)
      .json({ status: res.status, message: 'Server error: ' + error });
  }
}
