import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class careProfilesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'basicInfo'
    };
  }

  render() {
    return (
      <div className="row">
        <div className="large-12 columns">
          <h4 className="caps">{this.props.profile.getIn(['basicInfo', 'firstName'])} {this.props.profile.getIn(['basicInfo', 'lastName'])}</h4>
          <div className="button-group">
            <a className="button" style={{backgroundColor: this.state.activeTab === 'basicInfo' ? '#CCC' : ''}} onClick={() => this.setState({activeTab: 'basicInfo'})}>Basic Information</a>
            <a className="button" style={{backgroundColor: this.state.activeTab === 'medicalInfo' ? '#CCC' : ''}}  onClick={() => this.setState({activeTab: 'medicalInfo'})}>Medical Information</a>
            <a className="button" style={{backgroundColor: this.state.activeTab === 'lifeStory' ? '#CCC' : ''}}  onClick={() => this.setState({activeTab: 'lifeStory'})}>Life Story</a>
            <a className="button" style={{backgroundColor: this.state.activeTab === 'routine' ? '#CCC' : ''}}  onClick={() => this.setState({activeTab: 'routine'})}>Routine</a>
            <a className="button" style={{backgroundColor: this.state.activeTab === 'mealInfo' ? '#CCC' : ''}}  onClick={() => this.setState({activeTab: 'mealInfo'})}>Meal Information</a>
            <a className="button" style={{backgroundColor: this.state.activeTab === 'dailyLiving' ? '#CCC' : ''}}  onClick={() => this.setState({activeTab: 'dailyLiving'})}>Daily Living</a>
            <a className="button" style={{backgroundColor: this.state.activeTab === 'hobbies' ? '#CCC' : ''}}  onClick={() => this.setState({activeTab: 'hobbies'})}>Hobbies</a>
            <a className="button" style={{backgroundColor: this.state.activeTab === 'likesAndDislikes' ? '#CCC' : ''}}  onClick={() => this.setState({activeTab: 'likesAndDislikes'})}>Likes & Dislikes</a>
            <a className="button" style={{backgroundColor: this.state.activeTab === 'behaviours' ? '#CCC' : ''}}  onClick={() => this.setState({activeTab: 'behaviours'})}>Behaviours</a>
          </div>
          {
            this.state.activeTab === 'basicInfo' ?
            <div>
              <p>Name: {this.props.profile.getIn(['basicInfo', 'firstName'])} {this.props.profile.getIn(['basicInfo', 'lastName'])}</p>
              <p>Names they like to be addressed by: {this.props.profile.getIn(['basicInfo', 'nickName'])}</p>
              <p>Date of Birth: {this.props.profile.getIn(['basicInfo', 'doB'])}</p>
              <p>Marital Status: {this.props.profile.getIn(['basicInfo', 'maritalStatus'])}</p>
              <p>Describe Relationship: {this.props.profile.getIn(['basicInfo', 'describeRelationship'])}</p>
              <p>Past Relationships: {this.props.profile.getIn(['basicInfo', 'pastRelationships'])}</p>
            </div>
            : null
          }
          {
            this.state.activeTab === 'medicalInfo' ?
            <div>
              <p>Medical conditions: {this.props.profile.getIn(['medicalInfo', 'medicalConditions'])}</p>
              <p>Allergies: {this.props.profile.getIn(['medicalInfo', 'allergies'])}</p>
              <p>Hearing: {this.props.profile.getIn(['medicalInfo', 'hearing'])}</p>
              <p>Vision: {this.props.profile.getIn(['medicalInfo', 'Vision'])}</p>
              <p>Mobility: {this.props.profile.getIn(['medicalInfo', 'mobility'])}</p>
            </div>
            : null
          }
          {
            this.state.activeTab === 'lifeStory' ?
            <div>
              <p>{this.props.profile.getIn(['lifeStory', 'story'])}</p>
            </div>
            : null
          }
          {
            this.state.activeTab === 'routine' ?
            <div>
              <p>Morning: {this.props.profile.getIn(['routine', 'morning'])}</p>
              <p>Afternoon: {this.props.profile.getIn(['routine', 'afternoon'])}</p>
              <p>Evening: {this.props.profile.getIn(['routine', 'evening'])}</p>
              <p>Night: {this.props.profile.getIn(['routine', 'night'])}</p>
            </div>
            : null
          }
          {
            this.state.activeTab === 'mealInfo' ?
            <div>
              <p>Breakfast: {this.props.profile.getIn(['mealInfo', 'breakfast'])}</p>
              <p>Lunch: {this.props.profile.getIn(['mealInfo', 'lunch'])}</p>
              <p>Dinner: {this.props.profile.getIn(['mealInfo', 'dinner'])}</p>
              <p>Snacks: {this.props.profile.getIn(['mealInfo', 'snacks'])}</p>
              <p>Dietary Restrictions: {this.props.profile.getIn(['mealInfo', 'dietaryRestrictions'])}</p>
              <p>Likes or Dislikes: {this.props.profile.getIn(['mealInfo', 'likesOrDislikes'])}</p>
              <p>Use of Cutlery: {this.props.profile.getIn(['mealInfo', 'useOfCutlery'])}</p>
              <p>Meal Set Up: {this.props.profile.getIn(['mealInfo', 'mealSetUp'])}</p>
            </div>
            : null
          }
          {
            this.state.activeTab === 'dailyLiving' ?
            <div>
              <p>Waking up in the morning: {this.props.profile.getIn(['dailyLiving', 'wakingUp'])}</p>
              <p>Toileting: {this.props.profile.getIn(['dailyLiving', 'toileting'])}</p>
              <p>Bathing: {this.props.profile.getIn(['dailyLiving', 'bathing'])}</p>
              <p>Dental care: {this.props.profile.getIn(['dailyLiving', 'dentalCare'])}</p>
              <p>Hair care: {this.props.profile.getIn(['dailyLiving', 'hairCare'])}</p>
              <p>Skin care: {this.props.profile.getIn(['dailyLiving', 'skinCare'])}</p>
              <p>Preparing for bed: {this.props.profile.getIn(['dailyLiving', 'preparingForBed'])}</p>
              <p>Clothing Preferences: {this.props.profile.getIn(['dailyLiving', 'clothingPreferences'])}</p>
            </div>
            : null
          }
          {
            this.state.activeTab === 'hobbies' ?
            <div>
              <p>Name of hobby: {this.props.profile.getIn(['dailyLiving', 'nameOfHobby'])}</p>
              <p>Description of hobby: {this.props.profile.getIn(['dailyLiving', 'descriptionOfHobby'])}</p>
            </div>
            : null
          }
          {
            this.state.activeTab === 'likesAndDislikes' ?
            <div>
              <p>What makes me physically comfortable: {this.props.profile.getIn(['likesAndDislikes', 'physicallyComfortable'])}</p>
              <p>What makes me happy: {this.props.profile.getIn(['likesAndDislikes', 'happy'])}</p>
              <p>Things I dislike: {this.props.profile.getIn(['likesAndDislikes', 'thingsIDislike'])}</p>
              <p>Things that scare me: {this.props.profile.getIn(['likesAndDislikes', 'thingsThatScareMe'])}</p>
              <p>What comforts me when I'm upset: {this.props.profile.getIn(['likesAndDislikes', 'whatComfortsMe'])}</p>
              <p>Conversation starters / topics of interest: {this.props.profile.getIn(['likesAndDislikes', 'conversationStarters'])}</p>
            </div>
            : null
          }
          {
            this.state.activeTab === 'behaviours' ?
            <div>
            <h5>Unsafe walking</h5>
              <p>What safety precautions should be used? {this.props.profile.getIn(['behaviours', 'safetyPrecautions'])}</p>
              <p>Do they become upset when returning home, and if so what comforts them? {this.props.profile.getIn(['behaviours', 'upsetWhenReturningHome'])}</p>
              <h5>Restlessness</h5>
              <p>Does this occur, and if so what safety precautions should be used? {this.props.profile.getIn(['behaviours', 'restlessnessSafety'])}</p>
              <p>What helps to resettle them? {this.props.profile.getIn(['behaviours', 'restlessnessResettle'])}</p>
              <h5>Anger or Agitation</h5>
              <p>Does this occur during certain times or activities? {this.props.profile.getIn(['behaviours', 'angerDuringActivities'])}</p>
              <p>What usually triggers this? {this.props.profile.getIn(['behaviours', 'angerTriggers'])}</p>
              <p>When this happens, what responses are helpful? {this.props.profile.getIn(['behaviours', 'angerTips'])}</p>
              <h5>Repetition</h5>
              <p>When they repeat themselves over and over, what responses are helpful? {this.props.profile.getIn(['behaviours', 'repeitionResponses'])}</p>
              <h5>Safety Precautions</h5>
              <p>List any additional information that is important for other caregivers, including safety measures used {this.props.profile.getIn(['behaviours', 'additionalInfo'])}</p>
              <h5>Communication</h5>
              <p>What helps when they have difficulty understanding information? {this.props.profile.getIn(['behaviours', 'communication'])}</p>
            </div>
            : null
          }
        </div>
      </div>
    );
  }
}

careProfilesPage.propTypes = {
  profile: PropTypes.object
};

function mapDispatchToProps() {
  return {};
}

function mapStateToProps(state, props) {
  return {
    profile: state.careProfiles.get(+props.params.profileId)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(careProfilesPage);
