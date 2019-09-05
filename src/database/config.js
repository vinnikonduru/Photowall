import * as firebase from 'firebase'


var config = {
  apiKey: "AIzaSyCQgCAnb9QxrEgfpvynXcqXnqc4I4KsF_k",
  authDomain: "photowall-d2610.firebaseapp.com",
  databaseURL: "https://photowall-d2610.firebaseio.com",
  projectId: "photowall-d2610",
  storageBucket: "photowall-d2610.appspot.com",
  messagingSenderId: "921183956650",
  appId: "1:921183956650:web:ce84709f836f8382"
};

 firebase.initializeApp(config) 

 const database = firebase.database()

 export {database}