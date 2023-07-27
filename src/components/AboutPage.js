import * as React from "react";
import { useTheme, Typography, Divider, Fade, Alert, IconButton, Menu, MenuItem, Link, AlertTitle, Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";

function AboutPage () {
  const theme = useTheme();
  return (
    <div className="AboutPage">
      <Fade in timeout={2000}>
        <div className="AboutPageMainTitle" style={{textAlign: 'center'}}>
          {/* <img style={{width: '10em', height: '10em'}} alt="HoYoverse Mark" src="img/hoyoverse_logomark.png" /> */}
          <Typography variant="h4" component="h1">
            onGaku MDB
          </Typography>
          <Typography variant="subtitle1" component="p" sx={{color: theme.palette.text.secondary}}>
            ― Otaku Music Database ―
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
        <Alert variant="outlined" severity="info">
          <AlertTitle>
            Information
          </AlertTitle>
          <Typography variant="body2" component="p">
            This site is work in progress.
          </Typography>
        </Alert>
        <Divider sx={{
          marginTop: theme.spacing(4),
          marginBottom: theme.spacing(4)
        }} />
        <Typography variant="h6" component="p">
          About the "reform" of this database
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          In order to migrate from the old HoYoverse Jukebox, we are now adding non-HoYoverse works to our music database. This has necessitated the implementation of category pages. We have not finished implementing this yet, but at this time you can select a music category from the "Settings" page.
        </Typography>
        <Divider sx={{
          marginTop: theme.spacing(4),
          marginBottom: theme.spacing(4)
        }} />
        <Typography variant="body1" component="p">
          The resources published on this site may be used for research purposes only.
        </Typography>
        <br />
        <Typography variant="body1" component="p">
          The author of this site does not own the copyright to the resources.
        </Typography>
        <br />
        <Typography variant="body1" component="p">
          (C) miHoYo / COGNOSPHERE
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
            style={{height: '3em', marginRight: theme.spacing(1)}}
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            alt="React"
            style={{height: '3em', marginRight: theme.spacing(1)}}
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-plain.svg"
            alt="Material UI (MUI)"
            style={{height: '3em', marginRight: theme.spacing(1)}}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutPage;