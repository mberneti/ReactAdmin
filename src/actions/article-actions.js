import * as types from './action-types';

export function getArticlesSuccess(articles) {
  return {
    type: types.GET_ARTICLES_SUCCESS,
    articles
  };
}

export function getArticleTags(tags) {
  return {
    type: types.GET_ARTICLE_TAGS,
    tags
  };
}

export function updateArticleTags(tags) {
  return {
    type: types.UPDATE_ARTICLE_TAGS,
    tags
  };
}
export function updateArticleImages(images) {
  return {
    type: types.UPDATE_ARTICLE_IMAGES,
    images
  };
}
export function updateArticleList(articleList) {
  return {
    type: types.UPDATE_ARTICLE_LIST,
    articleList
  };
}

export function updateArticleModel(article) {
  return {
    type: types.UPDATE_ARTICLE_MODEL,
    article
  };
}

export function resetArticleModel() {
  return {
    type: types.RESET_ARTICLE_MODEL
  };
}


export function deleteArticleSuccess(articleId) {
  return {
    type: types.DELETE_ARTICLE_SUCCESS,
    articleId
  };
}

export function articleSuccess(article) {
  return {
    type: types.USER_PROFILE_SUCCESS,
    article
  };
}
