import { createContext, useContext, useEffect, useState } from 'react'

import { auth } from '../firebaseConfig'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
const useAuthContext = createContext()

export const UserAuthContextProvider = ({children}) => {
    const [ user, setUser ] = useState({})

    const SignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth", currentUser)
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    })

    return (
        <useAuthContext.Provider value={{user, SignUp, LogIn, LogOut}}>
            {children}
        </useAuthContext.Provider>
    )
}

export const useUserAuth = () => {
    return useContext(useAuthContext)
}