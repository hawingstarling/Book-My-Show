import { useEffect, useState, useRef } from 'react'
import { apple } from '../../assets/icons'
import { close } from '../../assets/icons'
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, OAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, where, query, getDocs} from "firebase/firestore"
import "firebase/compat/auth";
import classNames from 'classnames/bind';
import styles from './Login.module.scss'

const cx = classNames.bind(styles)

function Login() {
    const [submit, setSubmit] = useState(false);
    const [button, setButton] = useState();
    const inputRef = useRef()

    useEffect(() => {
        if (button) {
            setSubmit(true)
        } else {
            setSubmit(false)
        }
    }, [button]);

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: "book-my-show-be2ac",
        storageBucket: "book-my-show-be2ac.appspot.com",
        messagingSenderId: "898860355244",
        appId: "1:898860355244:web:0b0af3a7b4aa9c05549909",
        measurementId: "G-PRFLHQ981P"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth()
    const db = getFirestore();
    const ggProvider = new GoogleAuthProvider()
    const oProvider = new OAuthProvider('apple.com')

    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, ggProvider) 
            const user = res.user
            const userRef = collection(db, 'users')
            const result = await getDocs(query(userRef, where('uid', '==', user.uid)))
            if (result.empty) {
                await addDoc(collection(db , 'users'), {
                    uid: user.uid,
                    name: user.displayName,
                    authProvider: 'google',
                    email: user.email,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    // You have a Apple ID to add codeApple from firebase
    // https://fireship.io/lessons/apple-signin-with-firebase-tutorial/
    const signInWithApple = async () => {
        try {
            const res = await signInWithPopup(auth, oProvider) 
            const user = res.user
            const userRef = collection(db, 'users')
            const result = await getDocs(query(userRef, where('uid', '==', user.uid)))
            if (result.empty) {
                await addDoc(collection(db , 'users'), {
                    uid: user.uid,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div className={cx('wrapper-login')}>
            <div className={cx('get-started')}>
                <div className={cx('content-getstarted')}>Get Started</div>
                <div>
                    <img src={close} alt="close" />
                </div>
            </div>
            <div className={cx('container-login')} >
                <div className={cx('wrapper-google')} onClick={signInWithGoogle} >
                    <div className={cx('container-google')}>
                        <span>
                            <img src="https://in.bmscdn.com/webin/common/icons/googlelogo.svg" alt="google" />
                        </span>
                        Continue with Google
                    </div>
                </div>
                <div className={cx('wrapper-apple')} onClick={signInWithApple} >
                    <div className={cx('container-apple')}>
                        <span>
                            <img src={apple} alt="apple" />
                        </span>
                        Continue with Apple
                    </div>
                </div>
                <div className={cx('wrapper-or')}>OR</div>
                <form action="#" className={cx('form-user')}>
                    <div className={cx('input-box')}>
                        <input value={button ?? ""} type="text" required ref={inputRef} onChange={(e) => setButton(e.target.value)} />
                        <span>Email</span>
                    </div>
                    <div className={cx('input-box')}>
                        <input type="text" required />
                        <span>Password</span>
                    </div>
                </form>
                <div className={cx('wrapper-rules')}>
                    { submit ? <div className={cx('container-button')}>
                        <button>Continue</button>
                    </div>
                        :
                    <div className={cx('container-rules')}>
                        I agree to the
                        <a href="#"> Terms & Conditions</a> &
                        <a href="#"> Privacy Policy</a>
                    </div>
                    }
                </div>
            </div>
        </div>
  
    );
}

export default Login;