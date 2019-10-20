import { createReducer } from 'redux-act'
import * as a from '../actions/navigation'

import { unauthorizeUser } from '../actions/auth'
import { loggedIn } from '../utils/auth'

const getDefaultState = page => ({
  page,
  subPage: undefined
});

const forward = (state, page) => ({ state, page });

export default _ =>
  createReducer(
    {
      [a.to]: forward,
      [a.toSubPage]:(state, subPage) => ({ ...state, page: 'dashboard', subPage }),
      [a.toWeather]: (state) =>({
        ...state
      }),
      [unauthorizeUser]: state => forward(state, 'login'),
    },
    getDefaultState( loggedIn() ? 'dashboard' : 'login')
  );
