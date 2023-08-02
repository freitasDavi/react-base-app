import { ReactNode, createContext, useState } from "react"

type AuthContextType = {
    isSignedIn: boolean;
    signIn: (token: string) => void;
    signOut: () => void;
    token?: string;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [token, setToken] = useState("");

    const signIn = (bearer: string) => {
        setToken(bearer);
        setIsSignedIn(true);
    }

    const signOut = () => {
        setIsSignedIn(false);
    }

    return (
        <AuthContext.Provider value={{ isSignedIn, signIn, signOut, token}}>
            { children }
        </AuthContext.Provider>
    )
}