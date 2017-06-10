import React from 'react';
import { Table, Button, Glyphicon } from 'react-bootstrap';
import PanelLayout from '../layouts/panel-layout';

const simpleList = props => {
  return (
    <PanelLayout title={props.Title}>

      <Table responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          {props.items && props.items.map((item, idx) => {
            return (<tr key={item.Id}>
              <td>{++idx}</td>
              <td>{item.Title}</td>
              <td>
                <Button onClick={() => props.editItemHandler(item.Id)} bsStyle="info"><Glyphicon glyph="edit" /></Button>
                <Button onClick={props.deleteItemHandler.bind(null, item.Id)} bsStyle="danger"><Glyphicon glyph="remove" /></Button>
              </td>
            </tr>);
          })}
        </tbody>

      </Table>

    </PanelLayout>
  );
};

export default simpleList;