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
        to: '/'
    }
];

const userMenu = [{
    icon: 'gear',
    label: 'ویرایش مشخصات',
    to: '/job/edit'
}];

const adminMenu = [{
    icon: 'book',
    label: 'مقالات',
    content: [
        {
            label: 'مقاله جدید',
            to: '/admin/article/add'
        },
        {
            label: 'مدیریت مقالات',
            to: '/admin/article/manage'
        }
    ]
},
{
    icon: 'shopping-cart',
    label: 'سرویس‌ها',
    content: [
        {
            label: 'سرویس جدید',
            to: '/admin/service/add'
        },
        {
            label: 'مدیریت سرویس‌ها',
            to: '/admin/service/manage'
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

            if (_.includes(location.pathname, '/admin/article/edit'))
                current.activeLink('/admin/article/manage');

            if (_.includes(location.pathname, '/admin/plan/edit'))
                current.activeLink('/admin/plan/manage');

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