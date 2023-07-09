import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
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
        {/* <Router> */}
          <MenuItem onClick={handleClose}>
            About
          </MenuItem>
        {/* </Router> */}
      </Menu>
    </div>
  )
}

export default MainMenu;