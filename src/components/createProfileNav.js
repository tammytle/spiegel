import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

function createProfileNav({goToCreateBasicInfoPage, goToCreateLifeStoryPage, goToCreateRoutinePage, goToCreateMealTimePage, goToCreateDailyLivingPage, goToCreateHobbiesPage, goToCreateLikesDislikes, goToCreateBehavioursPage, goToMedicalInformation}) {
  return (
    <div className="text-center button-group" style={{ paddingTop: '25px' }}>
      <a className="careProfileCatgoryButton" style={{ width: '100%' }} onClick={goToCreateBasicInfoPage}><div className="circlePink"/><br/>Basic Information<br/><hr width="1" size="100"/></a>
      <a className="careProfileCatgoryButton" style={{ width: '100%' }} onClick={goToMedicalInformation}><div className="circleGrey"/><br/>Medical<br/><hr width="1" size="100"/></a>
      <a className="careProfileCatgoryButton" style={{ width: '100%' }} onClick={goToCreateLifeStoryPage}><div className="circleGrey"/><br/>Life Story<br/><hr width="1" size="100"/></a>
      <a className="careProfileCatgoryButton" style={{ width: '100%' }} onClick={goToCreateRoutinePage}><div className="circleGrey"/><br/>Routine<br/><hr width="1" size="100"/></a>
      <a className="careProfileCatgoryButton" style={{ width: '100%' }} onClick={goToCreateMealTimePage}><div className="circleGrey"/><br/>Meal Time<br/><hr width="1" size="100"/></a>
      <a className="careProfileCatgoryButton" style={{ width: '100%' }} onClick={goToCreateDailyLivingPage}><div className="circleGrey"/><br/>Daily Living<br/><hr width="1" size="100"/></a>
      <a className="careProfileCatgoryButton" style={{ width: '100%' }} onClick={goToCreateHobbiesPage}><div className="circleGrey"/><br/>Hobbies<br/><hr width="1" size="100"/></a>
      <a className="careProfileCatgoryButton" style={{ width: '100%' }} onClick={goToCreateLikesDislikes}><div className="circleGrey"/><br/>Likes & Dislikes<br/><hr width="1" size="100"/></a>
      <a className="careProfileCatgoryButton" style={{ width: '100%' }} onClick={goToCreateBehavioursPage}><div className="circleGrey"/><br/>Behaviours</a>
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
