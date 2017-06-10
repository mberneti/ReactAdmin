import api from './urls';
import store from '../store';
import { getArticleTags, updateArticleModel,updateArticleList } from '../actions/article-actions';
import * as urls from './urls';
import qs from 'qs';
import ArticleModel from '../models/article';

// Get all tags

export function getTags() {
    
    // mock action -----------------------------------------
    //------------------------------------------------------

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            let tags = [{ label: 'سلام', value: 1 }, { label: 'دات نت', value: 2 }, { label: 'جاوا اسکریپت', value: 3 }, { label: 'تست', value:4 }, { label: 'test', value: 5 }, { label: 'tag', value: 6 }, { label: 'mock test', value:7 }];
            store.dispatch(getArticleTags(tags));

            resolve('ok');

        }, 500);

    });

    //------------------------------------------------------
    

    // a real example --------------------------------------
    //------------------------------------------------------

    // return api.get(urls.GETARTICLETAGS)
    //     .then(response => {
    //         store.dispatch(getArticleTags(response.data));
    //         return response;
    //     });
        
    //------------------------------------------------------
}

// Add or Update an article

export function addOrUpdate(article) {

    console.log(article.Id);

    if(article.Id>0)
        return update(article);
    else
        return add(article);

}

// Add article

export function add(article) {

    return api.post(urls.ARTICLE, qs.stringify(article))
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

// Update an article

export function update(article) {

    return api.put(urls.ARTICLE, qs.stringify(article))
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

// get article

export function getArticle(id) {
    
    // mock action -----------------------------------------
    //------------------------------------------------------

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            let imageBaseUrl = 'https://unsplash.it/300/400/?random=';

            let model = new ArticleModel();

            model.Id = id;
            model.Title = 'عنوان مقاله '+id;
            model.Abstract = 'متن خلاصه '+id;
            model.Images = [{ name: "1", url: imageBaseUrl+"1" }, { name: "2", url:  imageBaseUrl+"2"  }, { name: "3", url:  imageBaseUrl+"3"   }];
            model.SelectedTags = [{ label: 'سلام', value: 1 }, { label: 'دات نت', value: 2 }, { label: 'جاوا اسکریپت', value: 3 }];

            store.dispatch(updateArticleModel(model));

            resolve('ok');


        }, 500);

    });
    
    //------------------------------------------------------

    // a real example --------------------------------------
    //------------------------------------------------------

    // return api.get(urls.ARTICLE+"/"+id)
    //     .then(response => {
    //         if (response.status === 200) {
    //             store.dispatch(updateArticleModel(response.data));
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

export function getArticleList() {

    // a real example --------------------------------------
    //------------------------------------------------------

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            let articles=[{Id:1,Title:"عنوان ۱"},{Id:2,Title:"عنوان ۲"},{Id:3,Title:"عنوان ۳"}];

            store.dispatch(updateArticleList(articles));

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