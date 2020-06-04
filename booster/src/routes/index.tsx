import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CreatePoint from '../pages/CreatePoint';
import Success from '../pages/Success';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cadastro" component={CreatePoint} />
    <Route path="/success" component={Success} />
  </Switch>
);

export default Routes;
