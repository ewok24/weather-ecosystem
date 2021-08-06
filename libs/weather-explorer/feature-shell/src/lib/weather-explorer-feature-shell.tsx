import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function WeatherExplorerFeatureShell() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/react-query">About</Link>
            </li>
            <li>
              <Link to="/swr">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/react-query">{/* <About /> */}</Route>
          <Route path="/swr">{/* <Users /> */}</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Welcome to the Weather Explorer App</h2>;
}
