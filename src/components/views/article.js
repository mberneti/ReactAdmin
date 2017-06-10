import React from 'react';
import { Button } from 'react-bootstrap';
import PanelLayout from '../layouts/panel-layout';
import 'react-tagsinput/react-tagsinput.css';
import { updateArticleModel } from '../../actions/article-actions';
import BTagsInput from '../../helpers/btags-input';
import BFileInput from '../../helpers/bfile-input';
import ArticleModel from '../../models/article';
import store from '../../store';
import ReactJson from 'react-json-view';
import * as urls from '../../api/urls';

class article extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.updateTags = this.updateTags.bind(this);
    this.updateImages = this.updateImages.bind(this);
    this.refreshModel = this.refreshModel.bind(this);
    this.getData = this.getData.bind(this);
  }
  handleTextChange(event) {
    this.refreshModel();
  }
  updateTags (tags) {
    this.refreshModel();
  }
  updateImages (images) {
    this.refreshModel();
  }
  refreshModel () {
    let model = new ArticleModel(this.refs);
    console.log(model);
    store.dispatch(updateArticleModel(model));
  }
  getData () {
    let model = new ArticleModel(this.refs);
    return model;
  }
  render () {
    return (
      <PanelLayout title={"مقاله" + (this.props.article.Id || 0)}>
        <div className="panel-body">
          <form className="col-md-6">
            <input className="form-control" ref="Id" value={this.props.article.Id || 0} type="hidden" />
            <div className="form-group">
              <label>
                عنوان
              </label>
              <input className="form-control" onChange={this.handleTextChange} ref="Title" value={this.props.article.Title || ''} type="text" />
            </div>
            <div className="form-group">
              <label>
                خلاصه
              </label>
              <textarea className="form-control" onChange={this.handleTextChange} cols="20" ref="Abstract" value={this.props.article.Abstract || ''} rows="2" type="text"></textarea>
            </div>
            <div className="form-group">
              <BTagsInput ref="SelectedTags" value={this.props.article.SelectedTags} suggestions={this.props.suggestions}
                updateTagsHandler={this.updateTags} />
            </div>
            <div className="form-group">
              <BFileInput ref="Images" postUrl={urls.BASEFILEUPLOAD}
                updateImagesHandler={this.updateImages}
                value={this.props.article.Images} maxFiles={3} />
            </div>
            <div className="form-group">
              <Button bsStyle="primary" onClick={this.props.submitHandler}>ثبت</Button>
            </div>
          </form>
          <div className="col-md-6" dir="ltr">
            <ReactJson src={this.props.article} />
          </div>
        </div>
      </PanelLayout>
    );
  }
};

export default article;