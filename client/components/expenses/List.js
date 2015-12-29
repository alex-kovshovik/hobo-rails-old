import React, { Component } from 'react'

class Expense extends Component {
  render() {
    return (
        <tr>
          <td>{this.props.date}</td>
          <td>{this.props.budget}</td>
          <td>{this.props.comment}</td>
          <td>{this.props.amount}</td>
        </tr>
    )
  }
}

export default class ExpenseList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <table className="table">
          <tr>
            <th>Date</th>
            <th>Budget</th>
            <th>Comment</th>
            <th>Amount</th>
          </tr>

          {this.props.expenses.map((expense) => <Expense key={expense.id} {...expense} />)}
        </table>
    );
  }
}
