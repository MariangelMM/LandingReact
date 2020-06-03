import * as firebase from "firebase";

const firebaseConfig = {
  apapiKey: "AIzaSyBwPx6LLTSiAX6Un5cGSid9-bCVqiCYC9E",
  authDomain: "landing-c2a1a.firebaseapp.com",
  databaseURL: "https://landing-c2a1a.firebaseio.com",
  projectId: "landing-c2a1a",
  storageBucket: "landing-c2a1a.appspot.com",
  messagingSenderId: "793606070830",
  appId: "1:793606070830:web:fc57c85ed4301a12e175bf"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
