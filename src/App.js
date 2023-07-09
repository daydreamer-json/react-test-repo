/**
 *! HoYoverse Jukebox
 *! Using: React, Material UI
 *! by daydreamer-json
 *! Copyright (C) 2023 daydreamer-json. All Rights Reserved.
**/

import React, { useState, useEffect } from "react";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
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

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Error from "./components/ErrorPage/Error";
import AboutPage from './components/AboutPage';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Noto Sans JP',
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
  const [db, setDb] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios (
        'https://raw.githubusercontent.com/daydreamer-json/jukebox/main/db/master.json'
      );
      setDb(result.data);
    };
    fetchData();
  }, []);
  if (!db) {
    return (
      <div className="App">
        <h3>Connecting to Database API ...</h3>
        <p>This process may take some time.</p>
        <p>If the page does not load, please contact the administrator.</p>
      </div>
    );
  }
  /* const router = createBrowserRouter([
    {
      path: "/",
      element: <Content db={db} />,
      errorElement: <Error />
    },
    {
      path: "/about",
      element: <AboutPage />
    }
  ]) */
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item container sx={{
            padding: theme.spacing(3),
          }}>
            <Grid item sm={1} />
              <Grid item xs={12} sm={10}>
                <Content db={db} />
              </Grid>
            <Grid item sm={1} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default App;