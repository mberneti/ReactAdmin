import * as types from '../actions/action-types';

const initialState = {
  alert: null,
  title: "dashboard reducer",
  isLoaded: false,
  userProfile: {
    userId: 0,
    username: ""
  }
};

const dashboardReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.ALERT:
      return Object.assign({}, state, { alert : action.alert });
    case types.LOAD_DASHBOARD_TITLE:
      return Object.assign({}, state, { title : action.title,isLoaded:false });
    case types.LOAD_DASHBOARD_COMPLETED:
      return Object.assign({}, state, { isLoaded:true });
    case types.LOAD_DASHBOARD_LAYOUT:
    default:
    {
      return Object.assign({}, state, { userProfile : action.userProfile });
    }
  }

};

export default dashboardReducer;
