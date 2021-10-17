import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import User from './User.jsx';

const App = () => {
  return (
    <div className="page">
      <div className="page__content">
        <h1>Users</h1>
        <Router>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/users/github">Github</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users/facebook">Facebook</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/users/:userId">
              <User />
            </Route>
            <Route path="*">
              <span>Select a user please</span>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
