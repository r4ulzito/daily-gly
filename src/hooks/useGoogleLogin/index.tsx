import { useState } from "react";
import { firebaseInitialize } from "../../firebase/config";

export const userGoogleLogin = () => {
    const { auth, googleProvider } = firebaseInitialize();

    const [loadingLogin, setLoadingLogin] = useState<boolean>(false);

    const signInWithGoogle = async () => {
        setLoadingLogin(true);
        const calledGoogleProvider = googleProvider();

        await auth
            .signInWithPopup(calledGoogleProvider)
            .then((result) => {
                if (!result.user) {
                    throw new Error("Falha na autenticação de usuário!");
                }
            })
            .catch((error) => {
                console.log(error.message);
                setLoadingLogin(false);
            });

        setLoadingLogin(false);
    };

    const signOutWithGoogle = async () => {
        await auth.signOut();
    };

    return { signInWithGoogle, signOutWithGoogle, loadingLogin };
};
