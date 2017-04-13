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
        <div className="large-12 bgCareProfile no-pad-right no-pad-left">
          <div className="large-5 large-offset-1 columns">
            <h2>Care Profiles</h2>
          </div>
          <div className="large-5 columns text-right end">
            <button className="button bgGreen" onClick={ () => { this.props.resetProfile(); this.props.goToCreateBasicInfoPage(); }}>Create a Care Profile</button>
          </div>
        </div>
        <div className="large-10 large-offset-1 columns end">
          <table style={{marginTop: '25px' }} cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th width="200">Name</th>
                <th>Date of Birth</th>
                <th width="150">Last updated</th>
              </tr>
            </thead>
            { this.props.careProfiles.map( (profile, idx) => {
              return ( <tbody><tr onClick={this.props.goToCareProfile(idx)} key={`care_profile_${idx}`}>
                <td width="25%" style={{textTransform: 'capitalize'}}>{profile.getIn(['basicInfo', 'firstName'])} {profile.getIn(['basicInfo', 'lastName'])}</td>
                <td width="30%">{profile.getIn(['basicInfo', 'doB'])}</td>
                <td width="40%">1 April 2017</td>
              </tr>
              </tbody> );
            }) }
          </table>
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
