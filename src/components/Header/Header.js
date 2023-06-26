import React from 'react';
import { AppBar, Toolbar, CssBaseline, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/login" className={classes.link}>
            Login
          </Link>
          <Link to="/register" className={classes.link}>
            Register
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export { Header };
