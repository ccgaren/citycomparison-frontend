import { call, put } from 'redux-saga/effects'
import { unauthorizeUser } from '../actions/auth'

export function* callWith401Handle(...args) {
  try {
    const data = yield call(...args);
    return data;
  } catch (err) {
    console.info('request with error: ', err);
    if (err.status === 401) {
      yield put(unauthorizeUser());
    } else {
      throw err;
    }
  }
}
