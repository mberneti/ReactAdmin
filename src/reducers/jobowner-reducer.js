import * as types from '../actions/action-types';
import jobownerJobModel from '../models/jobownerJob';

const initialState = {
  jobownerJob: new jobownerJobModel(),
  jobownerList: [],
  guilds: [],
  test: [] //[{label:'label',value:1},{label:'label1',value:2}]
};

const jobownerReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.RESET_JOBOWNERJOB_MODEL:
        return { ...state, jobownerJob: new jobownerJobModel() };
    case types.GET_JOBOWNERJOB_GUILDS:
      return { ...state, guilds: action.guilds };
    case types.UPDATE_JOBOWNERJOB_LIST:
      return { ...state, jobownerJobList: action.jobownerJobList };
    case types.UPDATE_JOBOWNERJOB_GUILD:
      return { ...state, jobownerJob: { ...state.jobownerJob, SelectedGuild: action.guild.value } };
    case types.UPDATE_JOBOWNERJOB_USER:
      return { ...state, jobownerJob: { ...state.jobownerJob, SelectedUser: action.user } };
    case types.UPDATE_JOBOWNERJOB_IMAGES:
        return { ...state, jobownerJob: { ...state.jobownerJob, Images: action.images } };
    case types.UPDATE_JOBOWNERJOB_MODEL:
      return { ...state, jobownerJob: { ...state.jobownerJob, ...action.jobownerJob } };
    case types.UPDATE_BMULTI:
      return { ...state, jobownerJob: { ...state.jobownerJob, MultiInput: action.multiInput } };
    default:
      return state;
  }
};

export default jobownerReducer;
