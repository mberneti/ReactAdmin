import * as types from './action-types';

export function getJOBTags(guilds) {
  return {
    type: types.GET_JOBOWNERJOB_GUILDS,
    guilds
  };
}

export function updateJOBGuild(guild) {
  return {
    type: types.UPDATE_JOBOWNERJOB_GUILD,
    guild
  };
}
export function updateJOBUser(user) {
  return {
    type: types.UPDATE_JOBOWNERJOB_USER,
    user
  };
}
export function updateJOBImages(images) {
  return {
    type: types.UPDATE_JOBOWNERJOB_IMAGES,
    images
  };
}

export function updateJOBModel(jobownerJob) {
  return {
    type: types.UPDATE_JOBOWNERJOB_MODEL,
    jobownerJob
  };
}
export function resetJOBModel() {
  return {
    type: types.RESET_JOBOWNERJOB_MODEL
  };
}

export function deleteJOBSuccess(jobownerJobId) {
  return {
    type: types.DELETE_JOBOWNERJOB_SUCCESS,
    jobownerJobId
  };
}