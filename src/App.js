import React, {Component, useState} from 'react';
import SocialFollow from "./components/SocialFollow"
import './App.css';
import Navbar from "./layouts/default"

// Images
import logo from './img/logo.png'
import whatsapp from './static/whatsapp.png'

// ROUTER
import { BrowserRouter as Router, Route } from 'react-router-dom'





export default class biorigen extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    showApp: true
  }

  componentWillUnmount() {

  }

  render() {
    if (this.state.showApp) {
      return (
        
        <div className="body">
          <Router>          
          <Route exact path="/martin_mele" render={() => {return <Navbar/>}}/>
        </Router>

            <div>
              <Navbar/>
            </div>


          <section>
            <article>
              <div className="parraf1">
                <h3>¿Qué es Biorigen?</h3>
                <p>Somos un equipo de Profesionales de la Salud que trabajamos inter y trans disciplinariamente, para lograr mejorar el estado de salud de los consultantes e intentar revertir el estado de desequilibrio en que se puede encontrar un paciente.</p>
              </div>
              <br/>
              <div>
              <img src={logo} alt="logo" className="logo1"/>
              </div>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </article>
            <div>
              <a href="https://api.whatsapp.com/send?phone=5492972431277" target="_blank">
              <img src={whatsapp} alt="whatsapp" className="btn-wsp"/>
              </a>
            </div>
            
              <div className="parraf2">
                <h3>¿Cómo trabajamos?</h3>
                <p>Nuestro principal objetivo se centra en proporcionar educación para que la población aprenda conceptos importantísimos de como funciona nuestro cuerpo y mente, para que podamos mantenernos en salud o intentar conseguirla si ya la perdimos. Queremos una especie humana mas fuerte de lo que es ahora, debilitada por su forma de vida, el sedentarismo, malos habitos alimenticios, posturales ,etc.</p>
              </div>
              <br/>
              <div>
                <img src={logo} alt="logo" className="logo2"/>
              </div>
              
            
          </section>

          <footer className="footer">            
              <SocialFollow />            
          </footer> 
        </div>
      )
    }
  }

}

