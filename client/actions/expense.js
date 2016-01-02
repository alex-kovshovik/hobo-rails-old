export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

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
    const expenseData = {
      budget_id: 1, date, amount, comment
    }

    $.post(url, {expense: expenseData}, (result) => {
      dispatch(addExpense(result));
    });
  }
}

export function deleteExpense(id) {
  return {
    id,
    type: DELETE_EXPENSE
  }
}
