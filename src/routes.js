import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Medalists from './pages/Medalists';
import Sports from './pages/Sports';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/sports" component={Sports} />
        <Route path="/medalists" component={Medalists} />
      </Switch>
    </BrowserRouter>
  );
}
