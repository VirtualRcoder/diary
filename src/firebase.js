import * as firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB4TD05hBh8beZ42Kr29h1b-xZNbqek5nI",
    authDomain: "diary-f99c1.firebaseapp.com",
    databaseURL: "https://diary-f99c1.firebaseio.com",
    projectId: "diary-f99c1",
    storageBucket: "",
    messagingSenderId: "107649831037",
    appId: "1:107649831037:web:97457c1f12998896"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref('/notes');