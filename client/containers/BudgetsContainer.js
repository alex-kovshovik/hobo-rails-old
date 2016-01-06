import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import BudgetList from '../components/budgets/List'
import AddBudget from '../components/budgets/AddBudget'

import * as BudgetActions from '../actions/budget'

function mapStateToProps(state) {
  return {
    budgets: state.budgets
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BudgetActions, dispatch)
}

class BudgetsContainer extends Component {
  componentDidMount() {
    // TODO: remove hard-coded URL.
    const url = "http://localhost:3001/budgets";

    this.props.loadBudgets(url);
  }

  render() {
    const { budgets } = this.props;

    return (<div>
      <div className="row">
        <div className="col-md-12">
          <h1>Budgets</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <BudgetList budgets={budgets} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h3>Add budget</h3>

          <AddBudget createBudget={this.props.createBudget} />
        </div>
      </div>
    </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetsContainer)
