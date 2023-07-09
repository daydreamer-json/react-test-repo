import * as React from "react";
import { Typography, Card, CardActions, CardActionArea, CardContent, CardMedia } from "@mui/material";
import styled from "@emotion/styled";

import UserConfig from '../UserConfig';
import returnUniqueIdFromAlbumId from "./func/returnUniqueIdFromAlbumId";
import returnPathStringFromUniqueIdObject from "./func/returnPathStringFromUniqueIdObject";

function BodyCard (props) {
  const { db, albumObject } = props;
  let coverUrlPath = `${UserConfig.baseUrl}${returnPathStringFromUniqueIdObject(db, returnUniqueIdFromAlbumId(db, albumObject.uniqueId))}/cover_s.webp`
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={
            `${coverUrlPath}`
          }
          sx={{
            'UserDrag': 'none',
            'WebkitUserDrag': 'none',
            'MozUserSelect': 'none',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {albumObject["albumTitle_ja-jp"]}
          </Typography>
          <Typography gutterBottom variant="body2" component="h4">
            {albumObject["albumTitle_en-us"]}
          </Typography>
          <Typography sx={{
            fontFamily: ['Roboto', 'Noto Sans SC']
          }} gutterBottom variant="body2" component="h4">
            {albumObject["albumTitle_zh-cn"]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BodyCard;