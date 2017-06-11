import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
import * as loginApi from './api/identity-api';

import mainLayoutContainer from './components/containers/main-layout-container';
import pageLayoutContainer from './components/containers/page-layout-container';
import DashboardContainer from './components/containers/dashboard-container';
import LoginContainer from './components/containers/login-container';
import ArticleContainer from './components/containers/article-container';
import ArticleListContainer from './components/containers/article-list-container';
import ServiceContainer from './components/containers/service-container';
import jobownerJobContainer from './components/containers/jobownerJob-container';

const history = syncHistoryWithStore(browserHistory, store);

function requireUserRole(nextState, replace) {
  if (!loginApi.loggedIn()) {
    replace({
      pathname: '/ReactAdmin/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }else if (loginApi.hasRole('Admin')) {
    replace({
      pathname: '/admin',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

function requireAdminRole(nextState, replace) {

  if (!loginApi.loggedIn()) {
    replace({
      pathname: '/ReactAdmin/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }else if (!loginApi.hasRole('Admin')) {
    replace({
      pathname: '/ReactAdmin/',
      state: { nextPathname: nextState.location.pathname }
    });
  }

}

export default (
  <Router history={history}>

    <Route onEnter={requireUserRole} component={mainLayoutContainer}>

      <Route title="صفحه مدیریت" component={pageLayoutContainer}>
        <Route path="/ReactAdmin/" component={DashboardContainer} />
        </Route>

      <Route component={pageLayoutContainer} >
        <Route path="/ReactAdmin/job/edit" title="ویرایش مشخصات" component={jobownerJobContainer} />
      </Route>

    </Route>

    <Route onEnter={requireAdminRole} component={mainLayoutContainer}>

      <Route title="صفحه مدیریت" component={pageLayoutContainer} >
        <Route path="/ReactAdmin/admin" component={DashboardContainer} />
      </Route>

      <Route path="/ReactAdmin/admin" component={pageLayoutContainer} >

        <Route path="article/add" title="خبر جدید" component={ArticleContainer} />
        <Route path="article/manage" title="مدیریت اخبار" component={ArticleListContainer} />
        <Route path="article/edit/:itemId" title="ویرایش خبر" isEditRoute="true" component={ArticleContainer} />

        <Route path="service/add" title="سرویس جدید" component={ServiceContainer} />
        <Route path="service/manage" title="مدیریت سرویس‌ها" component={ServiceContainer} />
        <Route path="service/edit/:itemId" title="ویرایش سرویس" isEditRoute="true" component={ServiceContainer} />

      </Route>

    </Route>

    <Route path="/ReactAdmin/login" component={LoginContainer} />

  </Router>
);