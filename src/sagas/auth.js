import { put, call } from 'redux-saga/effects'
import { SubmissionError } from 'redux-form'

import { to } from '../actions/navigation'
import { receiveAuthData } from '../actions/auth'
import { LOGIN, REGISTER } from '../constants/api'
import { post } from '../utils/api'

const authSaga = (url, thanGoTo) =>
  function*({ payload: { values, reject } }) {
    try {
      const authData = yield call(post, url, values);
      yield put(receiveAuthData(authData));
      yield put(to(thanGoTo));
    } catch ({ status, message }) {
      yield call(reject, new SubmissionError(message));
    }
  }

export const submitLogin = authSaga(LOGIN, 'dashboard');
export const submitRegister = authSaga(REGISTER, 'dashboard');
