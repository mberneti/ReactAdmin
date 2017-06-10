import React from 'react';

const pageLayout = props => {
  return (
    <div id="page-wrapper">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="page-header">{props.title}</h1>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default pageLayout;