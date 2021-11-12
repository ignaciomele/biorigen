import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import SocialFollow from '../social_follow/SocialFollow'
import logo from '../../static/logo.png'
import whatsapp from '../../static/whatsapp.png'

export default class Main extends Component {
    render() {
        return (
            <div className="body">
                <div>
                    <Navbar />
                </div>
                <section>
                    <article>
                        <div className="parraf1">
                            <h3>¿Qué es Biorigen?</h3>
                            <p>Somos un equipo de Profesionales de la Salud que trabajamos inter y trans disciplinariamente, para lograr mejorar el estado de salud de los consultantes e intentar revertir el estado de desequilibrio en que se puede encontrar un paciente.</p>
                        </div>
                        <br />
                        <div>
                            <img src={logo} alt="logo" className="logo1" />
                        </div>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </article>
                    <div>
                        <a href="https://api.whatsapp.com/send?phone=5492972431277" target="_blank">
                            <img src={whatsapp} alt="whatsapp" className="btn-wsp" />
                        </a>
                    </div>
                    <div className="parraf2">
                        <h3>¿Cómo trabajamos?</h3>
                        <p>Nuestro principal objetivo se centra en proporcionar educación para que la población aprenda conceptos importantísimos de como funciona nuestro cuerpo y mente, para que podamos mantenernos en salud o intentar conseguirla si ya la perdimos. Queremos una especie humana mas fuerte de lo que es ahora, debilitada por su forma de vida, el sedentarismo, malos habitos alimenticios, posturales ,etc.</p>
                    </div>
                    <br />
                    <div>
                        <img src={logo} alt="logo" className="logo2" />
                    </div>
                </section>
                <footer className="footer">
                    <SocialFollow />
                </footer>
            </div>
        )
    }
}
