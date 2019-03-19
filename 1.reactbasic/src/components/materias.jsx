import React, {Component} from 'react'
import Materia from './materia'
class Materias extends Component{    
    render(){
        const {materias} = this.props        
        return(
            <ul>
                {materias.map(mat => <Materia materia={mat} key={mat.materia} color="red" fontSize="30px"/>)}
            </ul>
        )
    }
}
export default Materias