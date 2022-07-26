import React from 'react';
import ReactDOM from 'react-dom/client';
import Adote from './pages/Adote';
import Amigos from './pages/Amigos';
import Anuncie from './pages/Anuncie';
import Eventos from './pages/Eventos';
import Fotos from './pages/Fotos';
import Feed from './pages/Feed';
import PaginaInicial from './pages/PaginaInicial';
import {Routes, Route} from 'react-router-dom'


export default function Roteador() {
    return(
        <Routes>
            <Route path="/" element={ <Feed /> } />
            <Route path="/PaginaInicial" element={ <PaginaInicial /> } />
            <Route path="/Adote" element={ <Adote /> } />
            <Route path="/Amigos" element={ <Amigos /> } />
            <Route path="/Anuncie" element={ <Anuncie /> } />
            <Route path="/Eventos" element={ <Eventos /> } />
            <Route path="/Fotos" element={ <Fotos /> } />
        </Routes>
    )
}

