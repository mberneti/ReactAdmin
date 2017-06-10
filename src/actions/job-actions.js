import * as types from './action-types';

export function getJOBsSuccess(JOBs) {
  return {
    type: types.GET_JOBS_SUCCESS,
    JOBs
  };
}

export function getJOBTags(guilds) {
  return {
    type: types.GET_JOB_GUILDS,
    guilds
  };
}

export function updateJOBGuild(guild) {
  return {
    type: types.UPDATE_JOB_GUILD,
    guild
  };
}
export function updateJOBUser(user) {
  return {
    type: types.UPDATE_JOB_USER,
    user
  };
}
export function updateJOBImages(images) {
  return {
    type: types.UPDATE_JOB_IMAGES,
    images
  };
}
export function updateJOBList(jobList) {
  return {
    type: types.UPDATE_JOB_LIST,
    jobList
  };
}

export function updateJOBModel(job) {
  return {
    type: types.UPDATE_JOB_MODEL,
    job
  };
}

export function resetJOBModel() {
  return {
    type: types.RESET_JOB_MODEL
  };
}

export function deleteJOBSuccess(JOBId) {
  return {
    type: types.DELETE_JOB_SUCCESS,
    JOBId
  };
}