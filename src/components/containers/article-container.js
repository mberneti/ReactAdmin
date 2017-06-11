import React from 'react';
import { connect } from 'react-redux';
import Article from '../views/article';
import store from '../../store';
import { loadDashboardCompleted } from '../../actions/dashboard-actions';
import { resetArticleModel } from '../../actions/article-actions';
import * as articleApi from '../../api/article-api';

class ArticleContainer extends React.Component {
  componentDidMount() {

    let _current = this;

    this.type = this.props.route.title; //this is the name of the route
    
    if (this.props.route.isEditRoute) {

      let id = this.props.params.itemId;

      //fetch tags list from api
      articleApi.getTags().then(function () {
        //fetch registered article data from api
        articleApi.getArticle(id);
      });

    } else {
      //fetch tags list
      articleApi.getTags();
    }

  }
  componentDidUpdate(prevProps) {

    if(!this.props.isLoaded && !this.props.route.isEditRoute){
      this.refs.child.clearFiles();
      store.dispatch(resetArticleModel());
      store.dispatch(loadDashboardCompleted());
    }

  }
  submit() {

    event.preventDefault();
    let data = this.refs.child.getData();
    console.log(data);

    // articleApi.addOrUpdate(data);

  }
  render() {
    return (
      <Article submitHandler={this.submit} article={this.props.article} suggestions={this.props.suggestions} ref="child" />
    );
  }

};

const mapStateToProps = store => {
  return {
    isLoaded: store.dashboardLayoutState.isLoaded,
    article: store.articleState.article,
    suggestions: store.articleState.suggestions
  };
};

export default connect(mapStateToProps)(ArticleContainer);
