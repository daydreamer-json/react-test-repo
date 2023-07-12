import * as React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { useTheme, Typography, Card, CardActions, CardActionArea, CardContent, CardMedia } from "@mui/material";
import styled from "@emotion/styled";

import UserConfig from '../UserConfig';
import returnUniqueIdFromAlbumId from "./func/returnUniqueIdFromAlbumId";
import returnPathStringFromUniqueIdObject from "./func/returnPathStringFromUniqueIdObject";

function AlbumPage (db) {
  const fetchedParams = useParams();
  const fetchedLocation = useLocation();
  const [rawSearchParams, setSearchParams] = useSearchParams();
  const fetchedSearchParams = {};
  rawSearchParams.forEach((value, key) => {
    fetchedSearchParams[key] = value;
  });
  return (
    <div className="albumPage">
      <Typography variant="body1" component="p">
        useParams:
        <pre>
          {JSON.stringify(fetchedParams, null, 2)}
        </pre>
        useLocation:
        <pre>
          {JSON.stringify(fetchedLocation, null, 2)}
        </pre>
        useSearchParams:
        <pre>
          {JSON.stringify(fetchedSearchParams, null, 2)}
        </pre>
      </Typography>
    </div>
  )
}

export default AlbumPage;