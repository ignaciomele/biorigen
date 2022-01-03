import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import Main from './components/main/Main'
import Therapies from './components/navbar/Therapies/Therapies'
import Professionals from './components/navbar/Professionals/Professionals'
import Turnos from './components/navbar/turnos/Turnos'
import Fq from './components/navbar/Fq/Fq'




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/" element={<Main/>} />
        <Route path="/terapias" element={<Therapies/>} />
        <Route path="/profesionales" element={<Professionals/>} />
        <Route path="/turnos" element={<Turnos/>} />
        <Route path="/fq" element={<Fq/>} />
      </Routes>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
