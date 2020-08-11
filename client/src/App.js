// import header.js to use as coverpage

/*import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Recipes from './pages/Recipes.js';
// import Alert from './components/Alert';
import PrivateRoute from './components/routing/PrivateRoute';
// Redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';

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
        <Recipes/>
      </div>
    </Provider>
  );
  }

export default App;*/

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import './components/styleSheet.css';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Router>
      <Fragment>
        <div className='profilebody'>
          <Header />
          <Navbar />
          <Switch>
            <Route exact path='/' component={ProfilePage} />
            <Route exact path='/recipes' component={Recipes} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
