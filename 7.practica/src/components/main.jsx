import React, { Component } from 'react';
import Estudiante from './estudiante'
import Formulario from './Formulario'
import Eventos from './Eventos'
import Filtro from './Filtros'
import axios from 'axios'

class Main extends Component {
	state = {
        nombreEstudiante: 'Nombres y Apellidos',
		events: [],
		eventsFilters: [],
		URL: ''
    }
	componentDidMount() {
		const URL = `https://examen-react-workshop.herokuapp.com/examen/`
		this.setState({ URL })
	}
	getEstudiante = async (documento) => {
        await axios.get(`${this.state.URL}/estudiante/${documento}`)
            .then(res => {
				const nombreEstudiante = res.data.name
				// console. log(nombreEstudiante)
                this.setState({ nombreEstudiante })
        }).catch(error => console.log(error))
	}
	guardarEvento = (evento) => {
		const eventsfilters = this.state.events.filter( name => name.event !== evento.event)
        const events = [...eventsfilters, evento]
        this.setState({ events, eventsFilters: events })
	}	
	filtrar = (filtro) => {
		const eventsFilters = filtro ? this.state.events.filter( name => name.type === filtro): [...this.state.events]
		this.setState({ eventsFilters })
	}

	render() {
		const {nombreEstudiante,eventsFilters} = this.state
		// console.log('...'+ nombreEstudiante)
		// console.log(events)
		return (
			<div className="container">
				<div className="card">
					<div className="card-body text-center">REACT WORKSHOP POLI 2019</div>
				</div>
				<br/>
				<div className="card">
					<div className="card-body text-center">
						<Estudiante nombreEstudiante={nombreEstudiante} get={this.getEstudiante}/>
					</div>
				</div>
				<br/>
				<div className="row">
					<div className="card col-6">
						<div className="card-body text-center">
							<Formulario guardar={this.guardarEvento}/>
						</div>
					</div>
					<div className="card col-6">
						<div>
							<Filtro filtro={this.filtrar}/>
						</div>
						<hr/>
						<div>
						<Eventos events={eventsFilters}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
