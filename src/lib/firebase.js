import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBnbdcsSvC6ZYDHqjqvIL9csZDTZA15g2M',
  authDomain: 'next-firebase-ff7f2.firebaseapp.com',
  projectId: 'next-firebase-ff7f2',
  storageBucket: 'next-firebase-ff7f2.appspot.com',
  messagingSenderId: '1074680433804',
  appId: '1:1074680433804:web:540ad4737842f69729ffa9',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;
const fromMillis = firebase.firestore.Timestamp.fromMillis;
const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

export { auth, googleAuthProvider, firestore, fromMillis, storage };

export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];

  return userDoc;
}

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
