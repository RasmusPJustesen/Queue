import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyB3iYSCmH3VJNu85ZlBU3RGiFcO4jWI8VM",
    authDomain: "queuern.firebaseapp.com",
    databaseURL: "https://queuern.firebaseio.com",
    projectId: "queuern",
    storageBucket: "queuern.appspot.com",
    messagingSenderId: "373740163908",
    appId: "1:373740163908:web:608e1c6fe11de0466f7d11",
    measurementId: "G-H98SK0GD09"
  };

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;