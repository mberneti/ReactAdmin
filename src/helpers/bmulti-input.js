import React from 'react';
import {  Button, Glyphicon } from 'react-bootstrap';
import _ from 'lodash';

export default class MultiInput extends React.Component {
  constructor(props) {
    super(props);

    this.IsFirstTime=true;

    this.state = { value: props.value || [], deleted: props.deleted || [] };

    this.value = {};

    this.deleteItemHandler = (idx) => {

      let value = this.state.value.filter((item, index) => { return !_.includes([idx], index); });

      //deleted index history
      let deleted = this.state.deleted.concat([idx]);

      this.setState({ deleted, value });

      this.value=value;
      
       this.onChange(value);

    }

    this.addItemHandler = () => {

      let value = this.state.value.concat([{}]);

       this.setState({ value });

      this.value=value;
        
      this.onChange(value);

    }

    this.onChange=(value)=>{this.props.onChange(value)};

  }


  // fired after component render
  componentDidMount() {
  
  }
  // fired after value props changed
  componentWillReceiveProps(nextProps) {
     this.setState({value:nextProps.value});
    // console.log(nextProps.value);
  }
  // fired after state changed
  // shouldComponentUpdate(nextProps, nextState){
  //   return ((this.props.value||[]).length!==(nextProps.value||[]).length)||
  //   ((this.props.value||[]).length!==(nextState.value||[]).length);
  // }
  // fired after component render
  componentDidUpdate() {
    // this.setImages(this.state.value);
         // this.onChange(this.state.value);
  }
  
  setChildInput(child,idx,values,parent)
  { 

    if(child.constructor === Array)
    {
      let children=[];
      child.forEach( (item)=> {
        children.push(this.setChildInput(item,idx,values,parent));
      });
      return children;
    }

    if (child.ref !== null)
    {

      //rename component name in parent refs
      let nchild = {
        ...child,
        ref: this.props.name + '-' + child.ref + '-' + idx
      };

      let itemValue=values[child.ref];

      itemValue = typeof itemValue==='undefined'?'':itemValue;

      let nElement=React.cloneElement(nchild, { value:itemValue });

      return nElement;
    }

    if (typeof child.props.children !== 'object')
      return child;

    let result = {...child.props,children:this.setChildInput(child.props.children,idx,values,child.props)};

    return {...child,props:result};

  }

  renderChildren(values, idx) {

    values = values || [];

    return React.Children.map(this.props.children, (child) => {

      // console.log(child);
      // console.log((this.setChildInput(child,idx,values)));
      return (this.setChildInput(child,idx,values));

    });

  }

  render() {

    return (
      <div className={"multi-input-container"}>
        {
          this.state.value.map((item, idx) => {
            return (
              <div className={"multi-input-item " + this.props.className || ''} key={idx}>

                {
                  this.renderChildren(item, idx)
                }
                <Button onClick={this.deleteItemHandler.bind(null, idx)}><Glyphicon glyph="minus" /></Button>
              </div>
            );
          })
        }
        <br/>
          <Button onClick={this.addItemHandler.bind(null)}><Glyphicon glyph="plus" /></Button>
      </div>
    );
  }

}
