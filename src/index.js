import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, useRouterHistory} from 'react-router';
import {createHistory} from 'history';
import {Hello} from './app/hello';
import history from './wnl_history';

import './index.scss';

// specify basename below if running in a subdirectory or set as "/" if app runs in root
const appHistory = useRouterHistory(createHistory)({
  basename: '/numberology/summary/'
});

history.init();

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={Hello}/>
  </Router>,
  document.getElementById('root')
);
