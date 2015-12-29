import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { Router, Route, Link } from 'react-router'

import App from './containers/App'
import configureStore from './store/configureStore'

import $ from 'jquery';

window.jQuery = $;
window.$ = $;

const store = configureStore();

render((
    <Provider store={store}>
      <App />
    </Provider>
), document.getElementById('root'));
