import { ADD_USER_CARE_PROFILE } from '../constants';
import { NEW_PROFILE_RESET_CARE_PREFERENCES } from '../constants';

export function createProfile() {
  return (dispatch, getState) => {
    const addProfileInfo = getState().addProfileInfo;
    dispatch({
      type: ADD_USER_CARE_PROFILE,
      payload: addProfileInfo
    });
  };
}

export function resetProfile() {
  return {
  	type: NEW_PROFILE_RESET_CARE_PREFERENCES
  };
}
