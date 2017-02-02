import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';
import hello from './hello';
import basicinfo from './basicinfo';

const rootReducer = combineReducers({
  counter,
  hello,
  basicinfo,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
