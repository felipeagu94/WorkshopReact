import React, {Component} from 'react'
class Header extends Component{    
    render(){
        const {title,author} = this.props
        return(
            <header>
                <h1>{title} - {author}</h1>
            </header>
        )
    }
}
export default Header