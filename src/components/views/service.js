import React from 'react';
import { Button } from 'react-bootstrap';
import PanelLayout from '../layouts/panel-layout';
import 'react-tagsinput/react-tagsinput.css';
import { updateServiceModel } from '../../actions/service-actions';
import BFileInput from '../../helpers/bfile-input';
import BSelectInput from '../../helpers/bselect-input';
import serviceModel from '../../models/service';
import store from '../../store';
import BMultiInput from '../../helpers/bmulti-input';
import BDateInput from '../../helpers/bdate-input';
import moment from 'moment-jalaali';
import ReactJson from 'react-json-view';
import * as urls from '../../api/urls';

class service extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.refreshModel = this.refreshModel.bind(this);
    this.updateSelect = this.updateSelect.bind(this);
    this.updateImages = this.updateImages.bind(this);
  }
  getData() {
    let model = new serviceModel(this.refs);
    return model;
  }
  handleTextChange(event) {
    this.refreshModel();
  }
  refreshModel() {
    let model = new serviceModel(this.refs);
    store.dispatch(updateServiceModel(model));
  }
  updateSelect(item) {
    this.refreshModel();
  }
  updateImages(images) {
    this.refreshModel();
  }
  clearFiles () {
      this.refs.Images.clearFiles();
  }
  render() {
    return (
      <PanelLayout title="فرم سرویس">
        <div className="panel-body">

          <form className="col-md-6">
            <input className="form-control" ref="Id" value={this.props.service.Id || 0} type="hidden" />

            <BMultiInput name="MultiInput" onChange={() => { }} value={this.props.service.MultiInput || []}>

              <input className="form-control" ref="Id" type="hidden" />

              <div className="form-group">
                <input ref='CreditTime' type="text" placeholder="مدت اعتبار (روز)" onChange={this.handleTextChange} className="form-control" />
              </div>

              <div className="form-group">
                <label>
                  انتخاب ماژول
              </label>

                <BSelectInput async={false}
                  ref="SelectedModule"
                  name="form-field-name"
                  value={this.props.service.SelectedService}
                  options={this.props.serviceTypes}
                  onChangeHandler={this.updateSelect}
                  clearable={false}
                />
              </div>

            </BMultiInput>

            <div className="form-group">
              <label>
                عنوان
              </label>
              <input className="form-control" onChange={this.handleTextChange} ref="Title" value={this.props.service.Title || ''} type="text" />
            </div>

            <div className="form-group">
              <label>
                توضیحات
              </label>
              <textarea className="form-control" onChange={this.handleTextChange} cols="20" ref="Description"
                value={this.props.service.Description || ''} rows="2" type="text"></textarea>
            </div>
            <div className="form-group ">
              <label>
                قیمت
              </label>
              <input className="form-control" onChange={this.handleTextChange} ref="Price" value={this.props.service.Price || ''} type="text" />
            </div>

            <div className="form-group">
              <label>
                کد تخفیف
              </label>
              <input className="form-control" onChange={this.handleTextChange} cols="20" ref="DiscountCode"
                value={this.props.service.DiscountCode || ''} rows="2" type="text" />
            </div>

            <div className="form-group">
              <label>
                درصد تخفیف
              </label>
              <input className="form-control" onChange={this.handleTextChange} cols="20" ref="Discount"
                value={this.props.service.Discount || ''} rows="2" type="text" />
            </div>

            <div className="form-group">
              <label>
                دوره تخفیف
              </label>
            </div>

            <div className="form-group">
              <label>
                شروع
              </label>
              <div className="tether-target">
                <BDateInput ref="StartDiscount" value={this.props.service.StartDiscount || moment().toString()} onChange={this.refreshModel} />
              </div>
            </div>
            <div className="form-group">
              <label>
                پایان
              </label>
              <div className="tether-target">
                <BDateInput ref="EndDiscount" value={this.props.service.EndDiscount || moment().toString()} onChange={this.refreshModel} />
              </div>
            </div>

            <div className="form-group">
              <BFileInput ref="Images" postUrl={urls.BASEFILEUPLOAD}
                updateImagesHandler={this.updateImages} value={this.props.service.Images} maxFiles={1} folderName={"service"} />
            </div>

            <div className="form-group">
              <Button bsStyle="primary" onClick={this.props.submitHandler}>ثبت</Button>
            </div>

          </form>

          <div className="col-md-6" dir="ltr">
            <ReactJson src={this.props.service} />
          </div>
        </div>
      </PanelLayout>
    );
  }
};

export default service;