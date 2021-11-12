import React, { Component } from 'react'
import Main from './components/main/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Main />
      )
    }
  }

}

