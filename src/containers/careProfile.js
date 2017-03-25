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
      <div className="row">
        <div className="large-12 columns">
          <div className="card" style={{paddingTop: '25px', paddingBottom: '0px'}}>
            <h4 className="caps">{this.props.profile.getIn(['basicInfo', 'firstName'])} {this.props.profile.getIn(['basicInfo', 'lastName'])}</h4>
            {
              this.state.isEditMode ? <button onClick={() => this.setState({isEditMode: false})}>Done</button> : <button onClick={() => this.setState({isEditMode: true})}>Edit</button>
            }
            <div className="button-group expanded">
              <a className="button" style={{backgroundColor: this.state.activeTab === 'routine' ? '#14679e' : ''}}  onClick={() => this.setState({activeTab: 'routine'})}>Routine</a>
              <a className="button" style={{backgroundColor: this.state.activeTab === 'mealInfo' ? '#14679e' : ''}}  onClick={() => this.setState({activeTab: 'mealInfo'})}>Meal Info</a>
              <a className="button" style={{backgroundColor: this.state.activeTab === 'dailyLiving' ? '#14679e' : ''}}  onClick={() => this.setState({activeTab: 'dailyLiving'})}>Daily Living</a>
              <a className="button" style={{backgroundColor: this.state.activeTab === 'hobbies' ? '#14679e' : ''}}  onClick={() => this.setState({activeTab: 'hobbies'})}>Hobbies</a>
              <a className="button" style={{backgroundColor: this.state.activeTab === 'likesAndDislikes' ? '#14679e' : ''}}  onClick={() => this.setState({activeTab: 'likesAndDislikes'})}>Likes & Dislikes</a>
              <a className="button" style={{backgroundColor: this.state.activeTab === 'behaviours' ? '#14679e' : ''}}  onClick={() => this.setState({activeTab: 'behaviours'})}>Behaviours</a>
              <a className="button" style={{backgroundColor: this.state.activeTab === 'basicInfo' ? '#14679e' : ''}} onClick={() => this.setState({activeTab: 'basicInfo'})}>Basic Information</a>
              <a className="button" style={{backgroundColor: this.state.activeTab === 'lifeStory' ? '#14679e' : ''}}  onClick={() => this.setState({activeTab: 'lifeStory'})}>Life Story</a>
              <a className="button" style={{backgroundColor: this.state.activeTab === 'medicalInfo' ? '#14679e' : ''}}  onClick={() => this.setState({activeTab: 'medicalInfo'})}>Medical Information</a>
            </div>
          </div>
          <div>
          {
            this.state.activeTab === 'basicInfo' ?
            <div>
              <div className="row">
                <div className="large-12 columns">
                  <div className="card">
                    <p>Name: {this.props.profile.getIn(['basicInfo', 'firstName'])} {this.props.profile.getIn(['basicInfo', 'lastName'])}</p>
                    <p>Names they like to be addressed by: {this.props.profile.getIn(['basicInfo', 'nickName'])}</p>
                    <p>Date of Birth: {this.props.profile.getIn(['basicInfo', 'doB'])}</p>
                    <p>Marital Status: {this.props.profile.getIn(['basicInfo', 'maritalStatus'])}</p>
                    <p>Describe Relationship: {this.props.profile.getIn(['basicInfo', 'describeRelationship'])}</p>
                    <p>Past Relationships: {this.props.profile.getIn(['basicInfo', 'pastRelationships'])}</p>
                  </div>
                </div>
              </div>
            </div>
            : null
          }
          {
            this.state.activeTab === 'medicalInfo' ?
            <div>
              <div className="row">
                <div className="large-12 columns">
                  <div className="card">
                    <p>Medical conditions: {this.props.profile.getIn(['medicalInfo', 'medicalConditions'])}</p>
                    <p>Allergies: {this.props.profile.getIn(['medicalInfo', 'allergies'])}</p>
                    <p>Hearing: {this.props.profile.getIn(['medicalInfo', 'hearing'])}</p>
                    <p>Vision: {this.props.profile.getIn(['medicalInfo', 'Vision'])}</p>
                    <p>Mobility: {this.props.profile.getIn(['medicalInfo', 'mobility'])}</p>
                  </div>
                </div>
              </div>
            </div>
            : null
          }
          {
            this.state.activeTab === 'lifeStory' ?
            <div>
              <div className="row">
                <div className="large-12 columns">
                  <div className="card">
                    <p>Life Story{this.props.profile.getIn(['lifeStory', 'story'])}</p>
                  </div>
                </div>
              </div>
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
              <div className="row">
                <div className="large-8 columns">
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
                </div>
                <div className="large-4 columns">
                  <div className="card" style={{ height: '350px' }}>
                    <p>Likes or Dislikes: {this.props.profile.getIn(['mealInfo', 'likesOrDislikes'])}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="large-4 columns">
                  <div className="card">
                    <p>Dietary Restrictions: {this.props.profile.getIn(['mealInfo', 'dietaryRestrictions'])}</p>
                  </div>
                </div>
                <div className="large-4 columns">
                  <div className="card">
                    <p>Use of Cutlery: {this.props.profile.getIn(['mealInfo', 'useOfCutlery'])}</p>
                  </div>
                </div>
                <div className="large-4 columns">
                  <div className="card">
                    <p>Meal Set Up: {this.props.profile.getIn(['mealInfo', 'mealSetUp'])}</p>
                  </div>
                </div>
              </div>
            </div>
            : null
          }
          {
            this.state.activeTab === 'dailyLiving' ?
            <div>
              <div className="row">
                <div className="large-12 columns">
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
              </div>
            </div>
            : null
          }
          {
            this.state.activeTab === 'hobbies' ?
            <div>
              <div className="row">
                <div className="large-12 columns">
                  <div className="card">
                    <p>{this.props.profile.getIn(['hobbies', 'personalHobbies']).map( (item, idx) => (<div key={`hobby_${idx}`}>
                      <div>Hobby: {item.get('nameOfHobby')}</div>
                      <div>Description: {item.get('descriptionOfHobby')}</div><br/>
                    </div>) ).toJS()}</p>
                  </div>
                </div>
              </div>
            </div>
            : null
          }
          {
            this.state.activeTab === 'likesAndDislikes' ?
            <div>
              <div className="row">
                <div className="large-12 columns">
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
              </div>
            </div>
            : null
          }
          {
            this.state.activeTab === 'behaviours' ?
            <div>
              <div className="row">
                <div className="large-12 columns">
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
              </div>
            </div>
                    : null
                  }
          </div>
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
