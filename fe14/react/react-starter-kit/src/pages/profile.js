/* Core */
import React from 'react';

/* Views */
import { Navigation } from '../views/Navigation';
import { Layout } from '../views/Layout';

export const Profile = () => {
  return (
    <Layout>
      <Navigation />
      <header>
        <h1>Профиль</h1>
      </header>
    </Layout>
  );
};
