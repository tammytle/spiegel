import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

function AboutPage() {
  return (
    <div>
      <h2 className="caps">About Us</h2>
      <p>
        Rangle.io is a next-generation HTML5 design and development firm
        dedicated to modern, responsive web and mobile applications.
      </p>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutPage);
