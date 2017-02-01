import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Dashboard from '../containers/dashboard';

function App({children, goToDashboardPage, goToCreateBasicInfoPage, isLoggedin}) {
  return (

    <div>
      <div className="row">
        <div className="large-12 columns">
        <button type="button" className="button" onClick={goToDashboardPage}>Dashboard</button>
        <button type="button" className="button" onClick={goToCreateBasicInfoPage}>Basic Information</button>
        <button type="button" className="button">Medical Information</button>
        <button type="button" className="button">Routine</button>
        <button type="button" className="button">Meal Time</button>
        <button type="button" className="button">Daily Living</button>
        <button type="button" className="button">Hobbies</button>
        <button type="button" className="button">Likes & Dislikes</button>
        <button type="button" className="button">Behaviours</button>
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
  isLoggedin: React.PropTypes.bool
};

function mapDispatchToProps(dispatch) {
  return {
    goToDashboardPage: () => dispatch(push('/dashboard')),
    goToCreateBasicInfoPage: () => dispatch(push('/create-basic-info')),
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
