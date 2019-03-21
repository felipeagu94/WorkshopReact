import React, {Component} from 'react'
import Register from './Register'

export default class Main extends Component{
    constructor(props){
        super(props)
        this.state ={
            age: this.props.age,
            textRegister: ''
        }
    }
    handlerSum = () => this.setState({age: this.state.age + 1})
    getText = (textRegister) => this.setState({textRegister})
    render(){
        const {age,textRegister} = this.state
        return(
            <div className="container">
                <button onClick={this.handlerSum} type="button" className="btn btn-dark">
                    Notifications <span className="badge badge-primary">{age}</span>
                </button>
                <hr/>
                <div className="alert alert-success" role="primary">{textRegister}</div>
                <hr/>
                <Register getText={this.getText}/>
            </div>            
        )
    }
}