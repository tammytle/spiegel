import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

function DashboardPage() {
  return (
    <div>
      <h2 className="caps">Dashboard</h2>
      <p>
        Test!
      </p>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardPage);
