import { useQuery } from 'react-query';

import { getWeather } from '../weather-api/weather-api';
import { WeatherDisplay } from '../components/weather-display';

export const CityWeatherContainer: React.FC<{
  city: string;
}> = ({ city }) => {
  const { isLoading, error, data } = useQuery(['weather', { city }], () =>
    getWeather({
      method: 'react-query',
      q: city,
    }).toPromise(),
  );

  if (isLoading) return <h2>Loading {city}...</h2>;

  if (error) return <h2>An error has occurred: ${error}</h2>;

  const cityWeather = JSON.stringify(data);

  return <WeatherDisplay title={city} data={cityWeather} />;
};
