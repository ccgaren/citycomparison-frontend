import { combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'

import navigation from './navigation'
import auth from './auth'
import weatherSearch from './weatherSearch'
import city from './city'

import { unauthorizeUser } from '../actions/auth'

const form = () => formReducer;

const reducers = Object.entries({
  navigation,
  auth,
  form,
  weatherSearch,
  city,
}).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: value()
  }),
  {}
);
const getNewReducer = _ =>
  combineReducers(
    reducers
  );
const reducer = getNewReducer();

export default (state, action) => {
  if (action.type === unauthorizeUser.getType()) {
    return reducer(createStore(getNewReducer()).getState());
  }
  
  return reducer(state, action);
};
