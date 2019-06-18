import firebase from 'firebase/app'


let config = {
    apiKey: "AIzaSyD74bwIoBeAxvomNCJP-gwL3-lUO3SiRYM",
    authDomain: "bear-98405.firebaseapp.com",
    databaseURL: "https://bear-98405.firebaseio.com",
    projectId: "bear-98405",
    storageBucket: "bear-98405.appspot.com",
    messagingSenderId: "710320570492",
    appId: "1:710320570492:web:fdab852c9ddbb113"
  };

firebase.initializeApp(config);

window.firebase=firebase;