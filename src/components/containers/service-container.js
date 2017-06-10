import React from 'react';
import { connect } from 'react-redux';
import Service from '../views/service';
import store from '../../store';
import { loadDashboardTitle, loadDashboardCompleted } from '../../actions/dashboard-actions';
import { resetServiceModel } from '../../actions/service-actions';
import * as serviceApi from '../../api/service-api';

class ServiceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    let _current = this;

    store.dispatch(loadDashboardTitle(this.props.route.title));

    if (this.props.route.isEditRoute) {

      let id = this.props.params.itemId;

      serviceApi.getTypes().then(function () {

        serviceApi.getJob(id);

      });

    } else {

      serviceApi.getTypes().then(function () {
        store.dispatch(resetServiceModel());
      });
    }

  }
  componentDidUpdate() {

    if (!this.props.isLoaded && !this.props.route.isEditRoute) {
      store.dispatch(resetServiceModel());
      store.dispatch(loadDashboardCompleted());
    }

  }
  submit() {
    event.preventDefault();
    let data = this.refs.child.getData();
    console.log(data);
    serviceApi.add(data);
  }
  render() {
    return (
      <Service submitHandler={this.submit} {...this.props} ref="child" />
    );
  }

};

const mapStateToProps = store => {
  return {
    isLoaded: store.dashboardLayoutState.isLoaded,
    service: store.serviceState.service,
    serviceTypes: store.serviceState.serviceTypes
  };
};


export default connect(mapStateToProps)(ServiceContainer);
