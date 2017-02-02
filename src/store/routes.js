import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from '../containers/app';
import AboutPage from '../containers/about-page';
import CounterPage from '../containers/counter-page';
import DashboardPage from '../containers/dashboard';
import CreateBasicInfoPage from '../containers/create-basic-info';
import CreateLifeStoryPage from '../containers/create-life-story';
import CreateRoutinePage from '../containers/create-routine-page';
import CreateMealTimePage from '../containers/create-meal-time';
import CreateDailyLivingPage from '../containers/create-daily-living';
import CreateHobbiesPage from '../containers/create-hobbies-page';
import CreateLikesDislikes from '../containers/create-likes-dislikes';
import CreateBehavioursPage from '../containers/create-behaviours-page';
import LoginPage from '../containers/LoginPage';


export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ LoginPage }/>
    <Route path="about" component={ AboutPage }/>
    <Route path="counter" component={ CounterPage }/>
    <Route path="dashboard" component={ DashboardPage }/>
    <Route path="create-basic-info" component={ CreateBasicInfoPage }/>
    <Route path="create-life-story" component={ CreateLifeStoryPage }/>
    <Route path="create-routine-page" component={ CreateRoutinePage }/>
    <Route path="create-meal-time" component={ CreateMealTimePage }/>
    <Route path="create-daily-living" component={ CreateDailyLivingPage }/>
    <Route path="create-hobbies-page" component={ CreateHobbiesPage }/>
    <Route path="create-likes-dislikes" component={ CreateLikesDislikes }/>
    <Route path="create-behaviours-page" component={ CreateBehavioursPage }/>
    <Route path="login-page" component={ LoginPage }/>
  </Route>
);
