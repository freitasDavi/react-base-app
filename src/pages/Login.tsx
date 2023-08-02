import { LoginForm } from "@/components/Forms/LoginForm";
import { Link } from "react-router-dom";


export function Login () {
    return (
        <div>
            <h1 className="text-3xl font-bold">Hello from login!</h1>
            <Link to="/" className="underline text-blue-500 hover:text-blue-700">Home</Link>

            <main>
                <h1 className="text-2xl font-bold text-gray-700">Login</h1>
                <LoginForm />
            </main>
        </div>
    )
}