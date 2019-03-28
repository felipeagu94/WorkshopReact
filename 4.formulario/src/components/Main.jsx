import React, {Component} from 'react'
import './Style.css'
import Header from './Header'
import Registro from './Registro'
import Citas from './Citas'
import Footer from './Footer'
export default class App extends Component{
    state = {
        appoitments: [],
        count: 0
    }
    addAppoinmet = (newAppoinment) => {
        const appoitments = [...this.state.appoitments, newAppoinment]
        const count = appoitments.length
        this.setState({ appoitments, count })
    }
    cancelAppoinment = (AppoinmentDelete) =>{
        const apps = [...this.state.appoitments]
        const appoitments = apps.filter( appoitment => appoitment !== AppoinmentDelete)
        const count = apps.length
        this.setState({ appoitments, count })
    }
    render(){
        const {count,appoitments} = this.state
        return(
            <div className="container">
                <Header title="Appoitment App" year={new Date().getFullYear()}/>
                <div className="row">
                    <Registro addAppoinmet={this.addAppoinmet}/>
                    <Citas count={count} appoinments={appoitments} cancelAppoinment={this.cancelAppoinment}/>
                </div>
                <Footer company="Meet Limit"/>
            </div>
        )
    }
}