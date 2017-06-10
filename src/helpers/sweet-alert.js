import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import store from '../store';
import { showAlert } from '../actions/dashboard-actions';

const successAlert = (confirmCallback) => {
    return (
        <SweetAlert success
            confirmBtnBsStyle="info"
            title="موفقیت آمیز!"
            confirmBtnText="تایید"
            onConfirm={confirmCallback}>
        </SweetAlert>);
};

const warningAlert = (confirmCallback, cancelCallback) => {
    return (
        <SweetAlert warning showCancel title="آیا مطمئن هستید؟"
            confirmBtnText="بله"
            cancelBtnText="لغو"
            confirmBtnBsStyle="danger"
            cancelBtnBsStyle="default"
            onConfirm={confirmCallback}
            onCancel={cancelCallback}>
            شما قادر به بازیابی نخواهید بود!
      </SweetAlert>);
};

const errorAlert = (confirmCallback) => {
    return (
        <SweetAlert error
            confirmBtnBsStyle="info"
            title="عملیات با مشکل متوقف شد!"
            confirmBtnText="تایید"
            onConfirm={confirmCallback}>
        </SweetAlert>);
};

const hideAlert = () => (store.dispatch(showAlert(null)));


export const warning = (confirmCallback) => (store.dispatch(showAlert(warningAlert(confirmCallback, hideAlert))));

export const success = (cb) => {
    store.dispatch(showAlert(successAlert(() => {
        hideAlert();
        if (typeof cb !== 'undefined')
            cb();
    })));
};

export const error = (cb) => (
    store.dispatch(showAlert(errorAlert(() => {
        hideAlert();
        if (typeof cb !== 'undefined')
            cb();
    }))));