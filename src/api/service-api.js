import store from '../store';
import { getServiceTypes, updateServiceModel ,updateServiceList} from '../actions/service-actions';
import serviceModel from '../models/service';
import moment from 'moment-jalaali';
// import * as urls from './urls';
// import qs from 'qs';
// import api from './urls';

// Get All ServiceTypes

export function getTypes() {

    // mock action -----------------------------------------
    //------------------------------------------------------

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            let serviceTypes = [{ label: 'سرویس نوع ۱', value: 1 }, { label: 'سرویس نوع ۲', value: 2 }, { label: 'سرویس نوع ۳', value: 3 }, { label: 'سرویس نوع ۴', value: 4 }];
            store.dispatch(getServiceTypes(serviceTypes));

            resolve('ok');

        }, 500);

    });

    //------------------------------------------------------


    // a real example --------------------------------------
    //------------------------------------------------------

    // return api.get(urls.GETMODULES)
    //     .then(response => {
    //         store.dispatch(getServiceTypes(response.data));
    //         return response;
    //     });

    //------------------------------------------------------
}

// Add Plan

export function add(plan) {

    // return api.post(urls.PLANS, qs.stringify(plan))
    //     .then(response => {
    //         if (response.status === 200) {
    //             // store.dispatch(receiveGETVERIFYCODE(response.data));
    //             // store.dispatch(push("/"));
    //         } else {
    //             // store.dispatch(loginError('',response.data));
    //         }
    //     })
    //     .catch(error => {
    //         if (error.response) {
    //             // store.dispatch(loginError('',error.response.data));
    //         } else {
    //             // store.dispatch(loginError('',error.message));
    //         }
    //     });
}


export function getJob(id) {
    
    // mock action -----------------------------------------
    //------------------------------------------------------

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            let imageBaseUrl = 'https://unsplash.it/300/400/?random=';
            let model = new serviceModel();

             model ={
             "Id":id,
             "Title":"سرویس "+id,
             "Description":" توضیحات"+id,
             "Price":"1000",
             "DiscountCode":"freeforall",
             "Discount":"60",
             "StartDiscount":moment("Sat Jun 10 2017 05:40:05 GMT+0430"),
             "EndDiscount":moment("Sat Jun 17 2017 05:40:05 GMT+0430"),
             "Images":[{"name":"acc1a9d0-e6c4-44d5-a118-7409f86cc603.png",
             "url":imageBaseUrl+id}],
             "MultiInput":
             [{"Id":"1","CreditTime":"10","SelectedModule":1}, {"Id":"2","CreditTime":"7","SelectedModule":3}]}


            store.dispatch(updateServiceModel(model));

            resolve('ok');

        }, 500);

    });
    
    //------------------------------------------------------

    // a real example --------------------------------------
    //------------------------------------------------------

    // return api.get(urls.SERVICES+"/"+id)
    //     .then(response => {
    //         if (response.status === 200) {
    //             store.dispatch(updateServiceModel(response.data));
    //             // store.dispatch(push("/"));
    //         } else {
    //             // store.dispatch(loginError('',response.data));
    //         }
    //     })
    //     .catch(error => {
    //         if (error.response) {
    //             // store.dispatch(loginError('',error.response.data));
    //         } else {
    //             // store.dispatch(loginError('',error.message));
    //         }
    //     });

    //------------------------------------------------------
    
}

// get article list

export function getList() {

    // a real example --------------------------------------
    //------------------------------------------------------

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            let list=[{Id:1,Title:"سرویس ۱"},{Id:2,Title:"سرویس ۲"},{Id:3,Title:"سرویس ۳"}];

            store.dispatch(updateServiceList(list));

            resolve('ok');
        }, 500);

    });

    //------------------------------------------------------

    // a real example --------------------------------------
    //------------------------------------------------------

    // return api.get(urls.ARTICLE)
    //     .then(response => {
    //         if (response.status === 200) {
    //             store.dispatch(updateArticleList(response.data));
    //             // store.dispatch(push("/"));
    //         } else {
    //             // store.dispatch(loginError('',response.data));
    //         }
    //     })
    //     .catch(error => {
    //         if (error.response) {
    //             // store.dispatch(loginError('',error.response.data));
    //         } else {
    //             // store.dispatch(loginError('',error.message));
    //         }
    //     });

    //------------------------------------------------------
}