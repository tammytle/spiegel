import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

function createProfileNav({goToCreateBasicInfoPage, goToCreateLifeStoryPage, goToCreateRoutinePage, goToCreateMealTimePage, goToCreateDailyLivingPage, goToCreateHobbiesPage, goToCreateLikesDislikes, goToCreateBehavioursPage, goToMedicalInformation}) {
  return (
    <div className="button-group">
      <a className="button" style={{ width: '100%' }} onClick={goToCreateBasicInfoPage}>Basic Information</a>
      <a className="button" style={{ width: '100%' }} onClick={goToMedicalInformation}>Medical</a>
      <a className="button" style={{ width: '100%' }} onClick={goToCreateLifeStoryPage}>Life Story</a>
      <a className="button" style={{ width: '100%' }} onClick={goToCreateRoutinePage}>Routine</a>
      <a className="button" style={{ width: '100%' }} onClick={goToCreateMealTimePage}>Meal Time</a>
      <a className="button" style={{ width: '100%' }} onClick={goToCreateDailyLivingPage}>Daily Living</a>
      <a className="button" style={{ width: '100%' }} onClick={goToCreateHobbiesPage}>Hobbies</a>
      <a className="button" style={{ width: '100%' }} onClick={goToCreateLikesDislikes}>Likes & Dislikes</a>
      <a className="button" style={{ width: '100%' }} onClick={goToCreateBehavioursPage}>Behaviours</a>
    </div>
  );
}

createProfileNav.propTypes = {
  goToCreateBasicInfoPage: React.PropTypes.func,
  goToCreateLifeStoryPage: React.PropTypes.func,
  goToCreateRoutinePage: React.PropTypes.func,
  goToCreateMealTimePage: React.PropTypes.func,
  goToCreateDailyLivingPage: React.PropTypes.func,
  goToCreateHobbiesPage: React.PropTypes.func,
  goToCreateLikesDislikes: React.PropTypes.func,
  goToCreateBehavioursPage: React.PropTypes.func,
  goToMedicalInformation: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    goToCreateBasicInfoPage: () => dispatch(push('/create-basic-info')),
    goToCreateLifeStoryPage: () => dispatch(push('/create-life-story')),
    goToCreateRoutinePage: () => dispatch(push('/create-routine-page')),
    goToCreateMealTimePage: () => dispatch(push('/create-meal-time')),
    goToCreateDailyLivingPage: () => dispatch(push('/create-daily-living')),
    goToCreateHobbiesPage: () => dispatch(push('/create-hobbies-page')),
    goToCreateLikesDislikes: () => dispatch(push('/create-likes-dislikes')),
    goToCreateBehavioursPage: () => dispatch(push('/create-behaviours-page')),
    goToMedicalInformation: () => dispatch(push('/create-medical-information')),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(createProfileNav);
