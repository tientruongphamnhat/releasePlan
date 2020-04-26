import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Release0603 from './release-note/release-note-06-03';
import Release1203 from './release-note/release-note-12-03';
import Release2603 from './release-note/release-note-26-03';
import Release0204 from './release-note/release-note-02-04';
import Release0904 from './release-note/release-note-09-04';
// import Release1604 from './release-note/release-note-16-04';
import Release2304 from './release-note/release-note-23-04';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/Release_notes_06-03-2020.txt">
        <Release0603 />
      </Route>
      <Route path="/Release_notes_12-03-2020.txt">
        <Release1203 />
      </Route>
      <Route path="/Release_notes_26-03-2020.txt">
        <Release2603 />
      </Route>
      <Route path="/Release_notes_02-04-2020.txt">
        <Release0204 />
      </Route>
      <Route path="/Release_notes_09-04-2020.txt">
        <Release0904 />
      </Route>
      {/* <Route path="/Release_notes_16-04-2020.txt">
        <Release1604 />
      </Route> */}
      <Route path="/Release_notes_23-04-2020.txt">
        <Release2304 />
      </Route>
      {/* <Route path="/dashboard">
        <Dashboard />
      </Route> */}
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
