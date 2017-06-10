import React from 'react';
import { LOGIN_TAB, REGISTER_TAB } from '../../actions/login-actions';

class login extends React.Component {
  constructor(props) {
    super(props);
    this.getInfo = this.getInfo.bind(this);
  }

  getInfo() {
    return {
      tel: "+98" + this.refs.tel.value.trim()
      , verifycode: this.refs.verifycode.value.trim()
    };
  }

  render() {
    return (
      <div className="login-wrap">
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" checked={this.props.activeTab === LOGIN_TAB} onChange={() => { }} />
          <label htmlFor="tab-1" className="tab">ورود</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" checked={this.props.activeTab === REGISTER_TAB} onChange={() => { }} />
          <label htmlFor="tab-2" className="tab"></label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">&nbsp;{this.props.errorMessages.get('tel')}</label>
                <span className="tel-prefix">+98 | </span>
                <input className="input ltr tel-input" ref="tel" onKeyPress={this.props.getverifycodeKeyPress} placeholder="شماره موبایل" type="text" />
              </div>
              <div className="group">
                <button onClick={this.props.getverifycodeHandler} className="button">بعدی</button>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group text-center">
                <span className="tel-preview">{this.props.tel}</span>
                <a className="login-btn" href="#" onClick={this.props.telEditHandler} >ویرایش</a>
              </div>
              <div className="foot-lnk">
                یک پیامک حاوی کد فعالسازی برای تلفن همراه شما ارسال شده‌است.
              </div>
              <div className="group">
                <label htmlFor="user" className="label">&nbsp;{this.props.errorMessages.get('verifycode')}</label>
                <input ref="verifycode" onChange={this.props.loginKeyPress} className="input ltr text-center" placeholder="کد فعالسازی" type="text" />
              </div>
              <div className="group">
                <button onClick={this.props.loginHandler} className={"button " + this.props.loginBtnClasses} >
                  <span>ورود</span>
                  <div>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              <div className="hr"></div>
              {this.props.isActive &&
                <div className="foot-lnk">
                  &nbsp;{this.props.freezeTime}&nbsp;
                    دقیقه دیگر می‌توانید درخواست مجدد کد فعالسازی را ارسال کنید.
                </div>
              }
              {!this.props.isActive &&
                <div className="text-center">
                  <a className="login-btn" href="#" onClick={this.props.getverifycodeHandler}>ارسال کد از طریق SMS</a>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default login;