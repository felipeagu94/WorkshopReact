import React from 'react'
const Sumary = ({valueItem}) => {
    const total = () => valueItem.reduce((count, val) => count + val, 0)
    return(        
        <div className="alert alert-dark" role="alert">Grant Total: {total()}</div>
    )
}
export default Sumary;