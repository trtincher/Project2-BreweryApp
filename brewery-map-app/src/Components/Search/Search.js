import React, { useEffect, useContext } from 'react';
import Form from '../Form/Form';
import CardList from '../CardList/CardList';
import { DataContext } from '../App/App';

function Search() {
	const dataContext = useContext(DataContext);

	//console.log('Search breweryData', dataContext.breweryData);

	useEffect(() => {
		dataContext.setFilter('');
	}, []);

	return (
		<div className="Search">
			<Form setSearch={dataContext.setSearch} />
			<CardList />
		</div>
	);
}

export default Search;
