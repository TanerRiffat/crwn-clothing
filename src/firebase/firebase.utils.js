import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtnExXtR7xR7d_gYxh7B9zoTuq7CgnKzM",
    authDomain: "crwn-db-8133b.firebaseapp.com",
    projectId: "crwn-db-8133b",
    storageBucket: "crwn-db-8133b.appspot.com",
    messagingSenderId: "1071400405515",
    appId: "1:1071400405515:web:aeac31659e11716c49d50e",
    measurementId: "G-CBT3SSJMTW"
  }

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt: 'select_account'});
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;