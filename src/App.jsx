import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main/Main';



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
        <div>
          <Main />
        </div>



      )
    }
  }
}