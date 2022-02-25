import React from "react";
import { Navigate, Outlet } from "react-router";

const useAuth = () => {
    return true
}

const ProtectedRoutes = (props: any) => {
    const auth = useAuth()
    return auth ? <Outlet /> : <Navigate to="/Home" />
}

export default ProtectedRoutes