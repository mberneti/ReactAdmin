import React from 'react';
import { connect } from 'react-redux';
import JobOwnerJob from '../views/jobownerJob';
import store from '../../store';
import { loadDashboardTitle } from '../../actions/dashboard-actions';
import * as jobApi from '../../api/jobowner-api';

class jobownerJobContainer extends React.Component {
  componentDidMount() {
    let _current = this;

    store.dispatch(loadDashboardTitle(this.props.route.title));

    jobApi.getGuilds().then(function () {

      jobApi.getJOB();

    });

  }
  submit() {

    event.preventDefault();
    let data = this.refs.child.getData();
    console.log(data);
    // jobApi.update(data);

  }
  render() {
    return (
      <JobOwnerJob submitHandler={this.submit} job={this.props.job} guilds={this.props.guilds} ref="child" />
    );
  }

};

const mapStateToProps = store => {
  return {
    isLoaded: store.dashboardLayoutState.isLoaded,
    job: store.jobownerState.jobownerJob,
    test: store.jobownerState.test,
    guilds: store.jobownerState.guilds
  };
};

export default connect(mapStateToProps)(jobownerJobContainer);
