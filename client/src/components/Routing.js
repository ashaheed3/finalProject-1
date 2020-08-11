import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import Recipes from '../pages/Recipes';
import Preferences from '../pages/Preferences'


const Routes = props => {
  return (
    <section className="container">
      
      <Switch>
        <Route exact path="/profilepage" component={ProfilePage} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/preferences" component={Preferences} />
        
      </Switch>
    </section>
  );
};

export default Routes;