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
        <div className="large-12 columns bgCareProfile no-pad-left no-pad-right">
          <h2 className="caps">Care Profiles</h2>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <div className="large-6 columns no-pad-left">
              <h3 className="caps">Care Profiles</h3>
            </div>
            <div className="large-6 columns text-right no-pad-right">
              <button className="button bgGreen" onClick={ () => { this.props.resetProfile(); this.props.goToCreateBasicInfoPage(); }}>Create a Care Profile</button>
            </div>
          </div>
        </div>
        <div className="row">
            { this.props.careProfiles.map( (profile, idx) => {
              return <div className="large-3 columns end"><div className="careProfileCard" onClick={this.props.goToCareProfile(idx)} key={`care_profile_${idx}`}><img src={'http://placehold.it/150x150'}/><br/><br/><h5>{profile.getIn(['basicInfo', 'firstName'])} {profile.getIn(['basicInfo', 'lastName'])}</h5><div className="cardProfileCardView">View</div></div></div>;
            }) }
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
