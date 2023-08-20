import React from 'react';
import { AppBar, Toolbar, CssBaseline, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.css';
import { routes } from 'lib/router/Router';
import { isUserLoggedIn } from 'lib/helpers/isUserLoggedIn';

function Header() {
  const location = useLocation();
  const onLogout = () => localStorage.removeItem('token');

  const getTitle = () => {
    if (location.pathname === '/processors') {
      return 'Processors';
    } else if (location.pathname.startsWith('/processors/compare')) {
      return 'Processor comparison';
    } else if (location.pathname.startsWith('/processors/')) {
      return 'Processor details';
    } else if (location.pathname === '/login') {
      return 'Login';
    } else if (location.pathname === '/register') {
      return 'Register';
    }
  };

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          {getTitle()}
        </Typography>
        <div className={classes.navlinks}>
          <Link to={routes.PROCESSORS} className={classes.link}>
            Processors
          </Link>
          {!isUserLoggedIn() ? (
            <>
              <Link to={routes.LOGIN} className={classes.link}>
                Login
              </Link>
              <Link to={routes.REGISTER} className={classes.link}>
                Register
              </Link>
            </>
          ) : (
            <Link to={routes.LOGIN} onClick={onLogout} className={classes.link}>
              Logout
            </Link>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
export { Header };
