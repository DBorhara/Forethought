import googleCredientials from '../../secrets.json';
import { google } from 'googleapis';
import functions from 'firebase-functions';

const Oauth2 = google.auth.OAuth2;
const calendar = google.calendar('v3');

const ERROR_RESPONSE = {
  status: '500',
  message: 'There was an error adding an event to your Google Calendar',
};

const TIME_ZONE = 'EST';

const addEvent = (event, auth) => {
  return new Promise((resolve, reject) => {
    calendar.events.insert(
      {
        auth: auth,
        calendarId: 'primary',
        resource: {
          summary: event.eventName,
          description: event.description,
          start: {
            dateTime: event.startTime,
            timeZone: TIME_ZONE,
          },
          end: {
            dateTime: event.endTime,
            timeZone: TIME_ZONE,
          },
        },
      },
      (err, res) => {
        if (err) {
          console.log('Rejecting because of error');
          reject(err);
        }
        console.log('Request successful');
        resolve(res.data);
      }
    );
  });
};

exports.addEventToCalendar = functions.https.onRequest((request, response) => {
  const eventData = {
    eventName: request.body.eventName,
    description: request.body.description,
    startTime: request.body.startTime,
    endTime: request.body.endTime,
  };HY76890------------345334KLNNKLN
  const oAuth2Client = new OAuth2(
    googleCredentials.web.client_id,
    googleCredentials.web.client_secret,
    googleCredentials.web.redirect_uris[0]
  );

  oAuth2Client.setCredentials({
    refresh_token: googleCredentials.refresh_token,
  });

  addEvent(eventData, oAuth2Client)
    .then(data => {
      response.status(200).send(data);
      return;
    })
    .catch(err => {
      console.error('Error adding event: ' + err.message);
      response.status(500).send(ERROR_RESPONSE);
      return;
    });
});
