import React, { useState, useEffect, useContext } from 'react';
import Form from '../Form/Form';
import CardList from '../CardList/CardList';
import { DataContext } from '../App/App';

function Search() {
	const dataContext = useContext(DataContext);

	useEffect(
		() => {
			let url = 'https://api.openbrewerydb.org/breweries?per_page=50&by_city=' + dataContext.city;
			console.log('city', dataContext.city);
			const makeApiCall = async () => {
				const res = await fetch(url);
				const json = await res.json();
				console.log('json in makeApiCall', json);
				dataContext.setBreweryData(json);
			};
			makeApiCall();
		},
		[ dataContext.city ]
	);
	//console.log('Search breweryData', dataContext.breweryData);

	const handleResetButton = () => {
		dataContext.setFilter('');
	};

	return (
		<div className="Search">
			<h1>Search for New Breweries</h1>
			<Form setCity={dataContext.setCity} />
			<button onClick={handleResetButton}>Reset</button>
			<CardList />
		</div>
	);
}

export default Search;
