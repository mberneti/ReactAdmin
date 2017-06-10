import * as types from './action-types';

export function getServiceTypes(serviceTypes) {
  return {
    type: types.GET_SERVICE_SERVICETYPES,
    serviceTypes
  };
}

export function updateServiceType(serviceType) {
  return {
    type: types.UPDATE_SERVICE_SERVICETYPES,
    serviceType
  };
}
export function updateServiceImages(images) {
  return {
    type: types.UPDATE_SERVICE_IMAGES,
    images
  };
}

export function updateServiceModel(service) {
  return {
    type: types.UPDATE_SERVICE_MODEL,
    service
  };
}
export function updateBMultiInput(multiInput) {
  return {
    type: types.UPDATE_BMULTI,
    multiInput
  };
}

export function resetServiceModel() {
  return {
    type: types.RESET_SERVICE_MODEL
  };
}

export function deleteServiceSuccess(serviceId) {
  return {
    type: types.DELETE_SERVICE_SUCCESS,
    serviceId
  };
}

export function updateServiceList(serviceList) {
  return {
    type: types.UPDATE_SERVICE_LIST,
    serviceList
  };
}