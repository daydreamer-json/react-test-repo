import * as React from "react";
import { useTheme, ThemeProvider, AppBar, Toolbar, Box, Typography, Button, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import MenuIcon from '@mui/icons-material/Menu';

function Header () {
  const theme = useTheme();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <img style={{width: '2em'}} alt="HoYoverse Mark" src="img/hoyoverse_logomark.png" />
          <Typography variant="h6" component="p" noWrap sx={{
            display: 'flex',
            textDecoration: 'none',
            margin: theme.spacing(1)
          }}>
            HoYoverse Jukebox
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default Header;