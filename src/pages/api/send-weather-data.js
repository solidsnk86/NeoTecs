import supabase from '../../components/utils/supabase';

export default async function sendWeatherData(req, res) {
  const {
    temperature,
    feelsLike,
    humidity,
    pressure,
    windSpeed,
    windDegree,
    sunrise,
    sunset,
  } = req.body;

  const objData = {
    temperature: temperature,
    feels_like: feelsLike,
    humidity: humidity,
    pressure: pressure,
    wind_speed: windSpeed,
    wind_degree: windDegree,
    sunrise: sunrise,
    sunset: sunset,
  };

  if (req.method === 'POST') {
    try {
      const { error } = await supabase
        .from('weather_data')
        .insert([JSON.parse(objData)]);

      if (error) {
        res.status(400).json({
          message: 'Cannot send data to supabase',
          error: error.message,
        });
      }
      res.status(200).json({ message: 'Data send succesfully' });
    } catch (err) {
      res.status(500).json({ message: 'Server error: ' + err });
    }
  } else {
    res.status(403).json({ message: 'Method not allowed' });
  }
}
