import * as React from "react";

function returnUniqueObjectFromAlbumId (database, uniqueAlbumId) {
  let specified_album = database.albums.filter((item) => item.uniqueId === uniqueAlbumId)[0];
  let specified_category = database.categories.filter((item) => item.uniqueId === specified_album.categoryId)[0];
  let specified_root = database.roots.filter((item) => item.uniqueId === specified_category.rootId)[0];
  let specified_repository = database.repositories.filter((item) => item.uniqueId === specified_root.repositoryId)[0];
  let specified_uploader = database.uploaders.filter((item) => item.uniqueId === specified_repository.uploaderId)[0];
  return {
    'track': null,
    'disc': null,
    'album': specified_album,
    'category': specified_category,
    'root': specified_root,
    'repository': specified_repository,
    'uploader': specified_uploader
  }
}

export default returnUniqueObjectFromAlbumId;