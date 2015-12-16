import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

render(<App />, document.getElementById('root'));
