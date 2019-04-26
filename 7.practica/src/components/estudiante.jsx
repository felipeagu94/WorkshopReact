import React from 'react'

const Estudiante = ({nombreEstudiante,get}) => {
    const DocumentRef = React.createRef()
    const getNombres = () => {
        const document = DocumentRef.current.value
        get(document)
    }
    // console.log(nombreEstudiante)
    return(
        <div className="card">
            <div className="card-body row">
                <div className="col-2">
                    <label>Usuario</label>
                </div>
                <div className="col-2">
                    <input ref={DocumentRef} className='form-control' placeholder="Documento" />
                </div>
                <div className="col-2">
                <button type="button" className="btn btn-info" onClick={getNombres}>Buscar</button>
                </div>
                <div className="col-6">
                <p className='form-control'>{nombreEstudiante}</p>
                </div>
            </div>
        </div>
    )
}
export default Estudiante;

// export default class Estudiante extends Component {
//     constructor(props){
//         super(props)
//         this.state ={
//             name: this.props.nombreEstudiante,
//             get: this.props.get
//         }
//     }
//     DocumentRef = React.createRef()
//     getNombres = () => {
//         const document = this.DocumentRef.current.value
//         this.state.get(document)
//     }
//     render(){
//         const {name} = this.state
//         console.log(name)
//         return(
//             <div className="card">
//                 <div className="card-body row">
//                     <div className="col-2">
//                         <label>Usuario</label>
//                     </div>
//                     <div className="col-2">
//                         <input ref={this.DocumentRef} className='form-control' placeholder="Documento" />
//                     </div>
//                     <div className="col-2">
//                     <button type="button" className="btn btn-info" onClick={this.getNombres}>Buscar</button>
//                     </div>
//                     <div className="col-6">
//                     <p className='form-control'>{name}</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }