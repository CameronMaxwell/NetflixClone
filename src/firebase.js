import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBHAT-fMzUkDO28h-aLubGDS4wlX8kwTe8",
    authDomain: "netflix-clone-ec697.firebaseapp.com",
    projectId: "netflix-clone-ec697",
    storageBucket: "netflix-clone-ec697.appspot.com",
    messagingSenderId: "388569251732",
    appId: "1:388569251732:web:f89b84b0584e0fea2b9981"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };