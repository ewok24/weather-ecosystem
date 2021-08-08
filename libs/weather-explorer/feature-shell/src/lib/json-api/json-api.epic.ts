import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  FetchAllCityWeather,
  FetchAllCityWeatherError,
  FetchAllCityWeatherSuccess,
} from './json-api.slice';
import { getAllCityWeather } from '../weather-api/weather-api';

export const fetchWeatherEpic = (action$: any) =>
  action$.pipe(
    ofType(FetchAllCityWeather),
    switchMap((action) => getAllCityWeather()),
    map((allCityWeather: any[]) => FetchAllCityWeatherSuccess(allCityWeather)),
    catchError((error) => of(FetchAllCityWeatherError(error))),
  );
