/* Core */
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

/* Instruments */
import './styles.scss';
import { AuthContext } from '../../routes/Routes';
import { book } from '../../routes/book';

export const Navigation = () => {
  const context = useContext(AuthContext);
  const {
    auth: { isAuthenticated, setIsAuthenticated },
  } = context;

  const logout = () => {
      setIsAuthenticated(false);
  };

  return (
    <nav>
      <h1>Навигация</h1>
      <div>
        {isAuthenticated ? (
          <>
            <NavLink activeClassName="active" to="/profile">
              Профиль
            </NavLink>
            <NavLink activeClassName="active" to="/mail">
              Почта
            </NavLink>
            <NavLink activeClassName="active" to="/login" onClick = {logout}>
              Выйти
            </NavLink>
          </>
        ) : (
          <>
            <NavLink activeClassName="active" to="/login">
              Логин
            </NavLink>
            <NavLink activeClassName="active" to={book.signup}>
              Регистрация
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};
