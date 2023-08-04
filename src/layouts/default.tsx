import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import useAuthStore from "@/store/AuthStore";
import { Navigate, Outlet } from "react-router-dom"

export function DefaultLayout() {
    const token = useAuthStore((state) => state.token);

    if (token && token.trim().length === 0) {
        return <Navigate to="/login" replace />
    }

    return (
        <div className="flex flex-col">
            <Navbar />
            <main className="w-full min-h-[75vh] mt-16">
                <Outlet />
                <Toaster />
            </main>
            <Footer />
        </div>
    )
}