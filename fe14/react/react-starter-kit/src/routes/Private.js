/* Core */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/* Pages */
import { Mail } from '../pages/mail';
import { Profile } from '../pages/profile';

import { book } from './book'

export const Private = () => {
  return (
    <Switch>
      <Route path={book.profile} component={Profile} />
      <Route path={book.mail} component={Mail} />
      <Redirect to={book.mail} />
    </Switch>
  );
};
