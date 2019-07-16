import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBV3M2_zKDwsFh-WWacjvzv3tFJwdefqiE",
    authDomain: "react-firebase-6de82.firebaseapp.com",
    databaseURL: "https://react-firebase-6de82.firebaseio.com",
    projectId: "react-firebase-6de82",
    storageBucket: "react-firebase-6de82.appspot.com",
    messagingSenderId: "848600631981",
    appId: "1:848600631981:web:4b068dc0b13ca224"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;