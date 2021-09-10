import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
//import firebase from 'firebase/compat/app';

const config = {
    apiKey: "AIzaSyCrFz8MG8s2KIf31g9juxfqlAeIw-T_A6A",
    authDomain: "jy-web-6e1b0.firebaseapp.com",
    databaseURL: "https://jy-web-6e1b0-default-rtdb.firebaseio.com",
    projectId: "jy-web-6e1b0",
    storageBucket: "jy-web-6e1b0.appspot.com",
    messagingSenderId: "485725891787",
    appId: "1:485725891787:web:692a863ec6bc00ec94bf4e",
    measurementId: "G-J22ZX58TK8"
};

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}

initFirebase();

export { firebase }