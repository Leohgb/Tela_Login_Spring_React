import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin/index";
import Signup from "../pages/Signup/index";
import { useAuth } from "../contexts/AuthContext";

const Private = ({ Item }) => {
    const { user } = useAuth();

    return user ? <Item /> : <Signin />;
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Private Item={Home} />} />
                <Route path="*" element={<Signin />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;
