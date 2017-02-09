import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {inputLifeStory} from '../actions/addInfo';

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
      <div>
        <div className="row">
          <div className="large-12 columns">
            <h3 className="caps">Life Story</h3>
          </div>
        </div>
        <div className="row">
            <div className="large-8 columns end">
              <label>Story
                <textarea value={this.state.story} onChange={(e) => this.updateState('story')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <button className="button" onClick={ () => { this.props.goToCreateRoutinePage(); this.props.inputLifeStory(this.state.lifeStory); }}>Continue</button>
          </div>
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
