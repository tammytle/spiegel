import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { resetProfile } from '../actions/createCareProfile';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="large-12 columns">
          <h1 className="caps">Dashboard</h1>
          <p>
            <button className="button" onClick={ () => { this.props.resetProfile(); this.props.goToCreateBasicInfoPage(); }}>Create a Care Profile</button>
          </p>
            { this.props.careProfiles.map( (profile, idx) => {
              return <div key={`care_profile_${idx}`}>hello {profile.getIn(['basicInfo', 'firstName'])}</div>;
            }) }

        </div>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  goToCreateBasicInfoPage: PropTypes.func,
  resetProfile: PropTypes.func,
  careProfiles: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    resetProfile: () => dispatch(resetProfile()),
    goToCreateBasicInfoPage: () => dispatch(push('/create-basic-info'))
  };
}

function mapStateToProps(state) {
  return {
    careProfiles: state.careProfiles
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardPage);
