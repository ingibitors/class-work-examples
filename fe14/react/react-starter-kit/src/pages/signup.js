/* Core */
import React from 'react';

/* Views */
import { Navigation } from '../views/Navigation';
import { Layout } from '../views/Layout';

export const Signup = () => {
  return (
    <Layout>
      <Navigation />
      <header>
        <h1>Регистрация</h1>
      </header>
    </Layout>
  );
};
