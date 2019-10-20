import { put, call,select } from 'redux-saga/effects'
import { SubmissionError } from 'redux-form'

import { toSubPage } from '../actions/navigation'
import { receiveSearchData,receiveUserSavedCitiesData } from '../actions/weather'
import { GET_CITIES } from '../constants/api'
import { get } from '../utils/api'
import { callWith401Handle } from './api'
import store from '../store'

export function* toWeather() {
    const { auth : { id } } = yield select();
    const json = yield call(get, GET_CITIES(id));
    yield put(receiveUserSavedCitiesData(json.data));
    yield put(toSubPage("weather"));
}


