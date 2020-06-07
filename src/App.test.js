import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
