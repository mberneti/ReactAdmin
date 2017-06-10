import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class BSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value || {} };

    this.value = props.value || {};

    this.onSelectChange = (selectedItem) => {

      if (this.props.async) {
        //if it's in async mode get label name from mocked or selected option
        this.value = selectedItem || {};
      }
      else {
        //if it's NOT in async mode get label name from exist options
        this.value = selectedItem.value || selectedItem || {};
      }

      props.onChangeHandler(selectedItem);
      this.setState({ value: this.value });
    }

  }

  // fired after value props changed
  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }
  // fired after state changed
  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.value !== nextProps.value) && typeof nextProps.value !== 'undefined';
  }
  // fired after component render
  componentDidUpdate() {
    this.onSelectChange(this.state.value);
  }

  render() {
    // console.log(this.props.async);
    // console.log(this.props.loadOptions);
    return (this.props.async === true) ?
      (
        <Select.Async name="form-field-name"
          value={this.props.value}
          loadOptions={this.props.loadOptions}
          onChange={this.onSelectChange}
          clearable={this.props.clearable}
          placeholder="انتخاب کنید"
          noResultsText="نتیجه‌ای یافت نشد"
          searchPromptText="چیزی برای جستوجو بنویسید"
          loadingPlaceholder="در حال بارگزاری"
        />
      ) :
      (
        <Select name="form-field-name"
          value={this.props.value}
          options={this.props.options}
          onChange={this.onSelectChange}
          clearable={this.props.clearable}
          placeholder="انتخاب کنید"
          noResultsText="نتیجه‌ای یافت نشد"
        />);
  }
}
