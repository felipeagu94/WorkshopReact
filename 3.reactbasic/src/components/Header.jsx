import React, {Component} from 'react'
import './Header.css'

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            AppTitle: this.props.AppTitle,
            Year: this.props.Year
        }
    }
    // componentDidMount = () => console.log("Did Mount Header")
    // componentDidUpdate = () => console.log("Did Update Header")
    // componentWillUnmount = () => console.log("Did Unmount Header")

    render(){
        const {AppTitle,Year} = this.state
        return(
            <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
                <img className="mr-3" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-outline.svg" alt="a" width="48" height="48"/>
                <div className="lh-100">
                <h6 className="mb-0 text-white lh-100">{AppTitle}</h6>
                <small>{Year}</small>
                </div>        
            </div>
        )
    }
}