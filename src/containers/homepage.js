import React, { PropTypes, Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="bluebackground">
        <br/><div className="top-bar blue">
          <div className="row">
            <div className="large-12 columns no-pad-left no-pad-right">
              <div className="top-bar-left blue">
                <ul className="dropdown menu blue" data-dropdown-menu>
                    <li className="menu-text blue">
                      <img src={require('../img/logo-text.png')} style={{width: '118px'}}/>
                    </li>
                </ul>
              </div>
              <div className="top-bar-right">
                <button className="button bgGreen" onClick={ () => { this.props.goToLoginPage(); }} >Log In</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="large-8 columns large-offset-2 text-center">
            <br/><br/><br/><h2 style={{fontSize: '36px'}}>Preserving the identity and dignity of persons with dementia</h2>
            <br/><br/><img src={require('../img/ipseity-screen.png')} style={{width: '750px'}}/>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  goToLoginPage: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    goToLoginPage: () => dispatch(push('/login-page'))
  };
}

export default connect(null, mapDispatchToProps)(HomePage);
