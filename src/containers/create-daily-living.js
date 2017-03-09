import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {inputDailyLiving} from '../actions/addInfo';
import CreateProfileNav from '../components/createProfileNav';

class CreateDailyLivingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyLiving:
      {
        wakingUp: '',
        toileting: '',
        bathing: '',
        dentalCare: '',
        hairCare: '',
        skinCare: '',
        preparingForBed: '',
        clothingPreferences: ''
      }
    };
  }
  render() {
    return (
    <div className="card" style={{ paddingTop: '50px' }} >
      <div className="large-offset-1 large-7 columns">
        <div className="row">
          <div className="large-12 columns">
            <h3 className="caps">Daily Living</h3>
          </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Waking up in the morning
                <textarea value={this.state.wakingUp} onChange={(e) => this.updateState('wakingUp')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Toileting
                <textarea value={this.state.toileting} onChange={(e) => this.updateState('toileting')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Bathing
                <textarea value={this.state.bathing} onChange={(e) => this.updateState('bathing')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Dental Care
                <textarea value={this.state.dentalCare} onChange={(e) => this.updateState('dentalCare')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Hair Care
                <textarea value={this.state.hairCare} onChange={(e) => this.updateState('hairCare')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Skin Care
                <textarea value={this.state.skinCare} onChange={(e) => this.updateState('skinCare')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Preparing for bed
                <textarea value={this.state.preparingForBed} onChange={(e) => this.updateState('preparingForBed')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Clothing Preferences
                <textarea value={this.state.clothingPreferences} onChange={(e) => this.updateState('clothingPreferences')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <button className="button" onClick={ () => { this.props.goToCreateHobbiesPage(); this.props.inputDailyLiving(this.state.dailyLiving); }}>Continue</button>
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
      const dailyLiving = this.state.dailyLiving;
      dailyLiving[propertyName] = e.target.value;

      this.setState({
        dailyLiving: dailyLiving
      });

      return true;
    };
  }
}

CreateDailyLivingPage.propTypes = {
  inputDailyLiving: PropTypes.func,
  goToCreateHobbiesPage: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    inputDailyLiving: (dailyLiving) => dispatch(inputDailyLiving(dailyLiving)),
    goToCreateHobbiesPage: () => dispatch(push('/create-hobbies-page'))
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateDailyLivingPage);
