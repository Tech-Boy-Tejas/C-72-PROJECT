import firebase from 'firebase';
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyC4yJKi7VPGErqpQ6z-h2P1wY6Jc8kfcEI",
    authDomain: "storyhub-app-ed8cb.firebaseapp.com",
    projectId: "storyhub-app-ed8cb",
    storageBucket: "storyhub-app-ed8cb.appspot.com",
    messagingSenderId: "856773719745",
    appId: "1:856773719745:web:13c79e2d2ca70122aec640"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


