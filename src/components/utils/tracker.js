import { useState, useEffect } from 'react';

import { DateFormat } from '@/lib/date-formatter';

export default function Tracker() {
  const [visitData, setVisitData] = useState({
    latitude: 0,
    longitude: 0,
    postal_code: '',
    city_name: '',
    country_name: '',
    country_flag: '',
    ip: '',
  });
  const [lastVisit, setLastVisit] = useState([]);

  const sendDataToSupabase = async (objData) => {
    await fetch('/api/send-visit-data', {
      method: 'POST',
      body: JSON.stringify(objData),
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://solid-geolocation.vercel.app/location',
        );
        if (res.ok) {
          const jsonData = await res.json();
          setVisitData({
            latitude: jsonData.coords.latitude,
            longitude: jsonData.coords.longitude,
            postal_code: jsonData.city.postal_code,
            city_name: jsonData.city.name,
            country_name: jsonData.country.name,
            country_flag: jsonData.country.emoji_flag,
            ip: jsonData.ip,
          });
          const currentIP = jsonData.ip;

          if (lastVisit.ip !== currentIP) {
            sendDataToSupabase(visitData);
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

    fetchData();
  }, []);

  const getLastVisit = async () => {
    const response = await fetch('/api/visit-data');
    if (!response.ok) console.error('Cannot get api data', response.statusText);
    const data = await response.json();
    setLastVisit(data.dataDB[0]);
  };

  useEffect(() => {
    getLastVisit();
  }, []);

  return (
    <div className="text-text-primary mt-5 w-fit justify-center mx-auto p-4 space-y-2 visits">
      <div id="visit" className="px-3 text-center text-xs">
        <div className="flex mx-auto justify-center">
          <p className="font-mono text-[10px]">
            La última visita a NeoTecs fue el{' '}
            {DateFormat.dateAndTime({ ts: lastVisit.createdAt })} desde{' '}
            {lastVisit.city} {lastVisit.country} {lastVisit.flag}
          </p>
        </div>
      </div>
    </div>
  );
}
