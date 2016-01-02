import { combineReducers } from 'redux'

import app from './app'
import expenses from './expenses'

const rootReducer = combineReducers({
  app,
  expenses
});

export default rootReducer
