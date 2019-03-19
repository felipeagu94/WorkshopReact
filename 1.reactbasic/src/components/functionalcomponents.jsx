import React from 'react'
const Footer = ({text,date}) => {
    return(        
        <footer>
            <h2>{text} - {date}</h2>
        </footer>
    )
}
export default Footer;