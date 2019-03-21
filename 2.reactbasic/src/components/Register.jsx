import React, {Component} from 'react'

export default class Register extends Component{
    
    constructor(props){
        super(props)
        this.state ={
            hiden: false,
            inputText: '',
            sendtext: this.props.getText
        }
    }
    changeText = (event) => this.setState({inputText: event.target.value})
    changeHiden = () => this.setState({hiden: !this.state.hiden})
    clear = () => {
        this.setState({inputText: ''}, () => this.sendText)
    }
    sendText = () => this.state.sendtext(this.state.inputText)

    render(){
        const {inputText} = this.state
        return(
            <React.Fragment>
                <input value={inputText} onChange={this.changeText} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                <button onClick={this.clear} type="button" className="btn btn-info">Clear text</button>
                <button onClick={this.sendText} type="button" className="btn btn-success">Send Text</button>
                <button onClick={this.changeHiden} type="button" className="btn btn-warning">Clic on me!</button>
                {this.state.hiden && <div className="alert alert-dark" role="alert">Hi dude!, I ain't hiding already</div>}
                <div className="alert alert-primary" role="primary">{inputText}</div>
            </React.Fragment>
        )
    }
}