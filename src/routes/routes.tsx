import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<LoginPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Routers;
