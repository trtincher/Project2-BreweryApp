import React, { useContext } from 'react';
import Card from '../Card/Card';
import { DataContext } from '../App/App';

function CardList() {
	const dataContext = useContext(DataContext);
	console.log('CardList.js datacontext', dataContext);

	let breweryArr = [];

	if (dataContext.filter === 'VISITED') {
		breweryArr = dataContext.visited;
	} else if (dataContext.filter === 'WISHLIST') {
		breweryArr = dataContext.wishlist;
	} else if (dataContext.filter === 'FAVES') {
		breweryArr = dataContext.faves;
	} else {
		breweryArr = dataContext.breweryData;
	}

	const breweries = breweryArr.map((brewery) => {
		let inFaves = dataContext.faves.findIndex((el) => el.name === brewery.name);
		let inWishlist = dataContext.wishlist.findIndex((el) => el.name === brewery.name);
		let inVisited = dataContext.visited.findIndex((el) => el.name === brewery.name);

		return (
			<Card key={brewery.id} brewery={brewery} inFaves={inFaves} inWishlist={inWishlist} inVisited={inVisited} />
		);
	});

	return <div className="CardList">{breweries}</div>;
}

export default CardList;
