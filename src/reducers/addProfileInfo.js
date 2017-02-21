import { ADD_BASIC_INFO } from '../constants';
import { ADD_LIFE_STORY } from '../constants';
import { ADD_ROUTINE_INFO } from '../constants';
import { ADD_MEAL_TIME } from '../constants';
import { ADD_DAILY_LIVING } from '../constants';
import { ADD_HOBBIES_INFO } from '../constants';
import { ADD_MEDICAL_INFO, NEW_PROFILE_SAVE_CARE_PREFERENCES } from '../constants';
import { NEW_PROFILE_RESET_CARE_PREFERENCES } from '../constants';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  basicInfo: {
    firstName: null,
    lastName: null,
    nickName: null,
    doB: null,
    maritalStatus: null,
    maritalStatusWith: null,
    maritalStatusSince: null,
    describeRelationship: null,
    pastRelationships: null,
    significantPeopleFirstName: null,
    significantPeopleLastName: null,
    significantPeopleRelationship: null,
    significantPeoplePhoneNumber: null,
    significantPeopleEmail: null,
    pets: null
  },
  medicalInfo: {
    medicalConditions: null,
    allergies: null,
    hearing: null,
    vision: null,
    mobility: null
  },
  lifeStory: {
    story: null
  },
  routine: {
    morning: null,
    afternoon: null,
    evening: null,
    night: null
  },
  mealInfo: {
    breakfast: null,
    lunch: null,
    dinner: null,
    snacks: null,
    dietaryRestrictions: null,
    likesOrDislikes: null,
    useOfCutlery: null,
    mealSetUp: null
  },
  dailyLiving: {
    wakingUp: null,
    toileting: null,
    bathing: null,
    dentalCare: null,
    hairCare: null,
    skinCare: null,
    preparingForBed: null,
    clothingPreferences: null
  },
  hobbies: {
    nameOfHobby: null,
    descriptionOfHobby: null
  }
});

function createInfoReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case ADD_BASIC_INFO:
    return state.set('basicInfo', fromJS(action.payload));

  case ADD_MEDICAL_INFO:
    return state.set('medicalInfo', fromJS(action.payload));

  case ADD_LIFE_STORY:
    return state.set('lifeStory', fromJS(action.payload));

  case ADD_ROUTINE_INFO:
    return state.set('routine', fromJS(action.payload));

  case ADD_MEAL_TIME:
    return state.set('mealInfo', fromJS(action.payload));

  case ADD_DAILY_LIVING:
    return state.set('dailyLiving', fromJS(action.payload));

  case ADD_HOBBIES_INFO:
    return state.set('hobbies', fromJS(action.payload));

  case NEW_PROFILE_SAVE_CARE_PREFERENCES:
    return state.set('carePreferences', fromJS(action.payload));

  case NEW_PROFILE_RESET_CARE_PREFERENCES:
    return INITIAL_STATE;

  default:
    return state;
  }
}

export default createInfoReducer;
