import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, useRouterHistory} from 'react-router';
import {createHistory} from 'history';
import {Hello} from './app/hello';
// import history from './wnl_history';
// history.init();
import './index.scss';

// import CanvasNest from 'canvas-nest.js';

// const config = {
//   color: `${(parseInt(Math.random() * 3, 10) + 1) * 51}, ${(parseInt(Math.random() * 3, 10) + 1) * 51}, ${(parseInt(Math.random() * 3, 10) + 1) * 51}`,
//   count: 25,
//   opacity: '1'
// };

// // render nest on element with config.
// const cn = new CanvasNest(document.querySelector('html'), config);
// console.log(cn);

// specify basename below if running in a subdirectory or set as "/" if app runs in root
const appHistory = useRouterHistory(createHistory)({
  basename: '/numberology/summary/'
});

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={Hello}/>
  </Router>,
  document.getElementById('root')
);
