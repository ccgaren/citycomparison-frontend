import { createReducer } from 'redux-act'
import { receiveSearchData } from '../actions/weather'
import { date } from 'redux-form-validators'

const getDefaultState = () => ({
  name: undefined,
  status: undefined,
  icon: undefined,
  publishTime: undefined,
  temp: undefined,
})
 
export default _ =>
  createReducer(
    {
      [receiveSearchData]: (state, city) => ({
        ...state,
        ...city,
        publishTime : Date.now()
      })
    },
    getDefaultState()
  )
