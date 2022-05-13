import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';



const ProtectedRoutes = (props) => {
    const isAuth = props.loggedIn

  return isAuth ? <Outlet /> : <Navigate to="/" />;
}
export default ProtectedRoutes;