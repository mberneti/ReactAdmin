import * as types from './action-types';

export function loadDashboardTitle(title) {
  return {
    type: types.LOAD_DASHBOARD_TITLE,
    title
  };
}

export function loadDashboardCompleted() {
  return {
    type: types.LOAD_DASHBOARD_COMPLETED
  };
}

export function updateDashboardSuggestions(suggestions) {
  return {
    type: types.LOAD_DASHBOARD_SUGGESTIONS,
    suggestions
  };
}

export function showAlert(alert) {
  return {
    type: types.ALERT,
    alert
  };
}