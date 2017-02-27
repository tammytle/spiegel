import { CREATE } from '../constants';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  createProfile: null
});

function createCareProfileReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case CREATE:
    return state.set('createProfile', 'creating');

  case CREATE:
    return state.set('createProfile', 'null');

  default:
    return state;
  }
}

export default createCareProfileReducer;
