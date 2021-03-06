import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { inputBehaviours } from '../actions/addInfo';
import { createProfile } from '../actions/createCareProfile';
import CreateProfileNav from '../components/createProfileNav';

class CreateBehavioursPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      behaviours:
      {
        safetyPrecautions: '',
        upsetWhenReturningHome: '',
        restlessnessSafety: '',
        restlessnessResettle: '',
        angerDuringActivities: '',
        angerTriggers: '',
        angerTips: '',
        repeitionResponses: '',
        additionalInfo: '',
        communication: ''
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
            <h3 className="caps">Behaviours</h3>
          </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>What safety precautions should be used?
                <textarea rows={4} value={this.state.safetyPrecautions} onChange={(e) => this.updateState('safetyPrecautions')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Do they become upset when returning home, and if so what helps them feel calm?
                <textarea rows={4} value={this.state.upsetWhenReturningHome} onChange={(e) => this.updateState('upsetWhenReturningHome')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Does restlessness occur, and if so, what safety precautions should be used?
                <textarea rows={4} value={this.state.restlessnessSafety} onChange={(e) => this.updateState('restlessnessSafety')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>What helps resettle them?
                <textarea rows={4} value={this.state.restlessnessResettle} onChange={(e) => this.updateState('restlessnessResettle')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Does anger occur during certain times of activities?
                <textarea rows={4} value={this.state.angerDuringActivities} onChange={(e) => this.updateState('angerDuringActivities')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>What usually triggers this?
                <textarea rows={4} value={this.state.angerTriggers} onChange={(e) => this.updateState('angerTriggers')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>When this happens, what responses are helpful?
                <textarea rows={4} value={this.state.angerTips} onChange={(e) => this.updateState('angerTips')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>When they repeat themselves over and over, what responses are helpful?
                <textarea rows={4} value={this.state.repeitionResponses} onChange={(e) => this.updateState('repeitionResponses')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>List any additional information that is important for other caregivers, including safety measures used
                <textarea rows={4} value={this.state.additionalInfo} onChange={(e) => this.updateState('additionalInfo')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>What helps when they have difficulty understanding instructions?
                <textarea rows={4} value={this.state.communication} onChange={(e) => this.updateState('communication')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <br/><br/><button className="button bgGreen" style={{float: 'right'}} onClick={ () => { this.props.inputBehaviours(this.state.behaviours); this.props.createProfile(); this.props.goToDashboardPage();  }}>Save</button>
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
      const behaviours = this.state.behaviours;
      behaviours[propertyName] = e.target.value;

      this.setState({
        behaviours: behaviours
      });

      return true;
    };
  }
}

CreateBehavioursPage.propTypes = {
  inputBehaviours: PropTypes.func,
  goToDashboardPage: PropTypes.func,
  createProfile: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    createProfile: () => dispatch(createProfile()),
    inputBehaviours: (behaviours) => dispatch(inputBehaviours(behaviours)),
    goToDashboardPage: () => dispatch(push('/dashboard'))
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateBehavioursPage);

