import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { logout } from '../actions/session';
import HomePage from '../containers/homepage';

function App({children, logoutAction, isLoggedin, goToDashboardPage, location}) {
  const currentLocation = location.pathname;
  const isLoginPageOrHomePage = ['/login-page', '/homepage'].indexOf(currentLocation) !== -1;
  console.log(currentLocation, isLoggedin, isLoginPageOrHomePage);
  // const doNotShowNav = ['/dashboard', '/care-profile', '/login'];
  return (
    <div>
    { isLoggedin ?
      <div className="top-bar">
        <div>
          <div className="large-12 columns no-pad-left no-pad-right">
            <div className="top-bar-left">
              <ul className="dropdown menu" data-dropdown-menu>
                  <li className="menu-text bgGreenLogo"><a onClick={goToDashboardPage}>
                    <div className="unskew">
                    <img src={require('../img/logo.png')}/>
                    </div>
                  </a></li>
                <li className="whiteLeft"><a onClick={goToDashboardPage}>Care Profiles</a></li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li className="menu-text"><a onClick={logoutAction}>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      : null
    }
    <div className="">
      <div className="large-12 columns no-pad-right no-pad-left">
        { isLoginPageOrHomePage && !isLoggedin ? children : null }
        { !isLoginPageOrHomePage && isLoggedin ? children : null }
        { !isLoginPageOrHomePage && !isLoggedin ? <HomePage/> : null }
      </div>
        {
          // isLoggedin && !doNotShowNav.find((item) => currentLocation.indexOf(item) !== -1) ?
              // <div className="large-2 columns">
              //   <div className="button-group">
              //     <a className="button" style={{ width: '100%' }} onClick={goToCreateBasicInfoPage}>Basic Information</a>
              //     <a className="button" style={{ width: '100%' }} onClick={goToMedicalInformation}>Medical</a>
              //     <a className="button" style={{ width: '100%' }} onClick={goToCreateLifeStoryPage}>Life Story</a>
              //     <a className="button" style={{ width: '100%' }} onClick={goToCreateRoutinePage}>Routine</a>
              //     <a className="button" style={{ width: '100%' }} onClick={goToCreateMealTimePage}>Meal Time</a>
              //     <a className="button" style={{ width: '100%' }} onClick={goToCreateDailyLivingPage}>Daily Living</a>
              //     <a className="button" style={{ width: '100%' }} onClick={goToCreateHobbiesPage}>Hobbies</a>
              //     <a className="button" style={{ width: '100%' }} onClick={goToCreateLikesDislikes}>Likes & Dislikes</a>
              //     <a className="button" style={{ width: '100%' }} onClick={goToCreateBehavioursPage}>Behaviours</a>
              //   </div>
              // </div>
            // :
            // null
          }
    </div>
  </div>
  );
}

App.propTypes = {
  location: React.PropTypes.object,
  children: React.PropTypes.node,
  isLoggedin: React.PropTypes.bool,
  logoutAction: React.PropTypes.func,
  goToDashboardPage: React.PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    goToDashboardPage: () => dispatch(push('/dashboard')),
    logoutAction: () => dispatch(logout()) && dispatch(push('/homepage'))
  };
}

function mapStateToProps(state) {
  return {
    isLoggedin: state.hello.get('currentUser') !== null
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
