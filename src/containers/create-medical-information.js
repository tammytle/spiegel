import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {inputmedicalinfo} from '../actions/addInfo';
import CreateProfileNav from '../components/createProfileNav';

class CreateMedicalInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicalInfo:
      {
        medicalConditions: '',
        allergies: '',
        hearing: '',
        vision: '',
        mobility: ''
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
            <h3 className="caps">Medical Information</h3>
          </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Medical Conditions (other than dementia)
                <textarea value={this.state.medicalConditions} onChange={(e) => this.updateState('medicalConditions')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Allergies
                <textarea value={this.state.allergies} onChange={(e) => this.updateState('allergies')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Hearing
                <textarea value={this.state.hearing} onChange={(e) => this.updateState('hearing')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Vision
                <textarea value={this.state.vision} onChange={(e) => this.updateState('vision')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Mobility
                <textarea value={this.state.mobility} onChange={(e) => this.updateState('mobility')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <br/><br/><button className="button bgGreen" style={{float: 'right'}} onClick={ () => { this.props.goToCreateLifeStoryPage(); this.props.inputmedicalinfo(this.state.medicalInfo); }}>Continue</button>
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
      const medicalInfo = this.state.medicalInfo;
      medicalInfo[propertyName] = e.target.value;

      this.setState({
        medicalInfo: medicalInfo
      });

      return true;
    };
  }
}

CreateMedicalInformation.propTypes = {
  inputmedicalinfo: PropTypes.func,
  goToCreateLifeStoryPage: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    inputmedicalinfo: (medicalinfo) => dispatch(inputmedicalinfo(medicalinfo)),
    goToCreateLifeStoryPage: () => dispatch(push('/create-life-story'))
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateMedicalInformation);
