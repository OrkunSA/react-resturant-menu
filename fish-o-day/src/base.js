import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpHM8J0T_IwR97FjEZw0-PfSvTcbppDXg",
  authDomain: "fish-of-the-day-40eb0.firebaseapp.com",
  databaseURL: "https://fish-of-the-day-40eb0-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
