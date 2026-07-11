import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router';
import Navbar from '../../components/navbar/navbar';

const ProtectedRouteCom = () => {

    const { pathname } = useLocation();
    console.log('Path: ', pathname);

    const isAuthenticated = JSON.parse(localStorage.getItem('userAuthStatus')) || false;
    console.log('User Auth Status: ', isAuthenticated);

    return isAuthenticated ?
        <>
            <Navbar />
            <Outlet />
        </>
        : <Navigate to={'/login'} replace />
};

export default ProtectedRouteCom;