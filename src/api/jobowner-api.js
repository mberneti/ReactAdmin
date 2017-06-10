import api from './urls';
import store from '../store';
import { getJOBTags, updateJOBModel } from '../actions/jobowner-actions';
import * as urls from './urls';
import qs from 'qs';

/**
 * Get all guilds
 */

export function getGuilds() {
    return api.get(urls.GETJOBGUILDS)
        .then(response => {
            store.dispatch(getJOBTags(response.data));
            return response;
        });
}

/**
 * update JOB
 */

export function update(JOB) {

    return api.put(urls.JOBOWENRJOBS+`/{JOB.Id}`, qs.stringify(JOB))
        .then(response => {
            if (response.status === 200) {
                // store.dispatch(receiveGETVERIFYCODE(response.data));
                // store.dispatch(push("/"));
            } else {
                // store.dispatch(loginError('',response.data));
            }
        })
        .catch(error => {
            if (error.response) {
                // store.dispatch(loginError('',error.response.data));
            } else {
                // store.dispatch(loginError('',error.message));
            }
        });
}

/**
 * get JOB
 */

export function getJOB() {

    return api.get(urls.JOBOWENRJOBS)
        .then(response => {
            if (response.status === 200) {
                store.dispatch(updateJOBModel(response.data));
                // store.dispatch(push("/"));
            } else {
                // store.dispatch(loginError('',response.data));
            }
        })
        .catch(error => {
            if (error.response) {
                // store.dispatch(loginError('',error.response.data));
            } else {
                // store.dispatch(loginError('',error.message));
            }
        });

}