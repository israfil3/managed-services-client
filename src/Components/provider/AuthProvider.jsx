import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import axios from "axios";


export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);

    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const loginK = (email,password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    };
    const googleSing =() => {
        setLoader(true)
        return signInWithPopup(auth,provider)
    };
    const logout = () => {
        setLoader(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,realUSer => {
            setUser(realUSer);
            if(realUSer){
                axios.post(`http://localhost:5000/jwt`,{
                    email:realUSer?.email
                })
                .then(data => {
                    console.log(data.data)
                    localStorage.setItem('jwt-token',data.data)
                })

            }
            else{
                localStorage.removeItem('jwt-token')
            }
            setLoader(false)
        });
        return() => {
            return unsubscribe();
        }
    },[]);
    const userInfo = {
        user,
        loader,
        createUser,
        loginK,
        googleSing,
        logout
    };
    return (
         <AuthContext.Provider value={userInfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;