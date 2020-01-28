import React, { Component } from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { getEvents } from '../../config/gcal';

const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    getEvents(events => {
      console.log('EVENTS', events);
      this.setState({ events });
    });
  }

  render() {
    return (
      <div>
        <Calendar
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    );
  }
}

export default MyCalendar;
