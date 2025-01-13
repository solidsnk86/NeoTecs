export class GetLocation {
  constructor() {
    this();
  }

  static async getData() {
    const response = await fetch(
      'https://solid-geolocation.vercel.app/location',
    );
    const data = await response.json();
    return data;
  }

  static async ip() {
    const data = await this.getData();
    return data.ip;
  }

  static async city() {
    const data = await this.getData();
    return data.city.name;
  }

  static async country() {
    const data = await this.getData();
    return data.country.name;
  }

  static async flag() {
    const data = await this.getData();
    return data.country.emoji_flag;
  }
}
