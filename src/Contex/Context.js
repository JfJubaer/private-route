import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../FIrebase/Firebase.init';



export const AuthContext = createContext();
const auth = getAuth(app);

const Context = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser]=useState({});
    const [load,setLoad]=useState(true);
    const createUser=(email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const signIn=(email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log(`auth state changed ${currentUser}`);
            setLoad(false);
        })
        return ()=> unsubscribe();
    },[])

const googleSignIn=()=>{
    return signInWithPopup(auth,provider);
}
const logOut=()=>{
    return signOut(auth);
}
    const authInfo = { user,createUser, signIn ,googleSignIn,logOut,load};

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default Context;