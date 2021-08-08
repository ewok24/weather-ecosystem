import { useEffect, useState } from 'react';
import { tap } from 'rxjs/operators';

import { getAllCityWeather } from '../weather-api/weather-api';
import { WeatherDisplay } from '../components/weather-display';

function useCurrentWeather() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const subscription = getAllCityWeather()
      .pipe(
        tap((result) => {
          setData(result);
        }),
      )
      .subscribe();
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return [data];
}

export const FetchPage = () => {
  const [currentWeather] = useCurrentWeather();
  return (
    <div>
      <ul>
        <li>Duplicate Requests</li>
      </ul>
      {currentWeather.map((city: any, index: number) => {
        const title = city?.city;
        const cityWeather = JSON.stringify(city);
        return <WeatherDisplay key={index} title={title} data={cityWeather} />;
      })}
    </div>
  );
};
