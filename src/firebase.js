import * as firebase from "firebase";

// const firebaseConfig = {

// };

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCVplzCQtJUalqNG_8df69sJtBwTY0nEko",
  authDomain: "insta-clone-react-ac24f.firebaseapp.com",
  databaseURL: "https://insta-clone-react-ac24f.firebaseio.com",
  projectId: "insta-clone-react-ac24f",
  storageBucket: "insta-clone-react-ac24f.appspot.com",
  messagingSenderId: "411153787912",
  appId: "1:411153787912:web:c5b8606d10db62923975bd",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
