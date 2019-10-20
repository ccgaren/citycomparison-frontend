import { createReducer } from 'redux-act'

import * as a from '../actions/weather'

const getDefaultState = _ => ({
  cityASearch:'',
  cityBSearch:'',
  cityA: {},
  cityB: {},
  cities : []
})

export default _ =>
  createReducer(
    {
      [a.changeCityA]: (state, cityASearch) => ({
        ...state,
        cityASearch : cityASearch
      }),
      [a.changeCityB]: (state, cityBSearch) => ({
        ...state,
        cityBSearch : cityBSearch
      }),
      [a.search]: (state) => ({
        ...state
      }),
      [a.saveCities]: (state) => ({
        ...state
      }),
      [a.receiveSearchData]: (state, { cityA, cityB }) => ({
        ...state,
        cityA : cityA,
        cityB : cityB
      }),
      [a.receiveUserSavedCitiesData]: (state, cities) => ({
        ...state,
        cities : cities 
      })
    },
    getDefaultState()
  );