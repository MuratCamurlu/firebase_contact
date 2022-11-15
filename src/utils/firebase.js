import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkv8HuizLRJAPmXdFtN6rm0plb6S7jWV0",
  authDomain: "firecontact-cb25c.firebaseapp.com",
  databaseURL: "https://firecontact-cb25c-default-rtdb.firebaseio.com",
  projectId: "firecontact-cb25c",
  storageBucket: "firecontact-cb25c.appspot.com",
  messagingSenderId: "833443502973",
  appId: "1:833443502973:web:998872797e32ec4dcc4a14",
};

const firebase = initializeApp(firebaseConfig);
export default firebase;
