import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {inputbasicinfo} from '../actions/addInfo';
import CreateProfileNav from '../components/createProfileNav';

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
        pets: '',
        significantPeople: [createSignificantPerson()]
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
              <h3 className="caps">Basic Information</h3>
            </div>
          </div>
          <div className="row">
              <div className="large-6 columns">
                <label>First Name
                  <input type="text" value={this.state.firstName} onChange={(e) => this.updateState('firstName')(e)}/>
                </label>
              </div>
              <div className="large-6 columns end">
                <label>Last Name
                  <input type="text" value={this.state.lastName} onChange={(e) => this.updateState('lastName')(e)}/>
                </label>
              </div>
          </div>
          <div className="row">
              <div className="large-6 columns">
                <label>Names they like to be addressed by
                  <input type="text" value={this.state.nickName} onChange={(e) => this.updateState('nickName')(e)}/>
                </label>
              </div>
              <div className="large-6 columns end">
                <label>Date of Birth
                  <input type="text" value={this.state.doB} onChange={(e) => this.updateState('doB')(e)}/>
                </label>
              </div>
          </div><br/>
          <div className="row">
            <div className="large-12 columns">
              <br/><h5>Relationships</h5>
            </div>
          </div>
          <div className="row">
              <div className="large-4 columns">
                <label>Marital Status
                    <select onChange={(e) => this.updateState('maritalStatus')(e)}>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widowed">Widowed</option>
                    </select>
                </label>
              </div>
              <div className="large-4 columns">
                <label>With (if applicable)
                  <input type="text" value={this.state.maritalStatusWith} onChange={(e) => this.updateState('maritalStatusWith')(e)}/>
                </label>
              </div>
              <div className="large-4 columns end">
                <label>Since (if applicable)
                  <input type="text" value={this.state.maritalStatusSince} onChange={(e) => this.updateState('maritalStatusSince')(e)}/>
                </label>
              </div>
          </div>
          <div className="row">
              <div className="large-12 columns end">
                <label>Describe this relationship
                  <textarea value={this.state.describeRelationship} onChange={(e) => this.updateState('describeRelationship')(e)}/>
                </label>
              </div>
          </div>
          <div className="row">
              <div className="large-12 columns end">
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
          {
            this.state.basicInfo.significantPeople.map((person, idx) => (
            <div key={`significant_person_${idx}`} style={{border: '1px solid #eaeaea', padding: '25px', margin: '15px'}}>
              <div className="row">
                  <div className="large-6 columns no-pad-right">
                    <label>First name
                      <input type="text" value={person.significantPeopleFirstName} onChange={(e) => this.updateSignificantPerson(idx, 'significantPeopleFirstName')(e)}/>
                    </label>
                  </div>
                  <div className="large-6 columns end">
                    <label>Last Name
                      <input type="text" value={person.significantPeopleLastName} onChange={(e) => this.updateSignificantPerson(idx, 'significantPeopleLastName')(e)}/>
                    </label>
                  </div>
              </div>
              <div className="row">
                <div className="large-4 columns no-pad-right">
                  <label>Relationship
                    <input type="text" value={person.significantPeopleRelationship} onChange={(e) => this.updateSignificantPerson(idx, 'significantPeopleRelationship')(e)}/>
                  </label>
                </div>
                <div className="large-4 columns no-pad-right">
                  <label>Phone #
                    <input type="text" value={person.significantPeoplePhoneNumber} onChange={(e) => this.updateSignificantPerson(idx, 'significantPeoplePhoneNumber')(e)}/>
                  </label>
                </div>
                <div className="large-4 columns end">
                  <label>Email
                    <input type="text" value={person.significantPeopleEmail} onChange={(e) => this.updateSignificantPerson(idx, 'significantPeopleEmail')(e)}/>
                  </label>
                </div>
              </div>
            </div>
            ))
          }
          <div className="row">
            <div className="large-12 columns end">
              <a className="button" style={{ width: '100%' }} onClick={ () => this.addPerson() }>Add Another</a>
            </div>
          </div>
          <div className="row">
            <div className="large-12 columns end"><br/><br/>
              <label><h5>Pets</h5>
                <textarea value={this.state.pets} onChange={(e) => this.updateState('pets')(e)}/>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="large-12 columns">
              <br/><br/><button className="button bgGreen" style={{float: 'right'}} onClick={ () => { this.props.inputbasicinfo(this.state.basicInfo); this.props.goToMedicalInformation(); }}>Continue</button>
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

  addPerson() {
    const basicInfo = this.state.basicInfo;
    basicInfo.significantPeople = basicInfo.significantPeople.concat([createSignificantPerson()]);

    this.setState(
      {
        basicInfo: basicInfo
      }
    );
  }

  updateSignificantPerson(idx, property) {
    return (e) => {
      const basicInfo = this.state.basicInfo;
      basicInfo.significantPeople[idx][property] = e.target.value;

      this.setState({
        basicInfo: basicInfo
      });

      return true;
    };
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
  goToMedicalInformation: React.PropTypes.func,
  isLoggedin: React.PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
  return {
    inputbasicinfo: (basicinfo) => dispatch(inputbasicinfo(basicinfo)),
    goToMedicalInformation: () => dispatch(push('/create-medical-information'))
  };
}

function createSignificantPerson() {
  return {
    significantPeopleFirstName: '',
    significantPeopleLastName: '',
    significantPeopleRelationship: '',
    significantPeoplePhoneNumber: '',
    significantPeopleEmail: '',
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateBasicInfoPage);
