
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import app from "./firebase.config";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const storage = getStorage(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);
    const [image, setImage] = useState(null);

    // const createUser = (email, password) => {
    //     setLoading(true);
    //     return createUserWithEmailAndPassword(auth, email, password)
        
    // }


    const createUser = (email, password, name, image) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
          const user = userCredential.user;
    
// Upload the image to Firebase Storage
          const storageRef = ref(storage, `images/${user.uid}/${image.name}`);
          uploadBytes(storageRef, image).then((snapshot) => {
            console.log("Uploaded file success");
            getDownloadURL(snapshot.ref).then((url) => {
// Update the user's profile with the image URL
              updateProfile(user, {
                displayName: name,
                photoURL: url,
              })
                .then(() => {
                  console.log("Profile updated successfully");
                })
                .catch((error) => {
                  console.error("Error updating profile: ", error);
                });
            });
          });
          setUser(user);
      setImage(image);
          return user;
        });
      };


    
// testing end
const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () => {
    setLoading(true);
    return signOut(auth);
}

const provider = new GoogleAuthProvider();
const handleGoogleSignIn = () =>{
    setLoading(true);
   return signInWithPopup(auth, provider);

}





useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user state changed', currentUser);
        setUser(currentUser);
        setLoading(false);
    });
    return ()=> {
        unSubscribe();
    }
}, [])


const authInfo = {
    user,
    image,
    loading,
    createUser,
    logOut,
    signIn,
    handleGoogleSignIn,
}


    return (
        <AuthContext.Provider value = {authInfo}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;