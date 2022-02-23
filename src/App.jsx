import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import Therapies from './components/navbar/Therapies/Therapies'
import Professionals from './components/navbar/Professionals/Professionals'
import Turnos from './components/navbar/turnos/Turnos'
import Fq from './components/navbar/Fq/Fq'
import SocialFollow from './components/socialFollow/SocialFollow'
import './App.css'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/terapias" element={<Therapies />} />
        <Route path="/profesionales" element={<Professionals />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/fq" element={<Fq />} />
      </Routes>
      <SocialFollow />
    </Router>
  )
}
