import * as React from 'react';
import UserConfig from '../UserConfig';

function InternalSettingsController () {
  let appSettings = {}
  if (localStorage.getItem('ddjson-jukebox_settings') === null) {
    appSettings = {
      'settings_quality': UserConfig.settingsDefaultVar.settings_quality,
      'settings_language': UserConfig.settingsDefaultVar.settings_language,
      'settings_dataLang': UserConfig.settingsDefaultVar.settings_dataLang
    };
    localStorage.setItem('ddjson-jukebox_settings', JSON.stringify(appSettings));
  } else {
    appSettings = JSON.parse(localStorage.getItem('ddjson-jukebox_settings'));
  }
  return appSettings
}

export default InternalSettingsController;