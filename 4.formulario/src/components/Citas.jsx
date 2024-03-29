import React from 'react'
import Badge from './Badge'
import Cita from './Cita'

const Citas = ({count,appoinments, cancelAppoinment}) => {
    const cancelAppoinments = obj => cancelAppoinment(obj)
    return(
        <div className="col-md-5 order-md-2 mb-4">
            <Badge count={count}/>
            <ul className="list-group mb-3">
                {appoinments.map(appoinment => <Cita appoinment={appoinment} key={appoinment.appoitmentId} cancelAppoinment={cancelAppoinments}/>)}            
            </ul>
        </div>
    )
}
export default Citas;