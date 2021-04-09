import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLbTQxmGwm9JY4ZcplLn4a1ox84xDoYKs",
  authDomain: "linkedin-clone-f7e56.firebaseapp.com",
  projectId: "linkedin-clone-f7e56",
  storageBucket: "linkedin-clone-f7e56.appspot.com",
  messagingSenderId: "556368146229",
  appId: "1:556368146229:web:59e8ebee0f58f216dfe67c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
