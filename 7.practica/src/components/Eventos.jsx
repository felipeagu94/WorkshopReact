import React from 'react'
import Evento from './Evento'

const Eventos = ({events}) => {
    return(
        <div>
            <h1>Listado de eventos</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-4"><h4 className="my-0">Evento</h4></div>
                        <div className="col-4">                
                            <h4 className="text-muted">Inicia</h4>
                        </div>
                        <div className="col-4">                
                            <h4 className="text-muted">Finaliza</h4>
                        </div>
                    </div>
                </li>               
                {events.map((event,i) => <Evento event={event.event} key={i} inicia={event.start} final={event.final}/>)}            
            </ul>
        </div>
    )
}
export default Eventos;