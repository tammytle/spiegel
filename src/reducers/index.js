import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';
import hello from './hello';
import addProfileInfo from './addProfileInfo';

const rootReducer = combineReducers({
  counter,
  hello,
  addProfileInfo,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
