import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA920pzLnWIMjtlts-66Xzl7lg6KsB9S5I",
  authDomain: "subhub-dbd56.firebaseapp.com",
  projectId: "subhub-dbd56",
  storageBucket: "subhub-dbd56.appspot.com",
  messagingSenderId: "1023714916237",
  appId: "1:1023714916237:web:2fdd7e81642b8b62396fc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();