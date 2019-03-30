import React from 'react'
import Evento from './Evento'

const Eventos = ({events}) => {
    return(        
        <div className="row mb-2 pt-2">
            {events.map((event, i) => <Evento key={i} event={event}/>)}
        </div>
    )
}
export default Eventos;