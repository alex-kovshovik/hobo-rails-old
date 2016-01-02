import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'

import AppContainer from './containers/AppContainer';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={AppContainer} />
          </Router>
        </Provider>
    );
  }
}
