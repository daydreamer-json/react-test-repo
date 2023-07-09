import * as React from "react";
import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { useTheme, AppBar, Toolbar, Typography, Link } from "@mui/material";
import styled from "@emotion/styled";
import MenuIcon from '@mui/icons-material/Menu';

import MainMenu from "./MainMenu";

function Header () {
  const theme = useTheme();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <img style={{width: '2em'}} alt="HoYoverse Mark" src="img/hoyoverse_logomark.png" />
            <Link noWrap sx={{
              display: 'flex',
              textDecoration: 'none',
              margin: theme.spacing(1),
              flexGrow: 1,
              color: 'inherit',
              typography: 'h6'
            }}>
              HoYoverse Jukebox
            </Link>
          <MainMenu />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default Header;