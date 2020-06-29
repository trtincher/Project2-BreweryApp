import React, { useState, useEffect, useContext } from 'react';
import Form from '../Form/Form';
import { DataContext } from '../App/App';

function Search() {
	const dataContext = useContext(DataContext);

	useEffect(
		() => {
			let url = 'https://api.openbrewerydb.org/breweries?by_city=' + dataContext.city;
			//console.log(city);
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

	return (
		<div className="Search">
			<Form setCity={dataContext.setCity} />
		</div>
	);
}

export default Search;
