import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCBrcI2uaigFBAPqDZ1k0euyDc5IAbLWUM",
  authDomain: "form-c7b0e.firebaseapp.com",
  databaseURL: "https://form-c7b0e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "form-c7b0e",
  storageBucket: "form-c7b0e.firebasestorage.app",
  messagingSenderId: "830835943536",
  appId: "1:830835943536:web:0c419c90880e3126e96cb5"
};
if(!firebase.app.lenth){
  firebase.initializeApp(firebaseConfig);
}
export const firestore=firebase.firestore()
