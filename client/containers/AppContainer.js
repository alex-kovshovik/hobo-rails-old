import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import User from '../components/shared/User'
import ExpenseList from '../components/expenses/List'
import AddExpenseContainer from './AddExpenseContainer'
import DevTools from './DevTools'

import * as AppActions from '../actions/app'

function mapStateToProps(state) {
  return {
    user: state.app.user,
    expenses: state.expenses
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch)
}

class AppContainer extends Component {
  componentDidMount() {
    // TODO: remove hard-coded URL.
    const url = "http://localhost:3001/users/1";

    this.props.loadUser(url);
  }

  render() {
    const { user, expenses } = this.props;

    return (<div>
      <DevTools />

      <div className="row">
        <div className="col-md-8">
          <h1>Welcome to HOBO</h1>

          Highly opinionated budget organizer
        </div>

        <User className="col-md-4" {...user} />
      </div>

      <div className="row">
        <div className="col-md-4">
          <h3>Log expense</h3>
          <AddExpenseContainer />
        </div>

        <div className="col-md-8">
          <h3>Expenses</h3>
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
