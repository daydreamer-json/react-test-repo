import * as React from "react";
import { Link as RouterLink, Routes, Route } from 'react-router-dom';
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useTheme, AppBar, Toolbar, IconButton, Box, Typography, Link } from "@mui/material";
import styled from "@emotion/styled";
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/More';
import SearchIcon from '@mui/icons-material/Search';

import MainMenu from "./MainMenu";

function FooterPlayer () {
  const theme = useTheme();
  window.unique.playerRef = React.useRef(null);
  const plyrOptions = {
    enabled: true,
    debug: true,
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
    settings: ['captions', 'quality', 'speed', 'loop'],
    blankVideo: 'https://cdn.plyr.io/static/blank.mp4',
    autoplay: false,
    autopause: true,
    playsinline: true,
    volume: 1,
    muted: false,
    clickToPlay: true,
    disableContextMenu: true,
    hideControls: true,
    resetOnEnd: false,
    keyboard: { focused: true, global: false },
    tooltips: { controls: false, seek: true },
    displayDuration: true,
    invertTime: true,
    toggleInvert: true,
    captions: { active: false, language: 'auto', update: false },
    fullscreen: { enabled: true, fallback: true, iosNative: false, container: null },
    storage: { enabled: true, key: 'plyr' },
    speed: { selected: 1, options: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
    quality: { default: 480, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] },
    loop: { active: false },
    previewThumbnails: { enabled: false, src: '' },
    mediaMetadata: { title: '', artist: '', album: '', artwork: [] },
    title: ''
  };
  return (
    <div>
      <AppBar position="fixed" color="transparent" elevation={0} sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar sx={{paddingX: theme.spacing(2), bottom: 0 }}>
          <Plyr
            options={plyrOptions}
            ref={window.unique.playerRef}
            source={{
              type: 'audio',
              title: 'Unknown',
              sources: [
                {
                  src: '',
                  type: 'audio/mp4'
                }
              ]
            }}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default FooterPlayer;