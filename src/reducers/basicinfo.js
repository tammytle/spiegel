import { BASIC_INFO } from '../constants';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  firstName: null,
  lastName: null
});

function basicinfoReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case BASIC_INFO:
    return fromJS(action.payload);

  default:
    return state;
  }
}

export default basicinfoReducer;
