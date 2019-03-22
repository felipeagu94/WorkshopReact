import React, {Component} from 'react'

export default class Alert extends Component{
    constructor(props){
        super(props)
    }
    // componentDidMount = () => console.log("Did Mount Alert")
    // componentDidUpdate = () => console.log("Did Update Alert")
    // componentWillUnmount = () => console.log("Did Unmount Alert")

    render(){
        return(
            <div className="alert alert-dark" role="alert">Wellcome!</div>
        )
    }
}