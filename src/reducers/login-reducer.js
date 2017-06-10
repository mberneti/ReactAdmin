import * as types from '../actions/action-types';
import * as loginApi from '../api/identity-api';
import { LOGIN_TAB } from '../actions/login-actions';

const initialState = {
    isFetching: false,
    fullname: loginApi.loggedIn() ? loginApi.getDecodedToken().fullname:"",
    isAuthenticated: loginApi.loggedIn() ? true : false,
    user:null,
    errorMessage: '',
    errorMessages: new Map(),
    activeTab:LOGIN_TAB,
    tel:null,
    freezeTime:'1:0',
    isActive:false
};

const identityReducer = function(state = initialState, action) {

  switch (action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case types.GETVERIFYCODE_REQUEST:
      return Object.assign({}, state, {
        tel: action.tel,
      })
    case types.LOGIN_ERROR_MESSAGES:
      return Object.assign({}, state, {
        errorMessages: new Map(action.messages)
      })
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        fullname: loginApi.getDecodedToken().fullname,
        errorMessage: 'LOGIN_SUCCESS'
      })
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessages: new Map(action.messages)
      })
    case types.LOGIN_LOAD_TAB:
      return Object.assign({}, state, {
        activeTab: action.activeTab
      })
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    case types.LOGIN_UPDATE_FREEZETIME:
      return Object.assign({}, state, {
        freezeTime: action.freezeTime,
        isActive: action.isActive
      })
    default:
      return state
  }

};

export default identityReducer;
