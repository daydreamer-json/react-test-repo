import * as React from "react";
import { useTheme, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Divider, Select, FormControl, MenuItem, List, ListSubheader, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Avatar, IconButton, Paper, ListItemButton, InputLabel } from "@mui/material";
import styled from "@emotion/styled";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import WifiIcon from '@mui/icons-material/Wifi';

function SettingsPage (props) {
  const { db } = props;
  const theme = useTheme();
  /* const [quality, setQuality] = React.useState(localStorage.getItem('quality') || '');
  const [language, setLanguage] = React.useState(localStorage.getItem('language') || ''); */
  const [settingsQuality, setQuality] = React.useState('');
  const [settingsLanguage, setLanguage] = React.useState('');
  const handleSettingsQualityChange = (event) => {
    setQuality(event.target.value);
    // localStorage.setItem('quality', event.target.value);
  };
  const handleSettingsLanguageChange = (event) => {
    setLanguage(event.target.value);
    // localStorage.setItem('language', event.target.value);
  };
  return (
    <div className="settingsPage">
      <List
        sx={{
          bgcolor: theme.palette.background.paper
        }}
      >
        <ListItem>
          <ListItemIcon>
            <WifiIcon />
          </ListItemIcon>
          <ListItemText primary="Preferred Quality" />
          <FormControl sx={{minWidth: '120px'}}>
            <Select
              value={settingsQuality}
              onChange={handleSettingsQualityChange}
              size="small"
            >
              <MenuItem value={1}>Best</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>Efficient</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
      </List>
    </div>
  )
}

export default SettingsPage;