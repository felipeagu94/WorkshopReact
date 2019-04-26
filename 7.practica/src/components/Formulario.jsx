import React, {Component} from 'react'
import Alert from './Alert'
import PropTypes from 'prop-types'

export default class Registro extends Component{
    constructor(props){
        super(props)
        this.state ={
            guardar: this.props.guardar,
            valid: false,
            final: 0
        }
    }
    static propTypes = {
        guardar: PropTypes.func.isRequired
    }
    //TODO crear refs
    EventRef = React.createRef()
    TypeRef = React.createRef()
    StartRef = React.createRef()
    DurationRef = React.createRef()

    calcularfinal = () => {
        const hora = this.StartRef.current.value
        const duration = this.DurationRef.current.value
        const final = parseInt(hora) + parseInt(duration)
        this.setState({final})
    }

    CreateAppoinment = (event) => {
        event.preventDefault()
        const newAppoinment = {
            event: this.EventRef.current.value,
            type: this.TypeRef.current.value,
            start: this.StartRef.current.value,
            duration: this.DurationRef.current.value,
            final: this.state.final
        }
        newAppoinment.start && newAppoinment.event ? this.state.guardar(newAppoinment) : this.setState({valid: true})
    }
    render(){
        const {valid,final} = this.state
        return(
            <div>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Nuevo Evento</span>
            </h4>
            {valid && <Alert messege="You should fill all fields"/>}
            <form onSubmit={this.CreateAppoinment}>
                <div className="row">
                    <div className="col-md-6">
                        <label>Evento</label>
                    </div>
                    <div className="col-md-6">
                        <input ref={this.EventRef} type="text" className="form-control" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label>Tipo</label>                        
                    </div>
                    <div className="col-md-6">
                    <input ref={this.TypeRef} type="text" className="form-control" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label>Inicio</label>
                    </div>
                    <div className="col-md-6">
                        <input ref={this.StartRef} type="number" className="form-control" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label>Duración</label>
                    </div>
                    <div className="col-md-6">
                        <input ref={this.DurationRef} type="number" className="form-control" onChange={this.calcularfinal} />
                    </div>                  
                </div>                
                <hr className="mb-4" />
                <div className="row">
                    <div className="col-md-6">
                        <label>Final</label>
                    </div>
                    <div className="col-md-6">
                        <p type="number" className="form-control" >{final}</p>
                    </div>                  
                </div>  
                <button className="btn btn-primary btn-lg btn-block bg-purple text-white lh-100" type="submit">
                    Save
                </button>
            </form>
        </div>
        )    
    }
}