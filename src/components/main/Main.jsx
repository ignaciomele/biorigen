import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import SocialFollow from '../socialFollow/SocialFollow'
import Articles from '../articles/Articles'
import Ubication from '../ubication/Ubication'


export default class Main extends Component {
    render() {
        return (
            <div className="main">
               <div>
                   <Navbar/>
               </div>
               <div>
                    <Articles/>
               </div>
               <div>
                   <Ubication/>
               </div>
               <div className="footer">
                    <SocialFollow />
                </div>
            </div>
        )
    }
}