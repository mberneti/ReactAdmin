import React from 'react';
import { Button } from 'react-bootstrap';
import PanelLayout from '../layouts/panel-layout';
import 'react-tagsinput/react-tagsinput.css';
import { updateJOBModel } from '../../actions/jobowner-actions';
import BFileInput from '../../helpers/bfile-input';
import jobownerJobModel from '../../models/jobownerJob';
import store from '../../store';
import BSelectInput from '../../helpers/bselect-input';
import BMultiInput from '../../helpers/bmulti-input';
import 'react-select/dist/react-select.css';
import * as urls from '../../api/urls';
import ReactJson from 'react-json-view';

class jobownerJob extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.refreshModel = this.refreshModel.bind(this);
    this.updateSelect = this.updateSelect.bind(this);
    this.updateImages = this.updateImages.bind(this);
  }
  getData () {
    let model = new jobownerJobModel(this.refs);
    return model;
  }
  handleTextChange(event) {
    this.refreshModel();
  }
  refreshModel () {
    let model = new jobownerJobModel(this.refs);
    store.dispatch(updateJOBModel(model));
  }
  updateSelect (item) {
    this.refreshModel();
  }
  updateMulti (items) {
    console.log('updateMulti', items);
    //  store.dispatch(updateBMultiInput(items));
  }
  updateImages (images) {
    this.refreshModel();
  }
  render () {
    return (
      <PanelLayout title="فرم شغل">
        <div className="panel-body">
          <form className="col-md-6">
            <input className="form-control" ref="Id" value={this.props.job.Id || 0} type="hidden" />

            <div className="form-group">
              <label>
                گالری
              </label>
            </div>

            <BMultiInput name="MultiInput" onChange={this.updateMulti} value={this.props.job.MultiInput || []}>

              <input className="form-control" ref="Id" type="hidden" />

              <div className="form-group">
                <input ref='Title' type="text" placeholder=" عنوان عکس" onChange={this.handleTextChange} className="form-control" />
              </div>

              <div className="form-group">
                <BFileInput ref="Images" postUrl={urls.BASEFILEUPLOAD}
                updateImagesHandler={this.updateImages} maxFiles={1} />
              </div>

            </BMultiInput>

            <div className="form-group">
              <label>
                عنوان
              </label>
              <input className="form-control" onChange={this.handleTextChange} ref="Title" value={this.props.job.Title || ''} type="text" />
            </div>
            <div className="form-group">
              <label>
                توضیحات
              </label>
              <textarea className="form-control" onChange={this.handleTextChange} cols="20" ref="Description"
                value={this.props.job.Description || ''} rows="2" type="text"></textarea>
            </div>
            <div className="form-group">
              <label>
                شماره تماس
              </label>
              <input className="form-control" onChange={this.handleTextChange} ref="Tel" value={this.props.job.Tel || ''} type="text" />
            </div>
            <div className="form-group">
              <label>
                آدرس
              </label>
              <textarea className="form-control" onChange={this.handleTextChange} cols="20" ref="Address"
                value={this.props.job.Address || ''} rows="2" type="text"></textarea>
            </div>
            <div className="form-group">
              <label>
                صنف
              </label>
              <BSelectInput async={false}
                ref="SelectedGuild"
                name="form-field-name"
                value={this.props.job.SelectedGuild}
                options={this.props.guilds}
                onChangeHandler={this.updateSelect}
                clearable={false}
              />
            </div>
            <div className="form-group">
              <BFileInput ref="Images" postUrl={urls.BASEFILEUPLOAD}
                updateImagesHandler={this.updateImages}
                value={this.props.job.Images} maxFiles={1} />
            </div>
            <div className="form-group">
              <Button bsStyle="primary" onClick={this.props.submitHandler}>ثبت</Button>
            </div>
          </form>
          <div className="col-md-6" dir="ltr">
            <ReactJson src={this.props.job} />
          </div>
        </div>
      </PanelLayout>
    );
  }
};

export default jobownerJob;