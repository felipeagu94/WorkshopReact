import React from 'react'

const Footer = ({company}) => {
    return(
        <footer className="my-5 pt-5 text-muted text-center text-small">
			<p className="mb-1">&copy; 2019 {company}</p>
        </footer>
    )
}
export default Footer;