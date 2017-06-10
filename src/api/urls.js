import axios from 'axios';
import * as loginAPI from './identity-api';


// create apiInstance by axios  --------------------------------------
// -------------------------------------------------------------------

const apiInstance = axios.create({
    timeout: 10000,
    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    //'Access-Control-Allow-Origin' header
    withCredentials: false
});    

apiInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//If exist Bearer token, add it into Authorization header
if (JSON.parse(loginAPI.token())) {
    let token = JSON.parse(loginAPI.token()).token;
    // config.headers['authorization'] = 'Bearer ' + token;
    apiInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

export default apiInstance

// -------------------------------------------------------------------


// Upload Url --------------------------------------------------------
// NOTE:THIS IS TEMP UPLOAD DEMO URL----------------------------------
// -------------------------------------------------------------------

export const BASEFILEUPLOAD = 'http://berneti.ir:8888/api/v1/upload/folder/demo';

// 
//
// 
// -------------------------------------------------------------------



// api static urls ---------------------------------------------------
// -------------------------------------------------------------------

export const BASEURL='http://localhost:8083';

//login
export const LOGIN = BASEURL+'/api/v1/account/login';
export const GETVERIFYCODE = BASEURL+'/api/v1/account/getverifycode';

//user
export const USER =  BASEURL+'/api/v1/users';

//jobowners
export const JOBOWNERS =  BASEURL+'/api/v1/jobowners';

//article
export const ARTICLE =  BASEURL+'/api/v1/article';
export const GETARTICLETAGS = BASEURL+'/api/v1/article/tags';

//job
export const JOB =  BASEURL+'/api/v1/admin/jobs';

//guilds
export const GETJOBGUILDS = BASEURL+'/api/v1/guilds';

//modules
export const GETMODULES = BASEURL+'/api/v1/main/modules';

//plans
export const PLANS =  BASEURL+'/api/v1/admin/plans';

//serviceTypes
export const GETSERVICETYPES = BASEURL+'/api/v1/servicetypes';

//jobOwner Jobs
export const JOBOWENRJOBS =  BASEURL+'/api/v1/jobowner/jobs';

// -------------------------------------------------------------------