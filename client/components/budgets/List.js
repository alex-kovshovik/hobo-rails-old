import React, { Component } from 'react'

class Budget extends Component {
  render() {
    return (
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.amount}</td>
          <td>{this.props.mode == 'normal' ? '' : this.props.mode}</td>
        </tr>
    )
  }
}

export default class BudgetList extends Component {
  render() {
    return (
        <table className="table table-striped table-hover">
          <tbody>
            <tr>
              <th>Budget</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>

            {this.props.budgets.map(budget => <Budget key={budget.id} {...budget} />)}
          </tbody>
        </table>
    );
  }
}
