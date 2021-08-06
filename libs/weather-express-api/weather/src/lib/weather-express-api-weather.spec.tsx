import { render } from '@testing-library/react';

import WeatherExpressApiWeather from './weather-express-api-weather';

describe('WeatherExpressApiWeather', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WeatherExpressApiWeather />);
    expect(baseElement).toBeTruthy();
  });
});
