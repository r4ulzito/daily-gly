import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import LoginPage from "../pages/LoginPage";
import DiaryPage from "../pages/DiaryPage";
import Layout from "../pages/Layout";
import MonitorPage from "../pages/MonitorPage";
import AboutPage from "../pages/AboutPage/intex";

import { useVerifyLogedUser } from "../hooks/useVerifyLogedUser";
import { AuthContext } from "../contexts/AuthContext";
import LoadingPage from "../pages/LoadingPage";

const Routers = () => {
    const { verifyLogedGoogleUser, loadingUser } = useVerifyLogedUser();

    useEffect(() => {
        verifyLogedGoogleUser();
    }, []);

    const { user } = useContext(AuthContext);

    if (loadingUser) {
        return <LoadingPage />;
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/login"
                        element={
                            user ? <Navigate to="/my-diary" /> : <LoginPage />
                        }
                    />
                    <Route
                        path="/"
                        element={user ? <Layout /> : <Navigate to="/login" />}
                    >
                        <Route index element={<Navigate to="/my-diary" />} />
                        <Route path="my-diary" element={<DiaryPage />} />
                        <Route path="monitor" element={<MonitorPage />} />
                        <Route path="sobre" element={<AboutPage />} />
                        <Route path="*" element={<Navigate to="/my-diary" />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Routers;
