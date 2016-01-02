export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

let nextExpenseId = 0;

// TODO: handle updating the expense here as well by adding optional "id" parameter???
export function addExpense(date, amount, budget, comment) {
  return {
    id: nextExpenseId++,
    type: ADD_EXPENSE,
    date,
    amount,
    budget,
    comment
  }
}

export function deleteExpense(id) {
  return {
    id,
    type: DELETE_EXPENSE
  }
}
