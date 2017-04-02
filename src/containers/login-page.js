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
      <div className="bluebackground">
        <div style={{padding: '20px'}}>
          <img src={require('../img/logo-text.png')}/>
        </div>
        <br/><br/><div className="large-4 columns large-offset-4 whitebackground end">
          <div className="row text-center">
            <div className="large-12 columns">
              <div className="loginTitle">Log In</div><hr/>
            </div>
          </div>
          <div className="row">
            <div className="large-10 large-offset-1 columns columns">
              <label>Username
                <input type="text" value={this.state.username} onChange={(e) => this.updateState('username')(e)}/>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="large-10 large-offset-1 columns columns">
              <label>Password
                <input type="password" value={this.state.password} onChange={(e) => this.updateState('password')(e)}/>
              </label>
            </div>
          </div>
          <div className="row text-center">
            <div className="large-12 columns"><br/>
                <button className="greenButton" onClick={this.props.login(this.state.username, this.state.password)}>Login</button><br/><br/>
            </div>
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
