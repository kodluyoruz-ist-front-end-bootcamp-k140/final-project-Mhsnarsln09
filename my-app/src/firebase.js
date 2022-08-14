
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged } from "firebase/auth"
import { toast } from "react-hot-toast"
import store from "./store"
import { login as loginHandle, logout as logoutHandle } from "./store/auth";
import { getFirestore, collection, addDoc, serverTimestamp} from "firebase/firestore"




const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore(app)

export const register = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        toast.success("You are registered. ",{
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
onAuthStateChanged(auth, (user)=>{
    if(user){
        store.dispatch(loginHandle(user))
    }else{
        store.dispatch(logoutHandle())
    }
})

export const addMessage = async data =>{
    try{
    data.createdAt = serverTimestamp()
    const result = await addDoc(collection(db, "messages"), data)
    return result.id 
    } catch(error){
        toast.error(error.message)
    }
    
}




export default app