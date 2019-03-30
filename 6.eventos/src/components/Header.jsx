import React from 'react'

const Header = ({categories, getEvent}) => {
    const cat = () => categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
    const eventSearchRef = React.createRef()
    const categoryRef = React.createRef()
    const sendSearch = () => getEvent(eventSearchRef.current.value, categoryRef.current.value)
    return(        
        <header>
			<div className="navbar navbar-dark bg-dark shadow-sm flex-md-nowrap">
				<div className="container d-flex justify-content-between">
					<a href="/" className="navbar-brand d-flex align-items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							aria-hidden="true"
							className="mr-2"
							viewBox="0 0 24 24"
							focusable="false"
						>
							<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
							<circle cx="12" cy="13" r="4" />
						</svg>
						<strong>Events</strong>
					</a>
				</div>
				<input
					className="form-control mr-sm-2 form-control-sm"
					type="text"
					placeholder="Event"
                    aria-label="Evento"
                    ref={eventSearchRef}	
				/>
				<select className="form-control mr-sm-2 form-control-sm" ref={categoryRef}>
                    {cat()}
				</select>
				<button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={sendSearch}>
					Search
				</button>
			</div>
		</header>
    )
}
export default Header;