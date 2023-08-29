import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DiaryPage from "../pages/DiaryPage";

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/my-diary" element={<DiaryPage />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Routers;
