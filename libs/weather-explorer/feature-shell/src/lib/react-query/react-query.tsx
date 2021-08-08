import { useQuery } from 'react-query';

import { getCities } from '../weather-api/weather-api';
import { CityWeatherContainer } from './city-weather';

export const ReactQueryPage = () => {
  const {
    isLoading,
    error,
    data: cities,
  } = useQuery(['cities'], () => getCities().toPromise());

  if (isLoading) return <h2>Loading cities...</h2>;

  if (error) return <h2>An error has occurred: ${error}</h2>;

  return (
    <div>
      <ul>
        <li>De-dupe Requests</li>
        <li>Auto-fetch (e.g. on window focus)</li>
        {/* <li>Cached on refresh</li> */}
      </ul>
      {cities.map((city: any, index: number) => {
        const title = city?.name;
        return <CityWeatherContainer key={index} city={title} />;
      })}
    </div>
  );
};
