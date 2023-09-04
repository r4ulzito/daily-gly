import { AuthContextProvider } from "./AuthContext";
import { PropsWithChildren } from "react";

export const GlobalContext = ({ children }: PropsWithChildren) => {
    return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default GlobalContext;
