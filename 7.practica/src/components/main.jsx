import React, { Component } from 'react';
import Estudiante from './estudiante'
import Formulario from './Formulario'
import Eventos from './Eventos'
import axios from 'axios'

class Main extends Component {
	state = {
        nombreEstudiante: 'Nombres y Apellidos',
		events: [{event: "Evento", type: "none", start: "Inicia", duration: "0", final: "Final"}],
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
        const events = [...this.state.events, evento]
        this.setState({ events })
    }

	render() {
		const {nombreEstudiante,events} = this.state
		console.log('...'+ nombreEstudiante)
		// console.log(events)
		return (
			<div className="container">
				<div className="card">
					<div className="card-body text-center">REACT WORKSHOP POLI 2019</div>
				</div>
				<div className="card">
					<div className="card-body text-center">
						<Estudiante nombreEstudiante={nombreEstudiante} get={this.getEstudiante}/>
					</div>
				</div>
				<div className="row">
					<div className="card col-6">
						<div className="card-body text-center">
							<Formulario guardar={this.guardarEvento}/>
						</div>
					</div>
					<div className="card col-6">
						<Eventos events={events}/>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
