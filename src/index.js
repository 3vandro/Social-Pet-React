import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './pages/Navbar';
import Login from './pages/Login'
import Menu from './pages/Menu';
import Sidebar from './pages/Sidebar';
import Roteador from './Roteador';
import { BrowserRouter, Routes } from 'react-router-dom'
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/esm/Row';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Row>
                <Col>
                    <Navbar />
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={3}>
                    <Menu />
                </Col>
                <Col md={3}>
                    <Sidebar />
                </Col>
                <Col sm={12} md={12}>
                    <Roteador />
                </Col>


            </Row>
        </BrowserRouter>
    </React.StrictMode>
);

