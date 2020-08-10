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

if (localStorage.token){
  setAuthToken(localStorage.token);
}


const App = () =>{ 
  
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return(
    
    <Provider store={store}>
      <div className="App">
        <Cover/>
      </div>
    </Provider>
  );
  }

export default App;
