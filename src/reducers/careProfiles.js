import { ADD_USER_CARE_PROFILE } from '../constants';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS([]);

function careProfilesReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case ADD_USER_CARE_PROFILE:
    return state.push(action.payload);

  default:
    return state;
  }
}

export default careProfilesReducer;
