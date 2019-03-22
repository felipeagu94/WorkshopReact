import React from 'react'
const Cart = ({valueItem}) => {
    return(        
        <button type="button" className="btn btn-primary">
            Value <span className="badge badge-light">{valueItem}</span>
        </button>
    )
}
export default Cart;