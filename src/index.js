import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ncr from './Ncr'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />}></Route>
      <Route path='/ncr' element={<Ncr />}></Route>
    </Routes>
    
  </ BrowserRouter>
);

reportWebVitals();
