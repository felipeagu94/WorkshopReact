import React from 'react'

const Noticia = ({inew}) => {
    const {content,publishedAt,title,url,urlToImage} = inew
    const urlimage = urlToImage ? urlToImage : 'https://www.unesale.com/ProductImages/Large/notfound.png'
    return(        
        <div className="col-md-6">
			<div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
				<div className="card">
					<img src={urlimage} className="card-img-top img-noticias img-fluid" alt="img" />
					<small className="text-muted">{publishedAt}</small>
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{content}</p>
						<a href={url} className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">Source</a>
					</div>
				</div>
			</div>
		</div>
    )
}
export default Noticia;