import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import release_06_03 from './release-note/release-note-06-03';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        {/* <Route path="/release_notes_06-03-2020.txt">
          <release_06_03 />
        </Route> */}
        {/* <Route path="/dashboard">
        <Dashboard />
      </Route> */}
      </Switch>
    </>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
