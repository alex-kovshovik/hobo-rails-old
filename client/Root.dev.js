import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import AppContainer from './containers/AppContainer'
import ExpensesContainer from './containers/ExpensesContainer'
import BudgetsContainer from './containers/BudgetsContainer'

import DevTools from './containers/DevTools';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
        <Provider store={store}>
          <div>
            { /* <DevTools /> */ }

            <Router history={browserHistory}>
              <Route path="/" component={AppContainer} >
                <IndexRoute component={ExpensesContainer} />
                <Route path="expenses" component={ExpensesContainer} />
                <Route path="budgets" component={BudgetsContainer} />
              </Route>
            </Router>
          </div>
        </Provider>
    );
  }
}
