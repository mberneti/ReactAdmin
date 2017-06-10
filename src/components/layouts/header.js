import React from 'react';
import { logout } from '../../api/identity-api';
import { ProgressBar } from 'react-bootstrap';
import { hasRole } from '../../api/identity-api';

const header = props => {
    return (
        <div>

            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">
                    {(hasRole("Admin")&&"پنل مدیریت")}
                    {(!hasRole("Admin")&&"پنل کاربری")}
                    </a>
            </div>

            <ul className="nav navbar-top-links navbar-left">
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i className="fa fa-envelope fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-messages">
                        <li>
                            <a href="#">
                                <div>
                                    <strong>علیرضا اصفهانی (زبردست)</strong>
                                    <span className="pull-left text-muted">
                                        <em>دیروز</em>
                                    </span>
                                </div>
                                <div>متن آزمایشی برای توسعه دهندگان وب...</div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>مهدی صالحیان</strong>
                                    <span className="pull-left text-muted">
                                        <em>دیروز</em>
                                    </span>
                                </div>
                                <div>متن آزمایشی برای توسعه دهندگان وب...</div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>حسن گیلک</strong>
                                    <span className="pull-left text-muted">
                                        <em>دیروز</em>
                                    </span>
                                </div>
                                <div>متن آزمایشی برای توسعه دهندگان وب...</div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a className="text-center" href="#">
                                <strong>مشاهده پیغام‌ها</strong>
                                <i className="fa fa-angle-left"></i>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-tasks">
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>وظیفه 1</strong>
                                        <span className="pull-left text-muted">40% پیشرفت</span>
                                    </p>
                                    <ProgressBar now={40} />
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>وظیفه 2</strong>
                                        <span className="pull-left text-muted">20% پیشرفت</span>
                                    </p>
                                    <ProgressBar bsStyle="success" active now={20} />
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>وظیفه 3</strong>
                                        <span className="pull-left text-muted">60% پیشرفت</span>
                                    </p>
                                    <ProgressBar bsStyle="warning" active now={60} />
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>وظیفه 4</strong>
                                        <span className="pull-left text-muted">80% پیشرفت</span>
                                    </p>
                                    <ProgressBar bsStyle="danger" active now={80} />
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a className="text-center" href="#">
                                <strong>مشاهده‌ی وظایف</strong>
                                <i className="fa fa-angle-left"></i>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i className="fa fa-bell fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-alerts">
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-comment fa-fw"></i> نظر جدید
                                    <span className="pull-left text-muted small">4 دقیقه قبل</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-twitter fa-fw"></i> 3 دنبال کننده جدید
                                    <span className="pull-left text-muted small">12 دقیقه قبل</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-envelope fa-fw"></i> پیغام جدید
                                    <span className="pull-left text-muted small">4 دقیقه قبل</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-tasks fa-fw"></i> وظیفه جدید
                                    <span className="pull-left text-muted small">4 دقیقه قبل</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-upload fa-fw"></i> بروزرسانی سرور
                                    <span className="pull-left text-muted small">4 دقیقه قبل</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a className="text-center" href="#">
                                <strong>مشاهده اعلانات</strong>
                                <i className="fa fa-angle-left"></i>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i className="fa fa-user fa-fw"></i>
                        <span className="fullname hidden-sm hidden-md">{props.fullname}</span>
                        <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><a href="#"><i className="fa fa-user fa-fw"></i> پروفایل کاربر</a>
                        </li>
                        <li><a href="#"><i className="fa fa-gear fa-fw"></i> تنظیمات</a>
                        </li>
                        <li className="divider"></li>
                        <li><a href="#" onClick={()=>{logout()}} ><i className="fa fa-sign-out fa-fw"></i> خروج</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
};

export default header;