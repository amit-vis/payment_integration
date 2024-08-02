import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../database/firebasedatabase";

const AuthContext = createContext();

export const useAuth = ()=>{
    const value = useContext(AuthContext);
    return value
}

export const AuthProvider = ({children})=>{
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({name:"", email:"", password:""});
    const [userSignin, setUserSignin] = useState({email:"", password:""})
    const SignUpUser = async (e)=>{
        e.preventDefault();
        try {
            if(userData.name==="" || userData.email === "" || userData.password===""){
                alert("Fill the required field")
            }
            const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            const user = userCredential.user;
            await updateProfile(user, {
                displayName: userData.name
            })
            setUserData({name:"", email:"", password:""})
            alert("you have registered successfully!")
            navigate("/")
        } catch (error) {
            alert(error.message)
        }
    }

    const handleSignin = async (e)=>{
        e.preventDefault();
        try {
            if(userSignin.email==="" ||  userSignin.password===""){
                alert("Fill the Required field!!")
            }
            const userCredential = await signInWithEmailAndPassword(auth, userSignin.email, userSignin.password);
            const user = userCredential.user;
            console.log(user);
            setUserSignin({email:"",password:""});
            alert("You have signed in successfully")
            navigate("/payment")
        } catch (error) {
            alert(error.message)
        }
    }

    const googleSignIn = async (e)=>{
        e.preventDefault();
        try {
            const result = await signInWithPopup(auth, provider);
            await GoogleAuthProvider.credentialFromResult(result);
            alert("You have signed in successfully")
            navigate("/payment")
        } catch (error) {
            const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        alert("Error signing in with Google:", errorCode, errorMessage);
        }
    }
    return(
        <AuthContext.Provider value={{SignUpUser, userData, setUserData,userSignin, setUserSignin,handleSignin,googleSignIn}}>
            {children}
        </AuthContext.Provider>
    )
}