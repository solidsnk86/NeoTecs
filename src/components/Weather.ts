export class Weather {
  public static kelvinToCelsius(temp: number) {
    return temp - 273.15;
  }

  public static formatTime(seconds: number) {
    const time = new Date(seconds * 1000).toLocaleTimeString('es-Es', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return time;
  }

  public static mapConditionEs(condition: string) {
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

  public static getWeatherIconUrl(iconCode: any | string) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }

  public static getTemperatureColor = (temp: number): string => {
    if (temp <= 0) {
      return '#1E3A8A'; // Azul oscuro intenso (frío extremo)
    } else if (temp <= 5) {
      return '#3B82F6'; // Azul estándar (muy frío)
    } else if (temp <= 10) {
      return '#60A5FA'; // Azul claro (frío moderado)
    } else if (temp <= 15) {
      return '#93C5FD'; // Azul cielo (fresco)
    } else if (temp <= 20) {
      return '#22C55E'; // Verde brillante (templado)
    } else if (temp <= 25) {
      return '#FACC15'; // Amarillo cálido (cálido)
    } else if (temp <= 30) {
      return '#FB923C'; // Naranja brillante (calor moderado)
    } else if (temp <= 35) {
      return '#F87171'; // Rojo brillante (calor alto)
    } else {
      return '#B91C1C'; // Rojo intenso (calor extremo)
    }
  };

  public static async sendWeatherDataToSupabase(jsonData: any) {
    await fetch('/api/send-weather-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    });
  }
}
