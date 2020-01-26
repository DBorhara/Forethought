import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBVOaLZys61zNvDV_nH_mYJ9MpB3VqsgMU',
  authDomain: 'forethought-149c2.firebaseapp.com',
  databaseURL: 'https://forethought-149c2.firebaseio.com',
  projectId: 'forethought-149c2',
  storageBucket: 'forethought-149c2.appspot.com',
  messagingSenderId: '805898491412',
  appId: '1:805898491412:web:4272c289e99d643625b901',
  measurementId: 'G-CJJB42V6W8',
};

const fire = firebase.initializeApp(config);
const auth = new firebase.auth.GoogleAuthProvider();
auth.addScope('https://www.googleapis.com/auth/calendar');
auth.addScope('https://www.googleapis.com/auth/tasks');
const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });

export { db, fire, auth };
