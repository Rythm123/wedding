import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyDq3STsZ5W6mu_qrrGuXJsQTINPW_mtpVc",
    authDomain: "wedding-85f0e.firebaseapp.com",
    projectId: "wedding-85f0e",
    storageBucket: "wedding-85f0e.appspot.com",
    messagingSenderId: "80108287769",
    appId: "1:80108287769:web:ef6450789a4af92a1e3788",
    measurementId: "G-3PF1LM3186"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export { messaging };
