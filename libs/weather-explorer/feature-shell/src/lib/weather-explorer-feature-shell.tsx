import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { FetchPage } from './fetch/fetch';
import { ReactQueryPage } from './react-query/react-query';

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
    <Router>
      <QueryClientProvider client={queryClient}>
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
                <Link to="/swr">SWR</Link>
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
            <Route path="/swr">{/* <Users /> */}</Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Router>
  );
}

const Home = () => {
  return <h2>Welcome to the Weather Explorer App</h2>;
};
