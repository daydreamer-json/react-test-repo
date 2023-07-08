import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Typography, Card, CardActions, CardActionArea, CardContent, CardMedia } from "@mui/material";
import styled from "@emotion/styled";

function BodyCard (props) {
  const { db, albumObject } = props;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={albumObject.coverExtLink}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {albumObject["albumTitle_ja-jp"]}
          </Typography>
          <Typography gutterBottom variant="body2" component="h4">
            {albumObject["albumTitle_en-us"]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BodyCard;