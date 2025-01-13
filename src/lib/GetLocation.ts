export class GetLocation {
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

  static async postalCode() {
    const data = await this.getData();
    return data.city.postal_code;
  }

  static async country() {
    const data = await this.getData();
    return data.country.name;
  }

  static async flag() {
    const data = await this.getData();
    return data.country.emoji_flag;
  }

  static async latitude() {
    const data = await this.getData();
    return data.coords.latitude;
  }

  static async longitude() {
    const data = await this.getData();
    return data.coords.longitude;
  }
}
