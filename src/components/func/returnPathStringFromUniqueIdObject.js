import * as React from "react";

function returnPathStringFromUniqueIdObject (database, uniqueIdObject) {
  if (uniqueIdObject.track === null && uniqueIdObject.disc === null) {
    let temp_uploaderPath = database.uploaders.filter((item) => item.uniqueId === uniqueIdObject.uploader)[0].path;
    let temp_repositoryPath = database.repositories.filter((item) => item.uniqueId === uniqueIdObject.repository)[0].path;
    let temp_rootPath = database.roots.filter((item) => item.uniqueId === uniqueIdObject.root)[0].path;
    let temp_categoryPath = database.categories.filter((item) => item.uniqueId === uniqueIdObject.category)[0].path;
    let temp_albumPath = database.albums.filter((item) => item.uniqueId === uniqueIdObject.album)[0].rootPath;
    let completedString = `/${temp_uploaderPath}/${temp_repositoryPath}/main/${temp_rootPath}/${temp_categoryPath}/${temp_albumPath}`;
    return completedString
  } else {
    //! I HAVEN'T WRITTEN THIS PROCESS YET
  }
}

export default returnPathStringFromUniqueIdObject;