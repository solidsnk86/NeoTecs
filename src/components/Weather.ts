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
      return '#334155'; // Azul oscuro tenue (frío extremo)
    } else if (temp <= 5) {
      return '#CBD5E1'; // Azul grisáceo claro (muy frío)
    } else if (temp <= 10) {
      return '#A5B4FC'; // Azul pastel (frío moderado)
    } else if (temp <= 15) {
      return '#93C5FD'; // Azul cielo suave (fresco)
    } else if (temp <= 20) {
      return '#A7F3D0'; // Verde agua pastel (templado)
    } else if (temp <= 25) {
      return '#FDE68A'; // Amarillo suave (cálido)
    } else if (temp <= 30) {
      return '#FBCFE8'; // Rosa pastel (calor moderado)
    } else if (temp <= 35) {
      return '#F9A8D4'; // Rosa más intenso (calor alto)
    } else {
      return '#F87171'; // Rojo tenue (calor extremo)
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
