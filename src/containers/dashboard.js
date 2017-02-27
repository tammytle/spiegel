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
      <div>
        <div className="row">
          <div className="large-12 columns">
            <div className="large-6 columns no-pad-left">
              <h4 className="caps">Care Profiles</h4>
            </div>
            <div className="large-6 columns text-right">
              <button className="button" onClick={ () => { this.props.resetProfile(); this.props.goToCreateBasicInfoPage(); }}>Create a Care Profile</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            { this.props.careProfiles.map( (profile, idx) => {
              return <button className="button success" onClick={this.props.goToCareProfile(idx)} key={`care_profile_${idx}`}>{profile.getIn(['basicInfo', 'firstName'])} {profile.getIn(['basicInfo', 'lastName'])}</button>;
            }) }
          </div>
        </div>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  goToCreateBasicInfoPage: PropTypes.func,
  goToCareProfile: PropTypes.func,
  resetProfile: PropTypes.func,
  careProfiles: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    resetProfile: () => dispatch(resetProfile()),
    goToCreateBasicInfoPage: () => dispatch(push('/create-basic-info')),
    goToCareProfile: (id) => () => dispatch(push(`/care-profile/${id}`))
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
