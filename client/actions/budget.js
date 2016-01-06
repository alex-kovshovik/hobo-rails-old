export const SET_BUDGETS = 'SET_BUDGETS';
export const ADD_BUDGET = 'ADD_BUDGET';
export const DELETE_BUDGET = 'DELETE_BUDGET';

export function addBudget(budget) {
  return {
    type: ADD_BUDGET,
    id: budget.id,
    name: budget.name,
    amount: budget.amount,
    mode: budget.mode
  }
}

export function setBudgets(budgets) {
  return {
    type: SET_BUDGETS,
    budgets
  }
}

export function loadBudgets(url) {
  return dispatch => {
    $.get(url, result => {
      dispatch(setBudgets(result));
    });
  }
}

export function createBudget(url, name, amount, mode) {
  return dispatch => {
    const budget = { name, amount, mode }

    $.post(url, { budget }, result => {
      dispatch(addBudget(result));
    });
  }
}

export function deleteExpense(id) {
  return {
    type: DELETE_BUDGET,
    id
  }
}
