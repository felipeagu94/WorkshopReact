import React from 'react'

const Evento = ({event,inicia,final}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-4"><h4 className="my-0">{event}</h4></div>
                <div className="col-4">                
                    <h6 className="text-muted">{inicia}</h6>
                </div>
                <div className="col-4">                
                    <h6 className="text-muted">{final}</h6>
                </div>
            </div>
        </li>
    )
}
export default Evento;