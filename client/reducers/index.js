import { combineReducers } from 'redux'

import app from './app'
import expenses from './expenses'
import budgets from './budgets'

const rootReducer = combineReducers({
  app,
  expenses,
  budgets
});

export default rootReducer
