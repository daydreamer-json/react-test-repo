import React, { useState, useEffect } from "react";
import { Link as RouterLink, Routes, Route } from 'react-router-dom';
import { useTheme, Typography, IconButton, Menu, MenuItem, Link} from "@mui/material";
import styled from "@emotion/styled";
import MoreVertIcon from '@mui/icons-material/MoreVert';

function MainMenu () {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <div className="MainMenuButton">
      <IconButton
        color="inherit"
        id="main-menu-button"
        aria-controls={open ? 'main-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="main-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'main-menu-button'
        }}
      >
        <RouterLink to="/about" style={{
          color: theme.palette.text.primary,
          textDecoration: 'none',
        }}>
          <MenuItem onClick={handleClose}>
            About
          </MenuItem>
        </RouterLink>
      </Menu>
    </div>
  )
}

export default MainMenu;