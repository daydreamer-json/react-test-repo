import * as React from "react";
import { AppBar, Toolbar, Box, Typography, Button, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import MenuIcon from '@mui/icons-material/Menu';

function Header () {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="p" noWrap sx={{
            display: 'flex',
            textDecoration: 'none',
          }}>
            Header.js(別ファイル)です。ここにメニューとか出すComponentを挿入
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;