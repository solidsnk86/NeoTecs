const EARTH_RAIDUS = 6378137;
const square = (num: number) => num * num;

const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180.0;

interface HaversineProps {
  locationA: { lat: number; lon: number };
  locationB: { lat: number; lon: number };
}

export const haversine = ({ locationA, locationB }: HaversineProps) => {
  // Conversión de grados a radianes
  const latitudeA = degreesToRadians(locationA.lat);
  const latitudeB = degreesToRadians(locationB.lat);
  const longitudeA = degreesToRadians(locationA.lon);
  const longitudeB = degreesToRadians(locationB.lon);
  // Fórmula de Haversine
  const formula =
    square(Math.sin((latitudeB - latitudeA) / 2)) +
    Math.cos(latitudeA) *
      Math.cos(latitudeB) *
      square((longitudeB - longitudeA) / 2);
  // Calcular distancia usando la fórmula de Haversine
  const distance = 2 * EARTH_RAIDUS * Math.asin(Math.sqrt(formula));
  return distance / 1000;
};
