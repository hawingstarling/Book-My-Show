// import app, { auth, db } from './config'
// import { GoogleAuthProvider, signInWithPopup, OAuthProvider } from "firebase/auth"
// import { collection, addDoc, where, query, getDocs} from "firebase/firestore"

const admin = require("firebase-admin");
// import service account file (helps to know the firebase project details)
const serviceAccount = require('./serviceAccountKey.json')
// Intialize the firebase-admin project/account
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'http://book-my-show.firebaseio.com'
});

module.exports = admin

// const ggProvider = new GoogleAuthProvider()
// const oProvider = new OAuthProvider('apple.com')

// export const signInWithGoogle = async () => {
//     try {
//         const res = await signInWithPopup(auth, ggProvider) 
//         const user = res.user
//         const userRef = collection(db, 'users')
//         const result = await getDocs(query(userRef, where('uid', '==', user.uid)))
//         if (result.empty) {
//             await addDoc(collection(db , 'users'), {
//                 uid: user.uid,
//                 name: user.displayName,
//                 authProvider: 'google',
//                 email: user.email,
//             })
//         }
//         const uid = user.uid

//         admin
//             .auth()
//             .createCustomToken(uid)
//             .then((customToken) => {
//                 console.log(customToken);
//             })
//             .catch((error) => {
//                 console.log('Error creating custom token:', error);
//             })
//     } catch (error) {
//         console.log(error)
//     }
// }

// // You have a Apple ID to add codeApple from firebase
// // https://fireship.io/lessons/apple-signin-with-firebase-tutorial/
// export const signInWithApple = async () => {
//     try {
//         const res = await signInWithPopup(auth, oProvider) 
//         const user = res.user
//         const userRef = collection(db, 'users')
//         const result = await getDocs(query(userRef, where('uid', '==', user.uid)))
//         if (result.empty) {
//             await addDoc(collection(db , 'users'), {
//                 uid: user.uid,
//             })
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }