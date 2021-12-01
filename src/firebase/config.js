import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyACi0OL7jzN29WdWuZWWdBAQd8NI20AfYA",
    authDomain: "info-core-73435.firebaseapp.com",
    databaseURL: "https://info-core-73435-default-rtdb.firebaseio.com",
    projectId: "info-core-73435",
    storageBucket: "info-core-73435.appspot.com",
    messagingSenderId: "1035999929861",
    appId: "1:1035999929861:web:2208969c8ad3657eff5e6c",
    measurementId: "G-4YYTP1ZFYN"
  };

  //init
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectAuth, projectFirestore, timestamp}