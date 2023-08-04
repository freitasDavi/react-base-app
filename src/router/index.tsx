import { Protected as ProtectedRoute } from "@/components/ProtectedRoute";
import { DefaultLayout } from "@/layouts/default";
import { Client } from "@/pages/Clients/Client";
import Home from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Protected } from "@/pages/Protected";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

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

export const router2 = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="/clients" element={<Client />} />
                <Route path="/protected" element={<Protected />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Route>
    )
);