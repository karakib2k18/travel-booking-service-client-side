import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const Firebaseinit = () => {
    return initializeApp(firebaseConfig);
};

export default Firebaseinit;