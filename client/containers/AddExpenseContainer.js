import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AddExpense from '../components/expenses/AddExpense'

import * as ExpenseActions from '../actions/expense';

function mapStateToProps(state) {
  return {
    expenses: state.expenses
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ExpenseActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
