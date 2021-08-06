/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import * as express from 'express';
import { addWeatherRoutes } from '@weather-ecosystem/weather-express-api/routes-weather';

const app = express();

app.get('*', (req, res) => {
  console.log(`GET ${req.url}?${JSON.stringify(req.query)}`);
});
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to weather-express-api!' });
});
addWeatherRoutes(app);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
