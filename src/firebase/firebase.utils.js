import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA6_k9bCRAL4Vm9OgMLdo9fATEd5P2gJaY",
  authDomain: "art-sale.firebaseapp.com",
  databaseURL: "https://art-sale.firebaseio.com",
  projectId: "art-sale",
  storageBucket: "art-sale.appspot.com",
  messagingSenderId: "823379585085",
  appId: "1:823379585085:web:95a182608d1ea5a73f2254"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;