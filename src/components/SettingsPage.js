import * as React from "react";
import { useTheme, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Divider, Select, FormControl, MenuItem, List, ListSubheader, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Avatar, IconButton, Paper, ListItemButton, InputLabel } from "@mui/material";
import styled from "@emotion/styled";
import WifiIcon from '@mui/icons-material/Wifi';
import TranslateIcon from '@mui/icons-material/Translate';

import UserConfig from "../UserConfig";

function SettingsPage (props) {
  const { db } = props;
  const theme = useTheme();
  let appSettings = {}
  if (localStorage.getItem('ddjson-jukebox_settings') === null) {
    appSettings = {
      'settings_quality': localStorage.getItem('ddjson-jukebox_settings') || UserConfig.settingsDefaultVar.settings_quality,
      'settings_language': localStorage.getItem('ddjson-jukebox_settings') || UserConfig.settingsDefaultVar.settings_language,
      'settings_dataLang': localStorage.getItem('ddjson-jukebox_settings') || UserConfig.settingsDefaultVar.settings_dataLang
    };
    localStorage.setItem('ddjson-jukebox_settings', JSON.stringify(appSettings));
  } else {
    appSettings = JSON.parse(localStorage.getItem('ddjson-jukebox_settings'));
  }
  const [settingsQuality, setQuality] = React.useState(appSettings.settings_quality);
  const [settingsLanguage, setLanguage] = React.useState(appSettings.settings_language);
  const [settingsDataLang, setDataLang] = React.useState(appSettings.settings_dataLang);
  const handleSettingsQualityChange = (event) => {
    setQuality(event.target.value);
    appSettings.settings_quality = event.target.value;
    localStorage.setItem('ddjson-jukebox_settings', JSON.stringify(appSettings));
  };
  const handleSettingsLanguageChange = (event) => {
    setLanguage(event.target.value);
    appSettings.settings_language = event.target.value;
    localStorage.setItem('ddjson-jukebox_settings', JSON.stringify(appSettings));
  };
  const handleSettingsDataLangChange = (event) => {
    setDataLang(event.target.value);
    appSettings.settings_dataLang = event.target.value;
    localStorage.setItem('ddjson-jukebox_settings', JSON.stringify(appSettings));
  };
  return (
    <div className="settingsPage">
      <List
        sx={{
          bgcolor: theme.palette.background.paper
        }}
      >
        <ListItem>
          <ListItemIcon sx={{ minWidth: '40px' }}>
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
        <ListItem>
          <ListItemIcon sx={{ minWidth: '40px' }}>
            <TranslateIcon />
          </ListItemIcon>
          <ListItemText primary="Display Language" />
          <FormControl sx={{minWidth: '120px'}}>
            <Select
              value={settingsLanguage}
              onChange={handleSettingsLanguageChange}
              size="small"
            >
              <MenuItem value={"en-us"}>English</MenuItem>
              <MenuItem value={"ja-jp"}>日本語</MenuItem>
              <MenuItem value={"zh-cn"}>中文</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ minWidth: '40px' }}>
            <TranslateIcon />
          </ListItemIcon>
          <ListItemText primary="Data Language" />
          <FormControl sx={{minWidth: '120px'}}>
            <Select
              value={settingsDataLang}
              onChange={handleSettingsDataLangChange}
              size="small"
            >
              <MenuItem value={"en-us"}>English</MenuItem>
              <MenuItem value={"ja-jp"}>日本語</MenuItem>
              <MenuItem value={"zh-cn"}>中文</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
      </List>
    </div>
  )
}

export default SettingsPage;