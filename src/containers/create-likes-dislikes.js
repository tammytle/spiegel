import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {inputLikesAndDislikes} from '../actions/addInfo';
import CreateProfileNav from '../components/createProfileNav';

class CreateLikesDislikes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likesAndDislikes:
      {
        physicallyComfortable: '',
        happy: '',
        thingsIDislike: '',
        thingsThatScareMe: '',
        whatComfortsMe: '',
        conversationStarters: ''
      }
    };
  }
  render() {
    return (
    <div className="">
      <div className="large-8 large-offset-1 columns">
        <div className="card" style={{ paddingTop: '50px' }} >
        <div className="row">
          <div className="large-12 columns">
            <h3 className="caps">Likes & Dislikes</h3>
          </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>What makes me physically comfortable
                <textarea rows={4} value={this.state.physicallyComfortable} onChange={(e) => this.updateState('physicallyComfortable')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>What makes me happy
                <textarea rows={4} value={this.state.happy} onChange={(e) => this.updateState('happy')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Things I Dislike
                <textarea rows={4} value={this.state.thingsIDislike} onChange={(e) => this.updateState('thingsIDislike')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Things that scare me
                <textarea rows={4} value={this.state.thingsThatScareMe} onChange={(e) => this.updateState('thingsThatScareMe')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>What comforts me when I'm upset
                <textarea rows={4} value={this.state.whatComfortsMe} onChange={(e) => this.updateState('whatComfortsMe')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
            <div className="large-12 columns end">
              <label>Conversation Starters / Topics of Interest
                <textarea rows={4} value={this.state.conversationStarters} onChange={(e) => this.updateState('conversationStarters')(e)}/>
              </label>
            </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <br/><br/><button className="button bgGreen" style={{float: 'right'}} onClick={ () => { this.props.goToBehavioursPage(); this.props.inputLikesAndDislikes(this.state.likesAndDislikes); }}>Continue</button>
          </div>
        </div>
        </div>
        </div>
        <div className="large-2 columns createProfileSideNav end">
          <CreateProfileNav/><br/><br/>
        </div>
      </div>
    );
  }
  updateState(propertyName) {
    return (e) => {
      const likesAndDislikes = this.state.likesAndDislikes;
      likesAndDislikes[propertyName] = e.target.value;

      this.setState({
        likesAndDislikes: likesAndDislikes
      });

      return true;
    };
  }
}

CreateLikesDislikes.propTypes = {
  inputLikesAndDislikes: PropTypes.func,
  goToBehavioursPage: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    inputLikesAndDislikes: (likesAndDislikes) => dispatch(inputLikesAndDislikes(likesAndDislikes)),
    goToBehavioursPage: () => dispatch(push('/create-behaviours-page'))
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateLikesDislikes);
