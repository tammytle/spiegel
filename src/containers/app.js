import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { logout } from '../actions/session';
import LoginPage from '../containers/login-page';

function App({children, location, goToDashboardPage, goToCreateBasicInfoPage, goToCreateLifeStoryPage, goToCreateRoutinePage, goToCreateMealTimePage, goToCreateDailyLivingPage, goToCreateHobbiesPage, goToCreateLikesDislikes, goToCreateBehavioursPage, goToMedicalInformation, logoutAction, isLoggedin}) {
  const currentLocation = location.pathname;
  const doNotShowNav = ['/dashboard', '/care-profile', '/login'];
  return (
    <div>
      <div className="row">
        <div className="large-12 columns">
          <div className="large-8 large-offset-2 columns">
            { isLoggedin ? children : <LoginPage/> }
          </div>
          <div className="large-2 columns">
            {
              isLoggedin && !doNotShowNav.find((item) => currentLocation.indexOf(item) !== -1) ?
              <div className="button-group">
                <a className="button" style={{ width: '100%' }} onClick={goToDashboardPage}>Dashboard</a>
                <a className="button" style={{ width: '100%' }} onClick={goToCreateBasicInfoPage}>Basic Information</a>
                <a className="button" style={{ width: '100%' }} onClick={goToMedicalInformation}>Medical</a>
                <a className="button" style={{ width: '100%' }} onClick={goToCreateLifeStoryPage}>Life Story</a>
                <a className="button" style={{ width: '100%' }} onClick={goToCreateRoutinePage}>Routine</a>
                <a className="button" style={{ width: '100%' }} onClick={goToCreateMealTimePage}>Meal Time</a>
                <a className="button" style={{ width: '100%' }} onClick={goToCreateDailyLivingPage}>Daily Living</a>
                <a className="button" style={{ width: '100%' }} onClick={goToCreateHobbiesPage}>Hobbies</a>
                <a className="button" style={{ width: '100%' }} onClick={goToCreateLikesDislikes}>Likes & Dislikes</a>
                <a className="button" style={{ width: '100%' }} onClick={goToCreateBehavioursPage}>Behaviours</a>
                <a className="button secondary" style={{ width: '100%' }} onClick={logoutAction}>Logout</a>
              </div>
              :
              null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  location: React.PropTypes.object,
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
