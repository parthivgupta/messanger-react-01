import firebase from 'firebase';


const FirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDj-ZnrSPp5_pwLdVEdSp89wiCK8B2v5Vc",
    authDomain: "messanger-react-01-2b3c0.firebaseapp.com",
    databaseURL: "https://messanger-react-01-2b3c0.firebaseio.com",
    projectId: "messanger-react-01-2b3c0",
    storageBucket: "messanger-react-01-2b3c0.appspot.com",
    messagingSenderId: "544605110174",
    appId: "1:544605110174:web:f8e5db948b48d5f602e08f",
    measurementId: "G-FL8VY59FNZ"
  });

  const db = FirebaseApp.firestore();

export default db;