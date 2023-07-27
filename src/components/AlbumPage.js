import * as React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { useTheme, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Chip, Divider, List, ListSubheader, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Avatar, IconButton, Paper, ListItemButton } from "@mui/material";
import styled from "@emotion/styled";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Error from './ErrorPage/Error';
import UserConfig from '../UserConfig';
import InternalSettingsController from "./InternalSettingsController";
import returnUniqueIdFromAlbumId from "./func/returnUniqueIdFromAlbumId";
import returnPathStringFromUniqueIdObject from "./func/returnPathStringFromUniqueIdObject";
import returnUniqueObjectFromTrackId from "./func/returnUniqueObjectFromTrackId";
import returnUniqueObjectFromAlbumId from "./func/returnUniqueObjectFromAlbumId";
import returnUrlFromUniqueObject from "./func/returnUrlFromUniqueObject";

function AlbumPage (props) {
  const { db } = props;
  const theme = useTheme();
  const fetchedParams = useParams();
  const fetchedLocation = useLocation();
  const [rawSearchParams, setSearchParams] = useSearchParams();
  const fetchedSearchParams = {};
  rawSearchParams.forEach((value, key) => {
    fetchedSearchParams[key] = value;
  });
  let coverUrlPath = '';
  const debugAreaComponentWithoutAlbumObject = (
    <div className="debugArea" style={{
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>
            Debug Area
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" component="p">
            useParams:
          </Typography>
          <pre>
            {JSON.stringify(fetchedParams, null, 2)}
          </pre>
          <Typography variant="body1" component="p">
          useLocation:
          </Typography>
          <pre>
            {JSON.stringify(fetchedLocation, null, 2)}
          </pre>
          <Typography variant="body1" component="p">
          useSearchParams:
          </Typography>
          <pre>
            {JSON.stringify(fetchedSearchParams, null, 2)}
          </pre>
        </AccordionDetails>
      </Accordion>
    </div>
  );
  if (returnUniqueIdFromAlbumId(db, parseInt(fetchedParams.albumUniqueId)) === null) {
    return ( <>
      <Error />
      {debugAreaComponentWithoutAlbumObject}
    </> )
  }
  coverUrlPath = `${UserConfig.baseUrl}${returnPathStringFromUniqueIdObject(db, returnUniqueIdFromAlbumId(db, parseInt(fetchedParams.albumUniqueId)))}/cover.webp`;
  const albumObject = db.albums.filter((item) => item.uniqueId === parseInt(fetchedParams.albumUniqueId))[0];
  const discObjectList = db.discs.filter((item) => item.albumId === albumObject.uniqueId);
  let trackObjectList = [];
  discObjectList.forEach((item) => {
    const singleDiscTrackArray = db.tracks.filter((item2) => item2.discId === item.uniqueId);
    trackObjectList.push(singleDiscTrackArray);
  })
  const debugAreaComponent = (
    <div className="debugArea" style={{
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>
            Debug Area
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" component="p">
            albumObject:
          </Typography>
          <pre style={{
            whiteSpace: 'pre-wrap',
            overflowWrap: 'break-word'
          }}>
            {JSON.stringify(albumObject, null, 2)}
          </pre>
          <Typography variant="body1" component="p">
            useParams:
          </Typography>
          <pre>
            {JSON.stringify(fetchedParams, null, 2)}
          </pre>
          <Typography variant="body1" component="p">
          useLocation:
          </Typography>
          <pre>
            {JSON.stringify(fetchedLocation, null, 2)}
          </pre>
          <Typography variant="body1" component="p">
          useSearchParams:
          </Typography>
          <pre>
            {JSON.stringify(fetchedSearchParams, null, 2)}
          </pre>
        </AccordionDetails>
      </Accordion>
    </div>
  );
  return ( <>
    <div className="albumPage">
      <div className="albumCoverArtHolder">
        <img src={coverUrlPath} alt="Cover Art" style={{
          maxWidth: "400px",
          width: "100%",
          marginBottom: theme.spacing(1),
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          WebkitTransition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          borderRadius: '8px',
          boxShadow: [
            '0px 3px 3px -2px rgba(0,0,0,0.2)',
            '0px 3px 4px 0px rgba(0,0,0,0.14)',
            '0px 1px 8px 0px rgba(0,0,0,0.12)'
          ]
          /*
            elevation={1}:
            '0px 2px 1px -1px rgba(0,0,0,0.2)',
            '0px 1px 1px 0px rgba(0,0,0,0.14)',
            '0px 1px 3px 0px rgba(0,0,0,0.12)'
            elevation={3}:
            '0px 3px 3px -2px rgba(0,0,0,0.2)',
            '0px 3px 4px 0px rgba(0,0,0,0.14)',
            '0px 1px 8px 0px rgba(0,0,0,0.12)'
          */
        }} />
      </div>
      <div className="albumTitleHolder" style={{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      }}>
        <Typography variant="h5" component="h1">
          {albumObject["albumTitle_ja-jp"]}
        </Typography>
        <Typography variant="body2" component="p" sx={{
          color: theme.palette.text.secondary
        }}>
          {albumObject["albumTitle_en-us"]}
        </Typography>
        <Typography className="ChineseFont" variant="body2" component="p" sx={{
          color: theme.palette.text.secondary
        }}>
          {albumObject["albumTitle_zh-cn"]}
        </Typography>
        <Typography variant="subtitle1" component="h2">
          by {albumObject["albumArtist"]}
        </Typography>
      </div>
      <div className="albumCategoryChipHolder" style={{}}>
        <Chip label={returnUniqueObjectFromAlbumId(db, albumObject.uniqueId).category.nameDisp} variant="outlined" size="small" />
      </div>
      <div className="albumExtLinksHolder" style={{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      }}>
        <Button variant="outlined" size="small" target="_blank" rel="noopener noreferrer" href={albumObject["extLink_spotify"]} sx={{
          textTransform: 'none',
          marginRight: theme.spacing(1),
        }}>
          Spotify
        </Button>
        <Button variant="outlined" size="small" target="_blank" rel="noopener noreferrer" href={albumObject["extLink_applemusic"]} sx={{
          textTransform: 'none',
          marginRight: theme.spacing(1),
        }}>
          Apple Music
        </Button>
        <Button variant="outlined" size="small" target="_blank" rel="noopener noreferrer" href={albumObject["extLink_vgmdb"]} sx={{
          textTransform: 'none',
          marginRight: theme.spacing(1),
        }}>
          VGMdb
        </Button>
        <Button variant="outlined" size="small" target="_blank" rel="noopener noreferrer" href={albumObject["extLink_musicbrainz"]} sx={{
          textTransform: 'none',
          marginRight: theme.spacing(1),
        }}>
          MusicBrainz
        </Button>
      </div>
      <div className="albumTrackListHolder" style={{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      }}>
        <List
          dense={true}
          subheader={<li />}
          sx={{
            width: '100%',
            padding: 0,
            bgcolor: theme.palette.background.paper
          }}
        >
          {discObjectList.map((item) => (
            <li key={`disc-unique-${item.uniqueId}`}>
              <ul style={{padding: 0}}>
                <ListSubheader>
                  {`Disc ${item.discNum}`}
                </ListSubheader>
                {trackObjectList[item.discNum - 1].map((item2) => (
                  <ListItem key={`track-unique-${item2.uniqueId}`} disablePadding>
                    <ListItemButton onClick={() => playAudio(db, item2.uniqueId)}>
                      <ListItemIcon sx={{ minWidth: '40px' }}>
                        <PlayArrowIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={item2["trackName_ja-jp"]}
                        secondary={item2["trackName_en-us"]}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
                <Divider sx={{marginY: 0}} />
              </ul>
            </li>
          ))}
        </List>
      </div>
      <div className="albumCopyrightFootHolder" style={{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      }}>
        <Typography variant="body2" component="p" sx={{
          color: theme.palette.text.secondary
        }}>
          {albumObject.copyright}
        </Typography>
      </div>
    </div>
    {debugAreaComponent}
  </> )
}

function playAudio (db, uniqueTrackId) {
  const uniqueObjectSet = returnUniqueObjectFromTrackId(db, uniqueTrackId);
  const completedUrl = returnUrlFromUniqueObject(db, uniqueObjectSet, InternalSettingsController().settings_quality).completedUrl;
  const qualityObject = returnUrlFromUniqueObject(db, uniqueObjectSet, InternalSettingsController().settings_quality).qualityObject;
  window.unique.playerRef.current.plyr.stop();
  window.unique.playerRef.current.plyr.source = {
    type: 'audio',
    title: uniqueObjectSet.track["trackName_en-us"],
    sources: [
      {
        src: completedUrl,
        type: qualityObject.mime,
      }
    ]
  };
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata ({
      title: uniqueObjectSet.track["trackName_en-us"],
      artist: JSON.parse(uniqueObjectSet.album.artists).join(', '),
      album: uniqueObjectSet.album["albumTitle_en-us"],
      artwork: [
        {
          src: `${UserConfig.baseUrl}${returnPathStringFromUniqueIdObject(db, returnUniqueIdFromAlbumId(db, parseInt(uniqueObjectSet.album.uniqueId)))}/cover_s.jpg`,
          sizes: '512x512',
          type: 'image/jpeg'
        }
      ]
    });
  }
  window.unique.playerRef.current.plyr.play();
  console.log(`Audio playback triggered.\nsrc: ${completedUrl}`)
}

export default AlbumPage;