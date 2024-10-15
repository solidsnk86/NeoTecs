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
}
