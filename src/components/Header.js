import * as React from "react";
import { Link as RouterLink, Routes, Route } from 'react-router-dom';
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
          <img style={{width: '2em'}} alt="HoYoverse Mark" src="/img/hoyoverse_logomark.png" />
          {/* <Link noWrap sx={{
            display: 'flex',
            textDecoration: 'none',
            margin: theme.spacing(1),
            flexGrow: 1,
            color: 'inherit',
            typography: 'h6'
          }}>
            HoYoverse Jukebox
          </Link> */}
          <RouterLink to="/" style={{
            display: 'flex',
            textDecoration: 'none',
            margin: theme.spacing(1),
            flexGrow: 1,
            color: theme.palette.background.default,
          }}>
            <Typography variant="h6" component="span">
              HoYoverse Jukebox
            </Typography>
          </RouterLink>
          <MainMenu />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default Header;