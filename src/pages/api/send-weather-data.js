import supabase from '../../components/utils/supabase';

export default async function sendWeatherData(req, res) {
  const { temp, feels, humi, press, speed, degree, sunri, suns } = req.body;

  const objData = {
    temperature: temp,
    feels_like: feels,
    humidity: humi,
    pressure: press,
    wind_speed: speed,
    wind_degree: degree,
    sunrise: sunri,
    sunset: suns,
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
