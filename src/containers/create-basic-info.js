import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {inputbasicinfo} from '../actions/inputbasicinfo';

// function CreateBasicInfoPage() {
class CreateBasicInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
  }
  render() {
    return (
    // function CreateBasicInfoPage() {
      <div>
        <div className="row">
          <div className="large-12 columns">
            <h1 className="caps">Basic Information</h1>
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
          <div className="large-12 columns">
            <button className="button" onClick={this.props.inputbasicinfo(this.state)}>Continue</button>
          </div>
        </div>
      </div>
    );
  }

  updateState(propertyName) {
    return (e) => {
      this.setState({
        [propertyName]: e.target.value
      });

      return true;
    };
  }
}

CreateBasicInfoPage.propTypes = {
  inputbasicinfo: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    inputbasicinfo: (basicinfo) => () => dispatch(inputbasicinfo(basicinfo))
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateBasicInfoPage);
