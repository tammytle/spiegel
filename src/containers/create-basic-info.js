import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {inputbasicinfo} from '../actions/addInfo';

// function CreateBasicInfoPage() {
class CreateBasicInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basicInfo:
      {
        firstName: '',
        lastName: '',
        nickName: '',
        doB: '',
        maritalStatus: '',
        maritalStatusWith: '',
        maritalStatusSince: '',
        describeRelationship: '',
        pastRelationships: '',
        significantPeopleFirstName: '',
        significantPeopleLastName: '',
        significantPeopleRelationship: '',
        significantPeoplePhoneNumber: '',
        significantPeopleEmail: '',
        pets: ''
      }
    };
  }
  render() {
    return (
    // function CreateBasicInfoPage() {
      <div>
        <div className="row">
          <div className="large-12 columns">
            <h3 className="caps">Basic Information</h3>
          </div>
        </div>
        <div className="row">
            <div className="large-4 columns">
              <label>First Name
                <input type="text" value={this.state.firstName} onChange={(e) => this.updateState('firstName')(e)}/>
              </label>
            </div>
            <div className="large-4 columns end">
              <label>Last Name
                <input type="text" value={this.state.lastName} onChange={(e) => this.updateState('lastName')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-4 columns">
              <label>Names they like to be addressed by
                <input type="text" value={this.state.nickName} onChange={(e) => this.updateState('nickName')(e)}/>
              </label>
            </div>
            <div className="large-4 columns end">
              <label>Date of Birth
                <input type="text" value={this.state.doB} onChange={(e) => this.updateState('doB')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <br/><h5>Relationships</h5>
          </div>
        </div>
        <div className="row">
            <div className="large-3 columns">
              <label>Marital Status
                  <select onChange={(e) => this.updateState('maritalStatus')(e)}>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
              </label>
            </div>
            <div className="large-3 columns">
              <label>With (if applicable)
                <input type="text" value={this.state.maritalStatusWith} onChange={(e) => this.updateState('maritalStatusWith')(e)}/>
              </label>
            </div>
            <div className="large-2 columns end">
              <label>Since (if applicable)
                <input type="text" value={this.state.maritalStatusSince} onChange={(e) => this.updateState('maritalStatusSince')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-8 columns end">
              <label>Describe this relationship
                <textarea value={this.state.describeRelationship} onChange={(e) => this.updateState('describeRelationship')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-8 columns end">
              <label>Significant past relationships
                <textarea value={this.state.pastRelationships} onChange={(e) => this.updateState('pastRelationships')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <br/><h5>Significant people in my life (family, children, etc.)</h5>
          </div>
        </div>
        <div className="row">
            <div className="large-4 columns">
              <label>First name
                <input type="text" value={this.state.significantPeopleFirstName} onChange={(e) => this.updateState('significantPeopleFirstName')(e)}/>
              </label>
            </div>
            <div className="large-4 columns end">
              <label>Last Name
                <input type="text" value={this.state.significantPeopleLastName} onChange={(e) => this.updateState('significantPeopleLastName')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-3 columns">
            <label>Relationship
              <input type="text" value={this.state.significantPeopleRelationship} onChange={(e) => this.updateState('significantPeopleRelationship')(e)}/>
            </label>
          </div>
          <div className="large-2 columns">
            <label>Phone #
              <input type="text" value={this.state.significantPeoplePhoneNumber} onChange={(e) => this.updateState('significantPeoplePhoneNumber')(e)}/>
            </label>
          </div>
          <div className="large-3 columns end">
            <label>Email
              <input type="text" value={this.state.significantPeopleEmail} onChange={(e) => this.updateState('significantPeopleEmail')(e)}/>
            </label>
          </div>
        </div>
        <div className="row">
            <div className="large-8 columns end">
              <label>Pets
                <textarea value={this.state.pets} onChange={(e) => this.updateState('pets')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <button className="button" onClick={ () => { this.props.inputbasicinfo(this.state.basicInfo); this.props.goToMedicalInformation(); }}>Continue</button>
          </div>
        </div>
      </div>
    );
  }

  updateState(propertyName) {
    return (e) => {
      const basicInfo = this.state.basicInfo;
      basicInfo[propertyName] = e.target.value;

      this.setState({
        basicInfo: basicInfo
      });

      return true;
    };
  }
}

CreateBasicInfoPage.propTypes = {
  inputbasicinfo: PropTypes.func,
  goToMedicalInformation: React.PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    inputbasicinfo: (basicinfo) => dispatch(inputbasicinfo(basicinfo)),
    goToMedicalInformation: () => dispatch(push('/create-medical-information'))
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateBasicInfoPage);
