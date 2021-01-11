import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAqaCHB-tVDCGspL6Rf5p8lyhNuKJN_qS0",
    authDomain: "snapchat-clone-74479.firebaseapp.com",
    projectId: "snapchat-clone-74479",
    storageBucket: "snapchat-clone-74479.appspot.com",
    messagingSenderId: "357790652737",
    appId: "1:357790652737:web:66c6dcd0e38462c38f69c0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, storage, provider } 