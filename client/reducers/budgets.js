import { SET_BUDGETS, ADD_BUDGET, DELETE_BUDGET } from '../actions/budget'

const budget = (state = {}, action) => {
  switch(action.type) {
    case ADD_BUDGET:
      return {
        id: action.id,
        name: action.name,
        amount: action.amount,
        mode: action.mode
      }
    default:
      return state
  }
};

const budgets = (state =[], action) => {
  switch (action.type) {
    case SET_BUDGETS:
      return action.budgets;
    case ADD_BUDGET:
      return [...state, budget(undefined, action)];
    case DELETE_BUDGET: {
      console.log("TODO: not implemented.")
      return state;
    }
    default:
      return state
  }
};

export default budgets;
