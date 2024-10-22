"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";
import ForgotPassword from "@/components/Auth/ForgotPassword"; 

const AuthLayout: React.FC = () => {
    const [authType, setAuthType] = useState<"login" | "register" | "forgotpassword">("login"); 

    const switchToRegister = () => {
        setAuthType("register");
    };

    const switchToLogin = () => {
        setAuthType("login");
    };

    const switchToForgotPassword = () => {
        setAuthType("forgotpassword");
    };

    return (
        <div className="flex w-full h-screen bg-gray-100">
            <div className="flex items-center justify-center w-full">
                <AnimatePresence mode="wait">
                    {authType === "login" ? (
                        <motion.div
                            key="login"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.65, 0, 0.35, 1],
                            }}
                            className="w-full bg-white shadow-lg rounded-xl" 
                        >
                            <Login switchToRegister={switchToRegister} switchToForgotPassword={switchToForgotPassword} />
                        </motion.div>
                    ) : authType === "register" ? (
                        <motion.div
                            key="register"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.65, 0, 0.35, 1],
                            }}
                            className="w-full bg-white shadow-lg rounded-xl"
                        >
                            <Register switchToLogin={switchToLogin} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="forgotpassword"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.65, 0, 0.35, 1],
                            }}
                            className="w-full h-screen max-w-md shadow-lg rounded-xl"
                        >
                            <ForgotPassword switchToLogin={switchToLogin} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AuthLayout;
