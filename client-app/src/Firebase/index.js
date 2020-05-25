import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAxzbnwMHhMhAgFDMG6rzHUxyMDTdPBX5c",
    authDomain: "peopleconnect-2b43f.firebaseapp.com",
    databaseURL: "https://peopleconnect-2b43f.firebaseio.com",
    projectId: "peopleconnect-2b43f",
    storageBucket: "peopleconnect-2b43f.appspot.com",
    messagingSenderId: "224110591507",
    appId: "1:224110591507:web:b8c927fcf6113f12d449e6",
    measurementId: "G-5TBWT1DE3G"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  
  export {
      storage
  }