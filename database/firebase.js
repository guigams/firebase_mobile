import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDVV3rLP3otGPGuIBoFfVEtAonDthHyLyY",
  authDomain: "crudv1-3b966.firebaseapp.com",
  projectId: "crudv1-3b966",
  storageBucket: "crudv1-3b966.appspot.com",
  messagingSenderId: "14190645202",
  appId: "1:14190645202:web:621a1e721a43bf974b020b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
