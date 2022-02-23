import React, { Component, Fragment } from 'react'
import Articles from '../articles/Articles'
import Ubication from '../ubication/Ubication'


export default class Main extends Component {
    render() {
        return (
            <Fragment>
                <Articles />
                <Ubication />
            </Fragment>
        )
    }
}