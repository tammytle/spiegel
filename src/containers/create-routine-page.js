import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {inputRoutine} from '../actions/addInfo';
import CreateProfileNav from '../components/createProfileNav';

class CreateRoutinePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine:
      {
        morning: '',
        afternoon: '',
        evening: '',
        night: ''
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
            <h3 className="caps">Routine</h3>
          </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Morning
                <textarea rows={4} value={this.state.morning} onChange={(e) => this.updateState('morning')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Afternoon
                <textarea rows={4} value={this.state.afternoon} onChange={(e) => this.updateState('afternoon')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Evening
                <textarea rows={4} value={this.state.evening} onChange={(e) => this.updateState('evening')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Night
                <textarea rows={4} value={this.state.night} onChange={(e) => this.updateState('night')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <br/><br/><button className="button bgGreen" style={{float: 'right'}} onClick={ () => { this.props.goToCreateMealTimePage(); this.props.inputRoutine(this.state.routine); }}>Continue</button>
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
      const routine = this.state.routine;
      routine[propertyName] = e.target.value;

      this.setState({
        routine: routine
      });

      return true;
    };
  }
}

CreateRoutinePage.propTypes = {
  inputRoutine: PropTypes.func,
  goToCreateMealTimePage: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    inputRoutine: (routine) => dispatch(inputRoutine(routine)),
    goToCreateMealTimePage: () => dispatch(push('/create-meal-time'))
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateRoutinePage);
