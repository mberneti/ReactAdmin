import * as types from './action-types';

export function requestLogin(creds) {
  return {
    type: types.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

export function receiveLogin(token) {
  return {
    type: types.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token: token
  }
}

export function requestGETVERIFYCODE(tel) {
  return {
    type: types.GETVERIFYCODE_REQUEST,
    tel
  }
}

export function loginLoadTab(index) {
  return {
    type: types.LOGIN_LOAD_TAB,
    activeTab: index
  }
}

export function receiveGETVERIFYCODE() {
  return {
    type: types.GETVERIFYCODE_SUCCESS
  }
}

export function loginErrorMessages(messages) {
  return {
    type: types.LOGIN_ERROR_MESSAGES,
    messages: messages
  }
}

export function loginError(key,message) {
  return {
    type: types.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    messages: [[key, message]]
  }
}

export function requestLogout() {
  return {
    type: types.LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

export function receiveLogout() {
  return {
    type: types.LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export function updateFreezeTime(t) {
  return {
    type: types.LOGIN_UPDATE_FREEZETIME,
    freezeTime: t.minutes + ':' + t.seconds,
    isActive: t.total !== 0
  }
}

export const LOGIN_TAB = 'LOGIN_TAB';
export const REGISTER_TAB = 'REGISTER_TAB';