import React from 'react'
const Materia = ({materia,color,fontSize}) => {
    const divStyle = {
        color,
        fontSize
      };
    return(
        <li style={divStyle}>{materia.materia} - {materia.nota}</li>
    )
}
export default Materia;