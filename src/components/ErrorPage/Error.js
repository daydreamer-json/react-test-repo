import * as React from "react";
// import { useRouteError } from "react-router-dom";
import { Typography, Card, CardActions, CardActionArea, CardContent, CardMedia } from "@mui/material";
import styled from "@emotion/styled";


function Error () {
  return (
    <div className="ErrorPage">
      <Typography variant="h4" component="h1">Unexpected Error</Typography>
      <h2>404 Not Found</h2>
    </div>
  )
}

export default Error;