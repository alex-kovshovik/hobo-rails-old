export const SET_BUDGETS = 'SET_BUDGETS';
export const ADD_BUDGET = 'ADD_BUDGET';
export const DELETE_BUDGET = 'DELETE_BUDGET';

export function addBudget(budget) {
  return {
    type: ADD_BUDGET,
    id: budget.id,
    date: budget.date,
    amount: budget.amount,
    budget: budget.budget_id,
    comment: budget.comment
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

//export function createBudget(url, date, amount, budget, comment) {
//  return dispatch => {
//    const expenseData = {
//      budget_id: 1, date, amount, comment
//    }
//
//    $.post(url, {expense: expenseData}, (result) => {
//      dispatch(addExpense(result));
//    });
//  }
//}
//
//export function deleteExpense(id) {
//  return {
//    id,
//    type: DELETE_EXPENSE
//  }
//}
