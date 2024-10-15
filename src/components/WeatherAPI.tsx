import {
  LucideThermometer,
  Droplets,
  ArrowDownWideNarrow,
  Wind,
  Compass,
  Sunrise,
  Sunset,
  Ruler,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { apiKey } from './Constants';
import { Weather } from './Weather';

export const WeatherAPI = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [obj, setObjetc] = useState({
    latitude: Number(),
    longitude: Number(),
  });

  useEffect(() => {
    const getPosition = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setObjetc({
          latitude: lat,
          longitude: lon,
        });
      });
    };

    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${obj.latitude}&lon=${obj.longitude}&appid=${apiKey}`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const weatherData = await res.json();
        setData(weatherData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPosition();
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, [obj.latitude, obj.longitude]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const { name } = data;
  const temperature = Weather.kelvinToCelsius(data.main.temp).toFixed(1);
  const feelsLike = Weather.kelvinToCelsius(data.main.feels_like).toFixed(1);
  const condition = Weather.mapConditionEs(data.weather[0].description);
  const humidity = data.main.humidity;
  const iconUrl = Weather.getWeatherIconUrl(data.weather[0].icon);
  const pressure = data.main.pressure;
  const windSpeed = data.wind.speed;
  const windDeg = data.wind.deg;
  const sunrise = Weather.formatTime(data.sys.sunrise);
  const sunset = Weather.formatTime(data.sys.sunset);
  const seaLevel = data.main.grnd_level;

  return (
    <div className="grid text-text-second justify-center mx-auto w-fit bg-bg-card border dark:border-zinc-800 border-zinc-200 p-6 rounded-xl z-50">
      <p>El tiempo en {name} hoy!</p>
      <div className=" inline-flex justify-center mx-auto">
        <p>{condition}</p>
        <img
          width={45}
          height={45}
          className="-translate-y-[9px]"
          src={iconUrl}
          alt={`Icono del tiempo: ${condition}`}
        />
      </div>
      <aside className="grid text-left">
        <small>
          <LucideThermometer className="inline w-4 h-4 -translate-y-[2px] mr-2" />
          Temperatura: {temperature} °C
        </small>
        <small>
          <LucideThermometer className="inline w-4 h-4 -translate-y-[2px] mr-2" />
          Sensación Térmica: {feelsLike} °C
        </small>
        <small>
          <Droplets className="inline w-4 h-4 -translate-y-[2px] mr-2" />
          Humedad: {humidity} %
        </small>
        <small>
          <ArrowDownWideNarrow className="inline w-4 h-4 -translate-y-[2px] mr-2" />
          Presión Atmosférica: {pressure} hPa
        </small>
        <small>
          <Wind className="inline w-4 h-4 -translate-y-[2px] mr-2" />
          Velocidad del viento: {windSpeed} Km/h
        </small>
        <small>
          <Compass className="inline w-4 h-4 -translate-y-[2px] mr-2" />
          Dirección del viento: {windDeg} °
        </small>
        <small>
          <Sunrise className="inline w-4 h-4 -translate-y-[2px] mr-2" />
          Amanecer: {sunrise} AM
        </small>
        <small>
          <Sunset className="inline w-4 h-4 -translate-y-[2px] mr-2" />
          Atardecer: {sunset} PM
        </small>
        <small className="relative">
          <Ruler className="inline w-4 h-4 -translate-y-[2px] mr-2" />
          Nivel: {seaLevel} Mts. sobre nivel del mar
        </small>
      </aside>
    </div>
  );
};
