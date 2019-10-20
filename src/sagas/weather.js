import { put, call,select } from 'redux-saga/effects'
import { SubmissionError } from 'redux-form'

import { to } from '../actions/navigation'
import { receiveSearchData, receiveUserSavedCitiesData } from '../actions/weather'
import { WEATHERAPI, WEATHERAPIKEY, SAVE_CITIES } from '../constants/api'
import { plainPost, post } from '../utils/api'
import { callWith401Handle } from './api'
import store from '../store'

function* getSearchResult(cityName){
    const weatherAPIFullURL = `${WEATHERAPI}?city=${cityName}&key=${WEATHERAPIKEY}`;
    const json = yield call(plainPost, weatherAPIFullURL, cityName);
    const result = {
                     name : json.data[0].city_name,
                     status:json.data[0].weather.description,
                     icon: json.data[0].weather.icon,
                     temp: json.data[0].temp
                    };
    return result;
}

export function* search() {
    const { weatherSearch : { cityASearch, cityBSearch } } = yield select();

    const cityAResult = yield getSearchResult(cityASearch);
    const cityBResult = yield getSearchResult(cityBSearch);

    yield put(receiveSearchData({ cityA : cityAResult, cityB : cityBResult}));
     
}

export function* saveCities() {
    const { weatherSearch : { cityASearch, cityBSearch }, auth : { id } } = yield select();
    const payload = {UserId : id, CityA : cityASearch, CityB : cityBSearch };
    const json = yield callWith401Handle(post, SAVE_CITIES, payload);
    yield put(receiveUserSavedCitiesData(json.data));    
    const abc = store.getState();
}

