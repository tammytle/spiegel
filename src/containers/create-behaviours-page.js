import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createProfile } from '../actions/createCareProfile';

class CreateBehavioursPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="large-12 columns">
          <h1 className="caps">Behaviours</h1>
          <p>
            <button className="button" onClick={ () => { this.props.createProfile(); this.props.goToDashboardPage(); }}>Save</button>
          </p>
        </div>
      </div>
    );
  }
}

CreateBehavioursPage.propTypes = {
  goToDashboardPage: PropTypes.func,
  createProfile: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    createProfile: () => dispatch(createProfile()),
    goToDashboardPage: () => dispatch(push('/dashboard'))
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateBehavioursPage);

