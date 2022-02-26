import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ auth }: any) => {

    return auth ? <Outlet /> : <Navigate to="/sign-in" />;
}
export default PrivateRoute