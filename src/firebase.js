import  firebase  from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDU0AFC6E4yb5KkugcT-CdaxBoJSnrEGOo",
    authDomain: "challenge-a92fc.firebaseapp.com",
    projectId: "challenge-a92fc",
    storageBucket: "challenge-a92fc.appspot.com",
    messagingSenderId: "582802010984",
    appId: "1:582802010984:web:1bcd1ce8086c5e0261dcdd",
    measurementId: "G-DX6XND96MS"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};