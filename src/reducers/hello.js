import { LOGIN_USER } from '../constants';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  currentUser: null,
  possibleUsers: [
    {
      username: 'test',
      password: 'password'
    },
    {
      username: 'nope',
      password: 'yep'
    },
  ]
});

function helloReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case LOGIN_USER:
    const foundUser = state.get('possibleUsers').find((user) => user.get('username') === action.payload.username && user.get('password') === action.payload.password) || null;
    return state.set('currentUser', foundUser);

  default:
    return state;
  }
}

export default helloReducer;
