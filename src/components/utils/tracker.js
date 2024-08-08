import { useState, useEffect, useMemo } from 'react';
import { microlink } from '../../components/Constants';
import supabase from './supabase';
import { useRouter } from 'next/router';

function dateFormated(string) {
  const date = new Date(string).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return date;
}

// const IP1 = process.env.NEXT_PUBLIC_DATA_IP_1;
const IP2 = process.env.NEXT_PUBLIC_DATA_IP_2;

export default function Tracker() {
  const [visitData, setVisitData] = useState({});
  const [lastVisit, setLastVisit] = useState({});
  const router = useRouter();

  const local = useMemo(
    () => [
      `http://localhost:3000${router.asPath}`,
      `http://localhost:3001${router.asPath}`,
    ],
    [router.asPath],
  );

  const sendDataToSupabase = async (jsonData) => {
    await supabase.from('visitors').insert({
      ip_address: jsonData.ip.address,
      latitude: jsonData.coordinates.latitude,
      longitude: jsonData.coordinates.longitude,
      postal_code: jsonData.city.postalCode,
      city_name: jsonData.city.name,
      country_name: jsonData.country.name,
      country_flag: jsonData.country.flag,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(microlink);
        if (res.ok) {
          const jsonData = await res.json();
          setVisitData({
            city: {
              name: jsonData.city.name,
              postalCode: jsonData.city.postalCode,
            },
            country: {
              name: jsonData.country.name,
              flag: jsonData.country.flag,
            },
            ip: {
              address: jsonData.ip.address,
            },
            coordinates: {
              latitude: jsonData.coordinates.latitude,
              longitude: jsonData.coordinates.longitude,
            },
          });
          console.log(jsonData.ip.address);
          if (
            !local.includes(window.location.href) &&
            jsonData.ip.address !== IP2
          ) {
            sendDataToSupabase(jsonData);
          }
        } else {
          console.error(
            'Error fetching visit data:',
            res.status,
            res.statusText,
          );
        }
      } catch (error) {
        console.error('Error fetching visit data:', error);
      }
    };

    const fetchLastVisit = async () => {
      try {
        const { data, error } = await supabase
          .from('visitors')
          .select('id, city_name, country_name, country_flag, created_at')
          .order('created_at', { ascending: false })
          .limit(1);

        if (error) {
          console.error('Error fetching last visit data:', error);
        } else if (data.length > 0) {
          setLastVisit(data[0]);
        }
      } catch (error) {
        console.error('Error fetching last visit data:', error);
      }
    };

    fetchData();
    fetchLastVisit();
  }, [local]);

  return (
    <div className="text-text-primary mt-5 w-fit justify-center mx-auto p-4 space-y-2 visits">
      <div id="visit" className="px-3 text-center text-xs">
        {visitData.city && (
          <div className="flex mx-auto justify-center">
            <p className="font-mono text-[10px]">
              La última visita a NeoTecs fue el{' '}
              {dateFormated(lastVisit.created_at)}, desde {lastVisit.city_name},{' '}
              {lastVisit.country_name} {lastVisit.country_flag}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
