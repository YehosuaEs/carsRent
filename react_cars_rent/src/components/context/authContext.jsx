import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebaseconfig";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "firebase/auth";


export const authContext = createContext();

/* ----------------------------------- */
// Para no exportar useContex y el authContex en todos los componentes 
// uso este hook personalizado use...
 export const useAuth = () => {
     const context = useContext(authContext)
     if (!context) throw new Error ("there is not auth provider");
     return (context)
 } 
/* ----------------------------------- */
export function AuthProvider ({ children }) {
    const [usuario, setUsuario] = useState();
    const [loading, setLoading] = useState(true);

    const signup = async (email, password) => {
        //console.log(email, password)
        //Esta linea enviá mis datos a Firebase
        const credentialSignUp =  await createUserWithEmailAndPassword(auth, email, password);
        //console.log(credentialSignUp)
    }
    const login = async (email, password) => {
        const credentialSignIn = await signInWithEmailAndPassword  (auth, email, password);
        console.log(email)
    }

    const logout = async () => {
        await signOut(auth)
        console.log("El usuario ha salido " + usuario.email)
    }

    const loginWithGoogle = async () => {
        const googleProvider = new GoogleAuthProvider()
        await signInWithPopup(auth, googleProvider)
    }

    useEffect (() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUsuario(currentUser)
            setLoading(false)
        }) 
        return unsubscribe;
    },[]) 
    return(
        <authContext.Provider value={{signup, login, logout, usuario, loading, loginWithGoogle}}>
            {children}
        </authContext.Provider>
    )
};
 
  