import React, { Component } from 'react'
import logo from '../../static/logo.png'
import {Link} from 'react-router-dom'



export default class Navbar extends Component {
    render() {
        return (
            <div className="body">
                <header>
                    <div>
                        <div className="navbar">
                            <img src={logo} alt="logo" className="logo" />
                            <Link className="biorigen" to={"/"}>BIO<span>rigen</span></Link>
                            <Link className='navbar-btn' to={"/terapias"}>Terapias</Link>
                            <Link className='navbar-btn' to={"/profesionales"}>Profesionales</Link>
                            <Link className='navbar-btn' to={"/turnos"}>Turnos</Link>
                            <Link className='navbar-btn' to={"/fq"}>Preguntas frecuentes</Link>
                            <Link className='navbar-btn' to={"/terapias"}></Link>
                            
                            <input type="search" className="search" placeholder="Buscar..."/>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}