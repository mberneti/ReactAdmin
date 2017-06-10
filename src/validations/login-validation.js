import store from '../store';
import isValid from './bvalidation';
import { loginErrorMessages } from '../actions/login-actions';

const loginConstraints = {
    verifycode: {
        length: {
            is: 5, wrongLength: "کد فعالسازی باید ۵ رقم باشد."
        },
        format: {
            pattern: "[0-9۰۱۲۳۴۵۶۷۸۹]+",
            flags: "i",
            message: "کد فعالسازی باید شامل عدد باشد."
        }
    },
    tel: {
        presence: { message: "لطفا شماره موبایل خود را وارد کنید." },
        length: { is: 13, wrongLength: "شماره موبایل وارد شده باید ۱۰ رقم باشد." },
        format: {
            pattern: "[0-9+۰۱۲۳۴۵۶۷۸۹]+",
            flags: "i",
            message: "شماره موبایل باید شامل عدد باشد."
        }
    }
};

export function IsValidLogin(info) {
    return isValid(info,loginConstraints,(errkvArray)=>(store.dispatch(loginErrorMessages(errkvArray))));
}