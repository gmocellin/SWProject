import _ from 'lodash';
import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

import routes from '../../routes';

const App = () => {
  const mappedRoutes = _.map(routes, route => (
    <Route
      key={route.label}
      path={route.pattern}
      component={route.component}
    />
  ));
  
  return (    
    <div>
      <Switch>
        {mappedRoutes}
        <Redirect exact path="/" to="home" />
        <Redirect to="not-found" />
      </Switch>
    </div>
  );
};
export default withRouter(App);