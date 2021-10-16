import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contacts from './Contacts';
import Home from './Home';
import Products from './Products';
import PageNotFound from './PageNotFound';

const App = () => (
  <div className="page">
    <BrowserRouter>
    <Switch>
      <Route exact path="/"> <Home /> </Route>
      <Route path="/products"> <Products /> </Route>
      <Route path="/contacts"> <Contacts /> </Route>
      <Route path="*"> <PageNotFound /> </Route>
    </Switch>
     </BrowserRouter >
  </div>
  );

export default App;
