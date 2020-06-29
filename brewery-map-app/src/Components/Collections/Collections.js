import React, { useContext, useEffect } from 'react';
import CardList from '../CardList/CardList';
import Search from '../Search/Search';
import { DataContext } from '../App/App';
import './Collections.css';

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
			<div className="filter-tabs">
				<div className="filter-group" onClick={handleFilterClick}>
					VISITED
				</div>
				<div className="filter-group" onClick={handleFilterClick}>
					WISHLIST
				</div>
				<div className="filter-group" onClick={handleFilterClick}>
					FAVES
				</div>
			</div>
			{/* <Search /> */}
			<h1>{dataContext.filter + ' BREWERIES'}</h1>
			<CardList />
		</div>
	);
}

export default Collections;
