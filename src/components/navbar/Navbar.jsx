import React, { Component } from 'react'
import DropdownProf from '../dropdown_prof/DropdownProf'
import DropdownTerapy from '../dropdown_terapy/DropdownTerapy'
import logo from '../../static/logo.png'

export default class Navbar extends Component {
    render() {
        return (
            <div className="body">
                <header>
                    <div>
                        <div className="navbar">
                            <img src={logo} alt="logo" className="logo" />
                            <h1 className="biorigen">BIO<span>rigen</span></h1>
                            <DropdownTerapy />
                            <DropdownProf className="btnprof" />
                            <a type="button">Turnos</a>
                            <a type="button">Quienes Somos</a>
                            <a type="button">Contacto</a>
                            <input type="search" className="search" placeholder="Buscar..." />
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
