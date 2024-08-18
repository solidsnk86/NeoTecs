'use client';

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

function kelvinToCelsius(temp) {
  return temp - 273.15;
}

function formatTime(str) {
  const time = new Date(str * 1000).toLocaleTimeString('es-Es', {
    hour: '2-digit',
    minute: '2-digit',
  });
  return time;
}

function mapCondition(condition) {
  switch (condition) {
    case 'few clouds':
      return 'Leve nubosidad';
    case 'overcast clouds':
      return 'Nublado';
    case 'sunny':
      return 'Soleado';
    case 'clear sky':
      return 'Cielo despejado';
    case 'scattered clouds':
      return 'Nubes dispersas';
    case 'broken clouds':
      return 'Nubes desarmadas';
    case 'light rain':
      return 'Lluvia ligera';
    default:
      return condition;
  }
}

function getWeatherIconUrl(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

export const Weather = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/weather');
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
    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const { name } = data;
  const temperature = kelvinToCelsius(data.main.temp).toFixed(1);
  const feelsLike = kelvinToCelsius(data.main.feels_like).toFixed(1);
  const condition = mapCondition(data.weather[0].description);
  const humidity = data.main.humidity;
  const iconUrl = getWeatherIconUrl(data.weather[0].icon);
  const pressure = data.main.pressure;
  const windSpeed = data.wind.speed;
  const windDeg = data.wind.deg;
  const sunrise = formatTime(data.sys.sunrise);
  const sunset = formatTime(data.sys.sunset);
  const seaLevel = data.main.grnd_level;

  return (
    <div className="grid text-text-second justify-center mx-auto w-fit border dark:border-zinc-800 border-zinc-200 p-6 rounded-xl">
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
          Nivel suelo: {seaLevel} Mts. sobre nivel del mar
        </small>
      </aside>
    </div>
  );
};
