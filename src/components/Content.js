import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme, Grid } from "@mui/material";
import BodyCard from './BodyCard';

function Content (props) {
  const { db } = props;
  let renderAlbumCard = Obj => {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <BodyCard db={db} albumObject={Obj} />
      </Grid>
    )
  }
  return (
    <Grid container spacing={2}>
      {db.albums.map(Obj => renderAlbumCard(Obj))}
    </Grid>
  )
}

export default Content;