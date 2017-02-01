import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from '../containers/app';
import AboutPage from '../containers/about-page';
import CounterPage from '../containers/counter-page';
import DashboardPage from '../containers/dashboard';
import CreateBasicInfoPage from '../containers/create-basic-info';
import LoginPage from '../containers/LoginPage';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ LoginPage }/>
    <Route path="about" component={ AboutPage }/>
    <Route path="counter" component={ CounterPage }/>
    <Route path="dashboard" component={ DashboardPage }/>
    <Route path="create-basic-info" component={ CreateBasicInfoPage }/>
    <Route path="login-page" component={ LoginPage }/>
  </Route>
);
