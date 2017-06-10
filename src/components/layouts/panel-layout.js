import React from 'react';

const panelLayout = props => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading font-bold">
        {props.title}
      </div>
        {props.children}
    </div>
  );
};

export default panelLayout;