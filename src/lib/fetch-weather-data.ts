interface WeatherApiProps {
  latitude: number;
  longitude: number;
}

export const fetchWeatherData = async ({
  latitude,
  longitude,
}: WeatherApiProps) => {
  const API_ID = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_ID}`,
  );
  const jsonData = await response.json();
  return jsonData;
};
