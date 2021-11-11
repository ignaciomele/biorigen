import React from 'react';
import DropdownTerapia from "../components/DropdownTerapia"
import DropdownProf from "../components/DropdownProf"
import '/src/App.css';

// Images
import logo from './img/logo.png'



export default function App() {

  return(
    <div className="body">        
      <header>
        <div>
          <div className="navbar">
            <img src={logo} alt="logo" className="logo"/>
              <h1 className="biorigen">BIO<span>rigen</span></h1>
                <DropdownTerapia/>
                <DropdownProf className="btnprof"/>
                <a type="button">Turnos</a>      
                <a type="button">Quienes Somos</a>      
                <a type="button">Contacto</a>      
                <input type="search" className="search" placeholder="Buscar..."></input>
          </div>
        </div>
      </header>
    </div>
  )
}