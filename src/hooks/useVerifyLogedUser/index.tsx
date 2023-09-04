import { useContext, useState } from "react";
import { firebaseInitialize } from "../../firebase/config";
import { AuthContext } from "../../contexts/AuthContext";
import firebase from "firebase/compat/app";

export const useVerifyLogedUser = () => {
    const { auth } = firebaseInitialize();

    const [loadingUser, setLoadingUser] = useState<boolean>(true);

    const { setUser } = useContext(AuthContext);

    const getUser = async (currentUser: firebase.User | null) => {
        setUser(currentUser);
    };

    const verifyLogedGoogleUser = () => {
        auth.onIdTokenChanged(async (user) => {
            if (user) {
                await getUser(user);
                setLoadingUser(false);
            } else {
                setUser(null);
                setLoadingUser(false);
            }
        });
    };

    return { verifyLogedGoogleUser, loadingUser };
};
