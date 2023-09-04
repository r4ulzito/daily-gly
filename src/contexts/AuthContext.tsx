import firebase from "firebase/compat/app";
import { createContext, PropsWithChildren, useState } from "react";

interface AuthContextProps {
    user: firebase.User | null;
    setUser: (user: firebase.User | null) => void;
}

const initialValue: AuthContextProps = {
    user: null,
    setUser: () => {},
};

export const AuthContext = createContext<AuthContextProps>(initialValue);

export const AuthContextProvider = (props: PropsWithChildren) => {
    const [user, setUser] = useState<firebase.User | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    );
};
