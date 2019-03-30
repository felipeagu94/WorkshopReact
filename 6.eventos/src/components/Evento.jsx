import React from 'react'

const Evento = ({event}) => {
    const {start,name,summary,url,logo,is_free} = event
    const img = logo ? logo.url : 'https://www.unesale.com/ProductImages/Large/notfound.png'
    const alt = logo ? logo.id : 'No found'
    const eventFree = is_free ? 'Free' : 'with cover'
    const textEvent = summary ? summary.substr(0,150) : ''
    return(        
        <div className="col-md-6">
			<div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
				<div className="card">
					<img src={img} className="card-img-top img-noticias img-fluid" alt={alt} />
					<small className="text-muted">{start.timezone}</small>
					<div className="card-body">
						<h5 className="card-title">{name.text}</h5>
						<p className="card-text">{textEvent}</p>
						<a href={url} className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">
							{`${eventFree}...`}
						</a>
					</div>
				</div>
			</div>
		</div>
    )
}
export default Evento;