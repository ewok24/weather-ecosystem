import { Express } from 'express';

interface City {
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
}

const cities: City[] = [
  {
    name: 'Sydney',
    coord: {
      lon: -122.08,
      lat: 37.39,
    },
  },
  {
    name: 'Melbourne',
    coord: {
      lon: -122.08,
      lat: 37.39,
    },
  },
  {
    name: 'Houston',
    coord: {
      lon: -122.08,
      lat: 37.39,
    },
  },
  {
    name: 'New York',
    coord: {
      lon: -122.08,
      lat: 37.39,
    },
  },
  {
    name: 'Vancouver',
    coord: {
      lon: -122.08,
      lat: 37.39,
    },
  },
];

const currentWeather = {
  Sydney: {},
  default: {
    coord: {
      lon: -122.08,
      lat: 37.39,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    base: 'stations',
    main: {
      temp: 282.55,
      feels_like: 281.86,
      temp_min: 280.37,
      temp_max: 284.26,
      pressure: 1023,
      humidity: 100,
    },
    visibility: 16093,
    wind: {
      speed: 1.5,
      deg: 350,
    },
    clouds: {
      all: 1,
    },
    dt: 1560350645,
    sys: {
      type: 1,
      id: 5122,
      message: 0.0139,
      country: 'US',
      sunrise: 1560343627,
      sunset: 1560396563,
    },
    timezone: -25200,
    id: 420006353,
    name: 'Mountain View',
    cod: 200,
  },
};

export function addWeatherRoutes(app: Express) {
  app.use('/api/weather', (req, res, next) => {
    setTimeout(next, 2000);
  });
  app.get('/api/weather', (req, resp) => {
    const { q, lat, long } = req.query;
    const response = currentWeather[q as string] ?? currentWeather['default'];
    return resp.send(response);
  });
  app.get('/api/cities', (req, resp) => {
    const response = cities;
    return resp.send(response);
  });
}
