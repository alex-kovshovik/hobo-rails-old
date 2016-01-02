import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { Router, Route, Link, browserHistory } from 'react-router'

import Root from './Root'
import configureStore from './store/configureStore'

import $ from 'jquery';

window.jQuery = $;
window.$ = $;

const store = configureStore();

render((
  <Root store={store} />
), document.getElementById('root'));
