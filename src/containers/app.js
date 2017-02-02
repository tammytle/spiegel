import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { logout } from '../actions/session';
import LoginPage from '../containers/login-page';

function App({children, goToDashboardPage, goToCreateBasicInfoPage, goToCreateLifeStoryPage, goToCreateRoutinePage, goToCreateMealTimePage, goToCreateDailyLivingPage, goToCreateHobbiesPage, goToCreateLikesDislikes, goToCreateBehavioursPage, logoutAction, isLoggedin}) {
  return (

    <div>
      <div className="row">
        <div className="large-12 columns">
        {isLoggedin ? <button type="button" className="button" onClick={goToDashboardPage}>Dashboard</button> : null}
        {isLoggedin ? <button type="button" className="button" onClick={goToCreateBasicInfoPage}>Basic Information</button> : null}
        {isLoggedin ? <button type="button" className="button" onClick={goToCreateLifeStoryPage}>Life Story</button> : null}
        {isLoggedin ? <button type="button" className="button" onClick={goToCreateRoutinePage}>Routine</button> : null}
        {isLoggedin ? <button type="button" className="button" onClick={goToCreateMealTimePage}>Meal Time</button> : null}
        {isLoggedin ? <button type="button" className="button" onClick={goToCreateDailyLivingPage}>Daily Living</button> : null}
        {isLoggedin ? <button type="button" className="button" onClick={goToCreateHobbiesPage}>Hobbies</button> : null}
        {isLoggedin ? <button type="button" className="button" onClick={goToCreateLikesDislikes}>Likes & Dislikes</button> : null}
        {isLoggedin ? <button type="button" className="button" onClick={goToCreateBehavioursPage}>Behaviours</button> : null}
        {isLoggedin ? <button type="button" className="button" onClick={logoutAction}>Logout</button> : null}
        </div>
      </div>
      { isLoggedin ? children : <LoginPage/> }
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
  isLoggedin: React.PropTypes.bool,
  logoutAction: React.PropTypes.func,
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
    logoutAction: () => dispatch(logout()),
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
