import React from 'react';
import MetisMenu from 'react-metismenu';
import RouterLink from 'react-metismenu-router-link';
import _ from 'lodash';
import store from '../../store';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { hasRole } from '../../api/identity-api';

let content = [
    {
        icon: 'home',
        label: 'داشبورد',
        to: '/ReactAdmin/'
    }
];

const userMenu = [{
    icon: 'gear',
    label: 'ویرایش مشخصات',
    to: '/ReactAdmin/job/edit'
}];

const adminMenu = [{
    icon: 'book',
    label: 'مقالات',
    content: [
        {
            label: 'مقاله جدید',
            to: '/ReactAdmin/admin/article/add'
        },
        {
            label: 'مدیریت مقالات',
            to: '/ReactAdmin/admin/article/manage'
        }
    ]
},
{
    icon: 'shopping-cart',
    label: 'سرویس‌ها',
    content: [
        {
            label: 'سرویس جدید',
            to: '/ReactAdmin/admin/service/add'
        },
        {
            label: 'مدیریت سرویس‌ها',
            to: '/ReactAdmin/admin/service/manage'
        }
    ]
}];


class menu extends React.Component {
    constructor(props) {
        super(props);
        this.activeLink = this.activeLink.bind(this);
    }
    componentWillMount() {

        if (hasRole('Admin')) {
            content = content.concat(adminMenu);
        } else {
            content = content.concat(userMenu);
        }
    }
    componentDidMount() {

        let current = this;
        const history = syncHistoryWithStore(browserHistory, store);

        history.listen(location => {

            if (_.includes(location.pathname, '/ReactAdmin/admin/article/edit'))
                current.activeLink('/ReactAdmin/admin/article/manage');

            if (_.includes(location.pathname, '/ReactAdmin/admin/plan/edit'))
                current.activeLink('/ReactAdmin/admin/plan/manage');

        });

    }
    activeLink(link) {

         this.refs.menu.changeActiveLinkTo(link);

    }
    render() {
        return (
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <MetisMenu classNameStateIcon="fa-angle-left" ref="menu" content={content} activeLinkFromLocation LinkComponent={RouterLink} />
                </div>
            </div>
        );
    }
};

export default menu;