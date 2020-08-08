import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import './components/styleSheet.css';

function App() {
  return (
    <Router>
      <Fragment>
        <div className='profilebody'>
          <Header />
          <Navbar />
          <Switch>
            <Route exact path='/' component={ProfilePage} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
