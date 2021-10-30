import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Firebaseinit from '../components/Shared/Firebase/Firebase.init';

Firebaseinit();
const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();


    const handleSignInWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            // .then((result) => {
            //     setUser(result.user);
            //     console.log(result.user);
            // }).catch((error) => {
            //     console.log(error.message);
            //     // serError(error.code);
            // })
            .finally(() => setIsLoading(false));
    }


    const handleCreateUserWithEmailPassword = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
            // .then((result) => {
            //     setUser(result.user);
            //     console.log(result.user);
            // })
            // .catch((error) => {
            //     console.log(error.message);
            // })
            .finally(() => setIsLoading(false));
    }
    const handleSignInWithEmailPassword = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
            // .then((result) => {
            //     setUser(result.user);
            //     console.log(result.user);
            // })
            // .catch((error) => {
            //     console.log(error.message);
            // })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // console.log("User is signed out");
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSignOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        }).catch((error) => {
            console.log("An error happened during the signout signout");
            console.log(error.message);
        })
            .finally(() => setIsLoading(false));
    }

    return {
        handleSignOut,
        user,
        isLoading,
        handleSignInWithGoogle,
        handleSignInWithEmailPassword,
        handleCreateUserWithEmailPassword
    }
};

export default UseFirebase;