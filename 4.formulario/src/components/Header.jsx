import React from 'react'

const Header = ({title, year}) => {
    return(        
        <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
            <img
                className="mr-3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgNdL-CRAvoRfpW6e-INI4HInG78niHI1pY2hPKxT5PczdLV5"
                alt="titulo"
                width="48"
                height="48"
            />
            <div className="lh-100">
                <h6 className="mb-0 text-white lh-100">{title}</h6>
                <small>Since {year}</small>
            </div>
        </div>
    )
}
export default Header;