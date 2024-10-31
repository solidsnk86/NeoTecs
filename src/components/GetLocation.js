import { microlink } from './Constants';

export class GetLocation {
  constructor() {
    this();
  }

  static async getData() {
    const response = await fetch(microlink);
    const data = await response.json();
    return data;
  }

  static async ip() {
    const data = await this.getData();
    return data.ip.address;
  }

  static async city() {
    const data = await this.getData();
    return data.city.name;
  }

  static async province() {
    let data = await this.getData();
    data = data.timezone.replace(/.*\//g, '');
    return data.replace('_', ' ');
  }

  static async country() {
    const data = await this.getData();
    return data.country.name;
  }

  static async flag() {
    const data = await this.getData();
    return data.country.flag;
  }
}
