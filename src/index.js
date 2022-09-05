import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ncr2021 from './Ncr2021'
import Ncr2022 from './Ncr2022'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cooperators from './Cooperators';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />}></Route>
      <Route path='/ncr2021' element={<Ncr2021 />}></Route>
      <Route path='/ncr2022' element={<Ncr2022 />}></Route>
      <Route path='/cooperators' element={<Cooperators />}></Route>
    </Routes>
    
  </ BrowserRouter>
);

reportWebVitals();
