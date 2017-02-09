import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { logout } from '../actions/session';
import LoginPage from '../containers/login-page';

function App({children, goToDashboardPage, goToCreateBasicInfoPage, goToCreateLifeStoryPage, goToCreateRoutinePage, goToCreateMealTimePage, goToCreateDailyLivingPage, goToCreateHobbiesPage, goToCreateLikesDislikes, goToCreateBehavioursPage, goToMedicalInformation, logoutAction, isLoggedin}) {
  return (

    <div>
      <div className="row">
        <div className="large-12 columns">
          <div className="button-group">
            {isLoggedin ? <a className="button" onClick={goToDashboardPage}>Dashboard</a> : null}
            {isLoggedin ? <a className="button" onClick={goToCreateBasicInfoPage}>Basic Information</a> : null}
            {isLoggedin ? <a className="button" onClick={goToMedicalInformation}>Medical Information</a> : null}
            {isLoggedin ? <a className="button" onClick={goToCreateLifeStoryPage}>Life Story</a> : null}
            {isLoggedin ? <a className="button" onClick={goToCreateRoutinePage}>Routine</a> : null}
            {isLoggedin ? <a className="button" onClick={goToCreateMealTimePage}>Meal Time</a> : null}
            {isLoggedin ? <a className="button" onClick={goToCreateDailyLivingPage}>Daily Living</a> : null}
            {isLoggedin ? <a className="button" onClick={goToCreateHobbiesPage}>Hobbies</a> : null}
            {isLoggedin ? <a className="button" onClick={goToCreateLikesDislikes}>Likes & Dislikes</a> : null}
            {isLoggedin ? <a className="button" onClick={goToCreateBehavioursPage}>Behaviours</a> : null}
            {isLoggedin ? <a className="button secondary" onClick={logoutAction}>Logout</a> : null}
          </div>
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
  goToMedicalInformation: React.PropTypes.func,
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
    goToMedicalInformation: () => dispatch(push('/create-medical-information')),
    logoutAction: () => dispatch(logout()),
  };
}

function mapStateToProps(state) {
  return {
    isLoggedin: state.hello.get('currentUser') !== null,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
