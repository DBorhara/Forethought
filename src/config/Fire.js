import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/firestore';

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
firebase.initializeApp(config);

const fire = firebase;
const store = firebase.firestore();
const storage = firebase.storage();
const db = firebase.firestore();
const auth = new firebase.auth.GoogleAuthProvider();

// db.settings({ timestampsInSnapshots: true });

export { fire, store, storage, db, auth, config };
