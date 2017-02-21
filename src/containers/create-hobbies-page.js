import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {inputHobbies} from '../actions/addInfo';

class CreateHobbiesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies:
      {
        nameOfHobby: '',
        descriptionOfHobby: ''
      }
    };
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="large-12 columns">
            <h3 className="caps">Hobbies</h3>
          </div>
        </div>
        <div className="row">
            <div className="large-8 columns end">
              <label>Name of Hobby
                <input type="text" value={this.state.nameOfHobby} onChange={(e) => this.updateState('nameOfHobby')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-8 columns end">
              <label>Description of Hobby
                <textarea value={this.state.descriptionOfHobby} onChange={(e) => this.updateState('descriptionOfHobby')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <button className="button" onClick={ () => { this.props.inputHobbies(this.state.hobbies); this.props.goToCreateLikesDislikes(); }}>Continue</button>
          </div>
        </div>
      </div>
    );
  }
  updateState(propertyName) {
    return (e) => {
      const hobbies = this.state.hobbies;
      hobbies[propertyName] = e.target.value;

      this.setState({
        hobbies: hobbies
      });

      return true;
    };
  }
}

CreateHobbiesPage.propTypes = {
  inputHobbies: PropTypes.func,
  goToCreateLikesDislikes: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    inputHobbies: (hobbies) => dispatch(inputHobbies(hobbies)),
    goToCreateLikesDislikes: () => dispatch(push('/create-likes-dislikes'))
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateHobbiesPage);
