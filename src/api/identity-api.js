import store from '../store';
import { requestLogin, receiveLogin, loginError,  requestGETVERIFYCODE, receiveGETVERIFYCODE} from '../actions/login-actions';
import { push } from 'react-router-redux';
import jwt_decode from 'jwt-decode';
// import api from './urls';
// import qs from 'qs';
// import * as urls from './urls';
// import platform from 'platform';

// Login
export function login(info = '') {

    store.dispatch(requestLogin(info));


    // mock action -----------------------------------------
    //------------------------------------------------------
    return new Promise((resolve, reject) => {
        setTimeout(function () { successLogin(info.verifycode); resolve('ok');}, 500);
    });
    //------------------------------------------------------

    // a real example --------------------------------------
    //------------------------------------------------------

    // let userData = {
    //     username: JSON.stringify({ "Tel": info.tel, OSName: platform.os.family + ' ' + platform.os.version, DeviceName: platform.name }),
    //     grant_type: "password",
    //     password: info.verifycode
    // };

    // return api.post(urls.LOGIN, qs.stringify(userData))
    //     .then(response => {
    //         if (response.status === 200) {
    //             // If login was successful, set the token in local storage
    //             localStorage.setItem('identityToken', JSON.stringify(response.data));
    //             store.dispatch(receiveLogin(response.data));
    //             store.dispatch(push("/"));
    //         } else {
    //             store.dispatch(loginError("verifycode","کد فعالسازی نامعتبر است."));
    //         }
    //     })
    //     .catch(error => {
    //         if (error.response) {
    //             store.dispatch(loginError("verifycode","کد فعالسازی نامعتبر است."));
    //         } else {
    //             store.dispatch(loginError("verifycode","کد فعالسازی نامعتبر است."));
    //         }
    //     });
    
    //------------------------------------------------------

}

// Get Verify Code
export function getverifycode(tel) {

    store.dispatch(requestGETVERIFYCODE(tel));
    
    // mock action -----------------------------------------
    //------------------------------------------------------
    return new Promise((resolve, reject) => {
        setTimeout(function () { successSentVerifyCode(); resolve('ok'); }, 3000);
    });
    //------------------------------------------------------

    // a real example --------------------------------------
    //------------------------------------------------------

    // let data = { tel };

    // return api.post(urls.GETVERIFYCODE, qs.stringify(data))
    //     .then(response => {
    //         if (response.status === 200) {
    //             store.dispatch(receiveGETVERIFYCODE());
    //         } else {
    //             store.dispatch(loginError('', response.data));
    //         }
    //     })
    //     .catch(error => {
    //         if (error.response) {
    //             store.dispatch(loginError('', error.response.data));
    //         } else {
    //             store.dispatch(loginError('', error.message));
    //         }
    //     });

    //------------------------------------------------------
}

// Remove User Identity Token
export function logout() {
        // store.dispatch(requestLogout());
        localStorage.removeItem('identityToken');
        // store.dispatch(receiveLogout());
        store.dispatch(push("/login"));
}

// Check User Login Status
export function loggedIn() {
    return localStorage.getItem('identityToken') ? true : false;
}

// Check User Role
export function hasRole(role) {
    let token = jwt_decode(localStorage.getItem('identityToken'));
    return (token.role.indexOf(role) !== -1);
}

// Get User Identity Token
export function token() {
    return localStorage.getItem('identityToken');
}

// Get User Identity Token
export function getDecodedToken() {
    return jwt_decode(localStorage.getItem('identityToken'));
}

// Mocking Functions ---------------------------------------------

function successLogin(verifycode) {

    if(verifycode.length!==5)
    {
      store.dispatch(loginError('',"شماره تاییدیه باید ۵ رقم باشد."));
      return;
    }

    //with "Admin" role in jwt token
    var identityToken = {
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOjEsInJvbGUiOiJBZG1pbiIsImNlcnRzZXJpYWxudW1iZXIiOiI0MTQ3YmE1NjQ2ZGM0MGRkODkzNTU4ZjcwMmFhZGVhYiIsImZ1bGxuYW1lIjoi2LPbjNivINmF2K3Zhdiv2LHYttinINio2LHZhtiq24wiLCJuYmYiOjE0OTcwMTU1MTYsImV4cCI6MTQ5NzAxNjExNiwiaWF0IjoxNDk3MDE1NTE2LCJpc3MiOiJodHRwOi8vYmVybmV0aS5pciIsImF1ZCI6IkV4YW1wbGVJc3N1ZXIifQ.v3MqXBmxsdaqsbMOnCZhAsYt5i34sNhcT4kayO2vyn8",
         "refresh_token": "45ce29e9e7794cf3bc648b77d6cd1ee6",
         "expires_in": "2017-06-09T13:48:36.4920929Z"
    };

    //with "User" role in jwt token
    if (verifycode === "12345")
        identityToken.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOjEsInJvbGUiOiJVc2VyIiwiY2VydHNlcmlhbG51bWJlciI6IjQxNDdiYTU2NDZkYzQwZGQ4OTM1NThmNzAyYWFkZWFiIiwiZnVsbG5hbWUiOiLYs9uM2K8g2YXYrdmF2K_Ysdi22Kcg2KjYsdmG2KrbjCIsIm5iZiI6MTQ5NzAxNTUxNiwiZXhwIjoxNDk3MDE2MTE2LCJpYXQiOjE0OTcwMTU1MTYsImlzcyI6Imh0dHA6Ly9iZXJuZXRpLmlyIiwiYXVkIjoiRXhhbXBsZUlzc3VlciJ9.hVMZLOVn9tvy-Md0aho6PXEkKAXLgSm5_vdIDk6ehec";
    
    localStorage.setItem('identityToken', JSON.stringify(identityToken));
    
    store.dispatch(receiveLogin(identityToken));
    store.dispatch(push("/"));
}

function successSentVerifyCode() {
    store.dispatch(receiveGETVERIFYCODE());
}