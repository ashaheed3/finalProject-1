import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Profile} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
