import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './Firebase.config';

export const firebaseInitializeApp = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
};

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithPopup = () => {
    return firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then((res) => {
            const user = res.user;
            user.error = '';
            return user;
        })
        .catch((err) => {
            const user = {};
            user.error = err.message;
            return user;
        });
};
