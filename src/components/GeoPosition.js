import { useState, useEffect } from 'react';
import { getCoords } from './utils/getCoords';
import { Info } from 'lucide-react';

export const GeoPosotionBadge = () => {
  const [location, setLocataion] = useState({
    city: '',
    state: '',
    country: '',
    city_coords: {
      latitude: 0,
      longitude: 0,
    },
    center_city: '',
    current_position: { latitude: 0, longitude: 0 },
    closest_wifi: {
      antenna: '',
      distance: '',
      type: '',
      MAC: '',
    },
  });

  const getCityLocation = async () => {
    const { lat, lon } = await getCoords();
    const response = await fetch(
      `https://calcagni-gabriel.vercel.app/api/geolocation?lat=${lat}&lon=${lon}`,
    );
    if (!response.ok) console.error('Response error: ', response.statusText);
    const jsonData = await response.json();
    return jsonData;
  };

  useEffect(() => {
    async function GET() {
      const dataLocation = await getCityLocation();
      setLocataion(dataLocation);
    }
    GET();
  }, []);

  const InfoRow = ({ label, value }) => (
    <div className="flex items-center space-x-2">
      <span className="text-zinc-400 text-sm">{label}:</span>
      <span className="text-text-primary text-sm font-medium">
        {value === '' ? 'Cargando' : value}
      </span>
    </div>
  );

  return (
    <div
      className={`w-fit justify-center mx-auto my-24 border border-zinc-200/50 dark:border-zinc-800/50 p-3 rounded-[14px]
      bg-zinc-100 dark:bg-zinc-900 relative text-text-primary shadow-md`}
    >
      <h2 className="font-semibold text-2xl py-3 px-3 items-center flex gap-2 mx-auto justify-center">
        <Info />
        Información WiFi Gob. San Luis
      </h2>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoRow label="Ciudad" value={location.city} />
          <InfoRow label="Provincia" value={location.state} />
          <InfoRow label="País" value={location.country} />
          <InfoRow
            label="Antena más próxima"
            value={location.closest_wifi.antenna}
          />
          <InfoRow label="Distancia" value={location.closest_wifi.distance} />
          <InfoRow label="Tipo" value={location.closest_wifi.type} />
        </div>
      </div>
    </div>
  );
};
