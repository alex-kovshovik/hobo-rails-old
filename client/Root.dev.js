import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'

import AppContainer from './containers/AppContainer';
import DevTools from './containers/DevTools';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
        <Provider store={store}>
          <div>
            <Router history={browserHistory}>
              <Route path="/" component={AppContainer} />

              <DevTools />
            </Router>
          </div>
        </Provider>
    );
  }
}
