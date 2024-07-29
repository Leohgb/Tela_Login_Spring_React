import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                username,
                password
            });
            const token = response.data.token;
            if (token) {
                localStorage.setItem('token', token);
                setUser({ username }); // You can set additional user info if needed
                return true;
            }
        } catch (error) {
            console.error("Login error:", error);
            return false;
        }
    };

    const signup = async (username, password) => {
        try {
            await axios.post('http://localhost:8080/auth/register', {
                username,
                password,
                role: "ADMIN"
            });
            return await login(username, password);
        } catch (error) {
            console.error("Signup error:", error);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const checkAuth = () => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser({ username: "Authenticated User" });
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const value = {
        user,
        login,
        signup,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
