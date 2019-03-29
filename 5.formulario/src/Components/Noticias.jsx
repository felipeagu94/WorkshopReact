import React from 'react'
import Noticia from './Noticia'

const Noticias = ({news}) => {
    return(        
        <div className="row mb-2">
            {news.map((inew,i) => <Noticia inew={inew} key={i}/>)}
        </div>
    )
}
export default Noticias;