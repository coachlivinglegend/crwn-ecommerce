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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }
    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;