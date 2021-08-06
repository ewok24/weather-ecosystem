import { weatherExpressApiRoutesWeather } from './weather-express-api-routes-weather';

describe('weatherExpressApiRoutesWeather', () => {
  it('should work', () => {
    expect(weatherExpressApiRoutesWeather()).toEqual(
      'weather-express-api-routes-weather'
    );
  });
});
