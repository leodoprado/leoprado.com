import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PerfilPage from "../pages/perfil"
import SobrePage from "../pages/sobre"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PerfilPage />}></Route>
                <Route path="/sobre" element={<SobrePage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}