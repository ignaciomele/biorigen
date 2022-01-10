import React, { Component } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import './turnos.css'


export default class Turnos extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                    <h1>Turnos</h1>
                    <p>Para pedir turnos, recibir más información acerca del espacio, terapias y profesionales, envianos un mensaje de WhatsApp al 02972531307 o haciendo click aquí <a href="https://walink.co/f8babd" target='_blank'>https://walink.co/f8babd</a>, y nosotros te guiaremos.</p>
                    <p>Nuestros horarios de atención son de Lunes a Viernes de 08hs a 21hs y sábados de 08hs a 12hs.</p>

            </div>
        )
    }
}