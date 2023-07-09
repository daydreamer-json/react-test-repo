import * as React from "react";
import axios from "axios";
import { useTheme, Grid } from "@mui/material";
import BodyCard from './BodyCard';

function Content (props) {
  const { db } = props;
  return (
    <Grid container spacing={2}>
      {db.albums.map((Obj, index) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <BodyCard db={db} albumObject={Obj} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Content;