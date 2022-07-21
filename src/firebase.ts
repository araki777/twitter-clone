import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCfvVz949ObY5ktYTOSPGLCP3UpFLw0DqI",
  authDomain: "twitter-clone-50348.firebaseapp.com",
  projectId: "twitter-clone-50348",
  storageBucket: "twitter-clone-50348.appspot.com",
  messagingSenderId: "322205846551",
  appId: "1:322205846551:web:8bf98236ebdb52ba58a052"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export default db
