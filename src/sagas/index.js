import { takeLatest } from 'redux-saga/effects'

import * as authActions from '../actions/auth'
import * as authSagas from './auth'

import * as weatherActions from '../actions/weather'
import * as weatherSagas from './weather'

import * as navigationActions from '../actions/navigation'
import * as navigationSagas from './navigation'

export default function* saga() {
  const relations = [
    [authActions, authSagas],
    [weatherActions, weatherSagas],
    [navigationActions, navigationSagas]
  ];

  for (const [actions, sagas] of relations) {
    for (const [actionName, action] of Object.entries(actions)) {
      const saga = sagas[actionName];
      if (saga) yield takeLatest(action.getType(), saga);
    }
  }
}
