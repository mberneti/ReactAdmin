import React from 'react';
import { Creatable } from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

export default class BTagsInput extends React.Component {
  constructor(props) {
    super(props);

    this.state={value:props.value||[]};

    this.value = props.value||[];

    this.onTagsChange = (tags) => {
      this.value = tags ||[];
      props.updateTagsHandler(tags);
      this.setState({value:this.value});
    }

  }

  // fired after value props changed
  componentWillReceiveProps(nextProps) {
      this.setState({value:nextProps.value});
  }
  // fired after state changed
  shouldComponentUpdate(nextProps, nextState){
    return (this.props.value||[]).length!==(nextProps.value||[]).length ||
    (this.props.suggestions||[]).length!==(nextProps.suggestions||[]).length;
  }
  // fired after component render
  componentDidUpdate(){
    this.onTagsChange(this.state.value);
  }

  render() {
      return (
    <Creatable 
    name="form-field-name"
    value={this.props.value}
    options={this.props.suggestions}
    onChange={this.onTagsChange}
    allowCreate={true}
    multi={true}
    promptTextCreator={(label)=> 'ایجاد تگ "'+label+'"'}
    placeholder="افزودن تگ"
    noResultsText="نتیجه‌ای یافت نشد"
  />);
  }
}
