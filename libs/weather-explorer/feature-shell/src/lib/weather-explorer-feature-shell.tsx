import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// React Query
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// RTK
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { fetchWeatherEpic } from './json-api/json-api.epic';
import { default as weatherReducer } from './json-api/json-api.slice';

const observableMiddleware = createEpicMiddleware();
const middlewares = [observableMiddleware];
function generateStore() {
  const store = configureStore({
    reducer: {
      apiWeather: weatherReducer,
    },
    middleware: [
      ...middlewares,
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
    ],
  });

  const rootEpic = combineEpics(fetchWeatherEpic);
  observableMiddleware.run(rootEpic);

  return store;
}
const generatedStore = generateStore();

// Pages
import { FetchPage } from './fetch/fetch';
import { ReactQueryPage } from './react-query/react-query';
import { JsonApiPage } from './json-api/json-api';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      retry: true,
      staleTime: 1000 * 60 * 1,
    },
  },
});

export function WeatherExplorerFeatureShell() {
  return (
    <Provider store={generatedStore}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/fetch">Fetch</Link>
                </li>
                <li>
                  <Link to="/react-query">React Query</Link>
                </li>
                <li>
                  <Link to="/json-api">JSON API</Link>
                </li>
                <li>
                  <Link to="/normalized">Normalized</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/fetch">
                <FetchPage />
              </Route>
              <Route path="/react-query">
                <ReactQueryPage />
              </Route>
              <Route path="/json-api">
                <JsonApiPage />
              </Route>
              <Route path="/normalized">{/* <JsonApiPage /> */}</Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

const Home = () => {
  return <h2>Welcome to the Weather Explorer App</h2>;
};
