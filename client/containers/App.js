import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from '../actions/counter'

//import User from '../components/shared/User'
//import Expense from '../components/expenses/Form'
//import ExpenseList from '../components/expenses/List'
import Counter from '../components/Counter'

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

// TODO: uncomment to add features.
//export class App extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      user: {},
//      expenses: []
//    };
//  }
//
//  componentDidMount() {
//    // TODO: remove hard-coded URL.
//    $.get("http://localhost:3001/users/1", (result) => {
//      this.setState({
//        user: result
//      });
//    });
//  }
//
//  render() {
//    return (<div>
//      <h1>Welcome to HOBO</h1>
//
//      <small>Highly opinionated budget organizer</small>
//
//      <h2>Counter</h2>
//      <Counter />
//
//      <h2>Current user:</h2>
//      <User {...this.state.user} />
//
//      <h2>Log expense</h2>
//      <Expense />
//
//      <h2>Expenses</h2>
//      <ExpenseList expenses={this.state.expenses} />
//    </div>);
//  }
//}
