import * as types from '../actions/action-types';
import ArticleModel from '../models/article';

const initialState = {
  article: new ArticleModel(),
  articleList: [],
  suggestions: []//[{value:"1",label:'تگ۱'},{value:"2",label:'tag2'}]
};

const articleReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.RESET_ARTICLE_MODEL:
      {
        console.log('RESET_ARTICLE_MODEL')
        state.article = new ArticleModel();
        console.log(state.article);
        return state;
      }
    case types.GET_ARTICLE_TAGS:
      return { ...state, suggestions: action.tags };
    case types.UPDATE_ARTICLE_LIST:
      return { ...state, articleList: action.articleList };
    case types.UPDATE_ARTICLE_TAGS:
      return { ...state, article: { ...state.article, SelectedTags: action.tags } };
    case types.UPDATE_ARTICLE_IMAGES:
      return { ...state, article: { ...state.article, Images: action.images } };
    case types.UPDATE_ARTICLE_MODEL:
      return { ...state, article: { ...state.article, ...action.article } };
    default:
      return state;
  }
};

export default articleReducer;
