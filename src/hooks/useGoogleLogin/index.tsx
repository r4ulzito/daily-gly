import { firebaseInitialize } from "../../firebase/config";

export const userGoogleLogin = () => {
    const { auth, googleProvider } = firebaseInitialize();

    const signInWithGoogle = async () => {
        const calledGoogleProvider = googleProvider();

        const { user } = await auth.signInWithPopup(calledGoogleProvider);

        if (!user) {
            throw new Error("Falha na autenticação de usuário!");
        }
    };

    const signOutWithGoogle = async () => {
        await auth.signOut();
    };

    return { signInWithGoogle, signOutWithGoogle };
};
