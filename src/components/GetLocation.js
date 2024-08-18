import { microlink } from './Constants';

export default async function GetLocation() {
  const res = await fetch(microlink);
  const dataLocation = await res.json();

  return dataLocation.city.name;
}
