import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import * as CounterActions from '../actions/counter'

import User from '../components/shared/User'
import Expense from '../components/expenses/Form'
import ExpenseList from '../components/expenses/List'
//import Counter from '../components/Counter'

//function mapStateToProps(state) {
//  return {
//    counter: state.counter
//  }
//}
//
//function mapDispatchToProps(dispatch) {
//  return bindActionCreators(CounterActions, dispatch)
//}

//const CounterApp = connect(mapStateToProps, mapDispatchToProps)(Counter);

const hoboState = {
  expenses: [],
  user: {}
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      expenses: []
    };
  }

  componentDidMount() {
    // TODO: remove hard-coded URL.
    $.get("http://localhost:3001/users/1", (result) => {
      this.setState({
        user: result
      });
    });
  }

  render() {
    return (<div>
      <div className="row">
        <div className="col-md-8">
          <h1>Welcome to HOBO</h1>

          Highly opinionated budget organizer
        </div>

        <User className="col-md-4" {...this.state.user} />
      </div>

      <div className="row">
        <div className="col-md-5">
          <h3>Log expense</h3>
          <Expense />
        </div>

        <div className="col-md-7">
          <h3>Expenses</h3>
          <ExpenseList expenses={this.state.expenses} />
        </div>
      </div>
    </div>);
  }
}


