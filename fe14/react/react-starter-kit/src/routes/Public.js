/* Core */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/* Pages */
import { Login } from '../pages/login';
import { Signup } from '../pages/signup';

import { book } from './book'

export const Public = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path={book.signup} component={Signup} />
      <Redirect to="/login" />
    </Switch>
  );
};
