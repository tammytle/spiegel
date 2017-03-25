import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {inputMealInfo} from '../actions/addInfo';
import CreateProfileNav from '../components/createProfileNav';

class CreateMealTimePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealInfo:
      {
        breakfast: '',
        lunch: '',
        dinner: '',
        snacks: '',
        dietaryRestrictions: '',
        likesOrDislikes: '',
        useOfCutlery: '',
        mealSetUp: ''
      }
    };
  }
  render() {
    return (
    <div className="">
      <div className="large-8 large-offset-1 columns">
        <div className="card" style={{ paddingTop: '50px' }} >
        <div className="row">
          <div className="large-12 columns">
            <h3 className="caps">Meal Time</h3>
          </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Breakfast
                <textarea rows={4} value={this.state.breakfast} onChange={(e) => this.updateState('breakfast')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Lunch
                <textarea rows={4} value={this.state.lunch} onChange={(e) => this.updateState('lunch')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Dinner
                <textarea rows={4} value={this.state.dinner} onChange={(e) => this.updateState('dinner')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Snacks
                <textarea rows={4} value={this.state.snacks} onChange={(e) => this.updateState('snacks')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Any dietary restrictions?
                <textarea rows={4} value={this.state.dietaryRestrictions} onChange={(e) => this.updateState('dietaryRestrictions')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Any particular likes or dislikes?
                <textarea rows={4} value={this.state.likesOrDislikes} onChange={(e) => this.updateState('likesOrDislikes')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Use of Cutlery
                <textarea rows={4} value={this.state.useOfCutlery} onChange={(e) => this.updateState('useOfCutlery')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Meal Set Up
                <textarea rows={4} value={this.state.mealSetUp} onChange={(e) => this.updateState('mealSetUp')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <br/><br/><button className="button bgGreen" style={{float: 'right'}} onClick={ () => { this.props.goToCreateDailyLivingPage(); this.props.inputMealInfo(this.state.mealInfo); }}>Continue</button>
          </div>
        </div>
        </div>
        </div>
        <div className="large-2 columns createProfileSideNav end">
          <CreateProfileNav/><br/><br/>
        </div>
      </div>
    );
  }
  updateState(propertyName) {
    return (e) => {
      const mealInfo = this.state.mealInfo;
      mealInfo[propertyName] = e.target.value;

      this.setState({
        mealInfo: mealInfo
      });

      return true;
    };
  }
}

CreateMealTimePage.propTypes = {
  inputMealInfo: PropTypes.func,
  goToCreateDailyLivingPage: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    inputMealInfo: (mealInfo) => dispatch(inputMealInfo(mealInfo)),
    goToCreateDailyLivingPage: () => dispatch(push('/create-daily-living'))
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateMealTimePage);
