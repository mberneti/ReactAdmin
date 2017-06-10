import React from 'react';
import Menu from './menu';
import Header from './header';

const mainLayout = props => {
    return (
        <div id="wrapper">
            {props.alert}
            <nav className="navbar navbar-default navbar-static-top" role="navigation">
                <Header fullname={props.fullname} />
                <Menu />
            </nav>
            {props.children}
        </div>
    );
};

export default mainLayout;