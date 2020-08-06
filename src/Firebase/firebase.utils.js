import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCPRuUpQ3GqAiakMXHYq74rbfswDTys9ZM",
    authDomain: "crwn-db-991ce.firebaseapp.com",
    databaseURL: "https://crwn-db-991ce.firebaseio.com",
    projectId: "crwn-db-991ce",
    storageBucket: "crwn-db-991ce.appspot.com",
    messagingSenderId: "137469322206",
    appId: "1:137469322206:web:954d92af4cc89c05f0b34f",
    measurementId: "G-ETHLS1K17K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;