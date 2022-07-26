import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './pages/Navbar';
import Login from './pages/Login'
import Menu from './pages/Menu';
import Sidebar from './pages/Sidebar';
import Roteador from './Roteador';
import {BrowserRouter, Routes} from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Menu />
            <Sidebar />
            <Roteador />
        </BrowserRouter>
   </React.StrictMode>
);

