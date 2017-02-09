import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {inputRoutine} from '../actions/addInfo';

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
      <div>
        <div className="row">
          <div className="large-12 columns">
            <h3 className="caps">Routine</h3>
          </div>
        </div>
        <div className="row">
            <div className="large-8 columns end">
              <label>Morning
                <textarea value={this.state.morning} onChange={(e) => this.updateState('morning')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-8 columns end">
              <label>Afternoon
                <textarea value={this.state.afternoon} onChange={(e) => this.updateState('afternoon')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-8 columns end">
              <label>Evening
                <textarea value={this.state.evening} onChange={(e) => this.updateState('evening')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-8 columns end">
              <label>Night
                <textarea value={this.state.night} onChange={(e) => this.updateState('night')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <button className="button" onClick={ () => { this.props.goToCreateMealTimePage(); this.props.inputRoutine(this.state.routine); }}>Continue</button>
          </div>
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
