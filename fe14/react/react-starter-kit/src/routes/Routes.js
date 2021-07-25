/* Core */
import React, { useState } from 'react';

/* Pages */
import { Public } from './Public';
import { Private } from './Private';

export const AuthContext = React.createContext();

export const Routes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Инициализация...
  // Аутентификация...

  return (
    <AuthContext.Provider
      value={{
        auth: {
          isAuthenticated,
          setIsAuthenticated,
        },
      }}>
      {isAuthenticated ? (
        <Private />
      ) : (
        <Public />
      )}
    </AuthContext.Provider>
  );
};
