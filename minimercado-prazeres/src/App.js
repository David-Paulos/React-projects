import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Main from './components/layout/Main'
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal'
import SobreNos from './components/SobreNos'
import FumeiroRegional from './components/FumeiroRegional'
import QueijosRegionais from './components/QueijosRegionais'
import Vegetais from './components/Vegetais'
import Fruta from './components/Fruta'
import OutrosProdutos from './components/OutrosProdutos'
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<PaginaPrincipal />}/>
            <Route path="Sobre-Nos" element={<SobreNos />}/>
            <Route path="Fumeiro-Regional" element={<FumeiroRegional />}/>
            <Route path="Queijos-Regionais" element={<QueijosRegionais />} />
            <Route path="Vegetais" element={<Vegetais />} />
            <Route path="Fruta" element={<Fruta />} />
            <Route path="/Outros-Produtos-Regionais" element={<OutrosProdutos />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

