import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PerfilPage from "../pages/perfil"
import SobrePage from "../pages/sobre"
import EducacaoPage from "../pages/educacao"
import TecnologiasPage from "../pages/tecnologias"
import ProjetosPage from "../pages/projetos"


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PerfilPage />}></Route>
                <Route path="/sobre" element={<SobrePage />}></Route>
                <Route path="/educacao" element={<EducacaoPage />}></Route>
                <Route path="/tecnologias" element={<TecnologiasPage />}></Route>
                <Route path="/projetos" element={<ProjetosPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}