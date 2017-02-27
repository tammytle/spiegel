import { ADD_BASIC_INFO } from '../constants';
import { ADD_MEDICAL_INFO } from '../constants';
import { ADD_LIFE_STORY } from '../constants';
import { ADD_ROUTINE_INFO } from '../constants';
import { ADD_MEAL_TIME } from '../constants';
import { ADD_DAILY_LIVING } from '../constants';
import { ADD_HOBBIES_INFO } from '../constants';
import { ADD_LIKES_AND_DISLIKES } from '../constants';
import { ADD_BEHAVIOURS } from '../constants';

export function inputbasicinfo(basicinfo) {
  return {
  	type: ADD_BASIC_INFO,
  	payload: basicinfo
  };
}

export function inputmedicalinfo(medicalinfo) {
  return {
  	type: ADD_MEDICAL_INFO,
  	payload: medicalinfo
  };
}

export function inputLifeStory(lifeStory) {
  return {
  	type: ADD_LIFE_STORY,
  	payload: lifeStory
  };
}

export function inputRoutine(routineInfo) {
  return {
  	type: ADD_ROUTINE_INFO,
  	payload: routineInfo
  };
}

export function inputMealInfo(mealInfo) {
  return {
  	type: ADD_MEAL_TIME,
  	payload: mealInfo
  };
}

export function inputDailyLiving(dailyLiving) {
  return {
  	type: ADD_DAILY_LIVING,
  	payload: dailyLiving
  };
}

export function inputHobbies(hobbies) {
  return {
  	type: ADD_HOBBIES_INFO,
  	payload: hobbies
  };
}

export function inputLikesAndDislikes(likesAndDislikes) {
  return {
    type: ADD_LIKES_AND_DISLIKES,
    payload: likesAndDislikes
  };
}


export function inputBehaviours(behaviours) {
  return {
    type: ADD_BEHAVIOURS,
    payload: behaviours
  };
}
