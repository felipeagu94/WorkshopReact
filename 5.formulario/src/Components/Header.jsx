import React from 'react'

const Header = ({getNews}) => {
    const CategoriesRef = React.createRef();
    const sendCategory = () => getNews(CategoriesRef.current.value);
    const categories = ['general','business','entertainment','health','science','sports','technology']
    return(        
        <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
			<div className="row">
				<div className="col-md-6 px-0">
					<h1 className="display-4 font-italic">News Colombia</h1>
				</div>
				<div className="col-md-6 px-0">
					<div className="input-group">
                        <select
                            ref={CategoriesRef}					
							className="custom-select"
							id="inputGroupSelect04"
							aria-label="Example select with button addon"
						>
							{categories.map(idv => <option value={idv}>{idv}</option>)}
						</select>
						<div className="input-group-append">
							<button className="btn btn-outline-secondary" type="button" onClick={sendCategory}>
								Search
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}
export default Header;