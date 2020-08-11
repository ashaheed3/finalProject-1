import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import Recipes from '../pages/Recipes';
import Preferences from '../pages/Preferences';
import Cover from '../pages/Cover';
import PrivateRoute from '../components/routing/PrivateRoute'

const Routes = (props) => {
  return (
    <section>
      <Switch>
        <Route exact path='/' component={Cover} />
        <PrivateRoute exact path='/profilepage' component={ProfilePage} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/preferences' component={Preferences} />
      </Switch>
    </section>
  );
};

export default Routes;
