import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Recipes from './pages/Recipes.js';
// import Alert from './components/Alert';
import PrivateRoute from './components/routing/PrivateRoute';
// Redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import '../src/pages/app.css'
import Cover from '../src/pages/Cover'
import ProfilePage from './pages/ProfilePage';
import './components/styleSheet.css';
import './components/Navbar'
import Preferences from './pages/Preferences';
import Navbar from "./components/Navbar"
import Routes from "./components/Routing"

if (localStorage.token){
  setAuthToken(localStorage.token);
}


const App = () =>{ 
  
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return(
    
    <Provider store={store}>
      <Router>
      
        
      <Fragment> 
      <Navbar />
          <Switch>
            <Route exact path="/" component={Cover} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      
      
      </Router>

    </Provider>
  );
  }

export default App;
