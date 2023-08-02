import useAuthStore from "@/store/AuthStore";
import { Navigate } from "react-router-dom";


export function Protected ({ children }: { children: React.ReactNode }) {
    const token  = useAuthStore((state) => state.token);

    if (token.trim().length === 0) {
        return <Navigate to="/login" replace />
    }

    return children;
}