
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { toast } from "react-hot-toast"
import store from "./store"
import { login as loginHandle, logout as logoutHandle } from "./store/auth";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"




const firebaseConfig = {
    apiKey: "AIzaSyB_CPgw_6terH72VLVqUa4l0u6KKAVFWSM",
    authDomain: "mynutritionist-7672c.firebaseapp.com",
    databaseURL: "https://mynutritionist-7672c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mynutritionist-7672c",
    storageBucket: "mynutritionist-7672c.appspot.com",
    messagingSenderId: "165401843024",
    appId: "1:165401843024:web:4cab93b2c7db12e26e0855",
    measurementId: "G-626LC2GG0H"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore(app)

export const register = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        toast.success("You are registered. ", {
            duration: 2000
        })

        return user

    } catch (error) {
        toast.error(error.message)

    }
}


export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)

        return user
    } catch (error) {
        toast.error(error.message)

    }
}
export const logout = async (email, password) => {
    try {
        await signOut(auth)
        return true
    } catch (error) {
        toast.error(error.message)

    }
}
onAuthStateChanged(auth, (user) => {
    if (user) {
        store.dispatch(loginHandle(user))
    } else {
        store.dispatch(logoutHandle())
    }
})

export const addMessage = async data => {
    try {
        data.createdAt = serverTimestamp()
        const result = await addDoc(collection(db, "messages"), data)
        return result.id
    } catch (error) {
        toast.error(error.message)
    }

}




export default app