import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Dashboard from '../containers/dashboard';

function App({children, goToDashboardPage, goToCreateBasicInfoPage, goToCreateLifeStoryPage, goToCreateRoutinePage, goToCreateMealTimePage, goToCreateDailyLivingPage, goToCreateHobbiesPage, goToCreateLikesDislikes, goToCreateBehavioursPage, isLoggedin}) {
  return (

    <div>
      <div className="row">
        <div className="large-12 columns">
        <button type="button" className="button" onClick={goToDashboardPage}>Dashboard</button>
        <button type="button" className="button" onClick={goToCreateBasicInfoPage}>Basic Information</button>
        <button type="button" className="button" onClick={goToCreateLifeStoryPage}>Life Story</button>
        <button type="button" className="button" onClick={goToCreateRoutinePage}>Routine</button>
        <button type="button" className="button" onClick={goToCreateMealTimePage}>Meal Time</button>
        <button type="button" className="button" onClick={goToCreateDailyLivingPage}>Daily Living</button>
        <button type="button" className="button" onClick={goToCreateHobbiesPage}>Hobbies</button>
        <button type="button" className="button" onClick={goToCreateLikesDislikes}>Likes & Dislikes</button>
        <button type="button" className="button" onClick={goToCreateBehavioursPage}>Behaviours</button>
        {isLoggedin ? <button type="button" className="button">Logout</button> : null}
        </div>
      </div>
      { isLoggedin ? <Dashboard/> : children }
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
  goToDashboardPage: React.PropTypes.func,
  goToCreateBasicInfoPage: React.PropTypes.func,
  goToCreateLifeStoryPage: React.PropTypes.func,
  goToCreateRoutinePage: React.PropTypes.func,
  goToCreateMealTimePage: React.PropTypes.func,
  goToCreateDailyLivingPage: React.PropTypes.func,
  goToCreateHobbiesPage: React.PropTypes.func,
  goToCreateLikesDislikes: React.PropTypes.func,
  goToCreateBehavioursPage: React.PropTypes.func,
  isLoggedin: React.PropTypes.bool
};

function mapDispatchToProps(dispatch) {
  return {
    goToDashboardPage: () => dispatch(push('/dashboard')),
    goToCreateBasicInfoPage: () => dispatch(push('/create-basic-info')),
    goToCreateLifeStoryPage: () => dispatch(push('/create-life-story')),
    goToCreateRoutinePage: () => dispatch(push('/create-routine-page')),
    goToCreateMealTimePage: () => dispatch(push('/create-meal-time')),
    goToCreateDailyLivingPage: () => dispatch(push('/create-daily-living')),
    goToCreateHobbiesPage: () => dispatch(push('/create-hobbies-page')),
    goToCreateLikesDislikes: () => dispatch(push('/create-likes-dislikes')),
    goToCreateBehavioursPage: () => dispatch(push('/create-behaviours-page')),
  };
}

function mapStateToProps(state) {
  return {
    isLoggedin: state.hello.get('currentUser') !== null,
    goToCreateBasicInfoPage: state.basicinfo.get('currentFirstName') !== null
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
