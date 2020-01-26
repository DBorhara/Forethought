import React, { Component } from 'react';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      placeholder: [],
    };
  }

  componentDidMount() {
    fetch('')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          placeholder: json,
        });
      });
  }

  render() {
    return <div></div>;
  }
}

export default Calendar;
