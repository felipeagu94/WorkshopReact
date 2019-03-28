import React from 'react'

const Cita = ({appoinment}) => {
    const {document, date, Hour, Priority} = appoinment
    return(
        <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">{document}</h6>
                <small className="text-muted">{date} - {Hour}</small>
            </div>
            <span className="text-muted">{Priority}</span>
            <button type="button" className="btn btn-outline-dark">X</button>
        </li>
    )
}
export default Cita;