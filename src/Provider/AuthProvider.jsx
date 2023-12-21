import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    // const axiosPublic = useAxiosPublic();

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login user

const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// sign in with google

const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth , googleProvider)
}



 // observe user

    useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth , currentUser =>{
    setUser(currentUser)

    // if (currentUser) {
    //     // get token and store client
    //     const userInfo = { email: currentUser.email };
    //     axiosPublic.post('/jwt', userInfo)
    //         .then(res => {
    //             if (res.data.token) {
    //                 localStorage.setItem('access-token', res.data.token);
    //             }
    //         })
    // }
    // else {
    //     //It will  remove token if the token is stored in the client side: Local storage, caching, in memory)
    //     localStorage.removeItem('access-token');
    // }

    setLoading(false);
    // console.log('setted user is' , currentUser)
     })
     return () =>{
        unSubscribe();
     }

}
// ,[axiosPublic]
)

    // log out
    const logOut = () =>{
        
        return signOut(auth)
      }

    //   update user profile 
      const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const authInfo ={
      user,
      loading,
      createUser,
      updateUserProfile,
      signIn,
      signInWithGoogle,
      logOut

    }

    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;