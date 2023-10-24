import { AuthContextProvider } from "./AuthContext";
import { PropsWithChildren } from "react";
import { PrimeReactProvider } from "primereact/api";

export const GlobalContext = ({ children }: PropsWithChildren) => {
    return (
        <PrimeReactProvider>
            <AuthContextProvider>{children}</AuthContextProvider>
        </PrimeReactProvider>
    );
};

export default GlobalContext;
