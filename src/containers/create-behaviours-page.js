import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

function CreateBehavioursPage() {
  return (
    <div className="row">
      <div className="large-12 columns">
        <h1 className="caps">Behaviours</h1>
        <p>
          Test!
        </p>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateBehavioursPage);
