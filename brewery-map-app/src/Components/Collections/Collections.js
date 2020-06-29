import React, { useContext } from 'react';
import CardList from '../CardList/CardList';
import { DataContext } from '../App/App';
import './Collections.css';
import Form from '../Form/Form';

function Collections() {
	const dataContext = useContext(DataContext);
	//console.log('dataContext', dataContext);

	const handleFilterClick = (e) => dataContext.setFilter(e.target.innerText);

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
			<Form />
			<h1>{'Your ' + (dataContext.city === '' ? '' : dataContext.city) + ' Breweries'}</h1>
			<CardList />
		</div>
	);
}

export default Collections;
