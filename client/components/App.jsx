
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import Signup from './Signup';
import OwnerContainer from '../containers/OwnerContainer';
import RenterContainer from '../containers/RenterContainer';
import Login from './Login';
import CreateSpace from './CreateSpace'

const App = () => (
  <div id="app">
    {/* delete this */}
    <h1>Space Ex!</h1>
    <img src='data:image/png;base64,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' />
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/owner" component={OwnerContainer} />
      <Route path="/renter" component={RenterContainer} />
      <Route path="/createspace" component={CreateSpace} />
    </Switch>
  </div>
);

module.exports = App;
