import React from 'react';
import { connect } from 'react-redux';
import Login from '../views/login';
import store from '../../store';
import * as loginApi from '../../api/identity-api';
import { push } from 'react-router-redux';
import { loginLoadTab, updateFreezeTime, LOGIN_TAB, REGISTER_TAB } from '../../actions/login-actions';
import { IsValidLogin } from '../../validations/login-validation';
import { initTimer } from '../../helpers/timer';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getverifycode = this.getverifycode.bind(this);
    this.getverifycodeHandler = this.getverifycodeHandler.bind(this);
    this.getverifycodeKeyPress = this.getverifycodeKeyPress.bind(this);
    this.login = this.login.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.loginKeyPress = this.loginKeyPress.bind(this);
  }

  componentDidMount() {

    if (this.props.isAuthenticated) {
      store.dispatch(push('/'));
    }

  }
  updateFreezeTime(t) {

    store.dispatch(updateFreezeTime(t));

  }
  getverifycode() {

    let info = this.refs.child.getInfo();

    if (IsValidLogin({ tel: info.tel })) {
      store.dispatch(loginLoadTab(REGISTER_TAB));
      loginApi.getverifycode(info.tel);
      initTimer(.2, this.updateFreezeTime);// set freeze time
    }

  }
  getverifycodeHandler(e) {

    e.preventDefault();
    this.getverifycode();

  }
  getverifycodeKeyPress(e) {

    if (e.key === 'Enter') {
      this.getverifycode();
    }

  }
  login(event) {

    let info = this.refs.child.getInfo();

    if (IsValidLogin(info) && !this.props.isFetching) {
      loginApi.login(info);
    }

  }
  loginHandler(event) {

    event.preventDefault();
    this.login();

  }
  loginKeyPress(event) {

    let info = this.refs.child.getInfo();
    if (info.verifycode.length > 4)
      this.login();

  }
  telEdit(event) {

    event.preventDefault();
    store.dispatch(loginLoadTab(LOGIN_TAB));

  }

  render() {
    return (
      <div>
        <Login
          loginBtnClasses={this.props.isFetching ? "active-loading" : "deactive-loading"}
          freezeTime={this.props.freezeTime} tel={this.props.tel} isActive={this.props.isActive}
          telEditHandler={this.telEdit}
          getverifycodeHandler={this.getverifycodeHandler} loginHandler={this.loginHandler}
          getverifycodeKeyPress={this.getverifycodeKeyPress} loginKeyPress={this.loginKeyPress}
          activeTab={this.props.activeTab} errorMessages={this.props.errorMessages} ref="child"
        />
      </div>
    );
  }

};

const mapStateToProps = store => {
  return store.loginState;
};

export default connect(mapStateToProps)(LoginContainer);