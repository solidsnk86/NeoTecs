export class GetLocation {
  static async getData() {
    const response = await fetch(
      'https://solid-geolocation.vercel.app/location',
    );
    const data = await response.json();
    return data;
  }

  public static async getPrecisionLocation(
    latitude: number,
    longitude: number,
  ) {
    const response = await fetch(
      `https://calcagni-gabriel.vercel.app/geolocation?lat${latitude}&lon=${longitude}`,
    );
    const jsonData = await response.json();
    return jsonData;
  }

  public static async ip() {
    const data = await this.getData();
    return data.ip;
  }

  public static async city() {
    const data = await this.getData();
    return data.city.name;
  }

  public static async postalCode() {
    const data = await this.getData();
    return data.city.postalCode;
  }

  public static async country() {
    const data = await this.getData();
    return data.country.name;
  }

  public static async flag() {
    const data = await this.getData();
    return data.country.emojiFlag;
  }

  public static async latitude() {
    const data = await this.getData();
    return data.coords.latitude;
  }

  static async longitude() {
    const data = await this.getData();
    return data.coords.longitude;
  }
}
