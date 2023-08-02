import { create } from "zustand";

interface AuthState {
    isLogged: boolean;
    setLogin: () => void;
    setLogout: () => void;
    token: string;
    setToken: (bearer: string) => void;
}

const useAuthStore = create<AuthState>((set) => ({
    isLogged: false,
    token: "",
    setLogin: () => set({ isLogged: true }),
    setLogout: () => set({ isLogged: false }),
    setToken: (bearer: string) => set({ token : bearer })
}));

export default useAuthStore;