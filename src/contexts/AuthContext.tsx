import { createContext, PropsWithChildren, useState } from "react";
import { IUser } from "../interfaces/UserInterface";

interface AuthContextProps {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
}

const initialValue: AuthContextProps = {
    user: null,
    setUser: () => {},
};

export const AuthContext = createContext<AuthContextProps>(initialValue);

export const AuthContextProvider = (props: PropsWithChildren) => {
    const [user, setUser] = useState<IUser | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    );
};
