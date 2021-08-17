import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCv4Nol2CcwPIlllCfyq9a9Z2WkFEIZQBk",
    authDomain: "reacthttps.firebaseapp.com",
    databaseURL: "https://reacthttps-default-rtdb.firebaseio.com",
    projectId: "reacthttps",
    storageBucket: "reacthttps.appspot.com",
    messagingSenderId: "1035700373856",
    appId: "1:1035700373856:web:1ffe3f70c1a4ae642e7605",
    measurementId: "G-XFK7SWTPMK"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider};
  export default db;