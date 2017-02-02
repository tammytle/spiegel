import { LOGIN_USER } from '../constants';
import { LOGOUT_USER } from '../constants';

export function login(username, password) {
  return {
  	type: LOGIN_USER,
  	payload: {
  		username: username,
  		password: password
  	}
  };
}

export function logout() {
  return {
    type: LOGOUT_USER
  };
}
