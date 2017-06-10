import * as types from '../actions/action-types';
import serviceModel from '../models/service';

const initialState = {
  service: new serviceModel(),
  serviceList: [],
  serviceTypes: []
};

const serviceReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.RESET_SERVICE_MODEL:
        return { ...state, service: new serviceModel() };
    case types.GET_SERVICE_SERVICETYPES:
        return { ...state, serviceTypes: action.serviceTypes };
    case types.UPDATE_SERVICE_LIST:
      return { ...state, serviceList: action.serviceList };
    case types.UPDATE_SERVICE_SERVICE:
      return { ...state, service: { ...state.service, SelectedService: action.service.value } };
    case types.UPDATE_SERVICE_IMAGES:
        return { ...state, service: { ...state.service, Images: action.images } };
    case types.UPDATE_SERVICE_MODEL:
      return { ...state, service: { ...state.service,  ...action.service } };
    default:
      return state;
  }
};

export default serviceReducer;
