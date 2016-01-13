import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ExpenseList from '../components/expenses/List'
import AddExpense from '../components/expenses/AddExpense'

import * as ExpenseActions from '../actions/expense'

function mapStateToProps(state) {
  return {
    expenses: state.expenses
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ExpenseActions, dispatch)
}

class ExpensesContainer extends Component {
  componentDidMount() {
    // TODO: remove hard-coded URL.
    const url = "http://localhost:3001/expenses";

    this.props.loadExpenses(url);
  }

  render() {
    const { expenses } = this.props;

    return (<div>
      <div className="row">
        <div className="col-md-12">
          <h1>Expenses</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <h3>Log expense</h3>
          <AddExpense createExpense={this.props.createExpense} />
        </div>

        <div className="col-md-8">
          <h3>Expenses</h3>
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesContainer)
