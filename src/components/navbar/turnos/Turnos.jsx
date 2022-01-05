import React, { Component } from 'react'
import Navbar from '../../../components/navbar/Navbar'


export default class Turnos extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>Turnos</h1>
                <p>Para recibir información sobre el espacio, terapias, profesionales, pedir turnos, tenes que enviarnos un WhatsApp al 2972531307 y nosotros te guiaremos.</p>
                <p>Nuestros horarios de atención son de Lunes a Viernes de 08hs a 21hs y sábados de 08hs a 12hs.</p>
            </div>
        )
    }
}