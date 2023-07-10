import * as React from "react";
import { useTheme, Typography, Divider, Fade, Alert, IconButton, Menu, MenuItem, Link, AlertTitle} from "@mui/material";
import styled from "@emotion/styled";

function AboutPage () {
  const theme = useTheme();
  return (
    <div className="AboutPage">
      <Fade in timeout={1000}>
        <div className="AboutPageMainTitle" style={{textAlign: 'center'}}>
          <img style={{width: '10em', height: '10em'}} alt="HoYoverse Mark" src="img/hoyoverse_logomark.png" />
          <Typography variant="h4" component="h1">
            HoYoverse Jukebox
          </Typography>
          <Typography variant="h6" component="h2">
            Created by daydreamer-json
          </Typography>
        </div>
      </Fade>
      <Divider sx={{
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
      }} />
      <div className="AboutPageDetailedContext">
        {/* <Typography variant="h5" component="p">
          This site is work in progress.
        </Typography> */}
        <Alert variant="filled" severity="warning">
          <AlertTitle>
            Warning
          </AlertTitle>
          This site is work in progress. Only the layout is ready.
        </Alert>
        <Divider sx={{
          marginTop: theme.spacing(4),
          marginBottom: theme.spacing(4)
        }} />
        <Typography variant="body1" component="p">
          The resources published on this site may be used for research purposes only.
        </Typography>
        <br />
        <Typography variant="body1" component="p">
          The author of this site does not own the copyright to the resources. The copyright notice is as follows.
        </Typography>
        <br />
        <Typography variant="body1" component="p">
          (C) miHoYo / COGNOSPHERE. All rights reserved.
        </Typography>
        <Divider sx={{
          marginTop: theme.spacing(4),
          marginBottom: theme.spacing(4)
        }} />
        <Typography variant="body1" component="p">
          This site uses the following components:
        </Typography>
        <div className="AboutPageUsingToolIconHolder" style={{
          margin: theme.spacing(1)
        }}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg"
            alt="Node.js"
            style={{height: '4em', marginRight: theme.spacing(1)}}
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            alt="React"
            style={{height: '4em', marginRight: theme.spacing(1)}}
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-plain.svg"
            alt="Material UI (MUI)"
            style={{height: '4em', marginRight: theme.spacing(1)}}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutPage;