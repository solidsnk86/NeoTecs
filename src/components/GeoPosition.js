import { useState, useEffect } from 'react';
import { getCoords } from './utils/getCoords';
import { Info } from 'lucide-react';

export const GeoPositionCard = () => {
  const [location, setLocation] = useState({
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
      MAC5G: '',
    },
  });
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [status, setStatus] = useState({});

  const getCityLocation = async () => {
    try {
      const { lat, lon } = await getCoords();
      const response = await fetch(
        `https://calcagni-gabriel.vercel.app/api/geolocation?lat=${lat}&lon=${lon}`,
      );
      if (!response.ok) {
        throw new Error(`Response error: ${response.statusText}`);
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching location:', error);
      return null;
    }
  };

  useEffect(() => {
    async function fetchInitialData() {
      setIsLoading(true);
      const dataLocation = await getCityLocation();
      if (dataLocation) {
        setLocation(dataLocation);
      }
      setIsLoading(false);
    }
    fetchInitialData();
  }, []);

  const sendQuery = async (searchQuery) => {
    try {
      setIsLoading(true);
      const { lat, lon } = await getCoords();
      const response = await fetch(
        `https://calcagni-gabriel.vercel.app/api/geolocation?lat=${lat}&lon=${lon}&query=${searchQuery}`,
      );
      if (!response.ok) {
        throw new Error(`Response error: ${response.statusText}`);
      }
      const data = await response.json();
      setSearchResult(data);
    } catch (error) {
      console.error('Error searching antenna:', error);
      setSearchResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      await sendQuery(query);
    }
  };

  const InfoRow = ({ label, value }) => (
    <div className="flex items-center space-x-2">
      <span className="text-zinc-400 text-sm">{label}:</span>
      <span className="text-text-primary text-sm font-medium">
        {isLoading ? 'Cargando...' : value || 'No disponible'}
      </span>
    </div>
  );

  const writeMAC = (mac = '') => {
    return mac ? mac.split(' ').join('-') : 'No disponible';
  };

  // const configure = async () => {
  //   const response = await fetch(
  //     `https://bot-config-self.vercel.app/?SSID=${
  //       location.closest_wifi.antenna
  //     }&MAC=${
  //       location.closest_wifi.MAC5G
  //     }&distance=${location.closest_wifi.distance.split('mts')}`,
  //   );
  //   const data = await response.json();
  //   setStatus(data);
  // };

  return (
    <div className="xl:max-w-xl w-full justify-center mx-auto my-24 border border-zinc-200/50 dark:border-zinc-800/50 p-3 rounded-[14px] bg-zinc-100 dark:bg-zinc-900 relative text-text-primary shadow-md overflow-hidden">
      <h2
        title="Información válida para la provincia de San Luis"
        className="font-semibold text-2xl py-3 px-3 items-center flex gap-2 mx-auto justify-center"
      >
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
          <InfoRow label="MAC" value={writeMAC(location.closest_wifi.MAC)} />
          <InfoRow
            label="MAC-5Ghz"
            value={writeMAC(location.closest_wifi.MAC5G)}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-2 pt-4"
        >
          <div className="md:flex grid justify-center mx-auto md:gap-4 gap-2">
            <input
              type="text"
              name="antenna"
              placeholder="Nombre de la antena..."
              className="border border-zinc-100 dark:border-zinc-800/50 rounded-md p-1 bg-zinc-50 dark:bg-transparent placeholder:text-base"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="py-[2px] md:w-24 px-2 text-white dark:bg-zinc-800 bg-[#0F0F0F] rounded-md border border-zinc-200 dark:border-zinc-700/50 hover:brightness-110 text-base disabled:cursor-not-allowed"
            >
              {isLoading ? 'Buscando...' : 'Buscar'}
            </button>
          </div>
          {/* {status && <small>{status.message}</small>} */}
        </form>
        {searchResult && (
          <div className="mt-4 grid md:grid-cols-2 grid-cols-1 gap-2">
            <InfoRow label="Antena" value={searchResult.antenna?.name} />
            <InfoRow label="Distancia" value={searchResult.distance} />
            <InfoRow label="MAC" value={writeMAC(searchResult.MAC)} />
            <InfoRow label="MAC-5G" value={writeMAC(searchResult.MAC5G)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GeoPositionCard;
