import React from 'react';
import { connect } from 'react-redux';

function App({children}) {
  return (
    <div>
      This is a navx
      { children }
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
