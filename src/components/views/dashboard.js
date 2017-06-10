import React from 'react';

class dashboard  extends React.Component { render() {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <div className="row">
              <div className="col-xs-5 text-left pull-left">
                <i className="fa fa-comments fa-5x"></i>
              </div>
              <div className="col-xs-7 pull-left text-right">
                <div className="huge">۲۶</div>
                <div>نظرات جدید!</div>
              </div>
            </div>
          </div>
          <a href="#">
            <div className="panel-footer">
              <span className="pull-right">مشاهده جزییات</span>
              <span className="pull-left"><i className="fa fa-arrow-circle-left"></i></span>
              <div className="clearfix"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="panel panel-green">
          <div className="panel-heading">
            <div className="row">
              <div className="col-xs-5 text-left pull-left">
                <i className="fa fa-tasks fa-5x"></i>
              </div>
              <div className="col-xs-7 pull-left text-right">
                <div className="huge">۱۲</div>
                <div>وظایف جدید!</div>
              </div>
            </div>
          </div>
          <a href="#">
            <div className="panel-footer">
              <span className="pull-right">مشاهده جزییات</span>
              <span className="pull-left"><i className="fa fa-arrow-circle-left"></i></span>
              <div className="clearfix"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="panel panel-yellow">
          <div className="panel-heading">
            <div className="row">
              <div className="col-xs-5 text-left pull-left">
                <i className="fa fa-shopping-cart fa-5x"></i>
              </div>
              <div className="col-xs-7 pull-left text-right">
                <div className="huge">۱۲۳</div>
                <div>سفارشات جدید!</div>
              </div>
            </div>
          </div>
          <a href="#">
            <div className="panel-footer">
              <span className="pull-right">مشاهده جزییات</span>
              <span className="pull-left"><i className="fa fa-arrow-circle-left"></i></span>
              <div className="clearfix"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="panel panel-red">
          <div className="panel-heading">
            <div className="row">
              <div className="col-xs-5 text-left  pull-left">
                <i className="fa fa-support fa-5x"></i>
              </div>
              <div className="col-xs-7 pull-left text-right">
                <div className="huge">۱۴</div>
                <div>تیکت‌های جدید!</div>
              </div>
            </div>
          </div>
          <a href="#">
            <div className="panel-footer">
              <span className="pull-right">مشاهده جزییات</span>
              <span className="pull-left"><i className="fa fa-arrow-circle-left"></i></span>
              <div className="clearfix"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}};

export default dashboard;