import { forkJoin, from, of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

export function getCities() {
  return fromFetch(`/api/cities`).pipe(
    switchMap((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return of({ error: true, message: `Error ${response.status}` });
      }
    }),
    catchError((err) => {
      console.error(err);
      return of({ error: true, message: err.message });
    }),
    tap((result) => console.log('getCities > result', result)),
  );
}

export function getWeather(query?: any) {
  return fromFetch(
    `/api/weather${query ? '?' + JSON.stringify(query) : ''}`,
  ).pipe(
    switchMap((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return of({ error: true, message: `Error ${response.status}` });
      }
    }),
    catchError((err) => {
      console.error(err);
      return of({ error: true, message: err.message });
    }),
    tap((result) => console.log('getWeather > result', result)),
  );
}

export function getAllCityWeather() {
  return getCities().pipe(
    switchMap((cities: any[]) => {
      return forkJoin(
        cities.map((city) => {
          return getWeather({
            q: city?.name,
          }).pipe(
            map((weather) => {
              return {
                ...weather,
                city: city?.name,
              };
            }),
          );
        }),
      );
    }),
    tap((result) => console.log('getAllCityWeather > result', result)),
  );
}
