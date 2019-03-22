import React, {Component} from 'react'

export default class AddItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            valueItem: 0,
            addValue: this.props.addValue
        }
    }
    addItem = () => this.state.addValue(this.state.valueItem)
    ChangeValue = event => {
        const val = parseInt(event.target.value)
        this.setState({valueItem: val})
    }
    render(){
        const {valueItem} = this.state
        return(
            <div className="container">
                <label>How cost?</label>
                <input type="number" value={valueItem} onChange={this.ChangeValue}/>
                <button onClick={this.addItem} type="button" className="btn btn-success">Add</button>
            </div>
        )
    }
}