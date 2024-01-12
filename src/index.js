import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min (1).css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componants/Header';
import Sidebar from './componants/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<BrowserRouter>


<Header />

<Sidebar />



<App />

</BrowserRouter>
    

    
    
  </React.StrictMode>
);


