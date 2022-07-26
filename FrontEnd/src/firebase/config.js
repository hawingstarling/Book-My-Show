import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBhoKruEQKaPP9ALlOUHg8P9Hsvdk5DYsY",
    authDomain: "book-my-show-be2ac.firebaseapp.com",
    projectId: "book-my-show-be2ac",
    storageBucket: "book-my-show-be2ac.appspot.com",
    messagingSenderId: "898860355244",
    appId: "1:898860355244:web:0b0af3a7b4aa9c05549909",
    measurementId: "G-PRFLHQ981P"
  };

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export default app