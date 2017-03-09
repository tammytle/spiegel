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
    <div className="card" style={{ paddingTop: '50px' }} >
      <div className="large-offset-1 large-7 columns">
        <div className="row">
          <div className="large-12 columns">
            <h3 className="caps">Meal Time</h3>
          </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Breakfast
                <textarea value={this.state.breakfast} onChange={(e) => this.updateState('breakfast')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Lunch
                <textarea value={this.state.lunch} onChange={(e) => this.updateState('lunch')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Dinner
                <textarea value={this.state.dinner} onChange={(e) => this.updateState('dinner')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Snacks
                <textarea value={this.state.snacks} onChange={(e) => this.updateState('snacks')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Any dietary restrictions?
                <textarea value={this.state.dietaryRestrictions} onChange={(e) => this.updateState('dietaryRestrictions')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Any particular likes or dislikes?
                <textarea value={this.state.likesOrDislikes} onChange={(e) => this.updateState('likesOrDislikes')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Use of Cutlery
                <textarea value={this.state.useOfCutlery} onChange={(e) => this.updateState('useOfCutlery')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Meal Set Up
                <textarea value={this.state.mealSetUp} onChange={(e) => this.updateState('mealSetUp')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <button className="button" onClick={ () => { this.props.goToCreateDailyLivingPage(); this.props.inputMealInfo(this.state.mealInfo); }}>Continue</button>
          </div>
        </div>
      </div>
      <div className="large-2 large-offset-1 columns end">
        <CreateProfileNav/>
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
