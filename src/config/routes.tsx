import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PerfilPage from "../pages/perfil"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/perfil" element={<PerfilPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}