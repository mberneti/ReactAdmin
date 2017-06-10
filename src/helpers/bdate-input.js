import React from 'react';
import { DatePicker } from 'react-persian-datepicker';
import moment from 'moment-jalaali';

import 'react-persian-datepicker/lib/styles/basic.css';

const styles = {
  calendarContainer: 'calendarContainer',
  heading: 'heading',
  prev: 'prev',
  next: 'next',
  title: 'title',
  dayWrapper: 'dayWrapper',
  currentMonth: 'currentMonth',
  daysOfWeek: 'daysOfWeek',
  monthsList: 'monthsList',
  selected: 'selected',
  dayPickerContainer: 'dayPickerContainer'
};

export default class BDateInput extends React.Component {
  constructor(props) {
    super(props);

    this.value = (props.value || moment()).toString();

    this.state = { value: moment('Thu Feb 02 1000 06:17:17 GMT+0330')  };

    this.onDateChange = (value) => {
      this.value = value.toString();
      this.setState({ value });
      this.props.onChange(value)
    }

  }

  // fired after value props changed
  componentWillReceiveProps(nextProps) {
    this.value=nextProps.value;
    this.setState({ value: moment(nextProps.value)  });
  }
  // fired after state changed
  shouldComponentUpdate(nextProps, nextState) {
    return ((this.state.value|| moment()).toString() !== (nextState.value|| moment()).toString() )||
    (this.value !== nextProps.value ) ;
  }
  // fired after component render
  componentDidUpdate() {
    // this.onChange(this.state.value);
  }

  render() {
    return <DatePicker calendarStyles={styles} value={this.state.value} onChange={this.onDateChange} />;
  }
}