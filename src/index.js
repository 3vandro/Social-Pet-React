import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './pages/Navbar';
import Login from './pages/Login'
import Menu from './pages/Menu';
import Sidebar from './pages/Sidebar';
import Feed from './pages/Feed';
import {BrowserRouter as Router, Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



<React.StrictMode>
   <Navbar />
   <Menu />
   <Sidebar />
   <Feed />
</React.StrictMode>
  
  
);

