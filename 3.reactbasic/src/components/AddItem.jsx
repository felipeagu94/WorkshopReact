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
            <div className="row card">
                <div className="card-header">
                    <div className="col-12">
                        <label><strong>How cost?</strong></label>
                        <input type="number" value={valueItem} onChange={this.ChangeValue} className="form-control" />
                    </div>
                </div>
                <div className="card-body">
                    <div className="col-12 text-right">
                        <button onClick={this.addItem} type="button" className="btn btn-dark">Add</button>
                    </div>
                </div>        
            </div>
        )
    }
}