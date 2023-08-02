import { Protected as ProtectedRoute } from "@/components/ProtectedRoute";
import  Home  from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Protected } from "@/pages/Protected";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/protected",
        element: <ProtectedRoute><Protected /></ProtectedRoute>
    }
])