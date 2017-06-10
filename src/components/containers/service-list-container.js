import React from 'react';
import { connect } from 'react-redux';
import SimpleList from '../views/simple-list';
import store from '../../store';
import { loadDashboardTitle, showAlert } from '../../actions/dashboard-actions';
import * as serviceApi from '../../api/service-api';
import * as swAlert from '../../helpers/sweet-alert';
import { push } from 'react-router-redux';

class ServiceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  componentDidMount() {
    store.dispatch(loadDashboardTitle(this.props.route.title));
    serviceApi.getList();
  }
  componentDidUpdate() {
    //ajax update
    if (!this.props.title) {
      store.dispatch(loadDashboardTitle(this.props.route.title));
      return;
    }
    //change route
    if (this.props.route.title === this.props.title)
      return;
    store.dispatch(loadDashboardTitle(this.props.route.title));
  }
  editItem(id) {
    store.dispatch(push('/admin/service/edit/' + id));
  }
  deleteItem(id) {
    swAlert.warning(() => this.onConfirmDelete(id));
  }
  onConfirmDelete(payload) {
    swAlert.success(() => { alert(`deleted item id:${payload}`); });
  }
  hideAlert() {
    store.dispatch(showAlert(null));
  }
  render() {
    return (
      <SimpleList items={this.props.serviceList} editItemHandler={this.editItem} deleteItemHandler={this.deleteItem} Title="لیست سرویس‌ها" />
    );
  }
};

const mapStateToProps = store => {
  return {
    title: store.dashboardLayoutState.title,
    serviceList: store.serviceState.serviceList
  };
};

export default connect(mapStateToProps)(ServiceContainer);