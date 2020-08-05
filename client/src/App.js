import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Profile} />
          <Route exact path='/favorites' component={Favorites} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
