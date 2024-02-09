import { useState, useEffect } from 'react';
import FormatDate from '../FormatDate';
import { microlink } from '../../components/Constants';
import supabase from './supabase';

export default function Tracker() {
  const [visitData, setVisitData] = useState({});
  const [lastVisit, setLastVisit] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(microlink);
        if (res.ok) {
          const jsonData = await res.json(microlink);
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

          sendDataToSupabase(jsonData);
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
          const lastVisitData = data[0];
          setLastVisit(lastVisitData);
        }
      } catch (error) {
        console.error('Error fetching last visit data:', error);
      }
    };

    fetchData();
    fetchLastVisit();
  }, []);

  return (
    <div className="text-text-primary mt-5 w-fit justify-center mx-auto p-4 space-y-2">
      <div id="visit" className="px-3 text-center text-xs">
        {visitData.city && (
          <div className="flex mx-auto justify-center">
            <p className="xl:text-sm font-mono text-xs">
              La última visita a NeoTecs fué el{' '}
              {FormatDate(lastVisit.created_at)} desde {lastVisit.city_name},{' '}
              {lastVisit.country_name} {lastVisit.country_flag}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
