/* Core */
import React, { useContext } from 'react';

/* Views */
import { Navigation } from '../views/Navigation';
import { Layout } from '../views/Layout';
import { AuthContext } from '../routes/Routes';

export const Login = () => {
  const context = useContext(AuthContext);
  const { auth: { setIsAuthenticated } } = context;

    // ..
    // ...
    // history.push(book.mail)

  const login = event => {
    event.preventDefault();
    setIsAuthenticated(true);
  };

  return (
    <Layout>
      <Navigation />
      <header>
        <h1>Логин</h1>
      </header>
      <form onSubmit={login}>
        <input type="email" placeholder="Enter email..." />
        <input type="password" placeholder="Enter password..." />
        <input type="submit" value="Войти" />
      </form>
    </Layout>
  );
};
