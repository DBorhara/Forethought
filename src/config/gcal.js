import request from 'superagent';

const CALENDAR_ID = '5v9m69d9um5e3h0hnndgr6io40@group.calendar.google.com';
const API_KEY = 'AIzaSyBVOaLZys61zNvDV_nH_mYJ9MpB3VqsgMU';
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
  request.get(url).end((err, resp) => {
    if (!err) {
      const events = [];
      JSON.parse(resp.text).items.forEach(event => {
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
        });
      });
      return callback(events);
    }
  });
}
