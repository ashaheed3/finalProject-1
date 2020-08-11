import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import Recipes from '../pages/Recipes';
import Preferences from '../pages/Preferences';
import Kitchen from '../pages/Kitchen';

const Routes = (props) => {
  return (
    <section>
      <Switch>
        <Route exact path='/profilepage' component={ProfilePage} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/preferences' component={Preferences} />
        <Route exact path='/kitchen' component={Kitchen} />
      </Switch>
    </section>
  );
};

export default Routes;
