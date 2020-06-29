import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import CardList from '../CardList/CardList';

function Search() {
	const [ city, setCity ] = useState('');
	const [ breweryData, setBreweryData ] = useState({});

	useEffect(
		() => {
			let url = 'https://api.openbrewerydb.org/breweries?by_city=' + city;
			console.log(city);
			const makeApiCall = async () => {
				const res = await fetch(url);
				const json = await res.json();
				console.log('json in makeApiCall', json);
				setBreweryData(json);
			};
			makeApiCall();
		},
		[ city ]
	);
	console.log('Search breweryData', breweryData);

	return (
		<div className="Search">
			<Form setCity={setCity} />
			{breweryData[0] ? <CardList breweryData={breweryData} /> : 'loading...'}
		</div>
	);
}

export default Search;
