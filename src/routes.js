import React from 'react';

import Home from './views/Home';
import NotFound from './views/NotFound';
import View from './components/View';

const routes = [
  {
    pattern: '/home',
    label: 'Home',
    component: props => (
      <View
        id={'home'}
      >
        <Home
          {...props}
        />
      </View>
    ),
  }, {
    pattern: '/not-found',
    label: 'Not Found',
    component: props => (
      <View
        id={'not-found'}
      >
        <NotFound
          {...props}
        />
      </View>
    )
  },
];

export default routes;
