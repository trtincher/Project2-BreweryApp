import React, { useEffect, useContext } from 'react';
import Form from '../Form/Form';
import CardList from '../CardList/CardList';
import { DataContext } from '../App/App';

const searchStyle = {
	padding: '5rem'
};

function Search() {
	const dataContext = useContext(DataContext);

	//console.log('Search breweryData', dataContext.breweryData);

	useEffect(() => {
		dataContext.setFilter('');
	}, []);

	return (
		<div className="Search" style={searchStyle}>
			<Form setSearch={dataContext.setSearch} />
			<CardList />
		</div>
	);
}

export default Search;
