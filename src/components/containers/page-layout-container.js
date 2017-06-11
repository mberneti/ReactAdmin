import React from 'react';
import { connect } from 'react-redux';
import PageLayout from '../layouts/page-layout';
import store from '../../store';
import * as loginApi from '../../api/identity-api';
import { push } from 'react-router-redux';
import { loadDashboardTitle } from '../../actions/dashboard-actions';

class PageLayoutContainer extends React.Component {

  //load route by url
  componentDidMount() {

    store.dispatch(loadDashboardTitle(this.props.children.props.route.title));

  }

  componentWillReceiveProps(nextProps) {

    let routeTitle = nextProps.children.props.route.title;

    if (nextProps.title !== routeTitle) {

      //the route has changed

      store.dispatch(loadDashboardTitle(routeTitle));

    }
  }
  //change route by button click 
  componentDidUpdate() {

    if (!loginApi.loggedIn())
      store.dispatch(push('/ReactAdmin/login'));

  }

  render() {
    return (
      <PageLayout title={this.props.title} children={this.props.children} />
    );
  }

};

const mapStateToProps = store => {
  return {
    title: store.dashboardLayoutState.title
  };
};

export default connect(mapStateToProps)(PageLayoutContainer);
