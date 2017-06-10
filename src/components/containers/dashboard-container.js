import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../views/dashboard'; 

class DashboardContainer extends React.Component {
  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
};

const mapStateToProps = store => {
  return store.loginState;
};

export default connect(mapStateToProps)(DashboardContainer);
