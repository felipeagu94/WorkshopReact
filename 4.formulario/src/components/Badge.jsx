import React from 'react'

const Badge = ({count}) => {
    return(
        <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Meeting lists</span>
            <span className="badge badge-secondary badge-pill bg-purple text-white lh-100">{count}</span>
        </h4>
    )
}
export default Badge;