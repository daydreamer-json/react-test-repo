import * as React from 'react';
import UserConfig from '../../UserConfig';

function returnUrlFromUniqueObject (db, uniqueObjectSet, preferredQualitySettings) {
  const temp_replacedFileUriName = encodeURIComponent(uniqueObjectSet.track["trackName_en-us"].replace(/'/g, '_'));
  const temp_specifiedFormatList = JSON.parse(uniqueObjectSet.album.availableFormats);
  const temp_qualityBest_fid = temp_specifiedFormatList.slice(-1)[0];
  const temp_qualityNormal_fid = temp_specifiedFormatList.filter((item) => item <= 999).slice(-1)[0];
  const temp_qualityEfficient_fid = temp_specifiedFormatList[0];
  const temp_qualityBest_fileExtension = db.formats.filter((item) => item.uniqueId === temp_qualityBest_fid)[0].ext;
  const temp_qualityNormal_fileExtension = db.formats.filter((item) => item.uniqueId === temp_qualityNormal_fid)[0].ext;
  const temp_qualityEfficient_fileExtension = db.formats.filter((item) => item.uniqueId === temp_qualityEfficient_fid)[0].ext;
  const temp_qualityBest_qualityPath = db.formats.filter((item) => item.uniqueId === temp_qualityBest_fid)[0].path;
  const temp_qualityNormal_qualityPath = db.formats.filter((item) => item.uniqueId === temp_qualityNormal_fid)[0].path;
  const temp_qualityEfficient_qualityPath = db.formats.filter((item) => item.uniqueId === temp_qualityEfficient_fid)[0].path;
  const temp_calc_albumTrackTotal = db.tracks.filter((item) => item.albumId === uniqueObjectSet.album.uniqueId).length;
  const temp_calc_relativeDiscCountCur = db.discs.filter((item) => item.uniqueId === uniqueObjectSet.disc.uniqueId)[0].discNum;
  let temp_calc_previousDiscTrackTotal = 0;
  for (let i = 0; i < temp_calc_relativeDiscCountCur - 1; i++) {
    temp_calc_previousDiscTrackTotal += db.tracks.filter((item) => item.discId === (uniqueObjectSet.disc.uniqueId - (temp_calc_relativeDiscCountCur - 1) + i)).length
  }
  let temp_calc_confirmedTrackNum = temp_calc_previousDiscTrackTotal + uniqueObjectSet.track.trackNum;
  let temp_calc_confirmedTrackNum_str = '';
  if (temp_calc_albumTrackTotal >= 100) {
    temp_calc_confirmedTrackNum_str = temp_calc_confirmedTrackNum.toString().padStart(3, '0');
  } else if (temp_calc_albumTrackTotal < 100) {
    temp_calc_confirmedTrackNum_str = temp_calc_confirmedTrackNum.toString().padStart(2, '0');
  }
  let completedUrl = '';
  let preferredQualityCompleteObject = {};
  switch (preferredQualitySettings) {
    case 1: {
      completedUrl = `${UserConfig.baseUrl}/${uniqueObjectSet.uploader.path}/${uniqueObjectSet.repository.path}/main/${uniqueObjectSet.root.path}/${uniqueObjectSet.category.path}/${uniqueObjectSet.album.rootPath}/${temp_qualityBest_qualityPath}/${temp_calc_confirmedTrackNum_str}_${temp_replacedFileUriName}.${temp_qualityBest_fileExtension}`;
      preferredQualityCompleteObject = db.formats.filter((item) => item.uniqueId === temp_qualityBest_fid)[0];
      break;
    }
    case 2: {
      completedUrl = `${UserConfig.baseUrl}/${uniqueObjectSet.uploader.path}/${uniqueObjectSet.repository.path}/main/${uniqueObjectSet.root.path}/${uniqueObjectSet.category.path}/${uniqueObjectSet.album.rootPath}/${temp_qualityNormal_qualityPath}/${temp_calc_confirmedTrackNum_str}_${temp_replacedFileUriName}.${temp_qualityNormal_fileExtension}`;
      preferredQualityCompleteObject = db.formats.filter((item) => item.uniqueId === temp_qualityNormal_fid)[0];
      break;
    }
    case 3: {
      completedUrl = `${UserConfig.baseUrl}/${uniqueObjectSet.uploader.path}/${uniqueObjectSet.repository.path}/main/${uniqueObjectSet.root.path}/${uniqueObjectSet.category.path}/${uniqueObjectSet.album.rootPath}/${temp_qualityEfficient_qualityPath}/${temp_calc_confirmedTrackNum_str}_${temp_replacedFileUriName}.${temp_qualityEfficient_fileExtension}`;
      preferredQualityCompleteObject = db.formats.filter((item) => item.uniqueId === temp_qualityEfficient_fid)[0];
      break;
    }
    default: {
      console.error('Please specify "preferredQualitySettings"');
    }
  }
  return {completedUrl: completedUrl, qualityObject: preferredQualityCompleteObject}
}

export default returnUrlFromUniqueObject;