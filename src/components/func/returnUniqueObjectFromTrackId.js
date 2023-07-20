import * as React from "react";

function returnUniqueObjectFromTrackId (database, uniqueTrackId) {
  let specified_track = database.tracks.filter((item) => item.uniqueId === uniqueTrackId)[0];
  let specified_disc = database.discs.filter((item) => item.uniqueId === specified_track.discId)[0];
  let specified_album = database.albums.filter((item) => item.uniqueId === specified_disc.albumId)[0];
  let specified_category = database.categories.filter((item) => item.uniqueId === specified_album.categoryId)[0];
  let specified_root = database.roots.filter((item) => item.uniqueId === specified_category.rootId)[0];
  let specified_repository = database.repositories.filter((item) => item.uniqueId === specified_root.repositoryId)[0];
  let specified_uploader = database.uploaders.filter((item) => item.uniqueId === specified_repository.uploaderId)[0];
  return {
    'track': specified_track,
    'disc': specified_disc,
    'album': specified_album,
    'category': specified_category,
    'root': specified_root,
    'repository': specified_repository,
    'uploader': specified_uploader
  }
}

export default returnUniqueObjectFromTrackId;