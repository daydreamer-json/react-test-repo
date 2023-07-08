import * as React from "react";
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
import FetchAPI from './components/FetchAPI';
const uiTheme = createTheme({});

function App () {
  console.log(FetchAPI());
  return (
    <div className="App">
      {/* <Button>text - これはテキストボタンです。</Button>
      <Button variant="contained">contained - これは塗りつぶされたボタンです。</Button>
      <Button variant="outlined">outlined - これは枠線のみのボタンです。</Button> */}
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container sx={{
          padding: uiTheme.spacing(3),
        }}>
          <Grid item sm={2} />
            <Grid item xs={12} sm={8}>
              <Paper elevation={8}>
                <Typography variant="body1" component="p" sx={{
                  textAlign: 'center',
                  padding: uiTheme.spacing(4)
                }}>
                  ここにコンテンツが入ります。Gridで記述。
                </Typography>
                <Button sx={{width: '100%'}}>text - これはテキストボタンです。</Button>
                <Button sx={{width: '100%'}} variant="contained">contained - これは塗りつぶされたボタンです。</Button>
                <Button sx={{width: '100%'}} variant="outlined">outlined - これは枠線のみのボタンです。</Button>
              </Paper>
            </Grid>
          <Grid item sm={2} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;