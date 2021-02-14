import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Details from './pages/Details';
import Main from './pages/Main';
import Medalists from './pages/Medalists';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/details" component={Details} />
        <Route path="/medalists" component={Medalists} />
      </Switch>
    </BrowserRouter>
  );
}
