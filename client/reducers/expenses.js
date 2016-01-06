import { SET_EXPENSES, ADD_EXPENSE, DELETE_EXPENSE } from '../actions/expense'

const expense = (state = {}, action) => {
  switch(action.type) {
    case ADD_EXPENSE:
      return {
        id: action.id,
        date: action.date,
        amount: action.amount,
        budget: action.budget,
        comment: action.comment
      }
    default:
      return state
  }
};

const expenses = (state =[], action) => {
  switch (action.type) {
    case SET_EXPENSES:
      return action.expenses;
    case ADD_EXPENSE:
      return [...state, expense(undefined, action)];
    case DELETE_EXPENSE: {
      console.log("TODO: not implemented.")
      return state;
    }
    default:
      return state
  }
};

export default expenses;
