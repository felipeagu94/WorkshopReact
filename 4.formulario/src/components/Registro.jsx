import React, {Component} from 'react'
import Alert from './Alert'
import uuid from 'uuid'
import PropTypes from 'prop-types'

export default class Registro extends Component{
    constructor(props){
        super(props)
        this.state ={
            sendAppoinment: this.props.addAppoinmet,
            valid: false
        }
    }
    static propTypes = {
        sendAppoinment: PropTypes.func.isRequired
    }
    //TODO crear refs
    DocumentRef = React.createRef();
    namesRef = React.createRef();
    lastNameRef = React.createRef();
    dateRef = React.createRef();
    HourRef = React.createRef();
    EPSRef = React.createRef();
    PriorityRef = React.createRef();

    CreateAppoinment = (event) => {
        event.preventDefault()
        const newAppoinment = {
            appoitmentId: uuid(),
            document: this.DocumentRef.current.value,
            names: this.namesRef.current.value,
            lastName: this.lastNameRef.current.value,
            date: this.dateRef.current.value,
            Hour: this.HourRef.current.value,
            EPS: this.EPSRef.current.value,
            Priority: this.PriorityRef.current.value
        }
        newAppoinment.date && newAppoinment.Hour ? this.state.sendAppoinment(newAppoinment) : this.setState({valid: true})  
        //event.current.reset()
    }
    render(){
        const {valid} = this.state
        return(
            <div className="col-md-7 order-md-1">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Submit appoitment</span>
            </h4>
            {valid && <Alert messege="You should fill all fields"/>}
            <form onSubmit={this.CreateAppoinment}>
                <div className="mb-3">
                    <label>Document</label>
                    <input ref={this.DocumentRef} type="text" className="form-control" required />
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Names</label>
                        <input ref={this.namesRef} type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Last name</label>
                        <input ref={this.lastNameRef} type="text" className="form-control" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Date</label>
                        <input ref={this.dateRef} type="date" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Hour</label>
                        <input ref={this.HourRef} type="time" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>EPS</label>
                        <select ref={this.EPSRef} className="custom-select d-block w-100" required>
                            <option value="">Choose...</option>
                            <option value="Sura">Sura</option>
                            <option value="Coomeva">Coomeva</option>
                            <option value="Medimas">Medimas</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Priority</label>
                        <select ref={this.PriorityRef} className="custom-select d-block w-100" required>
                            <option value="">Choose...</option>
                            <option value="Alta">Alta</option>
                            <option value="Media">Media</option>
                        </select>
                    </div>
                </div>
                <hr className="mb-4" />
                <button className="btn btn-primary btn-lg btn-block bg-purple text-white lh-100" type="submit">
                    Save
                </button>
            </form>
        </div>
        )    
    }
}