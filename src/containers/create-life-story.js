import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {inputLifeStory} from '../actions/addInfo';
import CreateProfileNav from '../components/createProfileNav';

class CreateLifeStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifeStory:
      {
        story: ''
      }
    };
  }
  render() {
    return (
    <div className="card" style={{ paddingTop: '50px' }} >
      <div className="large-offset-1 large-7 columns">
        <div className="row">
          <div className="large-12 columns">
            <h3 className="caps">Life Story</h3>
          </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Story
                <textarea rows={4} value={this.state.story} onChange={(e) => this.updateState('story')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <button className="button" onClick={ () => { this.props.goToCreateRoutinePage(); this.props.inputLifeStory(this.state.lifeStory); }}>Continue</button>
          </div>
        </div>
      </div>
      <div className="large-2 large-offset-1 columns end">
        <CreateProfileNav/>
      </div>
    </div>
    );
  }
  updateState(propertyName) {
    return (e) => {
      const lifeStory = this.state.lifeStory;
      lifeStory[propertyName] = e.target.value;

      this.setState({
        lifeStory: lifeStory
      });

      return true;
    };
  }
}

CreateLifeStory.propTypes = {
  inputLifeStory: PropTypes.func,
  goToCreateRoutinePage: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    inputLifeStory: (lifeStory) => dispatch(inputLifeStory(lifeStory)),
    goToCreateRoutinePage: () => dispatch(push('/create-routine-page'))
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateLifeStory);
