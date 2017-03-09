import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {inputHobbies} from '../actions/addInfo';
import CreateProfileNav from '../components/createProfileNav';

class CreateHobbiesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies:
      {
        personalHobbies: [createHobbies()]
      }
    };
  }
  render() {
    return (
    <div className="card" style={{ paddingTop: '50px' }} >
      <div className="large-offset-1 large-7 columns">
        <div className="row">
          <div className="large-12 columns">
            <h3 className="caps">Hobbies</h3>
          </div>
        </div>
        {
        this.state.hobbies.personalHobbies.map((hobby, idx) => (
          <div key={`personal_hobbies_${idx}`} style={{backgroundColor: '#F9F9F9', padding: '25px'}}>
            <div className="row">
                <div className="large-12 columns end">
                  <label>Name of Hobby
                    <input type="text" value={hobby.nameOfHobby} onChange={(e) => this.updateHobbies(idx, 'nameOfHobby')(e)}/>
                  </label>
                </div>
            </div>
            <div className="row">
                <div className="large-12 columns end">
                  <label>Description of Hobby
                    <textarea value={hobby.descriptionOfHobby} onChange={(e) => this.updateHobbies(idx, 'descriptionOfHobby')(e)}/>
                  </label>
                </div>
            </div>
          </div>
          ))
        }
          <div className="row">
            <div className="large-12 columns end">
              <a className="button" style={{ width: '100%' }} onClick={ () => this.addHobby() }>Add Another</a>
            </div>
          </div>
          <div className="row">
            <div className="large-12 columns">
              <button className="button" onClick={ () => { this.props.inputHobbies(this.state.hobbies); this.props.goToCreateLikesDislikes(); }}>Continue</button>
            </div>
          </div>
        </div>
        <div className="large-2 large-offset-1 columns end">
          <CreateProfileNav/>
        </div>
    </div>
    );
  }

  addHobby() {
    const hobbies = this.state.hobbies;
    hobbies.personalHobbies = hobbies.personalHobbies.concat([createHobbies()]);

    this.setState(
      {
        hobbies: hobbies
      }
    );
  }

  updateHobbies(idx, property) {
    return (e) => {
      const hobbies = this.state.hobbies;
      hobbies.personalHobbies[idx][property] = e.target.value;

      this.setState({
        hobbies: hobbies
      });

      return true;
    };
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

function createHobbies() {
  return {
    nameOfHobby: '',
    descriptionOfHobby: ''
  };
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
