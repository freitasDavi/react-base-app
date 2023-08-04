import { Footer } from "@/components/Footer";
import { LoginForm } from "@/components/Forms/LoginForm";
import { UnAuthNavbar } from "@/components/UnAuthNavbar";
import { Toaster } from "@/components/ui/toaster";

export function Login() {
    return (
        <div>
            <UnAuthNavbar />
            <main className="mt-36 mx-auto w-2/4 min-h-[57vh]">
                <h1 className="text-2xl font-bold text-gray-700">Login</h1>
                <LoginForm />
                <Toaster />
            </main>
            <Footer />
        </div>
    )
}