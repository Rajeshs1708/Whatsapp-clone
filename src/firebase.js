import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBrIOPocHh7YoWu1xck5uM2i8gaxZdKfKc",
  authDomain: "whatsapp-mern-cdf6e.firebaseapp.com",
  projectId: "whatsapp-mern-cdf6e",
  storageBucket: "whatsapp-mern-cdf6e.appspot.com",
  messagingSenderId: "803636070175",
  appId: "1:803636070175:web:0f8285506cae694b1f122a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;