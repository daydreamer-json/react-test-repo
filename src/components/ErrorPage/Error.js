import * as React from "react";
import { useRouteError } from "react-router-dom";
import { Typography, Card, CardActions, CardActionArea, CardContent, CardMedia } from "@mui/material";
import styled from "@emotion/styled";


function Error () {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="App">
      <div className="ErrorPage">
        <Typography variant="h4" component="h1">Unexpected Error</Typography>
        <h2>{error.status} {error.statusText}</h2>
        <pre>{error.error.stack}</pre>
      </div>
    </div>
  )
}

export default Error;