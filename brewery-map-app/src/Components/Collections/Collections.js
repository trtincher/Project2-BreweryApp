import React, { useContext, useEffect } from 'react';
import CardList from '../CardList/CardList';
import Dropdown from 'react-bootstrap/Dropdown';
import { DataContext } from '../App/App';

function Collections() {
	const dataContext = useContext(DataContext);
	//console.log('dataContext', dataContext);

	useEffect(() => {
		dataContext.setFilter('VISITED');
	}, []);

	const handleFilterClick = (e) => dataContext.setFilter(e.target.innerText);
	console.log('dataContext', dataContext.filter);

	return (
		<div className="Collections">
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Filters
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item onClick={handleFilterClick}>VISITED</Dropdown.Item>
					<Dropdown.Item onClick={handleFilterClick}>WISHLIST</Dropdown.Item>
					<Dropdown.Item onClick={handleFilterClick}>FAVES</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			{/* <Search /> */}
			<h1>{dataContext.filter}</h1>
			<CardList />
		</div>
	);
}

export default Collections;
