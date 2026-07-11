import React from 'react';
import { Routes, Route } from "react-router";

import Login from "../pages/login/login";
import SignUp from "../pages/signup/signup";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route element={<Login />} path='/login' />
            <Route element={<SignUp />} path='/signup' />
        </Routes>
    );
};

export default PublicRoutes;