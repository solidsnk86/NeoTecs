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
      return '#1E3A8A';
    } else if (temp <= 5) {
      return '#E0FFFF';
    } else if (temp <= 10) {
      return '#ADD8E6';
    } else if (temp <= 15) {
      return '#87CEEB';
    } else if (temp <= 20) {
      return '#98FB98';
    } else if (temp <= 25) {
      return '#FFFF00';
    } else if (temp <= 30) {
      return '#FFA500';
    } else if (temp <= 35) {
      return '#FF4500';
    } else {
      return '#FF0000';
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
