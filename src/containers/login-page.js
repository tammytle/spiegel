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
        <div className="row text-center">
          <div className="large-12 columns">
            <br /><h4>Log In</h4>
          </div>
        </div>
        <div className="row">
          <div className="large-4 columns large-offset-4 columns">
            <label>Username
              <input type="text" value={this.state.username} onChange={(e) => this.updateState('username')(e)}/>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="large-4 columns large-offset-4 columns">
            <label>Password
              <input type="password" value={this.state.password} onChange={(e) => this.updateState('password')(e)}/>
            </label>
          </div>
        </div>
        <div className="row text-center">
          <div className="large-4 columns large-offset-4 columns">
              <button className="button expanded" onClick={this.props.login(this.state.username, this.state.password)}>Login</button>
          </div>
        </div>
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
