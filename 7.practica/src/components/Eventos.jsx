import React from 'react'
import Evento from './Evento'

const Eventos = ({events}) => {
    return(
        <div>
            <h1>Listado de eventos</h1>
            <ul className="list-group">                
                {events.map((event,i) => <Evento event={event.event} key={i} inicia={event.start} final={event.final}/>)}            
            </ul>
        </div>
    )
}
export default Eventos;