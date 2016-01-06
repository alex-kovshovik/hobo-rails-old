export const SET_EXPENSES = 'SET_EXPENSES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export function setExpenses(expenses) {
  return {
    type: SET_EXPENSES,
    expenses
  }
}

export function loadExpenses(url) {
  return dispatch => {
    $.get(url, result => {
      dispatch(setExpenses(result));
    });
  }
}

export function addExpense(expense) {
  return {
    type: ADD_EXPENSE,
    id: expense.id,
    date: expense.date,
    amount: expense.amount,
    budget: expense.budget_id,
    comment: expense.comment
  }
}

export function createExpense(url, date, amount, budget, comment) {
  return dispatch => {
    // TODO: unhardcode budget ID.
    const expense = { budget_id: 1, date, amount, comment }

    $.post(url, { expense }, result => {
      dispatch(addExpense(result));
    });
  }
}

export function deleteExpense(id) {
  return {
    type: DELETE_EXPENSE,
    id
  }
}
