/**
 *! HoYoverse Jukebox
 *! Using: React, Material UI
 *! by daydreamer-json
 *! Copyright (C) 2023 daydreamer-json. All Rights Reserved.
**/

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { createTheme, ThemeProvider, Button, Container, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import '@fontsource/noto-sans-jp/100.css';
import '@fontsource/noto-sans-jp/200.css';
import '@fontsource/noto-sans-jp/300.css';
import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/600.css';
import '@fontsource/noto-sans-jp/700.css';
import '@fontsource/noto-sans-jp/800.css';
import '@fontsource/noto-sans-jp/900.css';
import '@fontsource/noto-sans-sc/100.css';
import '@fontsource/noto-sans-sc/300.css';
import '@fontsource/noto-sans-sc/400.css';
import '@fontsource/noto-sans-sc/500.css';
import '@fontsource/noto-sans-sc/700.css';
import '@fontsource/noto-sans-sc/900.css';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FooterPlayer from "./components/FooterPlayer";
import Content from './components/Content';
import Error from "./components/ErrorPage/Error";
import AboutPage from './components/AboutPage';
import SettingsPage from "./components/SettingsPage";
import AlbumPage from "./components/AlbumPage";
import { ReportGmailerrorred } from "@mui/icons-material";
const theme = createTheme({
  palette: {
    background: {
      default: '#f2f2f2'
    }
  },
  typography: {
    fontFamily: [
      'DIN Pro',
      'Noto Sans JP',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif'
    ].join(','),
  }
});

function App () {
  window.unique = {}
  const [db, setDb] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios (
        'https://raw.githubusercontent.com/daydreamer-json/jukebox/main/db/master.json'
      );
      setDb(result.data);
      window.db = result.data;
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [null]);
  if (!db) {
    return (
      <div className="App">
        <h3>Connecting to Database API ...</h3>
        <p>This process may take some time.</p>
        <p>If the page does not load, please contact the administrator.</p>
      </div>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{
        backgroundColor: theme.palette.background.default
      }}>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item container sx={{
            padding: theme.spacing(3),
          }}>
            <Grid item sm={1} />
              <Grid item xs={12} sm={10}>
                <Routes>
                  <Route index element={<Content db={db} />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/album/:albumUniqueId" element={<AlbumPage db={db} />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </Grid>
            <Grid item sm={1} />
          </Grid>
          <Grid item>
            <FooterPlayer />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default App;