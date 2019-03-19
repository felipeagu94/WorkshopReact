import React, { Component } from 'react'
import Header from './components/classcomponents'
import Footer from './components/functionalcomponents'
import Materias from './components/materias'
import './App.css'

class App extends Component {
  render() {
    const materias = [
      {materia:'CES4',nota:4},
      {materia:'BD',nota:4.5},
      {materia:'Calculo',nota:3},
      {materia:'Fisica',nota:4}
    ]
    return (
      <React.Fragment>
        <Header title="My App" author="Felipe"/>
        <Materias materias={materias}/>
        <Footer text="Felipe App®" date="hoy"/>
      </React.Fragment>
    );
  }
}
export default App;