import { ADD_USER_CARE_PROFILE } from '../constants';

export function createProfile() {
  return (dispatch, getState) => {
    const addProfileInfo = getState().addProfileInfo;

    dispatch({
      type: ADD_USER_CARE_PROFILE,
      payload: addProfileInfo
    });
  };
}