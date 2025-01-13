import { useState, useEffect } from 'react';
import { DateFormat } from '@/lib/date-formatter';
import { GetLocation } from '@/lib/GetLocation';
import { sendDataToSupabase } from './send-data';

export default function Tracker() {
  const [visitData, setVisitData] = useState({});
  const [lastVisit, setLastVisit] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newVisitData = {
          latitude: await GetLocation.latitude(),
          longitude: await GetLocation.longitude(),
          postal_code: await GetLocation.postalCode(),
          city_name: await GetLocation.city(),
          country_name: await GetLocation.country(),
          country_flag: await GetLocation.flag(),
          ip: await GetLocation.ip(),
        };

        setVisitData(newVisitData);

        if (lastVisit.ip !== newVisitData.ip) {
          await sendDataToSupabase(newVisitData);
        }
      } catch (error) {
        console.error('Error fetching visit data:', error);
      }
    };

    fetchData();
  }, [lastVisit.ip]);

  const getLastVisit = async () => {
    try {
      const response = await fetch('/api/visit-data');
      if (!response.ok)
        throw new Error('Cannot get api data: ' + response.statusText);
      const data = await response.json();
      setLastVisit(data.dataDB[0]);
    } catch (error) {
      console.error('Error getting last visit:', error);
    }
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
