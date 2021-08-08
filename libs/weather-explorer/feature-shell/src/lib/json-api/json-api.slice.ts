import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  cities: any[];
  fetching: boolean;
  fetched: boolean;
  error: any;
}

const initialState = {
  cities: [],
  fetching: false,
  fetched: false,
  error: null,
} as WeatherState;

const counterSlice = createSlice({
  name: 'weatherState',
  initialState,
  reducers: {
    FetchAllCityWeather(state) {
      state.fetched = false;
      state.fetching = true;
    },
    FetchAllCityWeatherSuccess(state, action: PayloadAction<any[]>) {
      state.fetched = true;
      state.fetching = false;
      state.cities = action.payload;
    },
    FetchAllCityWeatherError(state, action: PayloadAction<any>) {
      state.fetched = false;
      state.fetching = false;
      state.error = '';
    },
  },
});

export const {
  FetchAllCityWeather,
  FetchAllCityWeatherSuccess,
  FetchAllCityWeatherError,
} = counterSlice.actions;

export default counterSlice.reducer;
