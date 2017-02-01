import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

function CreateBasicInfoPage() {
  return (
    <div>
      <h2 className="caps">Basic Information</h2>
      <p>
        Test!
      </p>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateBasicInfoPage);
