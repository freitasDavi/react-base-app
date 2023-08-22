import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
    isLogged: boolean;
    setLogin: () => void;
    setLogout: () => void;
    token: string;
    refreshToken: string;
    setToken: (bearer: string, refresh: string) => void;
}

const useAuthStore = create(persist((set) => ({
    isLogged: false,
    token: "",
    refreshToken: "",
    setLogin: () => set({ isLogged: true }),
    setLogout: () => set({ token: "" }),
    setToken: (bearer: string, refresh: string) => set({ token: bearer, refreshToken: refresh })
}), {
    name: '@tkn-auth',
    partialize: (state: AuthState) => ({ token: state.token, refreshToken: state.refreshToken }),
    storage: createJSONStorage(() => localStorage)
}));

// const useAuth = create<AuthState>()(
//     persist(
//         (set) => ({
//             isLogged: false,
//             token: "",
//             setLogin: () => set({ isLogged: true }),
//             setLogout: () => set({ isLogged: false }),
//             setToken: (bearer: string) => set({ token: bearer })
//         }),
//         {
//             name: "@tkn-auth",
//             storage: createJSONStorage(() => localStorage),
//             partialize: (state) => ({ token: state.token })
//         }
//     )
// )

const { getState, setState } = useAuthStore;

export { getState, setState }
export default useAuthStore;