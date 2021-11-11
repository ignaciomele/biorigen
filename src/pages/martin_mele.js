import React, {Component, useState} from 'react';


export default class biorigen extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    showApp: true
  }

  componentWillUnmount() {

  }

  // addParagraph = (title, description) => {
  //   const newParagraph = {
  //     title: title,
  //     description: description,
  //     id: this.state.Paragraphs.length
  //   }
  //   this.setState({
  //     Paragraphs: [...this.state.Paragraphs, newParagraph]
  //   })
  // }

  render() {
    if (this.state.showApp) {
      return (
        
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
  }

}