import { Protected as ProtectedRoute } from "@/components/ProtectedRoute";
import { Client } from "@/pages/Clients/Client";
import Home from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Protected } from "@/pages/Protected";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute><Home /></ProtectedRoute>,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/protected",
        element: <ProtectedRoute><Protected /></ProtectedRoute>
    },
    {
        path: "/clients",
        element: <ProtectedRoute><Client /></ProtectedRoute>
    }
])