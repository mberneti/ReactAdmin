import React from 'react';
import { connect } from 'react-redux';
import MainLayout from '../layouts/main-layout';

class MainLayoutContainer extends React.Component {

  render() {
    return (
      <MainLayout {...this.props} children={this.props.children} />
    );
  }

};

const mapStateToProps = store => {
  return {
    fullname: store.loginState.fullname,
    alert: store.dashboardLayoutState.alert
  };
};

export default connect(mapStateToProps)(MainLayoutContainer);
