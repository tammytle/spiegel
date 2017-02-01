import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {login} from '../actions/session';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <div>
          <input type="text" value={this.state.username} onChange={(e) => this.updateState('username')(e)}/>
          <input type="password" value={this.state.password} onChange={(e) => this.updateState('password')(e)}/>
          <button onClick={this.props.login(this.state.username, this.state.password)}>Login</button>
      </div>
    );
  }

  updateState(propertyName) {
    return (e) => {
      this.setState({
        [propertyName]: e.target.value
      });

      return true;
    };
  }
}

LoginPage.propTypes = {
  login: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => () => dispatch(login(username, password))
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
