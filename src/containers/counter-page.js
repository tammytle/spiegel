import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { increment, decrement, reset } from '../actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter.get('count'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch(increment()),
    decreaseCounter: () => dispatch(decrement()),
    resetCounter: () => dispatch(reset()),
    goToAboutPage: () => dispatch(push('/about')),
  };
}

function CounterPage({ counter, increaseCounter, decreaseCounter, resetCounter, goToAboutPage }) {
  return (
    <div>
      <div>Show Counter Page Component</div>
      <div>
        <div>Count: {counter}</div>
        <div><button onClick={increaseCounter}>Increase</button></div>
        <div><button onClick={decreaseCounter}>Decrease</button></div>
        <div><button onClick={resetCounter}>Reset</button></div>
      </div>
      <div><button onClick={goToAboutPage}>Go to About Page</button></div>
    </div>
  );
}

CounterPage.propTypes = {
  counter: React.PropTypes.number,
  increaseCounter: React.PropTypes.func,
  decreaseCounter: React.PropTypes.func,
  resetCounter: React.PropTypes.func,
  goToAboutPage: React.PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
