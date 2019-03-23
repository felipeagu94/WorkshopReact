import React from 'react'
const Cart = ({valueItem}) => {
    return(        
        <div className="col-6">
            <button type="button" className={valueItem < 0 ? 'btn btn-danger btn-block' : 'btn btn-success btn-block'}>
            Outogo $: <span className="badge badge-light">{valueItem}</span>
            </button>
        </div>
    )
}
export default Cart;