// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");

//JoseLuis
/* const firebaseConfig = {
  apiKey: "AIzaSyBluY2E__MiaGsrvcvXgw0yOlp5HiBEY2U",
  authDomain: "fullstack20-21-306915.firebaseapp.com",
  projectId: "fullstack20-21-306915",
  storageBucket: "fullstack20-21-306915.appspot.com",
  messagingSenderId: "96185964168",
  appId: "1:96185964168:web:8b48d7c99d74bde97a313d",
  measurementId: "G-1XKT6EPWBE"
}; */
//Yo
const firebaseConfig = {
  apiKey: "AIzaSyC3OwBT3GDx3VlewkNQ3EYZj1LiZ8UWgyI",
  authDomain: "pruebafullstack-372bf.firebaseapp.com",
  projectId: "pruebafullstack-372bf",
  storageBucket: "pruebafullstack-372bf.appspot.com",
  messagingSenderId: "138797453928",
  appId: "1:138797453928:web:133e4f7682818e82ca21dd",
  measurementId: "G-VD49L0QS7T"
};

firebase.initializeApp(firebaseConfig)

let fbFunctions = {}

fbFunctions.signup = (email, password) => {
  return new Promise((resolved) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        let user = userCredential.user
        await userCredential.user.sendEmailVerification()
        resolved(user)
      })
      .catch((error) => {
        let errorCode = error.code
        let errorMessage = error.message
        resolved(errorCode, errorMessage)
      })
  })
}

fbFunctions.signin = (email, password) => {
  return new Promise((resolved) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user
        resolved(user)
      })
      .catch((error) => {
        let errorCode = error.code
        let errorMessage = error.message
        resolved(errorCode, errorMessage)
      })
  })
}

fbFunctions.signout = () => {
  return new Promise((resolved) => {
    firebase.auth().signOut()
      .then(() => resolved('Sesión cerrada correctamente'))
      .catch((error) => resolved(error))
  })
}

fbFunctions.getCurrentUser = () => {
  return new Promise((resolved) => {
    let user = firebase.auth().currentUser
    resolved(user)
  })
}

module.exports = fbFunctions