import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import {updateProfileByPath} from '../actions/addInfo';

class careProfilesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'routine',
      isEditMode: false,
      isEmpty: false
    };
  }

  render() {
    return (
      <div style={{marginTop: '25px'}}>
        <div className="large-2 large-offset-1 columns">
            <div className="button-group expanded">
              <div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'routine' ? '#EBEDF0' : '', color: this.state.activeTab === 'routine' ? '#4F60F4' : '', fontWeight: this.state.activeTab === 'routine' ? '600' : ''}}  onClick={() => this.setState({activeTab: 'routine'})}>Routine</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'mealInfo' ? '#EBEDF0' : '', color: this.state.activeTab === 'mealInfo' ? '#4F60F4' : '', fontWeight: this.state.activeTab === 'mealInfo' ? '600' : ''}}  onClick={() => this.setState({activeTab: 'mealInfo'})}>Meal Info</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'dailyLiving' ? '#EBEDF0' : '', color: this.state.activeTab === 'dailyLiving' ? '#4F60F4' : '', fontWeight: this.state.activeTab === 'dailyLiving' ? '600' : ''}}  onClick={() => this.setState({activeTab: 'dailyLiving'})}>Daily Living</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'hobbies' ? '#EBEDF0' : '', color: this.state.activeTab === 'hobbies' ? '#4F60F4' : '', fontWeight: this.state.activeTab === 'hobbies' ? '600' : ''}}  onClick={() => this.setState({activeTab: 'hobbies'})}>Hobbies</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'likesAndDislikes' ? '#EBEDF0' : '', color: this.state.activeTab === 'likesAndDislikes' ? '#4F60F4' : '', fontWeight: this.state.activeTab === 'likesAndDislikes' ? '600' : ''}}  onClick={() => this.setState({activeTab: 'likesAndDislikes'})}>Likes & Dislikes</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'behaviours' ? '#EBEDF0' : '', color: this.state.activeTab === 'behaviours' ? '#4F60F4' : '', fontWeight: this.state.activeTab === 'behaviours' ? '600' : ''}}  onClick={() => this.setState({activeTab: 'behaviours'})}>Behaviours</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'basicInfo' ? '#EBEDF0' : '', color: this.state.activeTab === 'basicInfo' ? '#4F60F4' : '', fontWeight: this.state.activeTab === 'basicInfo' ? '600' : ''}} onClick={() => this.setState({activeTab: 'basicInfo'})}>Basic Info</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'lifeStory' ? '#EBEDF0' : '', color: this.state.activeTab === 'lifeStory' ? '#4F60F4' : '', fontWeight: this.state.activeTab === 'lifeStory' ? '600' : ''}}  onClick={() => this.setState({activeTab: 'lifeStory'})}>Life Story</div>
              <br/><div className="careProfileButton" style={{backgroundColor: this.state.activeTab === 'medicalInfo' ? '#EBEDF0' : '', color: this.state.activeTab === 'medicalInfo' ? '#4F60F4' : '', fontWeight: this.state.activeTab === 'medicalInfo' ? '600' : ''}}  onClick={() => this.setState({activeTab: 'medicalInfo'})}>Medical Info</div>
            </div>
          </div>
          <div className="large-8 columns careProfileViewCard end" style={{marginTop: '0px', paddingTop: '30px'}}>
            <div className="row" style={{marginBottom: '25px 0px'}}>
              <div className="large-6 columns no-pad-left">
                <h4 className="caps">{this.props.profile.getIn(['basicInfo', 'firstName'])} {this.props.profile.getIn(['basicInfo', 'lastName'])}</h4>
              </div>
              <div className="large-6 columns text-right">
              <i className="fa fa-users" aria-hidden="true"/>
              {
                this.state.isEditMode ? <button className="button" onClick={() => this.setState({isEditMode: false})}>Save</button> : <button className="button" onClick={() => this.setState({isEditMode: true})}>Edit Profile</button>
              }
              </div>
            </div>
            <hr/>
          {
            this.state.activeTab === 'basicInfo' ?
                <div>
                  <p><h6>Name</h6>
                    { this.state.isEditMode ?
                        <input type="text" value={this.props.profile.getIn(['basicInfo', 'firstName'])} onChange={this.props.updateProfile([this.props.profileId, 'basicInfo', 'firstName'])}/>
                        :
                        this.props.profile.getIn(['basicInfo', 'firstName'])
                    } { this.state.isEditMode ?
                        <input type="text" value={this.props.profile.getIn(['basicInfo', 'lastName'])} onChange={this.props.updateProfile([this.props.profileId, 'basicInfo', 'lastName'])}/>
                        :
                        this.props.profile.getIn(['basicInfo', 'lastName'])
                    }
                  </p>
                  <p><h6>Names they like to be addressed by</h6>
                    { this.state.isEditMode ?
                        <input type="text" value={this.props.profile.getIn(['basicInfo', 'nickName'])} onChange={this.props.updateProfile([this.props.profileId, 'basicInfo', 'nickName'])}/>
                        :
                        this.props.profile.getIn(['basicInfo', 'nickName'])
                    }
                  </p>
                  <p><h6>Date of Birth</h6>
                    { this.state.isEditMode ?
                        <input type="text" value={this.props.profile.getIn(['basicInfo', 'doB'])} onChange={this.props.updateProfile([this.props.profileId, 'basicInfo', 'doB'])}/>
                        :
                        this.props.profile.getIn(['basicInfo', 'doB'])
                    }
                  </p>
                  <p><h6>Marital Status</h6>
                    { this.state.isEditMode ?
                        <input type="text" value={this.props.profile.getIn(['basicInfo', 'maritalStatus'])} onChange={this.props.updateProfile([this.props.profileId, 'basicInfo', 'maritalStatus'])}/>
                        :
                        this.props.profile.getIn(['basicInfo', 'maritalStatus'])
                    }
                  </p>
                  <p><h6>Describe Relationship</h6>
                    { this.state.isEditMode ?
                        <input type="text" value={this.props.profile.getIn(['basicInfo', 'describeRelationship'])} onChange={this.props.updateProfile([this.props.profileId, 'basicInfo', 'describeRelationship'])}/>
                        :
                        this.props.profile.getIn(['basicInfo', 'describeRelationship'])
                    }
                  </p>
                  <p><h6>Past Relationships</h6>
                    { this.state.isEditMode ?
                        <input type="text" value={this.props.profile.getIn(['basicInfo', 'pastRelationships'])} onChange={this.props.updateProfile([this.props.profileId, 'basicInfo', 'pastRelationships'])}/>
                        :
                        this.props.profile.getIn(['basicInfo', 'pastRelationships'])
                    }
                  </p>
                </div>
            : null
          }
          {
            this.state.activeTab === 'medicalInfo' ?
              <div>
                <p><h6>Medical conditions</h6>
                  { this.state.isEditMode ?
                      <input type="text" value={this.props.profile.getIn(['medicalInfo', 'medicalConditions'])} onChange={this.props.updateProfile([this.props.profileId, 'medicalInfo', 'medicalConditions'])}/>
                      :
                      this.props.profile.getIn(['medicalInfo', 'medicalConditions'])
                  }
                </p>
                <p><h6>Allergies</h6>
                  { this.state.isEditMode ?
                      <input type="text" value={this.props.profile.getIn(['medicalInfo', 'allergies'])} onChange={this.props.updateProfile([this.props.profileId, 'medicalInfo', 'allergies'])}/>
                      :
                      this.props.profile.getIn(['medicalInfo', 'allergies'])
                  }
                </p>
                <p><h6>Hearing</h6>
                  { this.state.isEditMode ?
                      <input type="text" value={this.props.profile.getIn(['medicalInfo', 'hearing'])} onChange={this.props.updateProfile([this.props.profileId, 'medicalInfo', 'hearing'])}/>
                      :
                      this.props.profile.getIn(['medicalInfo', 'hearing'])
                  }
                </p>
                <p><h6>Vision</h6>
                  { this.state.isEditMode ?
                      <input type="text" value={this.props.profile.getIn(['medicalInfo', 'Vision'])} onChange={this.props.updateProfile([this.props.profileId, 'medicalInfo', 'Vision'])}/>
                      :
                      this.props.profile.getIn(['medicalInfo', 'Vision'])
                  }
                </p>
                <p><h6>Mobility</h6>
                  { this.state.isEditMode ?
                      <input type="text" value={this.props.profile.getIn(['medicalInfo', 'mobility'])} onChange={this.props.updateProfile([this.props.profileId, 'medicalInfo', 'mobility'])}/>
                      :
                      this.props.profile.getIn(['medicalInfo', 'mobility'])
                  }
                </p>
              </div>
            : null
          }
          {
            this.state.activeTab === 'lifeStory' ?
              <div>
                <p><h6>Life Story</h6>
                  { this.state.isEditMode ?
                      <input type="text" value={this.props.profile.getIn(['lifeStory', 'story'])} onChange={this.props.updateProfile([this.props.profileId, 'lifeStory', 'story'])}/>
                      :
                      this.props.profile.getIn(['lifeStory', 'story'])
                  }
                </p>
              </div>
            : null
          }
          {
            this.state.activeTab === 'routine' ?
            <div>
              <p><h6>Morning</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['routine', 'morning'])} onChange={this.props.updateProfile([this.props.profileId, 'routine', 'morning'])}/>
                    :
                    this.props.profile.getIn(['routine', 'morning'])
                }
              </p>
              <p><h6>Afternoon</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['routine', 'afternoon'])} onChange={this.props.updateProfile([this.props.profileId, 'routine', 'afternoon'])}/>
                    :
                    this.props.profile.getIn(['routine', 'afternoon'])
                }
              </p>
              <p><h6>Evening</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['routine', 'evening'])} onChange={this.props.updateProfile([this.props.profileId, 'routine', 'evening'])}/>
                    :
                    this.props.profile.getIn(['routine', 'evening'])
                }
              </p>
              <p><h6>Night</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['routine', 'night'])} onChange={this.props.updateProfile([this.props.profileId, 'routine', 'night'])}/>
                    :
                    this.props.profile.getIn(['routine', 'night'])
                }
              </p>
            </div>
            : null
          }
          {
            this.state.activeTab === 'mealInfo' ?
            <div>
              <p><h6>Breakfast</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['mealInfo', 'breakfast'])} onChange={this.props.updateProfile([this.props.profileId, 'mealInfo', 'breakfast'])}/>
                    :
                    this.props.profile.getIn(['mealInfo', 'breakfast'])
                }
              </p>
              <p><h6>Lunch</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['mealInfo', 'lunch'])} onChange={this.props.updateProfile([this.props.profileId, 'mealInfo', 'lunch'])}/>
                    :
                    this.props.profile.getIn(['mealInfo', 'lunch'])
                }
              </p>
              <p><h6>Dinner</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['mealInfo', 'dinner'])} onChange={this.props.updateProfile([this.props.profileId, 'mealInfo', 'dinner'])}/>
                    :
                    this.props.profile.getIn(['mealInfo', 'dinner'])
                }
              </p>
              <p><h6>Snacks</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['mealInfo', 'snacks'])} onChange={this.props.updateProfile([this.props.profileId, 'mealInfo', 'snacks'])}/>
                    :
                    this.props.profile.getIn(['mealInfo', 'snacks'])
                }
              </p>
              <p><h6>Likes or Dislikes</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['mealInfo', 'likesOrDislikes'])} onChange={this.props.updateProfile([this.props.profileId, 'mealInfo', 'likesOrDislikes'])}/>
                    :
                    this.props.profile.getIn(['mealInfo', 'likesOrDislikes'])
                }
              </p>
              <p><h6>Dietary Restrictions</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['mealInfo', 'dietaryRestrictions'])} onChange={this.props.updateProfile([this.props.profileId, 'mealInfo', 'dietaryRestrictions'])}/>
                    :
                    this.props.profile.getIn(['mealInfo', 'dietaryRestrictions'])
                }
              </p>
              <p><h6>Use of Cutlery</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['mealInfo', 'useOfCutlery'])} onChange={this.props.updateProfile([this.props.profileId, 'mealInfo', 'useOfCutlery'])}/>
                    :
                    this.props.profile.getIn(['mealInfo', 'useOfCutlery'])
                }
              </p>
              <p><h6>Meal Set Up</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['mealInfo', 'mealSetUp'])} onChange={this.props.updateProfile([this.props.profileId, 'mealInfo', 'mealSetUp'])}/>
                    :
                    this.props.profile.getIn(['mealInfo', 'mealSetUp'])
                }
              </p>
            </div>
            : null
          }
          {
            this.state.activeTab === 'dailyLiving' ?
            <div>
              <p><h6>Waking up in the morning</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['dailyLiving', 'wakingUp'])} onChange={this.props.updateProfile([this.props.profileId, 'dailyLiving', 'wakingUp'])}/>
                    :
                    this.props.profile.getIn(['dailyLiving', 'wakingUp'])
                }
              </p>
              <p><h6>Toileting</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['dailyLiving', 'toileting'])} onChange={this.props.updateProfile([this.props.profileId, 'dailyLiving', 'toileting'])}/>
                    :
                    this.props.profile.getIn(['dailyLiving', 'toileting'])
                }
              </p>
              <p><h6>Bathing</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['dailyLiving', 'bathing'])} onChange={this.props.updateProfile([this.props.profileId, 'dailyLiving', 'bathing'])}/>
                    :
                    this.props.profile.getIn(['dailyLiving', 'bathing'])
                }
              </p>
              <p><h6>Dental care</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['dailyLiving', 'dentalCare'])} onChange={this.props.updateProfile([this.props.profileId, 'dailyLiving', 'dentalCare'])}/>
                    :
                    this.props.profile.getIn(['dailyLiving', 'dentalCare'])
                }
              </p>
              <p><h6>Hair care</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['dailyLiving', 'hairCare'])} onChange={this.props.updateProfile([this.props.profileId, 'dailyLiving', 'hairCare'])}/>
                    :
                    this.props.profile.getIn(['dailyLiving', 'hairCare'])
                }
              </p>
              <p><h6>Skin care</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['dailyLiving', 'skinCare'])} onChange={this.props.updateProfile([this.props.profileId, 'dailyLiving', 'skinCare'])}/>
                    :
                    this.props.profile.getIn(['dailyLiving', 'skinCare'])
                }
              </p>
              <p><h6>Preparing for bed</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['dailyLiving', 'preparingForBed'])} onChange={this.props.updateProfile([this.props.profileId, 'dailyLiving', 'preparingForBed'])}/>
                    :
                    this.props.profile.getIn(['dailyLiving', 'preparingForBed'])
                }
              </p>
              <p><h6>Clothing Preferences</h6>
                { this.state.isEditMode ?
                    <input type="text" value={this.props.profile.getIn(['dailyLiving', 'clothingPreferences'])} onChange={this.props.updateProfile([this.props.profileId, 'dailyLiving', 'clothingPreferences'])}/>
                    :
                    this.props.profile.getIn(['dailyLiving', 'clothingPreferences'])
                }
              </p>
            </div>
            : null
          }
          {
            this.state.activeTab === 'hobbies' ?
              <div>
                <p>
                  {
                    this.props.profile.getIn(['hobbies', 'personalHobbies']).filter((item)=>item !== null).map( (item, idx) => (
                      <div key={`hobby_${idx}`}>
                        {item.get('nameOfHobby')}
                        {item.get('descriptionOfHobby')}
                      </div>
                    ) ).toJS()
                  }
                </p>
              </div>
            : null
          }
          {
            this.state.activeTab === 'likesAndDislikes' ?
            <div>
              <p><h6>What makes me physically comfortable</h6>
              { this.state.isEditMode ?
                  <input type="text" value={this.props.profile.getIn(['likesAndDislikes', 'physicallyComfortable'])} onChange={this.props.updateProfile([this.props.profileId, 'likesAndDislikes', 'physicallyComfortable'])}/>
                  :
                  this.props.profile.getIn(['likesAndDislikes', 'physicallyComfortable'])
              }</p>
              <p><h6>What makes me happy</h6>
                { this.state.isEditMode ?
                  <input type="text" value={this.props.profile.getIn(['likesAndDislikes', 'happy'])} onChange={this.props.updateProfile([this.props.profileId, 'likesAndDislikes', 'happy'])}/>
                  :
                  this.props.profile.getIn(['likesAndDislikes', 'happy'])
                }
              </p>
              <p><h6>Things I dislike</h6>
                { this.state.isEditMode ?
                  <input type="text" value={this.props.profile.getIn(['likesAndDislikes', 'thingsIDislike'])} onChange={this.props.updateProfile([this.props.profileId, 'likesAndDislikes', 'thingsIDislike'])}/>
                  :
                  this.props.profile.getIn(['likesAndDislikes', 'thingsIDislike'])
                }</p>
              <p><h6>Things that scare me</h6>
                { this.state.isEditMode ?
                  <input type="text" value={this.props.profile.getIn(['likesAndDislikes', 'thingsThatScareMe'])} onChange={this.props.updateProfile([this.props.profileId, 'likesAndDislikes', 'thingsThatScareMe'])}/>
                  :
                  this.props.profile.getIn(['likesAndDislikes', 'thingsThatScareMe'])
                }</p>
              <p><h6>What comforts me when I'm upset</h6>
                { this.state.isEditMode ?
                  <input type="text" value={this.props.profile.getIn(['likesAndDislikes', 'whatComfortsMe'])} onChange={this.props.updateProfile([this.props.profileId, 'likesAndDislikes', 'whatComfortsMe'])}/>
                  :
                  this.props.profile.getIn(['likesAndDislikes', 'whatComfortsMe'])
                }</p>
              <p><h6>Conversation starters / Topics of interest</h6>
                { this.state.isEditMode ?
                  <input type="text" value={this.props.profile.getIn(['likesAndDislikes', 'conversationStarters'])} onChange={this.props.updateProfile([this.props.profileId, 'likesAndDislikes', 'conversationStarters'])}/>
                  :
                  this.props.profile.getIn(['likesAndDislikes', 'conversationStarters'])
                }</p>
            </div>
            : null
          }
          {
            this.state.activeTab === 'behaviours' ?
            <div>
              <h6>Unsafe walking</h6>
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
                  }
                </p>
                <h6>Restlessness</h6>
                  <p>Does this occur, and if so what safety precautions should be used?<br/>
                    { this.state.isEditMode ?
                      <input type="text" value={this.props.profile.getIn(['behaviours', 'restlessnessSafety'])} onChange={this.props.updateProfile([this.props.profileId, 'behaviours', 'restlessnessSafety'])}/>
                      :
                      this.props.profile.getIn(['behaviours', 'restlessnessSafety'])
                    }
                  </p>
                  <p>What helps to resettle them?<br/>
                    { this.state.isEditMode ?
                      <input type="text" value={this.props.profile.getIn(['behaviours', 'restlessnessResettle'])} onChange={this.props.updateProfile([this.props.profileId, 'behaviours', 'restlessnessResettle'])}/>
                      :
                      this.props.profile.getIn(['behaviours', 'restlessnessResettle'])
                    }
                  </p>
                <h6>Anger or Agitation</h6>
                  <p>Does this occur during certain times or activities?<br/>
                    { this.state.isEditMode ?
                      <input type="text" value={this.props.profile.getIn(['behaviours', 'angerDuringActivities'])} onChange={this.props.updateProfile([this.props.profileId, 'behaviours', 'angerDuringActivities'])}/>
                      :
                      this.props.profile.getIn(['behaviours', 'angerDuringActivities'])
                    }
                  </p>
                  <p>What usually triggers this?<br/>
                    { this.state.isEditMode ?
                      <input type="text" value={this.props.profile.getIn(['behaviours', 'angerTriggers'])} onChange={this.props.updateProfile([this.props.profileId, 'behaviours', 'angerTriggers'])}/>
                      :
                      this.props.profile.getIn(['behaviours', 'angerTriggers'])
                    }
                  </p>
                  <p>When this happens, what responses are helpful?<br/>
                    { this.state.isEditMode ?
                      <input type="text" value={this.props.profile.getIn(['behaviours', 'angerTips'])} onChange={this.props.updateProfile([this.props.profileId, 'behaviours', 'angerTips'])}/>
                      :
                      this.props.profile.getIn(['behaviours', 'angerTips'])
                    }
                  </p>

                <h6>Repetition</h6>
                  <p>When they repeat themselves over and over, what responses are helpful?<br/>
                    { this.state.isEditMode ?
                      <input type="text" value={this.props.profile.getIn(['behaviours', 'repeitionResponses'])} onChange={this.props.updateProfile([this.props.profileId, 'behaviours', 'repeitionResponses'])}/>
                      :
                      this.props.profile.getIn(['behaviours', 'repeitionResponses'])
                    }
                  </p>
                <h6>Safety Precautions</h6>
                  <p>List any additional information that is important for other caregivers, including safety measures used<br/>
                    { this.state.isEditMode ?
                      <input type="text" value={this.props.profile.getIn(['behaviours', 'additionalInfo'])} onChange={this.props.updateProfile([this.props.profileId, 'behaviours', 'additionalInfo'])}/>
                      :
                      this.props.profile.getIn(['behaviours', 'additionalInfo'])
                    }
                  </p>

                <h6>Communication</h6>
                  <p>What helps when they have difficulty understanding information?<br/>
                    { this.state.isEditMode ?
                      <input type="text" value={this.props.profile.getIn(['behaviours', 'communication'])} onChange={this.props.updateProfile([this.props.profileId, 'behaviours', 'communication'])}/>
                      :
                      this.props.profile.getIn(['behaviours', 'communication'])
                    }
                  </p>
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
