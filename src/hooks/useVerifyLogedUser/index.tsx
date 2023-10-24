import { useContext, useState } from "react";
import { firebaseInitialize } from "../../firebase/config";
import { AuthContext } from "../../contexts/AuthContext";
import firebase from "firebase/compat/app";
import { postUserLoginService } from "../../service/userService";
import { IUserLoginResponse } from "../../interfaces/response/UserLoginResponseInterface";
import { IUser } from "../../interfaces/UserInterface";

export const useVerifyLogedUser = () => {
    const { auth } = firebaseInitialize();

    const [loadingUser, setLoadingUser] = useState<boolean>(true);

    const { userLogin } = postUserLoginService();

    const { setUser } = useContext(AuthContext);

    const getUser = async (currentGoogleUser: firebase.User | null) => {
        if (currentGoogleUser) {
            // const userToken = (await currentGoogleUser?.getIdToken()).split(".")[1];

            const response = await userLogin(
                (await currentGoogleUser?.getIdToken()).split(".")[1]
            );

            const databaseUserRegister: IUserLoginResponse = response.data;

            const user: IUser = {
                id: databaseUserRegister.id,
                userName: currentGoogleUser?.displayName!,
                userPhotoUrl: currentGoogleUser?.photoURL!,
                target_gly: databaseUserRegister.target_gly,
            };

            setUser(user);
        }
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
