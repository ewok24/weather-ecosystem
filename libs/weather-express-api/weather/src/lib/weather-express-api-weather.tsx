import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WeatherExpressApiWeatherProps {}

const StyledWeatherExpressApiWeather = styled.div`
  color: pink;
`;

export function WeatherExpressApiWeather(props: WeatherExpressApiWeatherProps) {
  return (
    <StyledWeatherExpressApiWeather>
      <h1>Welcome to WeatherExpressApiWeather!</h1>
    </StyledWeatherExpressApiWeather>
  );
}

export default WeatherExpressApiWeather;
