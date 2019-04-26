import React from 'react'

const Alert = ({messege}) => {
    return(
        <div className="alert alert-dark" role="alert">{messege}!</div>
    )
}
export default Alert