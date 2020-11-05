import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBsjIQqGQsXgdCBiKE2r3XBWBtzDGVSKBE",
  authDomain: "barter-app-3344d.firebaseapp.com",
  databaseURL: "https://barter-app-3344d.firebaseio.com",
  projectId: "barter-app-3344d",
  storageBucket: "barter-app-3344d.appspot.com",
  messagingSenderId: "579834531893",
  appId: "1:579834531893:web:ee59ecf20967bb4173e17c"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
