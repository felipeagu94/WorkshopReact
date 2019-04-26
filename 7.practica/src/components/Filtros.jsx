import React from 'react'

const Filtro = ({filtro}) => {
    const EventoRef = React.createRef()
    const filtroGratis = () =>  filtro('Gratis')
    const filtroPago = () =>  filtro('Pago')
    const quitarFiltro = () => filtro('')
    return(
        <div className="card">
            <div className="card-body row">
                <div className="col-8">
                    <input ref={EventoRef} className='form-control' placeholder="Evento" />
                </div>
                <div className="col-4">
                    <button type="button" className="btn btn-info">Buscar</button>
                </div>
                <hr/>
                <div className="col-12">
                    <div className="row">
                        <div className="col-4">
                            <label>
                                <input type="radio" name="options" id="Pago" onClick={filtroPago}/> Pago
                            </label>
                        </div>
                        <div className="col-4">
                            <label>
                                <input type="radio" name="options" id="Gratis" onClick={filtroGratis}/> Gratis
                            </label>
                        </div>
                        <div className="col-4">
                            <label>
                                <input type="radio" name="options" id="Todos" onClick={quitarFiltro}/> Todos
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filtro;