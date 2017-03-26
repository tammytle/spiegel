import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import {updateProfileByPath} from '../actions/addInfo';

class careProfilesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'routine',
      isEditMode: false
    };
  }

  render() {
    return (
      <div style={{marginTop: '25px'}}>
        <div className="large-2 large-offset-1 columns">
            <div className="button-group expanded">
              <div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'routine' ? '#EBEDF0' : ''}}  onClick={() => this.setState({activeTab: 'routine'})}>Routine</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'mealInfo' ? '#EBEDF0' : ''}}  onClick={() => this.setState({activeTab: 'mealInfo'})}>Meal Info</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'dailyLiving' ? '#EBEDF0' : ''}}  onClick={() => this.setState({activeTab: 'dailyLiving'})}>Daily Living</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'hobbies' ? '#EBEDF0' : ''}}  onClick={() => this.setState({activeTab: 'hobbies'})}>Hobbies</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'likesAndDislikes' ? '#EBEDF0' : ''}}  onClick={() => this.setState({activeTab: 'likesAndDislikes'})}>Likes & Dislikes</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'behaviours' ? '#EBEDF0' : ''}}  onClick={() => this.setState({activeTab: 'behaviours'})}>Behaviours</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'basicInfo' ? '#EBEDF0' : ''}} onClick={() => this.setState({activeTab: 'basicInfo'})}>Basic Info</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'lifeStory' ? '#EBEDF0' : ''}}  onClick={() => this.setState({activeTab: 'lifeStory'})}>Life Story</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'medicalInfo' ? '#EBEDF0' : ''}}  onClick={() => this.setState({activeTab: 'medicalInfo'})}>Medical Info</div>
            </div>
          </div>
          <div className="large-8 columns card end" style={{marginTop: '0px', paddingTop: '40px'}}>
            <div className="row">
              <div className="large-6 columns">
                <h4 className="caps">{this.props.profile.getIn(['basicInfo', 'firstName'])} {this.props.profile.getIn(['basicInfo', 'lastName'])}</h4>
              </div>
              <div className="large-6 columns text-right">
              <i className="fa fa-users" aria-hidden="true"/>
              {
                this.state.isEditMode ? <button className="button" onClick={() => this.setState({isEditMode: false})}>Save</button> : <button className="button" onClick={() => this.setState({isEditMode: true})}>Edit Profile</button>
              }
              </div>
            </div>
          {
            this.state.activeTab === 'basicInfo' ?
                <div className="card">
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
              <div className="card">
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
              <div className="card">
                <p>Life Story{this.props.profile.getIn(['lifeStory', 'story'])}</p>
              </div>
            : null
          }
          {
            this.state.activeTab === 'routine' ?
            <div>
              <div className="card">
                <p>Morning: {this.props.profile.getIn(['routine', 'morning'])}</p>
              </div>
              <div className="card">
                <p>Afternoon: {this.props.profile.getIn(['routine', 'afternoon'])}</p>
              </div>
              <div className="card">
                <p>Evening: {this.props.profile.getIn(['routine', 'evening'])}</p>
              </div>
              <div className="card">
                <p>Night: {this.props.profile.getIn(['routine', 'night'])}</p>
              </div>
            </div>
            : null
          }
          {
            this.state.activeTab === 'mealInfo' ?
            <div>
              <div className="card">
                <p>Breakfast: {this.props.profile.getIn(['mealInfo', 'breakfast'])}</p>
              </div>
              <div className="card">
                <p>Lunch: {this.props.profile.getIn(['mealInfo', 'lunch'])}</p>
              </div>
              <div className="card">
                <p>Dinner: {this.props.profile.getIn(['mealInfo', 'dinner'])}</p>
              </div>
              <div className="card">
                <p>Snacks: {this.props.profile.getIn(['mealInfo', 'snacks'])}</p>
              </div>
              <div className="card" style={{ height: '350px' }}>
                <p>Likes or Dislikes: {this.props.profile.getIn(['mealInfo', 'likesOrDislikes'])}</p>
              </div>
              <div className="card">
                <p>Dietary Restrictions: {this.props.profile.getIn(['mealInfo', 'dietaryRestrictions'])}</p>
              </div>
              <div className="card">
                <p>Use of Cutlery: {this.props.profile.getIn(['mealInfo', 'useOfCutlery'])}</p>
              </div>
              <div className="card">
                <p>Meal Set Up: {this.props.profile.getIn(['mealInfo', 'mealSetUp'])}</p>
              </div>
            </div>
            : null
          }
          {
            this.state.activeTab === 'dailyLiving' ?
            <div>
              <div className="card">
                <p>Waking up in the morning: {this.props.profile.getIn(['dailyLiving', 'wakingUp'])}</p>
              </div>
              <div className="card">
                <p>Toileting: {this.props.profile.getIn(['dailyLiving', 'toileting'])}</p>
              </div>
              <div className="card">
                <p>Bathing: {this.props.profile.getIn(['dailyLiving', 'bathing'])}</p>
              </div>
              <div className="card">
                <p>Dental care: {this.props.profile.getIn(['dailyLiving', 'dentalCare'])}</p>
              </div>
              <div className="card">
                <p>Hair care: {this.props.profile.getIn(['dailyLiving', 'hairCare'])}</p>
              </div>
              <div className="card">
                <p>Skin care: {this.props.profile.getIn(['dailyLiving', 'skinCare'])}</p>
              </div>
              <div className="card">
                <p>Preparing for bed: {this.props.profile.getIn(['dailyLiving', 'preparingForBed'])}</p>
              </div>
              <div className="card">
                <p>Clothing Preferences: {this.props.profile.getIn(['dailyLiving', 'clothingPreferences'])}</p>
              </div>
            </div>
            : null
          }
          {
            this.state.activeTab === 'hobbies' ?
              <div className="card">
                <p>{this.props.profile.getIn(['hobbies', 'personalHobbies']).map( (item, idx) => (<div key={`hobby_${idx}`}>
                  <div>Hobby: {item.get('nameOfHobby')}</div>
                  <div>Description: {item.get('descriptionOfHobby')}</div><br/>
                </div>) ).toJS()}</p>
              </div>
            : null
          }
          {
            this.state.activeTab === 'likesAndDislikes' ?
            <div>
            <div className="card">
              <p><span className="careProfileLabel">What makes me physically comfortable</span><br/>
              { this.state.isEditMode ?
                  <input type="text" value={this.props.profile.getIn(['likesAndDislikes', 'physicallyComfortable'])} onChange={this.props.updateProfile([this.props.profileId, 'likesAndDislikes', 'physicallyComfortable'])}/>
                  :
                  this.props.profile.getIn(['likesAndDislikes', 'physicallyComfortable'])
              }</p>
            </div>
            <div className="card">
              <p><span className="careProfileLabel">What makes me happy</span><br/>
                { this.state.isEditMode ?
                  <input type="text" value={this.props.profile.getIn(['likesAndDislikes', 'happy'])} onChange={this.props.updateProfile([this.props.profileId, 'likesAndDislikes', 'happy'])}/>
                  :
                  this.props.profile.getIn(['likesAndDislikes', 'happy'])
                }
              </p>
            </div>
            <div className="card">
              <p><span className="careProfileLabel">Things I dislike</span><br/>
                { this.state.isEditMode ?
                  <input type="text" value={this.props.profile.getIn(['likesAndDislikes', 'thingsIDislike'])} onChange={this.props.updateProfile([this.props.profileId, 'likesAndDislikes', 'thingsIDislike'])}/>
                  :
                  this.props.profile.getIn(['likesAndDislikes', 'thingsIDislike'])
                }</p>
            </div>
            <div className="card">
              <p><span className="careProfileLabel">Things that scare me</span><br/>
                { this.state.isEditMode ?
                  <input type="text" value={this.props.profile.getIn(['likesAndDislikes', 'thingsThatScareMe'])} onChange={this.props.updateProfile([this.props.profileId, 'likesAndDislikes', 'thingsThatScareMe'])}/>
                  :
                  this.props.profile.getIn(['likesAndDislikes', 'thingsThatScareMe'])
                }</p>
            </div>
            <div className="card">
              <p><span className="careProfileLabel">What comforts me when I'm upset</span><br/>
                { this.state.isEditMode ?
                  <input type="text" value={this.props.profile.getIn(['likesAndDislikes', 'whatComfortsMe'])} onChange={this.props.updateProfile([this.props.profileId, 'likesAndDislikes', 'whatComfortsMe'])}/>
                  :
                  this.props.profile.getIn(['likesAndDislikes', 'whatComfortsMe'])
                }</p>
            </div>
            <div className="card">
              <p><span className="careProfileLabel">Conversation starters / Topics of interest</span><br/>
                { this.state.isEditMode ?
                  <input type="text" value={this.props.profile.getIn(['likesAndDislikes', 'conversationStarters'])} onChange={this.props.updateProfile([this.props.profileId, 'likesAndDislikes', 'conversationStarters'])}/>
                  :
                  this.props.profile.getIn(['likesAndDislikes', 'conversationStarters'])
                }</p>
            </div>
            </div>
            : null
          }
          {
            this.state.activeTab === 'behaviours' ?
            <div>
              <div className="card">
                <h5>Unsafe walking</h5>
                  <p><span className="careProfileLabel">What safety precautions should be used?</span><br/>
                  { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['behaviours', 'safetyPrecautions'])} onChange={this.props.updateProfile([this.props.profileId, 'behaviours', 'safetyPrecautions'])}/>
                    :
                    this.props.profile.getIn(['behaviours', 'safetyPrecautions'])
                  }</p>
                  <p><span className="careProfileLabel">Do they become upset when returning home, and if so what comforts them?</span><br/>
                  { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['behaviours', 'upsetWhenReturningHome'])} onChange={this.props.updateProfile([this.props.profileId, 'behaviours', 'upsetWhenReturningHome'])}/>
                    :
                    this.props.profile.getIn(['behaviours', 'upsetWhenReturningHome'])
                  }</p>
              </div>
              <div className="card">
                <h5>Restlessness</h5>
                  <p>Does this occur, and if so what safety precautions should be used? {this.props.profile.getIn(['behaviours', 'restlessnessSafety'])}</p>
                  <p>What helps to resettle them? {this.props.profile.getIn(['behaviours', 'restlessnessResettle'])}</p>
              </div>
              <div className="card">
                <h5>Anger or Agitation</h5>
                  <p>Does this occur during certain times or activities? {this.props.profile.getIn(['behaviours', 'angerDuringActivities'])}</p>
                  <p>What usually triggers this? {this.props.profile.getIn(['behaviours', 'angerTriggers'])}</p>
                  <p>When this happens, what responses are helpful? {this.props.profile.getIn(['behaviours', 'angerTips'])}</p>
              </div>
              <div className="card">
                <h5>Repetition</h5>
                  <p>When they repeat themselves over and over, what responses are helpful? {this.props.profile.getIn(['behaviours', 'repeitionResponses'])}</p>
              </div>
              <div className="card">
                <h5>Safety Precautions</h5>
                  <p>List any additional information that is important for other caregivers, including safety measures used {this.props.profile.getIn(['behaviours', 'additionalInfo'])}</p>
              </div>
              <div className="card">
                <h5>Communication</h5>
                  <p>What helps when they have difficulty understanding information? {this.props.profile.getIn(['behaviours', 'communication'])}</p>
              </div>
            </div>
                    : null
                  }
          </div>
        </div>
    );
  }
}

careProfilesPage.propTypes = {
  profile: PropTypes.object,
  profileId: PropTypes.number,
  updateProfile: PropTypes.function
};

function mapDispatchToProps(dispatch) {
  return {
    updateProfile: (path) => (value) => dispatch(updateProfileByPath(path, value.target.value))
  };
}

function mapStateToProps(state, props) {
  return {
    profileId: +props.params.profileId,
    profile: state.careProfiles.get(+props.params.profileId)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(careProfilesPage);
