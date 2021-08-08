import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { WeatherDisplay } from '../components/weather-display';
import { FetchAllCityWeather } from './json-api.slice';

function useCurrentWeather() {
  const weatherState = useSelector((state: any) => state.apiWeather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchAllCityWeather);
  }, []);

  const { cities } = weatherState;
  return [cities];
}

export const JsonApiPage = () => {
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
